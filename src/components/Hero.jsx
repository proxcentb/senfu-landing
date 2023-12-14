'use client'

import ContactButton from "@/components/ContactButton";
import { useRef } from "react";
import ReactPannellum from "react-pannellum";

export default function HeroSection() {
  const ref = useRef();

  return (
    <div className="px-2 md:px-10 lg:px-20 xl:px-40 2xl:px-80 w-full justify-center flex flex-col h-80vh relative">
      <div className="absolute w-full h-full top-0 left-0 bg-no-repeat bg-cover bg-left -z-10" style={{ backgroundImage: `url('./hero.webp')` }} />
      <ReactPannellum
        ref={ref}
        id="1"
        sceneId="1"
        config={{
          autoRotate: -1,
          autoLoad: true,
          hfov: 150,
          pitch: -10,
          yaw: -50,
        }}
        imageSource='/pano.jpg'
        onPanoramaLoaded={() => document.querySelector('.pnlm-container').classList.remove('opacity-0')}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: '-10',
        }}
        className="opacity-0 brightness-50"
      />
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
