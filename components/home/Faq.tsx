const Faq=()=> {
  const faqs = [
    {
      q: "Wie bekomme ich Zugriff nach dem Kauf?",
      a: "In der Regel sofort nach Zahlung – als Download oder über einen Online-Zugangsbereich (Details stehen beim Produkt).",
    },
    {
      q: "Für wen ist das geeignet?",
      a: "Für Einsteiger und Fortgeschrittene, die lieber klare Schritte wollen als Motivationstexte.",
    },
    {
      q: "Gibt es Updates?",
      a: "Wenn Updates enthalten sind, steht das in der Produktbeschreibung. Ansonsten gilt: Inhalt wie beschrieben.",
    },
    {
      q: "Wie läuft der Widerruf bei digitalen Inhalten?",
      a: "Du findest die Widerrufsbelehrung auf der Website. Bei digitalen Inhalten kann das Widerrufsrecht unter Bedingungen vorzeitig erlöschen.",
    },
    {
      q: "Gibt es Support/Community?",
      a: "Platzhalter – nur einbauen, wenn ihr das wirklich anbietet.",
    },
  ];

  return (
    <div className="grid gap-3">
      {faqs.map((f) => (
        <details key={f.q} className="kc-card dark-mode-transition">
          <summary className="flex cursor-pointer items-center justify-between gap-4">
            <span className="font-semibold" style={{ color: "var(--color-text-heading)" }}>
              {f.q}
            </span>
            <span className="text-muted">+</span>
          </summary>
          <p className="text-muted mt-3">{f.a}</p>
        </details>
      ))}
    </div>
  );
}

export default Faq;