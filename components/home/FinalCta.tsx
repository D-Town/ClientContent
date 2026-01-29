import Link from "next/link";

const FinalCta = () => {
  return (
    <section className="kc-card dark-mode-transition">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="h3">Bereit? Dann schau dir den Shop an.</h2>
          <p className="text-muted mt-2">
            Platzhalter: Starte mit einem Produkt, das du diese Woche wirklich umsetzen kannst.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Link className="btn-primary" href="/shop">
            Zum Shop
          </Link>
          <Link className="btn-ghost" href="/mrr-academy">
            MRR Academy
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FinalCta