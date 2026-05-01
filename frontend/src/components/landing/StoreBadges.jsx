import { Lock } from "lucide-react";
import { isLaunched, APP_STORE_URL, GOOGLE_PLAY_URL } from "@/lib/launch";

const baseClass =
  "group relative inline-flex items-center gap-3 rounded-2xl px-5 h-14 bg-black text-white border border-white/10 transition-all duration-200 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.5)]";

const hoverable = "hover:border-white/30 hover:-translate-y-1";
const muted = "opacity-65 grayscale-[20%] cursor-not-allowed select-none";

const TOOLTIP =
  "Launching June 1 — waitlist members get access first.";

function LockedTooltip() {
  return (
    <span
      role="tooltip"
      className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-3 -translate-y-full
                 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 group-active:opacity-100
                 transition-opacity duration-200
                 whitespace-nowrap rounded-xl px-3 py-2 text-[11px] font-medium
                 bg-foreground text-background shadow-lg z-10"
    >
      {TOOLTIP}
    </span>
  );
}

function AppStoreIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white" aria-hidden>
      <path d="M17.564 12.713c-.022-2.27 1.85-3.36 1.934-3.413-1.054-1.539-2.694-1.75-3.275-1.775-1.394-.141-2.72.821-3.426.821-.708 0-1.797-.8-2.954-.778-1.518.022-2.918.882-3.7 2.236-1.578 2.732-.404 6.78 1.135 8.99.752 1.082 1.65 2.295 2.825 2.252 1.135-.045 1.563-.736 2.937-.736 1.374 0 1.755.736 2.953.71 1.218-.022 1.99-1.106 2.74-2.196.86-1.262 1.215-2.484 1.236-2.547-.027-.013-2.382-.913-2.405-3.564zM15.31 5.984c.625-.76 1.05-1.812.933-2.86-.903.038-2 .603-2.65 1.36-.58.67-1.092 1.748-.954 2.776 1.01.077 2.04-.515 2.671-1.276z"/>
    </svg>
  );
}

function GooglePlayIcon() {
  return (
    <svg viewBox="0 0 32 32" className="w-7 h-7" aria-hidden>
      <defs>
        <linearGradient id="gp-blue" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#00C2FF"/><stop offset="1" stopColor="#1A73E8"/></linearGradient>
        <linearGradient id="gp-green" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#00F2A0"/><stop offset="1" stopColor="#00B871"/></linearGradient>
        <linearGradient id="gp-yellow" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#FFD400"/><stop offset="1" stopColor="#FF9100"/></linearGradient>
        <linearGradient id="gp-red" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stopColor="#FF3A44"/><stop offset="1" stopColor="#C31162"/></linearGradient>
      </defs>
      <path d="M5.5 3.5c-.4.3-.6.8-.6 1.5v22c0 .7.2 1.2.6 1.5L17.7 16 5.5 3.5z" fill="url(#gp-blue)"/>
      <path d="M21.6 12 17.7 16l3.9 4 4.7-2.7c1.3-.7 1.3-2 0-2.7L21.6 12z" fill="url(#gp-yellow)"/>
      <path d="M5.5 3.5 17.7 16l3.9-4L7.4 3.2c-.7-.4-1.4-.4-1.9.3z" fill="url(#gp-green)"/>
      <path d="M5.5 28.5c.5.7 1.2.7 1.9.3L21.6 20l-3.9-4L5.5 28.5z" fill="url(#gp-red)"/>
    </svg>
  );
}

function LockBadge() {
  return (
    <span
      aria-hidden
      className="lock-pulse-target absolute -top-1.5 -right-1.5 grid place-items-center w-5 h-5 rounded-full bg-background text-foreground border border-border"
    >
      <Lock className="w-2.5 h-2.5" />
    </span>
  );
}

export function AppStoreBadge({ testid = "store-app-store" }) {
  const launched = isLaunched();
  const Inner = (
    <>
      <AppStoreIcon />
      <span className="flex flex-col items-start leading-none">
        <span className="text-[10px] font-medium tracking-wide opacity-80">
          {launched ? "Download on the" : "Coming June 1 ·"}
        </span>
        <span className="text-[17px] font-semibold tracking-tight mt-0.5 font-sans">
          App Store
        </span>
      </span>
      {!launched && <LockBadge />}
      {!launched && <LockedTooltip />}
    </>
  );
  return launched ? (
    <a
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      data-testid={testid}
      aria-label="Download Breezee360 on the App Store"
      className={`${baseClass} ${hoverable}`}
    >
      {Inner}
    </a>
  ) : (
    <button
      type="button"
      disabled
      data-testid={`${testid}-locked`}
      aria-disabled="true"
      title={TOOLTIP}
      className={`${baseClass} ${muted}`}
    >
      {Inner}
    </button>
  );
}

export function GooglePlayBadge({ testid = "store-google-play" }) {
  const launched = isLaunched();
  const Inner = (
    <>
      <GooglePlayIcon />
      <span className="flex flex-col items-start leading-none">
        <span className="text-[10px] font-medium tracking-wide opacity-80">
          {launched ? "GET IT ON" : "Coming June 1 ·"}
        </span>
        <span className="text-[17px] font-semibold tracking-tight mt-0.5 font-sans">
          Google Play
        </span>
      </span>
      {!launched && <LockBadge />}
      {!launched && <LockedTooltip />}
    </>
  );
  return launched ? (
    <a
      href={GOOGLE_PLAY_URL}
      target="_blank"
      rel="noopener noreferrer"
      data-testid={testid}
      aria-label="Get Breezee360 on Google Play"
      className={`${baseClass} ${hoverable}`}
    >
      {Inner}
    </a>
  ) : (
    <button
      type="button"
      disabled
      data-testid={`${testid}-locked`}
      aria-disabled="true"
      title={TOOLTIP}
      className={`${baseClass} ${muted}`}
    >
      {Inner}
    </button>
  );
}

export default function StoreBadges({ className = "" }) {
  return (
    <div
      className={`flex flex-wrap items-center gap-3 ${className}`}
      data-testid="store-badges"
    >
      <AppStoreBadge />
      <GooglePlayBadge />
    </div>
  );
}
