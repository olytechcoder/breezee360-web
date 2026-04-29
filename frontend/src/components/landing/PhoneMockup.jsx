import { Moon, Sparkles, Quote } from "lucide-react";

/**
 * Pure CSS phone mockup that adapts to the dark "Night Fuel" aesthetic.
 * Renders inside Hero — represents the night-time motivation screen.
 */
export default function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[280px] sm:w-[320px] animate-float">
      {/* soft glow */}
      <div className="absolute -inset-6 bg-primary/20 dark:bg-primary/30 blur-3xl rounded-full opacity-60 animate-soft-pulse" />

      <div className="relative rounded-[2.6rem] p-[3px] bg-gradient-to-b from-white/80 to-secondary/80 dark:from-emerald-900/40 dark:to-emerald-950/60 shadow-[0_30px_80px_-20px_rgba(13,122,95,0.45)]">
        <div className="rounded-[2.4rem] overflow-hidden bg-[#071410] text-white">
          {/* notch */}
          <div className="relative h-7 flex items-center justify-center">
            <div className="absolute top-2 w-24 h-5 bg-black rounded-full" />
          </div>

          <div className="px-6 pb-7 pt-2">
            {/* time + status */}
            <div className="flex items-center justify-between text-[10px] text-emerald-200/70 mb-7">
              <span>10:42 PM</span>
              <span className="flex items-center gap-1">
                <Moon className="w-3 h-3" /> Night Fuel
              </span>
            </div>

            <p className="text-[10px] uppercase tracking-[0.22em] text-emerald-300/80 mb-2">
              Tonight's quotes · 1 of 3
            </p>
            <h3 className="font-serif text-[22px] leading-[1.25] mb-6">
              "Rest is not a reward.
              <br />
              It's the soil where consistency grows."
            </h3>

            <div className="rounded-2xl bg-white/5 border border-white/10 p-4 mb-4">
              <div className="flex items-center gap-2 text-emerald-300/90 text-[11px] mb-1">
                <Sparkles className="w-3 h-3" />
                <span>Energy check-in</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">How was today, gently?</span>
                <span className="text-base">🌿</span>
              </div>
              <div className="mt-3 flex gap-1.5">
                {[1, 2, 3, 4, 5].map((n) => (
                  <div
                    key={n}
                    className={`flex-1 h-1.5 rounded-full ${
                      n <= 3 ? "bg-emerald-400/80" : "bg-white/10"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-emerald-500/15 border border-emerald-400/20 p-4">
              <div className="flex items-center gap-2 text-emerald-300 text-[11px] mb-1">
                <Quote className="w-3 h-3" />
                <span>Wins jar · added today</span>
              </div>
              <p className="text-[13px] text-white/80">
                "Finished the proposal without burning out."
              </p>
            </div>

            <button className="w-full mt-6 rounded-full bg-emerald-500 hover:bg-emerald-400 transition-colors text-[#071410] font-medium text-sm py-3">
              Drift into rest →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
