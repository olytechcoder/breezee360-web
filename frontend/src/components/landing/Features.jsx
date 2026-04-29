import { Quote, Calendar, HeartPulse, Trophy, RefreshCcw, BarChart3 } from "lucide-react";

export default function Features() {
  return (
    <section
      id="features"
      data-testid="features-section"
      className="py-24 md:py-32"
    >
      <div className="container-soft">
        <div className="max-w-3xl">
          <p className="label-eyebrow">Inside Breezee360</p>
          <h2 className="mt-5 font-serif text-4xl md:text-5xl leading-[1.1] tracking-tight">
            Six calm features.
            <br />
            <span className="italic text-primary">One sustainable rhythm.</span>
          </h2>
          <p className="mt-6 text-base md:text-lg text-secondary-foreground max-w-2xl">
            Every feature is designed for the same outcome: more consistency,
            less overwhelm, and a healthier relationship with your day.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Night Fuel */}
          <div
            data-testid="feature-nightly-quotes"
            className="md:col-span-7 soft-card p-8 md:p-10 relative overflow-hidden hover:-translate-y-1 transition-transform"
          >
            <span className="grid place-items-center w-12 h-12 rounded-2xl bg-primary/10 text-primary mb-6">
              <Quote className="w-5 h-5" />
            </span>
            <h3 className="font-serif text-2xl md:text-3xl mb-3">
              Night Fuel — three quotes, intentional, not infinite
            </h3>
            <p className="text-secondary-foreground max-w-md leading-relaxed">
              Get exactly three motivational quotes every night — chosen by
              tone, not algorithm. Settle the mind before sleep, set tomorrow's
              direction, and skip the bottomless feed entirely.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-3">
              {[
                "Rest is preparation.",
                "Slow is not behind.",
                "Tomorrow is allowed to be soft.",
              ].map((q, i) => (
                <div
                  key={i}
                  className="rounded-2xl bg-accent dark:bg-secondary/40 p-4 text-xs font-serif italic leading-snug text-foreground"
                >
                  "{q}"
                </div>
              ))}
            </div>
          </div>

          {/* Soft time-blocks */}
          <div
            data-testid="feature-time-blocks"
            className="md:col-span-5 soft-card p-8 md:p-10 hover:-translate-y-1 transition-transform"
          >
            <span className="grid place-items-center w-12 h-12 rounded-2xl bg-primary/10 text-primary mb-6">
              <Calendar className="w-5 h-5" />
            </span>
            <h3 className="font-serif text-2xl mb-3">Soft time-blocks</h3>
            <p className="text-secondary-foreground leading-relaxed mb-5">
              Plan up to three priorities a day and drop them on a calendar
              that leaves room for breath, energy dips, and life. Finish more
              of what matters — without overpacking your hours.
            </p>
            <div className="space-y-2">
              {[
                { t: "Deep work · client proposal", c: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300" },
                { t: "Breath break", c: "bg-amber-500/15 text-amber-700 dark:text-amber-300" },
                { t: "Reply to Maya", c: "bg-sky-500/15 text-sky-700 dark:text-sky-300" },
              ].map((b, i) => (
                <div key={i} className={`rounded-xl px-4 py-2.5 text-sm ${b.c}`}>
                  {b.t}
                </div>
              ))}
            </div>
          </div>

          {/* Energy check-ins */}
          <div
            data-testid="feature-energy"
            className="md:col-span-4 soft-card p-8 md:p-10 hover:-translate-y-1 transition-transform"
          >
            <span className="grid place-items-center w-12 h-12 rounded-2xl bg-primary/10 text-primary mb-6">
              <HeartPulse className="w-5 h-5" />
            </span>
            <h3 className="font-serif text-2xl mb-2">Energy check-ins</h3>
            <p className="text-secondary-foreground leading-relaxed">
              A two-second pulse on how today actually felt. Breezee360 learns
              your rhythm and quietly suggests when to push and when to pause —
              so consistency stops costing you health.
            </p>
          </div>

          {/* Wins Jar */}
          <div
            data-testid="feature-wins-jar"
            className="md:col-span-4 soft-card p-8 md:p-10 hover:-translate-y-1 transition-transform"
          >
            <span className="grid place-items-center w-12 h-12 rounded-2xl bg-primary/10 text-primary mb-6">
              <Trophy className="w-5 h-5" />
            </span>
            <h3 className="font-serif text-2xl mb-2">The Wins Jar</h3>
            <p className="text-secondary-foreground leading-relaxed">
              Drop one quiet win every day — anything from finishing a task to
              choosing rest. Re-read them when motivation dips. Proof, in your
              own words, that you are growing.
            </p>
          </div>

          {/* Gentle recovery */}
          <div
            data-testid="feature-gentle-recovery"
            className="md:col-span-4 soft-card p-8 md:p-10 hover:-translate-y-1 transition-transform"
          >
            <span className="grid place-items-center w-12 h-12 rounded-2xl bg-primary/10 text-primary mb-6">
              <RefreshCcw className="w-5 h-5" />
            </span>
            <h3 className="font-serif text-2xl mb-2">Gentle missed-day recovery</h3>
            <p className="text-secondary-foreground leading-relaxed">
              Missed a day? Breezee360 doesn't punish you with red icons or
              broken streaks. It walks you back into the routine, kindly — so
              one off-day never costs you the whole month.
            </p>
          </div>

          {/* Weekly Wrap */}
          <div
            data-testid="feature-weekly-wrap"
            className="md:col-span-12 soft-card p-8 md:p-10 hover:-translate-y-1 transition-transform"
          >
            <span className="grid place-items-center w-12 h-12 rounded-2xl bg-primary/10 text-primary mb-6">
              <BarChart3 className="w-5 h-5" />
            </span>
            <h3 className="font-serif text-2xl md:text-3xl mb-3">
              Weekly Wrap — your Sunday clarity moment
            </h3>
            <p className="text-secondary-foreground leading-relaxed max-w-2xl">
              Every Sunday Breezee360 produces a calm summary of your week:
              wins booked, energy patterns spotted, priorities still standing.
              Plan the next week from clarity, not from a guilty restart.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
