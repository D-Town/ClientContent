const HowItWorks = ()=> {
  const steps = [
    { n: "01", title: "Produkt auswählen", text: "Du findest im Shop das passende Paket oder Training." },
    { n: "02", title: "Sofortzugang erhalten", text: "Nach Zahlung bekommst du direkten Zugriff oder Download." },
    { n: "03", title: "Umsetzen", text: "Mit Anleitung + Templates Schritt für Schritt in deinem Tempo." },
  ];

  return (
    <div className="grid gap-4 lg:grid-cols-3">
      {steps.map((s) => (
        <div key={s.n} className="kc-card dark-mode-transition">
          <div className="text-body-sm text-muted">{s.n}</div>
          <div className="h4 mt-1">{s.title}</div>
          <p className="text-muted mt-2">{s.text}</p>
        </div>
      ))}
    </div>
  );
}

export default HowItWorks;