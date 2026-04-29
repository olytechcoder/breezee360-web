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

const socials = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/breezee.uk",
    path: "M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v14H.22V8zm7.4 0h4.37v1.92h.06c.61-1.15 2.1-2.36 4.32-2.36 4.62 0 5.47 3.04 5.47 7v7.44h-4.56v-6.6c0-1.57-.03-3.6-2.2-3.6-2.2 0-2.54 1.72-2.54 3.49V22H7.62V8z",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/breezee.uk",
    path: "M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63a5.92 5.92 0 0 0-2.13 1.39A5.92 5.92 0 0 0 .63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.8.73 1.48 1.39 2.13.66.66 1.34 1.08 2.13 1.39.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.92 5.92 0 0 0 2.13-1.39 5.92 5.92 0 0 0 1.39-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.92 5.92 0 0 0-1.39-2.13A5.92 5.92 0 0 0 19.86.63C19.1.33 18.22.13 16.95.07 15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.41-10.41a1.44 1.44 0 1 0 0-2.88 1.44 1.44 0 0 0 0 2.88z",
  },
  {
    label: "Facebook",
    href: "https://facebook.com/breezee.uk",
    path: "M22.68 0H1.32C.59 0 0 .57 0 1.28v21.44C0 23.43.59 24 1.32 24h11.5v-9.29H9.69v-3.62h3.13V8.41c0-3.1 1.9-4.79 4.66-4.79 1.32 0 2.46.1 2.79.14v3.24h-1.92c-1.5 0-1.79.71-1.79 1.76v2.31h3.59l-.47 3.62h-3.12V24h6.12c.73 0 1.32-.57 1.32-1.28V1.28C24 .57 23.41 0 22.68 0z",
  },
  {
    label: "X",
    href: "https://x.com/breezee.uk",
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644z",
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

            {/* Social row */}
            <div
              data-testid="footer-socials"
              className="mt-7 flex items-center gap-2.5"
            >
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${s.label} · @breezee.uk`}
                  data-testid={`footer-social-${s.label.toLowerCase()}`}
                  className="grid place-items-center h-10 w-10 rounded-full text-secondary-foreground border border-border hover:text-primary hover:border-primary/40 hover:bg-accent transition-all duration-200"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-[18px] h-[18px] fill-current"
                    aria-hidden
                  >
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
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

        <div className="mt-14 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-5 text-xs text-muted-foreground">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} Breezee360. Built with calm.
          </p>

          <a
            href="https://olytech.co"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="footer-olytech-credit"
            className="group inline-flex items-center gap-2.5 text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="tracking-wide">Powered by</span>
            <img
              src="http://olytech.co/wp-content/uploads/2025/08/Colored-Logo.svg"
              alt="OLYTECH Design"
              className="h-5 w-auto opacity-80 group-hover:opacity-100 transition-opacity"
              draggable="false"
            />
            <span className="font-semibold tracking-wide text-foreground/80 group-hover:text-foreground">
              OLYTECH Design
            </span>
          </a>

          <p className="italic font-serif text-center md:text-right">
            "Productivity through well-being, not pressure."
          </p>
        </div>
      </div>
    </footer>
  );
}
