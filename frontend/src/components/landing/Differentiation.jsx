import { Check, X } from "lucide-react";

const rows = [
  {
    them: "Generic to-do apps",
    pain: "Endless lists with no daily rhythm",
    breezee: "A motivation–action–reflection loop, every single day",
  },
  {
    them: "Habit trackers",
    pain: "Streaks weaponised as guilt",
    breezee: "Gentle missed-day recovery — one off-day doesn't break you",
  },
  {
    them: "Quote / motivation apps",
    pain: "Infinite feeds and notification spam",
    breezee: "Three intentional quotes per night — no doomscroll",
  },
  {
    them: "Heavy productivity tools",
    pain: "Overwhelming dashboards and config",
    breezee: "A calm interface designed to feel like a deep breath",
  },
];

export default function Differentiation() {
  return (
    <section
      id="differentiation"
      data-testid="differentiation-section"
      className="py-24 md:py-32"
    >
      <div className="container-soft">
        <div className="max-w-3xl">
          <p className="label-eyebrow">What makes Breezee360 different</p>
          <h2 className="mt-5 font-serif text-4xl md:text-5xl leading-[1.1] tracking-tight">
            Not another to-do app.
            <br />
            <span className="italic text-primary">A calmer system.</span>
          </h2>
          <p className="mt-6 text-base md:text-lg text-secondary-foreground max-w-2xl">
            Breezee360 isn't a planner, a habit tracker, or a quote app — it's
            a complete daily rhythm that combines the best of all three,
            without the burnout patterns they ship by default.
          </p>
        </div>

        <div className="mt-14 soft-card overflow-hidden">
          <div className="hidden md:grid grid-cols-12 px-8 py-5 text-xs uppercase tracking-[0.2em] font-bold text-secondary-foreground border-b border-border">
            <div className="col-span-3">Other tools</div>
            <div className="col-span-5">What they do</div>
            <div className="col-span-4 text-primary">What Breezee360 does</div>
          </div>

          {rows.map((r, i) => (
            <div
              key={i}
              data-testid={`diff-row-${i}`}
              className={`grid grid-cols-1 md:grid-cols-12 gap-4 px-6 md:px-8 py-6 ${
                i < rows.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <div className="md:col-span-3 font-medium text-foreground">
                {r.them}
              </div>
              <div className="md:col-span-5 flex items-start gap-2 text-secondary-foreground text-[15px]">
                <X className="w-4 h-4 mt-1 text-destructive/70 shrink-0" />
                <span>{r.pain}</span>
              </div>
              <div className="md:col-span-4 flex items-start gap-2 text-foreground text-[15px]">
                <Check className="w-4 h-4 mt-1 text-primary shrink-0" />
                <span>{r.breezee}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
