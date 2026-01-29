const Benefits =()=> {
  const items = [
    { title: "Klarer Fahrplan", text: "Kein „mach mal Content“. Du bekommst Schritte, Reihenfolge und Beispiele." },
    { title: "Schnell umsetzbar", text: "Kurz gehalten, damit du ins Tun kommst – statt 6 Stunden Theorie." },
    { title: "Templates & Vorlagen", text: "Weniger Copy/Paste-Schmerz, mehr Ergebnis." },
    { title: "Tool-Orientierung", text: "Was du wirklich brauchst – und was du dir sparen kannst." },
    { title: "Saubere Struktur", text: "Inhalte so aufgebaut, dass du später skalieren kannst." },
    { title: "Digital, sofort verfügbar", text: "Kaufen → Zugriff → loslegen." },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((x) => (
        <div key={x.title} className="kc-card dark-mode-transition">
          <div className="h4">{x.title}</div>
          <p className="text-muted mt-2">{x.text}</p>
        </div>
      ))}
    </div>
  );
}

export default Benefits