import { Link } from "react-router-dom";
import { ArrowLeft, Shield } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const EFFECTIVE_DATE = "[Insert effective date]";

const sections = [
  {
    id: "introduction",
    title: "1. Introduction",
    body: (
      <>
        <p>
          Welcome to Breezee360 ("we", "us", or "our"). Breezee360 is a calm
          productivity app that helps people stay consistent without burnout
          through nightly motivation, daily action, and weekly reflection.
        </p>
        <p>
          This Privacy Policy explains what information we collect, what we do
          not collect, how we handle your account information, and the
          choices you have. We've written it in plain language so you can
          actually read it.
        </p>
        <p>
          By using Breezee360 you agree to this Privacy Policy. If you do not
          agree, please do not use the app.
        </p>
      </>
    ),
  },
  {
    id: "information-we-collect",
    title: "2. Information We Collect",
    body: (
      <>
        <p>
          The only information we may collect to provide Breezee360 is the
          minimum required to create and access an account:
        </p>
        <ul>
          <li>
            <strong>Email address or username</strong> — used solely for sign
            up, sign in, sign out, and account recovery.
          </li>
          <li>
            <strong>Authentication details</strong> — securely hashed
            credentials needed to keep your account safe.
          </li>
        </ul>
        <p>
          We do not require your real name, phone number, address, date of
          birth, or payment details to use Breezee360.
        </p>
      </>
    ),
  },
  {
    id: "information-we-do-not-collect",
    title: "3. Information We Do Not Collect",
    body: (
      <>
        <p>Breezee360 is built to collect as little as possible. We do not collect:</p>
        <ul>
          <li>Behavioural data or in-app analytics tied to your identity</li>
          <li>Location data of any kind</li>
          <li>Contacts, calendar, photos, microphone, or camera data</li>
          <li>Device identifiers used for advertising or cross-app tracking</li>
          <li>Browsing history outside the Breezee360 app</li>
          <li>Information from third-party social networks</li>
        </ul>
        <p>
          We do not sell, rent, or trade your personal information to anyone.
        </p>
      </>
    ),
  },
  {
    id: "how-we-use-account-information",
    title: "4. How We Use Account Information",
    body: (
      <>
        <p>We use the email address or username you provide only to:</p>
        <ul>
          <li>Create your Breezee360 account and let you sign in and out</li>
          <li>Help you recover access if you forget your credentials</li>
          <li>
            Send essential service messages (e.g., security or account
            notices)
          </li>
          <li>
            Send optional product updates if you have explicitly opted in —
            you can unsubscribe at any time
          </li>
        </ul>
        <p>
          We do not use your account information for advertising, profiling,
          or any third-party marketing.
        </p>
      </>
    ),
  },
  {
    id: "local-data-storage",
    title: "5. Local Data Storage",
    body: (
      <>
        <p>
          Your productivity data stays on your device. This includes, but is
          not limited to:
        </p>
        <ul>
          <li>Tasks, priorities, and soft time-blocks</li>
          <li>Goals and weekly intentions</li>
          <li>Quotes you receive in Night Fuel</li>
          <li>Energy check-ins</li>
          <li>Wins Jar entries</li>
          <li>App settings and preferences</li>
        </ul>
        <p>
          This information is stored locally on your phone. It is not uploaded
          to our servers, sold to third parties, or used for advertising.
        </p>
        <p>
          If a future Breezee360 feature offers optional cloud backup or
          cross-device sync, it will be opt-in only and we will update this
          policy before launching it.
        </p>
      </>
    ),
  },
  {
    id: "data-sharing",
    title: "6. Data Sharing",
    body: (
      <>
        <p>We do not sell your data. We do not share your data for advertising.</p>
        <p>
          The only situations in which we may share limited information are:
        </p>
        <ul>
          <li>
            <strong>Service providers</strong> who help us run essential
            services such as authentication or transactional email delivery,
            strictly under contracts that forbid them from using your data for
            their own purposes.
          </li>
          <li>
            <strong>Legal requirements</strong> if we are required to comply
            with a valid legal request, court order, or applicable law.
          </li>
          <li>
            <strong>Business transfers</strong> in the unlikely event of a
            merger or acquisition, in which case we will notify you and honour
            this Privacy Policy.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "advertising-and-tracking",
    title: "7. Advertising and Tracking",
    body: (
      <>
        <p>
          Breezee360 contains no third-party advertising, no behavioural
          tracking, and no cross-app or cross-website tracking. We do not
          integrate ad networks, marketing pixels, or fingerprinting services
          inside the app.
        </p>
      </>
    ),
  },
  {
    id: "data-security",
    title: "8. Data Security",
    body: (
      <>
        <p>
          We protect your account information using industry-standard security
          practices, including encrypted transport (HTTPS/TLS) and secure
          credential storage. No system can be guaranteed completely secure,
          but we work to minimise any risk.
        </p>
        <p>
          Because your productivity data lives on your device, we recommend
          enabling a screen lock and keeping your device's operating system up
          to date.
        </p>
      </>
    ),
  },
  {
    id: "account-and-data-deletion",
    title: "9. Account and Data Deletion",
    body: (
      <>
        <p>You can remove your data from Breezee360 at any time:</p>
        <ul>
          <li>
            <strong>Local data:</strong> uninstall the app or use the in-app
            "Reset all data" option to remove tasks, quotes, check-ins, wins,
            and settings from your device.
          </li>
          <li>
            <strong>Account data:</strong> request deletion of your account by
            emailing{" "}
            <a className="text-primary underline" href="mailto:fans@breezee.uk">
              fans@breezee.uk
            </a>
            . We will permanently delete your email address or username from
            our authentication system within a reasonable timeframe, unless
            we're required to retain it for legal reasons.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "childrens-privacy",
    title: "10. Children's Privacy",
    body: (
      <>
        <p>
          Breezee360 is not directed to children under the age of 13 (or the
          minimum age required by law in your country). We do not knowingly
          collect personal information from children. If you believe a child
          has provided us with information, please contact us at{" "}
          <a className="text-primary underline" href="mailto:fans@breezee.uk">
            fans@breezee.uk
          </a>{" "}
          and we will delete it.
        </p>
      </>
    ),
  },
  {
    id: "changes",
    title: "11. Changes to This Policy",
    body: (
      <>
        <p>
          We may update this Privacy Policy from time to time. When we do,
          we'll change the "Effective date" above and, if the changes are
          material, give you reasonable notice in the app or by email before
          the new version takes effect. Continued use of Breezee360 after the
          effective date means you accept the updated policy.
        </p>
      </>
    ),
  },
  {
    id: "contact",
    title: "12. Contact Us",
    body: (
      <>
        <p>If you have questions or requests about this Privacy Policy:</p>
        <ul>
          <li>
            Email:{" "}
            <a className="text-primary underline" href="mailto:fans@breezee.uk">
              fans@breezee.uk
            </a>
          </li>
          <li>Subject line suggestion: "Privacy — &lt;your topic&gt;"</li>
        </ul>
        <p>We aim to respond to every privacy enquiry within a reasonable timeframe.</p>
      </>
    ),
  },
];

export default function Privacy() {
  return (
    <main data-testid="privacy-page" className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="container-soft pt-12 md:pt-20 pb-10">
        <Link
          to="/"
          data-testid="privacy-back-link"
          className="inline-flex items-center gap-2 text-sm text-secondary-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Breezee360
        </Link>
        <p className="label-eyebrow mt-8">Legal</p>
        <h1 className="mt-4 font-serif text-5xl md:text-6xl leading-[1.05] tracking-tight">
          Privacy Policy
        </h1>
        <p className="mt-5 text-lg text-secondary-foreground max-w-2xl">
          Breezee360 collects as little as possible. Your productivity data
          stays on your device. We do not sell data, run ads, or track you for
          marketing.
        </p>

        <div className="mt-8 inline-flex items-center gap-2 rounded-full px-4 py-1.5 bg-accent text-accent-foreground border border-primary/20 text-xs font-medium">
          <Shield className="w-3.5 h-3.5" />
          Effective date: {EFFECTIVE_DATE}
        </div>
      </section>

      <section className="container-soft pb-24 md:pb-32 grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* TOC */}
        <aside className="lg:col-span-3 lg:sticky lg:top-24 self-start">
          <p className="label-eyebrow mb-4">Contents</p>
          <ol className="space-y-2 text-sm">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  data-testid={`privacy-toc-${s.id}`}
                  className="text-secondary-foreground hover:text-primary transition-colors"
                >
                  {s.title}
                </a>
              </li>
            ))}
          </ol>
        </aside>

        <article className="lg:col-span-9 max-w-none">
          {sections.map((s) => (
            <div key={s.id} id={s.id} className="scroll-mt-28 mb-12">
              <h2 className="font-serif text-2xl md:text-3xl tracking-tight mb-5">
                {s.title}
              </h2>
              <div
                data-testid={`privacy-section-${s.id}`}
                className="space-y-4 text-base text-secondary-foreground leading-relaxed [&_strong]:text-foreground [&_a]:text-primary [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1.5 [&_li]:text-secondary-foreground"
              >
                {s.body}
              </div>
            </div>
          ))}

          <p className="mt-16 italic font-serif text-foreground/80">
            Productivity through well-being, not pressure — including how we
            handle your data.
          </p>
        </article>
      </section>

      <Footer />
    </main>
  );
}
