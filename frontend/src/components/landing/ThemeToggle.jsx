import { Sunrise, Moon } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

/**
 * Calm, premium theme toggle.
 * Sunrise = light · Moon = dark.
 * Icons cross-fade with a gentle rotate; the surrounding tile softly
 * shifts colour to the opposite theme on hover.
 */
export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      data-testid="theme-toggle-btn"
      className="group relative grid place-items-center w-10 h-10 rounded-2xl border border-border bg-background hover:border-primary/40 transition-all duration-300 overflow-hidden"
    >
      {/* hover wash */}
      <span
        aria-hidden
        className="absolute inset-0 bg-primary/0 group-hover:bg-primary/8 transition-colors duration-500"
      />

      {/* Sunrise · visible in light mode */}
      <Sunrise
        className={`absolute w-[18px] h-[18px] text-primary transition-all duration-500 ease-out
        ${isDark
            ? "opacity-0 -translate-y-2.5 rotate-90 scale-75"
            : "opacity-100 translate-y-0 rotate-0 scale-100 group-hover:-translate-y-px group-hover:rotate-[8deg]"}`}
        strokeWidth={1.75}
      />

      {/* Moon · visible in dark mode */}
      <Moon
        className={`absolute w-[18px] h-[18px] text-primary transition-all duration-500 ease-out
        ${isDark
            ? "opacity-100 translate-y-0 rotate-0 scale-100 group-hover:rotate-[-12deg] group-hover:scale-105"
            : "opacity-0 translate-y-2.5 -rotate-90 scale-75"}`}
        strokeWidth={1.75}
      />

      {/* tiny floating star — only visible at night, subtle */}
      <span
        aria-hidden
        className={`absolute top-2 right-2 w-1 h-1 rounded-full bg-primary transition-all duration-700
        ${isDark ? "opacity-90 scale-100" : "opacity-0 scale-0"}`}
      />
    </button>
  );
}
