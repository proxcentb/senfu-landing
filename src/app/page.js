import FeatureSection from './Feature.jsx';
import HeroSection from './Hero.jsx';
import Header from './Header.jsx';
import InformationSection from './Info.jsx';
import ServicesSection from './Service.jsx';
import FaqSection from './FAQ.jsx';

export default function Home() {
  return (
    <div className="text-lg text-gray-200 bg-gray-800">
      <Header />
      <HeroSection />
      <FeatureSection />
      <InformationSection />
      <ServicesSection />
      <FaqSection />
    </div>
  );
}
