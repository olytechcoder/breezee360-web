import PhoneMockup from "./PhoneMockup";
import WaitlistForm from "./WaitlistForm";
import LaunchBlock from "./LaunchBlock";
import BracketLabel from "./BracketLabel";

export default function Hero() {
  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative overflow-hidden pt-12 md:pt-20 pb-28 md:pb-36"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-90"
        style={{
          backgroundImage:
            "radial-gradient(60% 50% at 80% 0%, hsl(var(--primary) / 0.12), transparent 60%), radial-gradient(40% 40% at 10% 30%, hsl(var(--primary) / 0.08), transparent 60%)",
        }}
      />

      <div className="container-soft grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        <div className="lg:col-span-7 animate-fade-up">
          <BracketLabel testid="hero-eyebrow">Calm productivity app</BracketLabel>

          <h1
            data-testid="hero-headline"
            className="mt-6 font-serif text-[44px] sm:text-5xl md:text-6xl xl:text-[64px] leading-[1.05] tracking-tight"
          >
            Stay consistent
            <br />
            <span className="italic text-primary">without the burnout.</span>
          </h1>

          <p
            data-testid="hero-subheadline"
            className="mt-6 text-lg text-secondary-foreground max-w-[620px] leading-[1.7]"
          >
            Breezee360 is a daily rhythm app that turns motivation, action,
            and reflection into one calm routine. Build habits that last — no
            streak guilt, no toxic to-do lists, no Monday restarts.
          </p>

          <div className="mt-8 space-y-6 max-w-[620px]">
            <WaitlistForm variant="inline" testidPrefix="hero-waitlist" />
            <LaunchBlock align="left" />
          </div>

          <div className="mt-12 flex items-center gap-6">
            <div className="flex -space-x-2">
              {[
                "https://images.unsplash.com/photo-1758272421799-f944661c88f4?crop=entropy&cs=srgb&fm=jpg&w=80",
                "https://images.pexels.com/photos/4047830/pexels-photo-4047830.jpeg?auto=compress&cs=tinysrgb&w=80",
                "https://images.unsplash.com/photo-1765648580890-732fa6d769c5?crop=entropy&cs=srgb&fm=jpg&w=80",
              ].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt=""
                  className="w-9 h-9 rounded-full border-2 border-background object-cover"
                />
              ))}
            </div>
            <p className="text-sm text-secondary-foreground">
              Joined by <span className="font-semibold text-foreground">1,200+</span>{" "}
              calm builders, freelancers &amp; students
            </p>
          </div>
        </div>

        <div className="lg:col-span-5 relative flex justify-center lg:justify-end animate-fade-up [animation-delay:200ms]">
          <PhoneMockup />
        </div>
      </div>
    </section>
  );
}
