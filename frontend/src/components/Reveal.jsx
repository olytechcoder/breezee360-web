import { useEffect, useRef, useState } from "react";

/**
 * Soft scroll reveal — fades in + 10px upward slide on first intersect.
 * Honours prefers-reduced-motion automatically.
 */
export default function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
  className = "",
  ...rest
}) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) {
      setShown(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: shown ? `${delay}ms` : "0ms" }}
      className={`will-change-transform transition-all duration-[600ms] ease-out
        ${shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2.5"}
        motion-reduce:transition-none motion-reduce:translate-y-0 motion-reduce:opacity-100
        ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}
