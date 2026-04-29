import { Flame, RotateCcw, Layers } from "lucide-react";

const items = [
  {
    icon: Flame,
    title: "Burnout dressed as ambition",
    body: "Hustle culture sells exhaustion as productivity. The cost arrives quietly — in the months you stop showing up.",
  },
  {
    icon: RotateCcw,
    title: "Inconsistency loops",
    body: "Three days strong, two weeks gone. Most apps punish the gap; few help you return to the rhythm gently.",
  },
  {
    icon: Layers,
    title: "Tools that overwhelm",
    body: "Endless tags, projects, and notifications. The interface itself becomes a second job that you didn't sign up for.",
  },
];

export default function Problem() {
  return (
    <section
      data-testid="problem-section"
      className="relative py-24 md:py-32 bg-accent/40 dark:bg-accent/20"
    >
      <div className="container-soft">
        <div className="max-w-3xl">
          <p className="label-eyebrow" data-testid="problem-eyebrow">
            The cost of grinding
          </p>
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
            Most apps are built for the version of you that never gets tired.
            Breezee360 is built for the real one.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <div
              key={i}
              data-testid={`problem-card-${i}`}
              className="soft-card p-8 hover:-translate-y-1 transition-transform duration-300"
            >
              <span className="grid place-items-center w-12 h-12 rounded-2xl bg-primary/10 text-primary mb-5">
                <it.icon className="w-5 h-5" />
              </span>
              <h3 className="font-serif text-xl mb-2">{it.title}</h3>
              <p className="text-base text-secondary-foreground leading-relaxed">
                {it.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
