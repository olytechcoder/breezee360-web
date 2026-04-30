import { Moon, Sun, BarChart3 } from "lucide-react";

const lead =
  "Breezee360 is a calm productivity system built around a daily rhythm.";
const aeoText =
  "Breezee360 is a calm productivity app built around a daily rhythm: motivation at night with three intentional quotes (Night Fuel), action during the day with soft time-blocks (Daily Action), and reflection at the end of the week with Weekly Wrap. No streak pressure. No burnout loops.";

const rows = [
  { Icon: Moon, k: "Night", v: "motivation with 3 intentional quotes" },
  { Icon: Sun, k: "Day", v: "action with soft time-blocks" },
  { Icon: BarChart3, k: "Week", v: "reflection with Weekly Wrap" },
];

export default function AnswerBlock() {
  return (
    <section
      id="what-is-breezee360"
      data-testid="aeo-answer-section"
      className="py-20 md:py-24 border-y border-border bg-background"
    >
      <div className="container-soft">
        <div className="max-w-[680px]">
          <p className="label-eyebrow">What is Breezee360?</p>
          <p
            data-testid="aeo-answer-lead"
            className="mt-5 font-serif text-2xl md:text-[28px] leading-snug text-foreground"
          >
            {lead}
          </p>

          <ul className="mt-8 space-y-3.5" data-testid="aeo-answer-bullets">
            {rows.map(({ Icon, k, v }) => (
              <li
                key={k}
                className="flex items-start gap-3 text-base md:text-lg text-foreground/90 leading-[1.7]"
              >
                <span className="mt-0.5 grid place-items-center w-7 h-7 rounded-lg bg-primary/10 text-primary shrink-0">
                  <Icon className="w-3.5 h-3.5" strokeWidth={2} />
                </span>
                <span>
                  <strong className="font-semibold text-foreground">{k}</strong>
                  <span className="text-secondary-foreground"> → {v}</span>
                </span>
              </li>
            ))}
          </ul>

          <p className="mt-8 text-base md:text-lg text-secondary-foreground italic font-serif">
            No streak pressure. No burnout loops.
          </p>
        </div>
      </div>

      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "What is Breezee360?",
            description: aeoText,
            author: { "@type": "Organization", name: "Breezee360" },
            publisher: {
              "@type": "Organization",
              name: "Breezee360",
              logo: {
                "@type": "ImageObject",
                url: "https://breezee.uk/breezee-logo.png",
              },
            },
          }),
        }}
      />
    </section>
  );
}
