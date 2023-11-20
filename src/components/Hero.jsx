import ContactButton from "@/components/ContactButton";

export default function HeroSection() {
  return (
    <div className="px-2 md:px-10 lg:px-20 xl:px-40 2xl:px-80 w-full justify-center flex flex-col bg-no-repeat bg-cover bg-left h-screen sm:h-80vh" style={{ minHeight: 400, backgroundImage: `url('./hero.png')` }}>
      <div className="w-full md:w-9/12 xl:w-7/12">
        <h1 className="my-5 text-4xl md:text-5xl font-bold text-white">Experience Real Estate Like Never Before</h1>
        Experience the future of project visualization with our state-of-the-art blend of drone photography and 3D modeling, offering immersive and detailed previews of your projects.
        <div className="space-x-5 mt-6">
          <a href="#features" className="bg-c2 text-white px-6 py-3 rounded font-bold">Learn More</a>
          <ContactButton />
        </div>
      </div>
    </div>
  );
}
