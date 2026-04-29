/**
 * Polished, official-style App Store and Google Play badges.
 * Pure SVG/CSS — no raster placeholders. Sized for hero & CTA contexts.
 */

const baseClass =
  "group inline-flex items-center gap-3 rounded-2xl px-5 h-14 bg-black text-white border border-white/10 hover:border-white/30 hover:-translate-y-0.5 transition-all duration-300 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.5)]";

export function AppStoreBadge({ href = "#waitlist", testid = "store-app-store" }) {
  return (
    <a href={href} data-testid={testid} className={baseClass} aria-label="Download on the App Store">
      <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white" aria-hidden>
        <path d="M17.564 12.713c-.022-2.27 1.85-3.36 1.934-3.413-1.054-1.539-2.694-1.75-3.275-1.775-1.394-.141-2.72.821-3.426.821-.708 0-1.797-.8-2.954-.778-1.518.022-2.918.882-3.7 2.236-1.578 2.732-.404 6.78 1.135 8.99.752 1.082 1.65 2.295 2.825 2.252 1.135-.045 1.563-.736 2.937-.736 1.374 0 1.755.736 2.953.71 1.218-.022 1.99-1.106 2.74-2.196.86-1.262 1.215-2.484 1.236-2.547-.027-.013-2.382-.913-2.405-3.564zM15.31 5.984c.625-.76 1.05-1.812.933-2.86-.903.038-2 .603-2.65 1.36-.58.67-1.092 1.748-.954 2.776 1.01.077 2.04-.515 2.671-1.276z"/>
      </svg>
      <span className="flex flex-col items-start leading-none">
        <span className="text-[10px] font-medium tracking-wide opacity-80">Download on the</span>
        <span className="text-[17px] font-semibold tracking-tight mt-0.5 font-sans">App Store</span>
      </span>
    </a>
  );
}

export function GooglePlayBadge({ href = "#waitlist", testid = "store-google-play" }) {
  return (
    <a href={href} data-testid={testid} className={baseClass} aria-label="Get it on Google Play">
      <svg viewBox="0 0 32 32" className="w-7 h-7" aria-hidden>
        {/* Authentic Play triangle gradient */}
        <defs>
          <linearGradient id="gp-blue" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#00C2FF" />
            <stop offset="1" stopColor="#1A73E8" />
          </linearGradient>
          <linearGradient id="gp-green" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#00F2A0" />
            <stop offset="1" stopColor="#00B871" />
          </linearGradient>
          <linearGradient id="gp-yellow" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#FFD400" />
            <stop offset="1" stopColor="#FF9100" />
          </linearGradient>
          <linearGradient id="gp-red" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0" stopColor="#FF3A44" />
            <stop offset="1" stopColor="#C31162" />
          </linearGradient>
        </defs>
        <path d="M5.5 3.5c-.4.3-.6.8-.6 1.5v22c0 .7.2 1.2.6 1.5L17.7 16 5.5 3.5z" fill="url(#gp-blue)"/>
        <path d="M21.6 12 17.7 16l3.9 4 4.7-2.7c1.3-.7 1.3-2 0-2.7L21.6 12z" fill="url(#gp-yellow)"/>
        <path d="M5.5 3.5 17.7 16l3.9-4L7.4 3.2c-.7-.4-1.4-.4-1.9.3z" fill="url(#gp-green)"/>
        <path d="M5.5 28.5c.5.7 1.2.7 1.9.3L21.6 20l-3.9-4L5.5 28.5z" fill="url(#gp-red)"/>
      </svg>
      <span className="flex flex-col items-start leading-none">
        <span className="text-[10px] font-medium tracking-wide opacity-80">GET IT ON</span>
        <span className="text-[17px] font-semibold tracking-tight mt-0.5 font-sans">Google Play</span>
      </span>
    </a>
  );
}

export default function StoreBadges({ size = "md", className = "" }) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`} data-testid="store-badges">
      <AppStoreBadge />
      <GooglePlayBadge />
    </div>
  );
}
