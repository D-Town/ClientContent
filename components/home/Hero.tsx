import Link from "next/link";
import MiniCard from "./MiniCard";

const Hero =()=> {
  return (
    <section className="kc-card dark-mode-transition mb-10 sm:mb-14">
      <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-body-sm text-muted mb-3">
            Digitale Produkte &amp; Tutorials für Online-Business, Marketing &amp; Automatisierung
          </p>

          <h1>
            <span style={{ color: "var(--color-text-heading)" }}>
              Platzhalter Headline:
            </span>{" "}
            Bau dir ein digitales Setup, das wirklich funktioniert.
          </h1>

          <p className="text-muted mt-4 max-w-prose">
            Platzhalter Subline: Klarer Fahrplan, Templates und sofort umsetzbare Inhalte – ohne Bullshit-Bingo,
            ohne Funnel-Gefrickel.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link className="btn-primary" href="/shop">
              Zum Shop
            </Link>
            <Link className="btn-ghost" href="/mrr-academy">
              MRR Academy ansehen
            </Link>
          </div>

          <ul className="mt-6 grid gap-2 text-body-sm text-muted sm:grid-cols-3">
            <li>✅ Sofortzugang</li>
            <li>✅ Schritt-für-Schritt</li>
            <li>✅ Templates inklusive</li>
          </ul>
        </div>

        {/* Visual / Mock */}
        <div className="relative">
          <div
            className="kc-card"
            style={{
              background:
                "linear-gradient(135deg, color-mix(in srgb, var(--color-primary) 10%, transparent), color-mix(in srgb, var(--color-accent) 10%, transparent))",
            }}
          >
            <div className="flex items-center justify-between">
              <div className="logo-placeholder">KC</div>
              <span className="text-body-sm text-muted">Preview</span>
            </div>

            <div className="mt-6 grid gap-3">
              <MiniCard title="Guides & Checklisten" text="Kompakt, klar, umsetzbar." />
              <MiniCard title="Templates" text="Sparen dir Zeit – sofort startklar." />
              <MiniCard title="Automatisierung" text="Wenn’s später skalieren soll." />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Hero;