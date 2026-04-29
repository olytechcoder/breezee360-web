import { Flame, RotateCcw, Layers, CalendarX } from "lucide-react";

const items = [
  {
    icon: Flame,
    title: "Burnout sold as ambition",
    body: "Most productivity apps reward you for never resting. The cost shows up later — when your energy collapses and the streak you protected falls apart anyway.",
  },
  {
    icon: RotateCcw,
    title: "The inconsistency loop",
    body: "Three days strong, two weeks gone. Your tools punish the gap with red icons and broken streaks instead of helping you return to the routine gently.",
  },
  {
    icon: Layers,
    title: "Tools that overwhelm",
    body: "Endless tags, projects, dashboards, and notifications. The interface itself becomes a second job — and the to-do list becomes a source of guilt.",
  },
  {
    icon: CalendarX,
    title: "Restarting every Monday",
    body: "You promise yourself a fresh start every Monday and hope discipline kicks in. By Wednesday it's slipped, and by Friday you're already planning to restart.",
  },
];

export default function Problem() {
  return (
    <section
      data-testid="problem-section"
      id="why-productivity-apps-fail"
      className="relative py-24 md:py-32 bg-accent/40 dark:bg-accent/20"
    >
      <div className="container-soft">
        <div className="max-w-3xl">
          <p className="label-eyebrow">Why most productivity apps fail</p>
          <h2
            data-testid="problem-headline"
            className="mt-5 font-serif text-4xl md:text-5xl leading-[1.1] tracking-tight"
          >
            You don't need <em className="text-primary not-italic">more</em>{" "}
            productivity.
            <br />
            You need a kinder one.
          </h2>
          <p className="mt-6 text-lg text-secondary-foreground max-w-2xl">
            Most apps are built for the version of you that never gets tired,
            never has a bad week, and never needs to recover. Breezee360 is
            built for the real one.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, i) => (
            <div
              key={i}
              data-testid={`problem-card-${i}`}
              className="soft-card p-7 hover:-translate-y-1 transition-transform duration-300"
            >
              <span className="grid place-items-center w-11 h-11 rounded-2xl bg-primary/10 text-primary mb-5">
                <it.icon className="w-5 h-5" />
              </span>
              <h3 className="font-serif text-xl mb-2">{it.title}</h3>
              <p className="text-[15px] text-secondary-foreground leading-relaxed">
                {it.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
