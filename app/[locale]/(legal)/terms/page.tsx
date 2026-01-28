import { useTranslations } from 'next-intl';

const Terms = () => {
  const t = useTranslations('Legal.terms');

  return (
    <main className="kc-wrap" role="main" aria-labelledby="page-title">

      <div className="container-custom py-12 space-y-12">
        <section className="legal-section">
          <h1 id="page-title">{t('title')}</h1>
          <p><strong>{t('subtitle')}</strong></p>
          <p className="legal-address">{t('provider.addressHtml')}</p>
        </section>
        {t('sections.')}
        <section className="legal-section" aria-labelledby="scope">
          <h2 id="scope">{t('sections.scope.title')}</h2>
          <p>{t('sections.scope.p1')}</p>
          <p>{t('sections.scope.p2')}</p>
          <p>{t('sections.scope.p3')}</p>
        </section>

        <section className="legal-section" aria-labelledby="services">
          <h2 id="services">{t('sections.services.title')}</h2>
          <p>{t('sections.services.p1')}</p>
          <p>{t('sections.services.p2')}</p>
          <p>{t('sections.services.p3')}</p>
        </section>

        <section className="legal-section" aria-labelledby="contract">
          <h2 id="contract">{t('sections.contract.title')}</h2>
          <p>{t('sections.contract.p1')}</p>
          <p>{t('sections.contract.p2')}</p>
        </section>

        <section className="legal-section" aria-labelledby="pricing">
          <h2 id="pricing">{t('sections.pricing.title')}</h2>
          <p>{t('sections.pricing.p1')}</p>
          <p>{t('sections.pricing.p2')}</p>
          <p>{t('sections.pricing.p3')}</p>
        </section>

        <section className="legal-section" aria-labelledby="delivery">
          <h2 id="delivery">{t('sections.delivery.title')}</h2>
          <p>{t('sections.delivery.p1')}</p>
          <p>{t('sections.delivery.p2')}</p>
          <p>{t('sections.delivery.p3')}</p>
        </section>

        <section className="legal-section" aria-labelledby="rights">
          <h2 id="rights">{t('sections.rights.title')}</h2>
          <p>{t('sections.rights.p1')}</p>
          <p>{t('sections.rights.p2')}</p>
          <ul>
            <li>Weitergabe, Verkauf, Vermietung, Verleih oder öffentliche Zugänglichmachung der Inhalte,</li>
            <li>Teilen von Login-Daten (Account-Sharing),</li>
            <li>systematisches Kopieren/Extrahieren, Spiegeln oder Re-Upload von Inhalten,</li>
            <li>Nutzung der Inhalte für Schulungen Dritter (z. B. interne/externe Trainings) ohne gesonderte Lizenz.</li>
          </ul>
          <p>{t('sections.rights.p3')}</p>
          <h3 id="rights-mrr">{t('sections.rights.mrr.title')}</h3>
          <p>{t('sections.rights.mrr.p1')}</p>
          <p>{t('sections.rights.mrr.p2')}</p>
        </section>

        <section className="legal-section" aria-labelledby="updates">
          <h2 id="updates">{t('sections.updates.title')}</h2>
          <p>{t('sections.updates.p1')}</p>
          <p>{t('sections.updates.p2')}</p>
        </section>

        <section className="legal-section" aria-labelledby="withdrawal">
          <h2 id="withdrawal">{t('sections.withdrawal.title')}</h2>
          <p>{t('sections.withdrawal.p1')}</p>
          <p>{t('sections.withdrawal.p2')}</p>
          <ul>{t('sections.withdrawal.')}
            <li>ausdrücklich zugestimmt hast, dass wir vor Ablauf der Widerrufsfrist mit der Ausführung beginnen, und</li>
            <li>deine Kenntnis bestätigt hast, dass du durch deine Zustimmung mit Beginn der Ausführung dein Widerrufsrecht
              verlierst.</li>
          </ul>
          <p>{t('sections.withdrawal.p3')}</p>
        </section>

        <section className="legal-section" aria-labelledby="customer-duties">
          <h2 id="customer-duties">{t('sections.customerDuties.title')}</h2>
          <p>{t('sections.customerDuties.p1')}</p>
          <p>{t('sections.customerDuties.p2')}</p>
        </section>

        <section className="legal-section" aria-labelledby="warranty">
          <h2 id="warranty">{t('sections.warranty.title')}</h2>
          <p>{t('sections.warranty.p1')}</p>
          <p>{t('sections.warranty.p2')}</p>
        </section>

        <section className="legal-section" aria-labelledby="liability">
          <h2 id="liability">{t('sections.liability.title')}</h2>
          <p>{t('sections.liability.p1')}</p>
          <p>{t('sections.liability.p2')}</p>
          <p>{t('sections.liability.p3')}</p>
        </section>

        <section className="legal-section" aria-labelledby="duration">
          <h2 id="duration">{t('sections.duration.title')}</h2>
          <p>{t('sections.duration.p1')}</p>
          <p>{t('sections.duration.p2')}</p>
          <p>{t('sections.duration.p3')}</p>
        </section>

        <section className="legal-section" aria-labelledby="privacy">
          <h2 id="privacy">{t('sections.privacy.title')}</h2>
          <p>{t('sections.privacy.p1')}</p>
        </section>

        <section className="legal-section" aria-labelledby="final">
          <h2 id="final">{t('sections.final.title')}</h2>
          <p>{t('sections.final.p1')}</p>
          <p>{t('sections.final.p2')}</p>
          <p>{t('sections.final.p3')}</p>
        </section>

        <section className="legal-section" aria-labelledby="dispute">
          <h2 id="dispute">{t('sections.dispute.title')}15. Online-Streitbeilegung / Verbraucherschlichtung</h2>
          <p>{t('sections.dispute.p1')}</p>
          <p>{t('sections.dispute.p2')}</p>
        </section>
      </div>

    </main>
  );
}

export default Terms
