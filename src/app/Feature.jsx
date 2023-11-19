import Image from "next/image";

export default function FeatureSection() {
  return (
    <div className="flex items-center p-8 justify-center" style={{ height: 800 }} id="features">
      <div className="mx-32">
        <h2 className="text-white text-lg font-semibold uppercase tracking-wide">Captivating</h2>
        <h1 className="text-5xl font-bold text-white leading-tight mb-4">
          Pre-Construction Visualization
        </h1>
        Visualize your architectural dreams before the first brick is laid. Our technology brings your future projects to life, aiding in design, planning, and marketing.
        Our integration of real-world data with 3D models ensures highly accurate and realistic representations of your planned constructions
        <div className="space-x-4 mt-10">
          <a href="#portfolio" className="bg-c2 text-white px-6 py-3 rounded font-bold">See yourself</a>
          <button className="bg-white text-c2 px-6 py-2 rounded font-bold">Contact</button>
        </div>
      </div>
      <div className="flex-shrink-0 mx-32" style={{ height: 600, width: 600 }}>
        <Image alt="feature" className="w-full h-full" />
      </div>
    </div>
  );
}
