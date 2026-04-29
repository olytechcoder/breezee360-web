import { Shield, Mail } from "lucide-react";

const cols = [
  {
    title: "Product",
    links: ["Night Fuel", "Daily Action", "Weekly Wrap", "Wins Jar"],
  },
  {
    title: "Company",
    links: ["About", "Manifesto", "Press", "Careers"],
  },
  {
    title: "Resources",
    links: ["Help Center", "Privacy", "Terms", "Cookie settings"],
  },
];

export default function Footer() {
  return (
    <footer
      data-testid="site-footer"
      className="border-t border-border bg-muted/40 py-16 md:py-20"
    >
      <div className="container-soft">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <a href="#top" className="flex items-center">
              <img
                src="/breezee-logo.png"
                alt="Breezee360"
                className="h-12 w-auto select-none"
                draggable="false"
              />
            </a>
            <p className="mt-5 text-secondary-foreground text-base leading-relaxed max-w-sm">
              A daily rhythm for humans who want to grow without grinding.
              Productivity through well-being, not pressure.
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm text-secondary-foreground">
              <Shield className="w-4 h-4 text-primary" />
              <span>Privacy-first by design — your data stays yours.</span>
            </div>
            <a
              data-testid="footer-email-link"
              href="mailto:fans@breezee.uk"
              className="mt-3 inline-flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4" />
              fans@breezee.uk
            </a>
          </div>

          {cols.map((c) => (
            <div key={c.title} className="md:col-span-2">
              <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-foreground mb-5">
                {c.title}
              </h4>
              <ul className="space-y-3">
                {c.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      data-testid={`footer-link-${l.toLowerCase().replace(/\s/g, "-")}`}
                      className="text-sm text-secondary-foreground hover:text-foreground transition-colors"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Breezee360. Built with calm.</p>
          <p className="italic font-serif">
            "Productivity through well-being, not pressure."
          </p>
        </div>
      </div>
    </footer>
  );
}
