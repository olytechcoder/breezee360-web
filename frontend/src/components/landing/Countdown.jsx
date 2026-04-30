import { useEffect, useState } from "react";
import { LAUNCH_DATE } from "@/lib/launch";

function diff(target) {
  const ms = Math.max(0, target.getTime() - Date.now());
  const days = Math.floor(ms / 86_400_000);
  const hours = Math.floor((ms % 86_400_000) / 3_600_000);
  const minutes = Math.floor((ms % 3_600_000) / 60_000);
  const seconds = Math.floor((ms % 60_000) / 1000);
  return { ms, days, hours, minutes, seconds };
}

const pad = (n) => String(n).padStart(2, "0");

/**
 * Calm 4-cell countdown (Days · Hours · Minutes · Seconds) used near the
 * locked launch buttons. Compact enough for hero, premium enough for CTA.
 */
export default function Countdown({ className = "", testid = "launch-countdown" }) {
  const [t, setT] = useState(() => diff(LAUNCH_DATE));

  useEffect(() => {
    const id = setInterval(() => setT(diff(LAUNCH_DATE)), 1000);
    return () => clearInterval(id);
  }, []);

  if (t.ms === 0) return null;

  const cells = [
    { v: t.days, l: "days" },
    { v: pad(t.hours), l: "hrs" },
    { v: pad(t.minutes), l: "min" },
    { v: pad(t.seconds), l: "sec" },
  ];

  return (
    <div
      data-testid={testid}
      className={`inline-flex items-stretch gap-1.5 ${className}`}
      aria-label={`Launching in ${t.days} days, ${t.hours} hours, ${t.minutes} minutes, ${t.seconds} seconds`}
    >
      {cells.map((c, i) => (
        <div
          key={i}
          className="flex flex-col items-center justify-center px-3 py-2 rounded-xl bg-accent/60 dark:bg-secondary/40 border border-border min-w-[54px]"
        >
          <span className="font-serif text-lg md:text-xl leading-none text-foreground tabular-nums">
            {c.v}
          </span>
          <span className="mt-1 text-[9px] uppercase tracking-[0.2em] text-secondary-foreground">
            {c.l}
          </span>
        </div>
      ))}
    </div>
  );
}
