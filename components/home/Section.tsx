const Section =({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) =>{
  return (
    <section className="mb-10 sm:mb-14">
      <header className="mb-6">
        <h2 className="h2">{title}</h2>
        {subtitle ? <p className="text-muted mt-2 max-w-prose">{subtitle}</p> : null}
      </header>
      {children}
    </section>
  );
}

export default Section;