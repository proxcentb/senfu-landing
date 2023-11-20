import Feature1 from '@/components/Feature1';
import Hero from '@/components/Hero';
import Feature2 from '@/components/Feature2';
import Portfolio from '@/components/Portfolio';
import FAQ from '@/components/FAQ';

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center space-y-16 md:space-y-20">
      <Hero />
      <Portfolio />
      <Feature1 />
      <Feature2 />
      <FAQ />
    </div>
  );
}
