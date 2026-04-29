import { Star } from "lucide-react";
import PhoneMockup from "./PhoneMockup";
import WaitlistForm from "./WaitlistForm";
import StoreBadges from "./StoreBadges";

export default function Hero() {
  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative overflow-hidden pt-12 md:pt-20 pb-24 md:pb-32"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-90"
        style={{
          backgroundImage:
            "radial-gradient(60% 50% at 80% 0%, hsl(var(--primary) / 0.12), transparent 60%), radial-gradient(40% 40% at 10% 30%, hsl(var(--primary) / 0.08), transparent 60%)",
        }}
      />

      <div className="container-soft grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="animate-fade-up">
          <span
            data-testid="hero-eyebrow"
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 bg-accent text-accent-foreground border border-primary/15 text-xs font-medium tracking-wide"
          >
            <Star className="w-3.5 h-3.5 fill-current" />
            The calm productivity app
          </span>

          <h1
            data-testid="hero-headline"
            className="mt-7 font-serif text-5xl md:text-6xl xl:text-7xl leading-[1.05] tracking-tight"
          >
            Stay consistent
            <br />
            <span className="italic text-primary">without the burnout.</span>
          </h1>

          <p
            data-testid="hero-subheadline"
            className="mt-7 text-lg md:text-xl text-secondary-foreground max-w-xl leading-relaxed"
          >
            Breezee360 is a daily rhythm app that turns motivation, action, and
            reflection into one calm routine. Build habits that actually last —
            no streak guilt, no toxic to-do lists, no Monday restarts.
          </p>

          <div className="mt-9 space-y-5">
            <WaitlistForm variant="inline" testidPrefix="hero-waitlist" />

            <div className="flex flex-wrap items-center gap-3">
              <StoreBadges />
              <span className="text-xs text-muted-foreground ml-1">
                iOS &amp; Android · launching early 2026
              </span>
            </div>
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

        <div className="relative flex justify-center animate-fade-up [animation-delay:200ms]">
          <PhoneMockup />
        </div>
      </div>
    </section>
  );
}
