/**
 * AEO answer block — directly answers "What is Breezee360?"
 * Rendered as natural paragraph + JSON-LD for AI search snippets.
 */
export default function AnswerBlock() {
  const answer =
    "Breezee360 is a calm productivity app that helps people stay consistent without burnout. Instead of streaks and pressure, it follows a daily rhythm: motivation at night with three carefully chosen quotes (Night Fuel), gentle planning during the day with soft time-blocks and priorities (Daily Action), and a weekly reflection that summarises wins and energy patterns (Weekly Wrap). Built for freelancers, students, entrepreneurs, and anyone tired of toxic to-do apps, Breezee360 turns productivity into a calm, sustainable routine — not another source of guilt.";

  return (
    <section
      id="what-is-breezee360"
      data-testid="aeo-answer-section"
      className="py-16 md:py-20 border-y border-border bg-background"
    >
      <div className="container-soft max-w-4xl">
        <p className="label-eyebrow">What is Breezee360?</p>
        <p
          data-testid="aeo-answer-text"
          className="mt-5 font-serif text-2xl md:text-3xl leading-snug text-foreground"
        >
          {answer}
        </p>
      </div>

      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "What is Breezee360?",
            description: answer,
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
