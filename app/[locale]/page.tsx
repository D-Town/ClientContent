import { useTranslations } from 'next-intl';

import FinalCta from '../../components/home/FinalCta';
import Benefits from '../../components/home/Benefits';
import Faq from '../../components/home/Faq';
import FeaturedOffer from '../../components/home/FeaturedOffer';
import HowItWorks from '../../components/home/HowItWorks';
import Section from '../../components/home/Section';
import Hero from '../../components/home/Hero';

export default function Home() {
  const t = useTranslations('Home');
  return (
    <main id="container-custom py-12 space-y-12" className="container-custom py-10 sm:py-14">
      <Hero />

      <Section
        title="Warum KC Digital Experts?"
        subtitle="Kurze, praktische Inhalte statt Theorie-Marathon. Du kaufst, bekommst Zugriff und kannst direkt umsetzen."
      >
        <Benefits />
      </Section>

      <Section
        title="So funktioniert’s"
        subtitle="In drei klaren Schritten von „ich will starten“ zu „ich hab’s umgesetzt“."
      >
        <HowItWorks />
      </Section>

      <Section
        title="MRR Academy"
        subtitle="Unser aktuell fokussiertes Angebot, bis der ClientContent live ist."
      >
        <FeaturedOffer />
      </Section>

      <Section
        title="FAQ"
        subtitle="Die häufigsten Fragen – kurz beantwortet."
      >
        <Faq />
      </Section>

      <FinalCta />
    </main>
  );
}

