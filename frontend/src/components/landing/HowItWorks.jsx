import { Moon, Sun, BarChart3, ArrowDown } from "lucide-react";

const steps = [
  {
    id: "night",
    label: "01 · Night Fuel",
    icon: Moon,
    title: "Three quotes. One quiet moment.",
    body: "Each evening, Breezee360 hands you exactly three motivational quotes — never an endless feed. Read, breathe, and rest. Tomorrow's intention is already lit before you sleep.",
    bullets: [
      "Limit-based design — no doomscroll",
      "Energy check-in to honour how today actually felt",
      "Drop one win in your Wins Jar before lights out",
    ],
    tone: "dark",
  },
  {
    id: "day",
    label: "02 · Daily Action",
    icon: Sun,
    title: "Plan a day you can actually finish.",
    body: "Choose one to three honest priorities. Drop them into soft time-blocks with breathing room. Mark wins as you go, defer the rest without guilt — recovery is built into the system.",
    bullets: [
      "Soft time-blocks instead of rigid hour grids",
      "Goal-aligned tasks tied to what matters this week",
      "One-tap defer — never a punishment for moving on",
    ],
    tone: "light",
  },
  {
    id: "week",
    label: "03 · Weekly Wrap",
    icon: BarChart3,
    title: "A Sunday letter to yourself.",
    body: "Every Sunday, Breezee360 writes you a short reflection — wins worth keeping, energy patterns worth noticing, priorities worth carrying forward. Then a calm new week begins.",
    bullets: [
      "Insight, not vanity metrics",
      "Pattern recognition across energy and consistency",
      "Plan the next week with kindness, not pressure",
    ],
    tone: "muted",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      data-testid="how-it-works-section"
      className="py-24 md:py-32 bg-muted/40"
    >
      <div className="container-soft">
        <div className="max-w-3xl mx-auto text-center">
          <p className="label-eyebrow">How Breezee360 works</p>
          <h2 className="mt-5 font-serif text-4xl md:text-5xl leading-[1.1] tracking-tight">
            Three small rituals.
            <br />
            One sustainable routine.
          </h2>
          <p className="mt-6 text-lg text-secondary-foreground">
            A complete daily rhythm — designed to feel like a deep breath, not
            a deadline.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((s, i) => {
            const isDark = s.tone === "dark";
            return (
              <div
                key={s.id}
                data-testid={`how-it-works-step-${s.id}`}
                className={`relative rounded-3xl p-8 md:p-10 border transition-all duration-300 hover:-translate-y-1 ${
                  isDark
                    ? "bg-[#071410] text-white border-emerald-900/40"
                    : s.tone === "light"
                    ? "bg-card text-card-foreground border-border"
                    : "bg-accent/60 dark:bg-secondary/40 border-border"
                }`}
              >
                <div
                  className={`flex items-center justify-between text-xs uppercase tracking-[0.2em] font-bold mb-8 ${
                    isDark ? "text-emerald-300" : "text-primary"
                  }`}
                >
                  <span>{s.label}</span>
                  <s.icon className="w-4 h-4" />
                </div>

                <h3
                  className={`font-serif text-2xl md:text-[26px] leading-snug mb-4 ${
                    isDark ? "text-white" : ""
                  }`}
                >
                  {s.title}
                </h3>
                <p
                  className={`text-base leading-relaxed mb-6 ${
                    isDark ? "text-emerald-50/85" : "text-secondary-foreground"
                  }`}
                >
                  {s.body}
                </p>

                <ul className="space-y-2.5 text-sm">
                  {s.bullets.map((b, k) => (
                    <li key={k} className="flex items-start gap-3">
                      <span
                        className={`mt-1.5 w-1.5 h-1.5 rounded-full ${
                          isDark ? "bg-emerald-400" : "bg-primary"
                        }`}
                      />
                      <span
                        className={
                          isDark ? "text-emerald-50/90" : "text-foreground/85"
                        }
                      >
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>

                {i < steps.length - 1 && (
                  <ArrowDown className="lg:hidden mx-auto mt-8 w-5 h-5 text-primary opacity-60" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
