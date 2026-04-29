# Deploying to Vercel (Free plan)

The waitlist now runs as a Vercel **serverless function** at `/api/waitlist`.
No separate backend deployment is required.

## 1. Push the project to GitHub

The Vercel-ready code lives under `/app/frontend`. On Vercel, set the
**Root Directory** to `frontend` (or push only the `frontend/` folder as the repo root).

## 2. Import the repo into Vercel

- Framework preset: **Create React App**
- Build command: `yarn build` (auto-detected)
- Output directory: `build` (auto-detected)
- Install command: `yarn install`

`vercel.json` already declares the function and SPA rewrites.

## 3. Set environment variables in Vercel → Project → Settings → Environment Variables

| Name              | Example value                                | Notes                                    |
| ----------------- | -------------------------------------------- | ---------------------------------------- |
| `RESEND_API_KEY`  | `re_********************************`       | **Server-only** — never read in React.   |
| `SENDER_EMAIL`    | `Breezee360 <hello@breezee.uk>`              | Must use a Resend-verified domain.       |
| `RECIPIENT_EMAIL` | `fans@breezee.uk`                            | Where the form notifications are sent.   |

> ⚠️ Until `breezee.uk` is verified at https://resend.com/domains, keep `SENDER_EMAIL`
> as `onboarding@resend.dev`. In that mode Resend will only deliver to the verified
> account-owner address. Submissions still return success to the user.

## 4. Deploy

`git push` → Vercel will build the React app and deploy `/api/waitlist` as a Node
serverless function in one go.

## How it routes

- `GET /` → React SPA
- `POST /api/waitlist` → `frontend/api/waitlist.js` (Resend transactional email)
- All other paths fall through to `index.html` (React Router friendly)

## Local development

Two options:

1. `vercel dev` — runs the SPA + serverless function together (recommended).
2. The existing `sudo supervisorctl start frontend` + FastAPI backend setup still works
   because the React form posts to a relative `/api/waitlist`, which the Kubernetes
   ingress forwards to FastAPI on port 8001.
