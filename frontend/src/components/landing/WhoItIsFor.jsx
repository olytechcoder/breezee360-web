import { Repeat, Briefcase, Rocket, GraduationCap, Wifi, HeartCrack } from "lucide-react";

const groups = [
  {
    icon: Repeat,
    title: "People who start strong but fall off",
    body: "If you've quit five productivity apps this year, Breezee360 was built for you. Gentle recovery, soft time-blocks, no guilt design — so consistency finally sticks.",
  },
  {
    icon: Briefcase,
    title: "Freelancers",
    body: "Run your client work and your energy from one calm home. Plan your day in soft blocks, capture wins, and reflect on Sunday — without managing yet another tool.",
  },
  {
    icon: Rocket,
    title: "Entrepreneurs & solo founders",
    body: "Ship sustainably. Breezee360's daily rhythm protects deep work and your nervous system at the same time, so the build doesn't cost you the builder.",
  },
  {
    icon: GraduationCap,
    title: "Students",
    body: "Study, breathe, repeat. Use Night Fuel to wind down, Daily Action for revision blocks, and Weekly Wrap to see real progress beyond the panic of exam week.",
  },
  {
    icon: Wifi,
    title: "Remote workers",
    body: "When work and home share a Wi-Fi network, you need a calm rhythm — not more notifications. Breezee360 gives your day a beginning, a middle, and an end.",
  },
  {
    icon: HeartCrack,
    title: "Anyone tired of productivity guilt",
    body: "If most apps make you feel behind, Breezee360 is the opposite by design. Productivity through well-being, not pressure — exactly as it sounds.",
  },
];

export default function WhoItIsFor() {
  return (
    <section
      id="who-its-for"
      data-testid="who-its-for-section"
      className="py-24 md:py-32 bg-muted/40"
    >
      <div className="container-soft">
        <div className="max-w-3xl">
          <p className="label-eyebrow">Who Breezee360 is for</p>
          <h2 className="mt-5 font-serif text-4xl md:text-5xl leading-[1.1] tracking-tight">
            Built for humans
            <br />
            <span className="italic text-primary">tired of grinding</span>.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((g, i) => (
            <div
              key={i}
              data-testid={`audience-card-${i}`}
              className="soft-card p-7 hover:-translate-y-1 transition-transform"
            >
              <span className="grid place-items-center w-11 h-11 rounded-2xl bg-primary/10 text-primary mb-5">
                <g.icon className="w-5 h-5" />
              </span>
              <h3 className="font-serif text-xl mb-2">{g.title}</h3>
              <p className="text-[15px] text-secondary-foreground leading-relaxed">
                {g.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
