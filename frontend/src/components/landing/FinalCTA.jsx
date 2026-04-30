import { Shield, Check } from "lucide-react";
import WaitlistForm from "./WaitlistForm";
import LaunchBlock from "./LaunchBlock";

const trust = ["No spam", "No pressure", "Just a quiet launch email"];

export default function FinalCTA() {
  return (
    <section
      id="waitlist"
      data-testid="final-cta-section"
      className="py-24 md:py-32"
    >
      <div className="container-soft">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-border p-10 md:p-20 text-center">
          <div
            aria-hidden
            className="absolute inset-0 -z-10"
            style={{
              backgroundImage:
                "radial-gradient(50% 50% at 50% 0%, hsl(var(--primary) / 0.18), transparent 70%), linear-gradient(180deg, hsl(var(--accent)) 0%, hsl(var(--background)) 100%)",
            }}
          />

          <p className="label-eyebrow">Begin gently</p>
          <h2 className="mt-5 font-serif text-4xl md:text-6xl leading-[1.05] tracking-tight max-w-3xl mx-auto">
            Build consistency the
            <span className="italic text-primary"> calm </span>
            way.
          </h2>
          <p className="mt-6 text-lg text-secondary-foreground max-w-[620px] mx-auto leading-[1.7]">
            Reserve your spot on the Breezee360 waitlist. We'll send a soft
            note when the app is ready — and a quiet thank-you, never a sales
            pitch.
          </p>

          <div className="mt-10 flex flex-col items-center gap-7">
            <WaitlistForm variant="card" testidPrefix="cta-waitlist" />

            <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-secondary-foreground">
              {trust.map((t) => (
                <li key={t} className="inline-flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" />
                  {t}
                </li>
              ))}
            </ul>

            <LaunchBlock align="center" />

            <p className="inline-flex items-center gap-2 text-xs text-muted-foreground">
              <Shield className="w-3.5 h-3.5 text-primary" />
              Privacy-first by design · no tracking, no ads, no data sales.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
