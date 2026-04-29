import { Quote } from "lucide-react";

const reviews = [
  {
    name: "Sarah J.",
    role: "Freelance copywriter, London",
    avatar:
      "https://images.unsplash.com/photo-1758272421799-f944661c88f4?crop=entropy&cs=srgb&fm=jpg&w=160",
    quote:
      "I used to abandon a productivity app every six weeks. With Breezee360 I've kept the same routine for three months. The Sunday Wrap is the only review I actually read.",
  },
  {
    name: "David M.",
    role: "Founder, solo SaaS",
    avatar:
      "https://images.pexels.com/photos/4047830/pexels-photo-4047830.jpeg?auto=compress&cs=tinysrgb&w=160",
    quote:
      "The soft time-blocks fit how I actually work. I'm shipping more without the all-nighters — and the missed-day recovery saved me from quitting on a bad week.",
  },
  {
    name: "Elena R.",
    role: "Postgrad student",
    avatar:
      "https://images.unsplash.com/photo-1765648580890-732fa6d769c5?crop=entropy&cs=srgb&fm=jpg&w=160",
    quote:
      "Three quotes at night, three priorities by day. It's the simplest plan I've stuck with longer than a week — and I finally finished my dissertation outline.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      data-testid="testimonials-section"
      className="py-24 md:py-32 bg-accent/40 dark:bg-accent/15"
    >
      <div className="container-soft">
        <div className="max-w-3xl">
          <p className="label-eyebrow">Loved by people building better habits</p>
          <h2 className="mt-5 font-serif text-4xl md:text-5xl leading-[1.1] tracking-tight">
            Quiet results,
            <br />
            <span className="italic text-primary">in their own words</span>.
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <article
              key={i}
              data-testid={`testimonial-card-${i}`}
              className="soft-card p-8 hover:-translate-y-1 transition-transform"
            >
              <Quote className="w-6 h-6 text-primary mb-5" />
              <p className="font-serif text-lg leading-snug mb-7">"{r.quote}"</p>
              <div className="flex items-center gap-3">
                <img
                  src={r.avatar}
                  alt={r.name}
                  className="w-11 h-11 rounded-full object-cover"
                />
                <div>
                  <div className="font-medium text-sm">{r.name}</div>
                  <div className="text-xs text-secondary-foreground">{r.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
