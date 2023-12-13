import Image from "next/image";
import feature2 from '../../public/feature-2.png';
import ContactButton from "@/components/ContactButton";

export default function InformationSection() {
  return (
    <div className="px-2 md:px-10 lg:px-20 xl:px-40 2xl:px-80 grid grid-cols-1 md:grid-cols-2">
      <Image alt='feature-2' src={feature2} className="h-full self-center hidden md:block m-auto mt-6 p-8" />
      <div className="self-center">
        <h2 className="text-white text-lg font-semibold uppercase">Realistically</h2>
        <h2 className="text-4xl font-bold text-white mb-4">
          Blending Reality with 3D
        </h2>
        <p className="mb-4">
          Bridging Reality with 3D Precision: We meticulously align real-world data with your project&apos;s 3D model, offering a true-to-life visual experience of your project, even before construction commences.
        </p>
        <ul className="list-none space-y-2">
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>Immerse yourself in the future of real estate visualization.</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>See the possibilities before they become reality.</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>Unlock the potential of real estate with Senfu&apos;s innovative technology.</span>
          </li>
        </ul>
        <div className="space-x-4 mt-6">
          <a href="#portfolio" className="bg-c2 text-white px-6 py-3 rounded font-bold">See yourself</a>
          <ContactButton />
        </div>
      </div>
    </div>
  );
}
