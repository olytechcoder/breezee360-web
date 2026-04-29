import { Quote } from "lucide-react";

const reviews = [
  {
    name: "Sarah J.",
    role: "Freelance writer",
    avatar:
      "https://images.unsplash.com/photo-1758272421799-f944661c88f4?crop=entropy&cs=srgb&fm=jpg&w=160",
    quote:
      "I've tried every productivity app. Breezee360 is the first one that didn't make me feel behind. It made me feel met.",
  },
  {
    name: "David M.",
    role: "Founder, Solo SaaS",
    avatar:
      "https://images.pexels.com/photos/4047830/pexels-photo-4047830.jpeg?auto=compress&cs=tinysrgb&w=160",
    quote:
      "The Sunday Wrap is the only metric I now care about. I'm shipping more — without grinding through weekends.",
  },
  {
    name: "Elena R.",
    role: "Product designer",
    avatar:
      "https://images.unsplash.com/photo-1765648580890-732fa6d769c5?crop=entropy&cs=srgb&fm=jpg&w=160",
    quote:
      "Three quotes at night, three priorities by day. It's the simplest system I've kept for more than a month.",
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
            <span className="italic text-primary">spoken out loud</span>.
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
