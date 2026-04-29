import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

const links = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "Reflections", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="site-navbar"
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-background/75 border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="container-soft flex items-center justify-between h-20">
        <a
          href="#top"
          data-testid="brand-logo"
          className="flex items-center gap-3 group"
        >
          <img
            src="/breezee-logo.jpeg"
            alt="Breezee360 — Always there"
            className="h-11 w-11 rounded-xl object-cover ring-1 ring-border group-hover:ring-primary/40 transition-all"
          />
          <div className="hidden sm:flex flex-col leading-none">
            <span className="font-serif text-lg font-semibold tracking-tight">
              Breezee<span className="text-primary">360°</span>
            </span>
            <span className="text-[10px] uppercase tracking-[0.22em] text-secondary-foreground mt-1">
              Always there
            </span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              data-testid={`nav-link-${l.href.replace("#", "")}`}
              href={l.href}
              className="text-sm text-secondary-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <button
            data-testid="theme-toggle-btn"
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="grid place-items-center w-10 h-10 rounded-full border border-border hover:border-primary/40 hover:bg-accent transition-all"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
          </button>
          <a
            data-testid="navbar-cta-waitlist"
            href="#waitlist"
            className="hidden sm:inline-flex btn-pill-primary text-sm py-2.5 px-5"
          >
            Join the waitlist
          </a>
        </div>
      </div>
    </header>
  );
}
