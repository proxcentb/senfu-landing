import Image from "next/image";
import feature1 from '../../public/feature-1.png';
import ContactButton from "@/components/ContactButton";

export default function FeatureSection() {
  return (
    <div className="px-2 md:px-10 lg:px-20 xl:px-40 2xl:px-80 grid grid-cols-1 md:grid-cols-2" id="features">
      <div className="self-center">
        <h2 className="text-white text-lg font-semibold uppercase">Captivating</h2>
        <h1 className="text-4xl font-bold text-white mb-4">Pre-Construction Visualization</h1>
        Visualize your architectural dreams before the first brick is laid. Our technology brings your future projects to life, aiding in design, planning, and marketing.
        Our integration of real-world data with 3D models ensures highly accurate and realistic representations of your planned constructions
        <div className="space-x-4 mt-8">
          <a href="#portfolio" className="bg-c2 text-white px-6 py-3 rounded font-bold">See yourself</a>
          <ContactButton />
        </div>
      </div>
      <Image alt="feature-1" src={feature1} className="h-full self-center hidden md:block m-auto mt-6 p-8" />
    </div>
  );
}
