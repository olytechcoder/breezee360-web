from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import asyncio
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone
import resend


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Resend setup
resend.api_key = os.environ.get('RESEND_API_KEY', '')
SENDER_EMAIL = os.environ.get('SENDER_EMAIL', 'onboarding@resend.dev')
RECIPIENT_EMAIL = os.environ.get('RECIPIENT_EMAIL', 'fans@breezee.uk')

# Create the main app without a prefix
app = FastAPI(title="Breezee360 Landing API")

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


# ===== Models =====
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")

    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class StatusCheckCreate(BaseModel):
    client_name: str


class WaitlistCreate(BaseModel):
    name: Optional[str] = None
    email: EmailStr
    message: Optional[str] = None
    source: Optional[str] = "landing_page"


class WaitlistEntry(BaseModel):
    id: str
    email: str
    name: Optional[str] = None
    message: Optional[str] = None
    source: Optional[str] = None
    created_at: datetime
    email_sent: bool = False


class WaitlistResponse(BaseModel):
    success: bool
    message: str
    id: str


# ===== Email helpers =====
def _build_admin_email_html(entry: dict) -> str:
    name = entry.get('name') or '—'
    msg = entry.get('message') or '—'
    return f"""
    <table width="100%" cellpadding="0" cellspacing="0" style="font-family:Arial,Helvetica,sans-serif;background:#F9FAFB;padding:32px;">
      <tr><td>
        <table width="560" align="center" cellpadding="0" cellspacing="0"
               style="background:#ffffff;border-radius:16px;padding:32px;border:1px solid #E5E7EB;">
          <tr><td style="font-size:12px;letter-spacing:2px;color:#0D7A5F;text-transform:uppercase;font-weight:700;">
            Breezee360 · New waitlist signup
          </td></tr>
          <tr><td style="padding-top:12px;font-size:22px;color:#111827;font-weight:600;">
            {entry['email']}
          </td></tr>
          <tr><td style="padding-top:24px;font-size:14px;color:#374151;line-height:1.6;">
            <strong style="color:#67727E;">Name:</strong> {name}<br/>
            <strong style="color:#67727E;">Source:</strong> {entry.get('source') or '—'}<br/>
            <strong style="color:#67727E;">Submitted:</strong> {entry['created_at']}<br/>
            <div style="margin-top:16px;padding:16px;background:#F0FDF4;border-radius:12px;color:#0D7A5F;">
              <strong>Message:</strong><br/>{msg}
            </div>
          </td></tr>
          <tr><td style="padding-top:32px;font-size:12px;color:#67727E;">
            Sent automatically by Breezee360 · Productivity through well-being, not pressure.
          </td></tr>
        </table>
      </td></tr>
    </table>
    """


async def _send_admin_notification(entry: dict) -> bool:
    if not resend.api_key:
        logger.warning("RESEND_API_KEY missing — skipping email send.")
        return False
    params = {
        "from": f"Breezee360 <{SENDER_EMAIL}>",
        "to": [RECIPIENT_EMAIL],
        "subject": f"New Breezee360 waitlist · {entry['email']}",
        "html": _build_admin_email_html(entry),
        "reply_to": entry['email'],
    }
    try:
        result = await asyncio.to_thread(resend.Emails.send, params)
        logger.info(f"Resend email sent: {result}")
        return True
    except Exception as e:
        logger.error(f"Resend email failed: {e}")
        return False


# ===== Routes =====
@api_router.get("/")
async def root():
    return {"message": "Breezee360 API · calm productivity through well-being."}


@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_obj = StatusCheck(**input.model_dump())
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    await db.status_checks.insert_one(doc)
    return status_obj


@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    rows = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    for r in rows:
        if isinstance(r.get('timestamp'), str):
            r['timestamp'] = datetime.fromisoformat(r['timestamp'])
    return rows


@api_router.post("/waitlist", response_model=WaitlistResponse)
async def join_waitlist(payload: WaitlistCreate):
    email = payload.email.lower().strip()

    # Idempotent: if email already exists, return existing
    existing = await db.waitlist.find_one({"email": email}, {"_id": 0})
    if existing:
        return WaitlistResponse(
            success=True,
            message="You're already on the list — we'll be in touch.",
            id=existing["id"],
        )

    entry = {
        "id": str(uuid.uuid4()),
        "email": email,
        "name": payload.name.strip() if payload.name else None,
        "message": payload.message.strip() if payload.message else None,
        "source": payload.source or "landing_page",
        "created_at": datetime.now(timezone.utc).isoformat(),
        "email_sent": False,
    }
    await db.waitlist.insert_one(entry.copy())

    sent = await _send_admin_notification(entry)
    if sent:
        await db.waitlist.update_one({"id": entry["id"]}, {"$set": {"email_sent": True}})

    return WaitlistResponse(
        success=True,
        message="You're in. Check your inbox for our calm hello soon.",
        id=entry["id"],
    )


@api_router.get("/waitlist/count")
async def waitlist_count():
    count = await db.waitlist.count_documents({})
    return {"count": count}


# Mount router & middleware
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
