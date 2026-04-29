/**
 * Editorial bracket-style label.
 *   [ Calm productivity app ]
 * Replaces pill badges across the site. Works on both themes.
 */
export default function BracketLabel({ children, className = "", testid }) {
  return (
    <span
      data-testid={testid}
      className={`inline-flex items-center gap-2.5 text-[11px] md:text-xs uppercase tracking-[0.28em] font-medium text-foreground/85 ${className}`}
    >
      <span
        aria-hidden
        className="font-serif font-light text-lg leading-none text-primary/55 -translate-y-px"
      >
        [
      </span>
      <span className="whitespace-nowrap">{children}</span>
      <span
        aria-hidden
        className="font-serif font-light text-lg leading-none text-primary/55 -translate-y-px"
      >
        ]
      </span>
    </span>
  );
}
