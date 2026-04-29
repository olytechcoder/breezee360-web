import { Leaf } from "lucide-react";

export default function Solution() {
  return (
    <section
      data-testid="solution-section"
      className="py-24 md:py-32"
    >
      <div className="container-soft grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5">
          <p className="label-eyebrow">The Breezee360 way</p>
          <h2 className="mt-5 font-serif text-4xl md:text-5xl leading-[1.1] tracking-tight">
            A better way to
            <br />
            stay <span className="text-primary italic">consistent</span>.
          </h2>
        </div>

        <div className="lg:col-span-7">
          <div className="soft-card p-10 md:p-12 relative overflow-hidden">
            <span className="grid place-items-center w-12 h-12 rounded-2xl bg-primary/10 text-primary mb-6">
              <Leaf className="w-5 h-5" />
            </span>
            <p className="font-serif text-2xl md:text-3xl leading-snug text-foreground">
              Breezee360 isn't another to-do list, and it isn't a quote app.
              It's a <span className="text-primary">daily rhythm system</span>{" "}
              that walks with you — fueling at night, focusing by day, and
              reflecting at the end of every week.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-4 text-center">
              {[
                { k: "🌙", t: "Night", s: "Motivation" },
                { k: "☀", t: "Day", s: "Action" },
                { k: "📊", t: "Week", s: "Reflection" },
              ].map((c, i) => (
                <div
                  key={i}
                  data-testid={`solution-loop-${c.t.toLowerCase()}`}
                  className="rounded-2xl bg-accent dark:bg-secondary/40 py-5 px-3"
                >
                  <div className="text-2xl mb-1">{c.k}</div>
                  <div className="font-medium text-sm">{c.t}</div>
                  <div className="text-xs text-secondary-foreground mt-0.5">
                    {c.s}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
