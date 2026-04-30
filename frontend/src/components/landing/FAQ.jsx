import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "What is Breezee360?",
    a: "Breezee360 is a calm productivity app that helps you stay consistent without burnout. It combines nightly motivation (Night Fuel), gentle daily planning (Daily Action), and weekly reflection (Weekly Wrap) into one sustainable routine — designed for people tired of toxic to-do apps.",
  },
  {
    q: "Is Breezee360 a productivity app?",
    a: "Yes — Breezee360 is a productivity and wellness app. It includes tasks, priorities, and soft time-blocks like a planner, but pairs them with energy check-ins, a Wins Jar, and gentle missed-day recovery so consistency doesn't cost you your well-being.",
  },
  {
    q: "How does Night Fuel work?",
    a: "Night Fuel is Breezee360's evening motivation feature. Each night the app delivers exactly three intentional quotes — never an endless feed. You can pair them with a quick energy check-in and a Wins Jar entry before bed, then close the app and rest.",
  },
  {
    q: "Does Breezee360 work offline?",
    a: "Yes. Your tasks, goals, quotes, check-ins, wins, and settings are stored locally on your device, so the core daily rhythm of Breezee360 works without an internet connection.",
  },
  {
    q: "Does Breezee360 track my behaviour?",
    a: "No. Breezee360 does not collect behavioural data, does not track you for advertising, and does not sell user data. Your productivity data stays on your device — see our Privacy Policy for full details.",
  },
  {
    q: "Is my data stored online?",
    a: "Your productivity data — tasks, goals, quotes, check-ins, wins, and settings — stays locally on your phone. The only account information that may be processed is your email address or username for sign up, sign in, and sign out.",
  },
  {
    q: "Who is Breezee360 for?",
    a: "Breezee360 is for young professionals, freelancers, entrepreneurs, students, remote workers, and anyone who struggles with consistency or feels burned out by toxic productivity apps. If you start strong but fall off — Breezee360 is built for you.",
  },
  {
    q: "Who builds Breezee360?",
    a: "Breezee360 is developed by OLYTECH Design, a technology company focused on building scalable digital products. The team designs Breezee360 around a single principle: productivity through well-being, not pressure.",
  },
  {
    q: "When will Breezee360 launch?",
    a: "Breezee360 is launching on iOS and Android on June 1, 2026. Join the waitlist to be notified the moment the app is available — and to receive a calm welcome email, never a sales pitch.",
  },
];

function Item({ q, a, open, onToggle, idx }) {
  return (
    <div
      data-testid={`faq-item-${idx}`}
      className="border-b border-border last:border-b-0"
    >
      <button
        onClick={onToggle}
        aria-expanded={open}
        data-testid={`faq-toggle-${idx}`}
        className="w-full flex items-start justify-between gap-6 py-6 text-left group"
      >
        <span className="font-serif text-lg md:text-xl text-foreground group-hover:text-primary transition-colors">
          {q}
        </span>
        <span className="mt-1 grid place-items-center w-8 h-8 rounded-full bg-accent text-primary shrink-0">
          {open ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </span>
      </button>
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="pb-6 pr-12 text-base text-secondary-foreground leading-relaxed">
            {a}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section
      id="faq"
      data-testid="faq-section"
      className="py-24 md:py-32"
    >
      <div className="container-soft grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <p className="label-eyebrow">Frequently asked</p>
          <h2 className="mt-5 font-serif text-4xl md:text-5xl leading-[1.1] tracking-tight">
            Calm answers
            <br />
            to fair questions.
          </h2>
          <p className="mt-6 text-base md:text-lg text-secondary-foreground max-w-md">
            Everything you might want to know about Breezee360, the daily
            rhythm system, and our privacy-first approach.
          </p>
        </div>

        <div className="lg:col-span-7 soft-card p-2 md:p-4">
          <div className="px-4 md:px-6">
            {faqs.map((f, i) => (
              <Item
                key={i}
                idx={i}
                q={f.q}
                a={f.a}
                open={openIdx === i}
                onToggle={() => setOpenIdx(openIdx === i ? -1 : i)}
              />
            ))}
          </div>
        </div>
      </div>

      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
    </section>
  );
}
