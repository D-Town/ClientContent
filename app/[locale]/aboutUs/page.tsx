import { useTranslations } from "next-intl";

const AboutUs = () => {
  const t = useTranslations('AboutUs');
  const whyBullets = t.raw('why.bullets') as string[];
  const frustrationBullets = t.raw('frustration.bullets') as string[];
  return (
    <>
      <div className="container-custom py-12 space-y-12">
        <h1 className="h1">{t("title")}</h1>
        <section className="card space-y-4">
          <h2 className="h2">{t("whoIs.p1")}</h2>
          <p>{t("whoIs.p1")}</p>
          <p>{t("whoIs.p2")}</p>
        </section>
        <pre>Hier soll noch ein bild rein</pre>



        {/* <p> {t.rich('history.p2', {
            strong: (chunks) => <strong>{chunks}</strong>,
            u: (chunks) => <u>{chunks}</u>,
          })}</p>
          <p>{t.rich('history.p3', {
            strong: (chunks) => <strong>{chunks}</strong>
          })}</p> */}
        <section className="card space-y-4">
          <h2 className="h2">{t("history.title")}</h2>
          <p> {t.rich('history.p1', {
            strong: (chunks) => <strong>{chunks}</strong>,
            i: (chunks) => <i>{chunks}</i>,
          })}</p>
          <p>{t("history.p2")}</p>
          <p>{t.rich('history.p3', {
            strong: (chunks) => <strong>{chunks}</strong>
          })}</p>
          <p>{t("history.p4")}</p>
          <p>{t("history.p5")}</p>
        </section>

        <section className="card space-y-4">
          <h3 className="h3">{t("frustration.title")}</h3>
          <p>{t("frustration.p1")}</p>
          <ul>
            {frustrationBullets.map((_, index) => (
              <li key={index}>
                {t.rich(`why.bullets.${index}`, {
                  strong: (chunks) => <strong>{chunks}</strong>,
                })}
              </li>
            ))}
          </ul>
        </section>

        <section className="card space-y-4">
          <h3 className="h3">{t("why.title")}</h3>
          <ul>
            {whyBullets.map((_, index) => (
              <li key={index}>
                {t.rich(`why.bullets.${index}`, {
                  strong: (chunks) => <strong>{chunks}</strong>,
                })}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}

export default AboutUs;