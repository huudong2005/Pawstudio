import { Header } from './Header';
import { HeroSection } from './HeroSection';
import { GamesCarousel } from './GamesCarousel';
import { DevLogSection } from './DevLogSection';
import { AboutSection } from './AboutSection';
import { NewsletterSection } from './NewsletterSection';
import { Footer } from './Footer';
import { OurMascotSection } from './OurMascotSection';
import { OfficeMerchandiseSection } from './OfficeMerchandiseSection';
import { GiftSetsSection } from './GiftSetsSection';
import { MediaPublicationsSection } from './MediaPublicationsSection';

export function HomePage() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <GamesCarousel />
        <OurMascotSection />
        <OfficeMerchandiseSection />
        <GiftSetsSection />
        <MediaPublicationsSection />
        <DevLogSection />
        <AboutSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
}
