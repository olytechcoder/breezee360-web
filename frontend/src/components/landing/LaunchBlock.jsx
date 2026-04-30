import Countdown from "./Countdown";
import StoreBadges from "./StoreBadges";
import { isLaunched } from "@/lib/launch";

/**
 * Shows the locked launch buttons + countdown until June 1, 2026.
 * After launch, gracefully hides the countdown and shows live store buttons.
 */
export default function LaunchBlock({ align = "left" }) {
  const launched = isLaunched();
  const alignment = align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div className={`flex flex-col gap-4 ${alignment}`} data-testid="launch-block">
      {!launched && (
        <div className={`flex flex-col gap-2.5 ${align === "center" ? "items-center" : "items-start"}`}>
          <p className="font-serif text-base md:text-lg text-foreground">
            Be first to feel the calm.
          </p>
          <div className={`flex flex-wrap items-center gap-3 ${align === "center" ? "justify-center" : ""}`}>
            <span className="text-[11px] uppercase tracking-[0.2em] text-secondary-foreground">
              Launching iOS &amp; Android in
            </span>
            <Countdown />
          </div>
        </div>
      )}

      <StoreBadges className={align === "center" ? "justify-center" : ""} />
    </div>
  );
}
