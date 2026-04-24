import { Header } from './Header';
import { HeroSection } from './HeroSection';
import { GamesCarousel } from './GamesCarousel';
import { DevLogSection } from './DevLogSection';
import { AboutSection } from './AboutSection';
import { NewsletterSection } from './NewsletterSection';
import { Footer } from './Footer';
import { OfficeMerchandiseSection } from './OfficeMerchandiseSection';
import { GiftSetsSection } from './GiftSetsSection';

export function HomePage() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <GamesCarousel />
        <OfficeMerchandiseSection />
        <GiftSetsSection />
        <DevLogSection />
        <AboutSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
}
