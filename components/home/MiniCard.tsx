const MiniCard =({ title, text }: { title: string; text: string }) =>{
  return (
    <div
      className="rounded-xl border p-4"
      style={{
        borderColor: "color-mix(in srgb, var(--color-border) 80%, transparent)",
        background: "color-mix(in srgb, var(--color-surface) 92%, transparent)",
      }}
    >
      <div className="font-semibold" style={{ color: "var(--color-text-heading)" }}>
        {title}
      </div>
      <div className="text-body-sm text-muted mt-1">{text}</div>
    </div>
  );
}

export default MiniCard;