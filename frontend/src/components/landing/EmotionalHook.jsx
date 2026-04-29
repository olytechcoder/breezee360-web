export default function EmotionalHook() {
  return (
    <section
      data-testid="emotional-hook-section"
      className="relative py-32 md:py-40 overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/13974641/pexels-photo-13974641.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1200&w=1800')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-black/55" />
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(60% 40% at 50% 50%, rgba(13,122,95,0.45), transparent 70%)",
        }}
      />

      <div className="container-soft text-center text-white max-w-4xl mx-auto">
        <p className="text-xs uppercase tracking-[0.3em] font-bold text-emerald-300 mb-7">
          The promise
        </p>
        <h2 className="font-serif text-4xl md:text-6xl leading-[1.08] tracking-tight">
          No guilt. No burnout.
          <br />
          Just a gentler way to{" "}
          <span className="italic text-emerald-300">become consistent.</span>
        </h2>
        <p className="mt-8 text-lg md:text-xl text-emerald-50/85 max-w-2xl mx-auto leading-relaxed">
          Breezee360 was built on a single belief: sustainable growth comes
          from kindness, not pressure. Every screen, every nudge, every silence
          is designed to protect that.
        </p>

        <div className="mt-12 inline-flex flex-wrap items-center justify-center gap-3">
          {["No streaks weaponized", "No guilt design", "No sold attention"].map(
            (b, i) => (
              <span
                key={i}
                data-testid={`promise-pill-${i}`}
                className="rounded-full px-4 py-2 bg-white/10 backdrop-blur-md text-sm border border-white/15"
              >
                {b}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
}
