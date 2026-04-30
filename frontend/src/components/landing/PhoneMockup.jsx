/**
 * Hero device frame showing the real Breezee360 home screen.
 * Minimal iPhone-style bezel — no fake UI, just the actual screenshot.
 */
export default function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[300px] sm:w-[340px] md:w-[370px] animate-float">
      {/* soft glow halo */}
      <div className="absolute -inset-8 bg-primary/15 dark:bg-primary/25 blur-3xl rounded-full opacity-70 animate-soft-pulse" />

      {/* device frame */}
      <div className="relative rounded-[2.8rem] p-[6px] bg-gradient-to-b from-neutral-200 via-neutral-300 to-neutral-400 dark:from-neutral-700 dark:via-neutral-800 dark:to-neutral-900 shadow-[0_30px_80px_-20px_rgba(13,122,95,0.45)]">
        <div className="rounded-[2.5rem] overflow-hidden bg-white dark:bg-[#071410] relative">
          {/* dynamic island / notch */}
          <div className="absolute top-2.5 left-1/2 -translate-x-1/2 z-10 w-24 h-6 bg-black rounded-full" />

          <img
            src="/breezee-home.jpeg"
            alt="Breezee360 home screen — Energy Check-In, nightly quotes, and Today's tasks."
            className="block w-full h-auto select-none"
            draggable="false"
          />
        </div>
      </div>
    </div>
  );
}
