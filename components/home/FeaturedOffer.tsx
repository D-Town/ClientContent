import Link from "next/link";

const FeaturedOffer = () => {
  return (
    <div className="kc-card dark-mode-transition">
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <h3 className="h3">MRR Academy – Platzhalter Nutzenversprechen</h3>
          <p className="text-muted mt-2 max-w-prose">
            Platzhalter: Lernpfad + Ressourcen, um das Thema strukturiert zu verstehen und sauber umzusetzen.
            Kein Hype, sondern System.
          </p>

          <ul className="mt-4 grid gap-2 text-body-sm text-muted">
            <li>✅ Zugriff auf Module & Materialien</li>
            <li>✅ Klare Lizenz-/Nutzungsinfo (wo relevant)</li>
            <li>✅ Für Einsteiger geeignet</li>
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <Link className="btn-primary" href="/mrr-academy">
            Zur MRR Academy
          </Link>
          <Link className="btn-ghost" href="/shop">
            Erst im Shop stöbern
          </Link>
          <p className="text-body-sm text-muted">
            Tipp: Stell hier später 1–2 konkrete Ergebnisse rein (z. B. „fertige Funnel-Sequenz“, „Content-Plan“, …).
          </p>
        </div>
      </div>
    </div>
  );
}

export default FeaturedOffer;