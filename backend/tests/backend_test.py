"""Backend tests for Breezee360 landing page API."""
import os
import uuid
import pytest
import requests

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', 'https://calm-productivity-10.preview.emergentagent.com').rstrip('/')
API = f"{BASE_URL}/api"


@pytest.fixture(scope="module")
def session():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# Root endpoint
def test_root_returns_breezee_message(session):
    r = session.get(f"{API}/")
    assert r.status_code == 200
    data = r.json()
    assert "message" in data
    assert "Breezee360" in data["message"]


# Waitlist - valid submission
def test_waitlist_valid_email_creates_entry(session):
    email = f"TEST_{uuid.uuid4().hex[:10]}@example.com"
    r = session.post(f"{API}/waitlist", json={"email": email, "name": "Test User", "source": "pytest"})
    assert r.status_code == 200, r.text
    data = r.json()
    assert data["success"] is True
    assert isinstance(data["id"], str) and len(data["id"]) > 0
    assert "in" in data["message"].lower() or "calm hello" in data["message"].lower()


# Waitlist - idempotent same email
def test_waitlist_idempotent_same_email(session):
    email = f"TEST_dup_{uuid.uuid4().hex[:8]}@example.com"
    r1 = session.post(f"{API}/waitlist", json={"email": email})
    assert r1.status_code == 200
    id1 = r1.json()["id"]

    r2 = session.post(f"{API}/waitlist", json={"email": email})
    assert r2.status_code == 200
    data2 = r2.json()
    assert data2["success"] is True
    assert data2["id"] == id1
    assert "already" in data2["message"].lower()


# Waitlist - invalid email -> 422
def test_waitlist_invalid_email_returns_422(session):
    r = session.post(f"{API}/waitlist", json={"email": "not-an-email"})
    assert r.status_code == 422


# Waitlist count
def test_waitlist_count_is_numeric(session):
    r0 = session.get(f"{API}/waitlist/count")
    assert r0.status_code == 200
    c0 = r0.json()["count"]
    assert isinstance(c0, int)

    email = f"TEST_count_{uuid.uuid4().hex[:8]}@example.com"
    rp = session.post(f"{API}/waitlist", json={"email": email})
    assert rp.status_code == 200

    r1 = session.get(f"{API}/waitlist/count")
    assert r1.status_code == 200
    c1 = r1.json()["count"]
    assert c1 >= c0 + 1


# Case-insensitive email idempotency
def test_waitlist_email_lowercased(session):
    email = f"TEST_Case_{uuid.uuid4().hex[:8]}@Example.COM"
    r1 = session.post(f"{API}/waitlist", json={"email": email})
    assert r1.status_code == 200
    r2 = session.post(f"{API}/waitlist", json={"email": email.lower()})
    assert r2.status_code == 200
    assert r1.json()["id"] == r2.json()["id"]
