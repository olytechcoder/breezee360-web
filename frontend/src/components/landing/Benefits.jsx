import { Focus, BatteryFull, Repeat, Sparkles, Compass, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: Focus,
    title: "Better focus",
    body: "Three priorities, soft time-blocks, and an interface that doesn't compete for attention. Finish what matters today — not everything.",
  },
  {
    icon: BatteryFull,
    title: "Less overwhelm",
    body: "No tag systems, no infinite folders, no notification storms. A calm surface that respects your nervous system.",
  },
  {
    icon: Repeat,
    title: "More consistency",
    body: "Sustainable habits compound. Gentle recovery and weekly reflection turn 'I'll restart Monday' into actual long-term progress.",
  },
  {
    icon: Sparkles,
    title: "A healthier routine",
    body: "Energy check-ins, Wins Jar, and Night Fuel together build a rhythm that protects how you feel, not just what you ship.",
  },
  {
    icon: Compass,
    title: "Weekly clarity",
    body: "Every Sunday Wrap shows what worked, what drained you, and what to carry into next week. No more guessing.",
  },
  {
    icon: TrendingUp,
    title: "Progress without pressure",
    body: "Move forward in a way you can keep up with. Real momentum, kept human — not the burnout-and-restart loop.",
  },
];

export default function Benefits() {
  return (
    <section
      id="benefits"
      data-testid="benefits-section"
      className="py-24 md:py-32"
    >
      <div className="container-soft">
        <div className="max-w-3xl">
          <p className="label-eyebrow">What you get with Breezee360</p>
          <h2 className="mt-5 font-serif text-4xl md:text-5xl leading-[1.1] tracking-tight">
            Real progress.
            <br />
            <span className="italic text-primary">Without the cost.</span>
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <div
              key={i}
              data-testid={`benefit-card-${i}`}
              className="rounded-3xl p-7 bg-accent/40 dark:bg-secondary/30 border border-border hover:bg-accent/60 transition-colors"
            >
              <span className="grid place-items-center w-11 h-11 rounded-2xl bg-primary/10 text-primary mb-5">
                <b.icon className="w-5 h-5" />
              </span>
              <h3 className="font-serif text-xl mb-2">{b.title}</h3>
              <p className="text-[15px] text-secondary-foreground leading-relaxed">
                {b.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
