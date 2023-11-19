import Image from "next/image";

export default function InformationSection() {
  return (
    <div className="flex justify-center items-center p-8" style={{ height: 800 }}>
      <div className="flex-shrink-0 mx-32" style={{ height: 600, width: 600 }}>
        <Image alt='info' className="w-full h-full" />
      </div>
      <div className="mx-32">
        <h2 className="text-white text-lg font-semibold uppercase tracking-wide">Realistically</h2>
        <h2 className="text-5xl font-bold mb-4 text-white">
          Blending Reality with 3D
        </h2>
        <p className="mb-6">
          Bridging Reality with 3D Precision: We meticulously align real-world GPS data with your project&apos;s 3D model, ensuring every virtual rendering accurately reflects its actual location and dimensions. This precise integration offers a true-to-life visual experience of your project, even before construction commences.
        </p>
        <ul className="list-none space-y-4">
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
        <div className="space-x-4 mt-10">
          <a href="#portfolio" className="bg-c2 text-white px-6 py-3 rounded font-bold">See yourself</a>
          <button className="bg-white text-c2 px-6 py-2 rounded font-bold">Contact</button>
        </div>
      </div>
    </div>
  );
}
