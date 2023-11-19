import Image from "next/image";
import heroImg from '../../public/asd.svg';

export default function HeroSection() {
  return (
    <div className="min-h-screen flex flex-col justify-center bg-no-repeat bg-cover" style={{ backgroundImage: `url('./hero1.png')` }}>
      <div className="w-4/12 mx-72">
        <h1 className="text-5xl font-bold mb-4 text-white">Experience Real Estate Like Never Before</h1>
        Experience the future of project visualization with our state-of-the-art blend of drone photography and 3D modeling, offering immersive and detailed previews of your projects.
        <div className="space-x-4 mt-10">
          <a href="#features" className="bg-c2 text-white px-6 py-3 rounded font-bold">Learn More</a>
          <button className="bg-white text-c2 px-6 py-2 rounded font-bold">Contact</button>
        </div>
      </div>
    </div>
  );
}
