'use client'

import Image from "next/image";
import logo from '../../public/logo.svg';
import ContactButton from "@/components/ContactButton";
import { useLayoutEffect, useRef } from "react";

export default function Header() {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const handleScroll = () => ref.current.dataset.scrolled = Boolean(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
}, []);

  return (
    <header ref={ref} className="top-0 fixed pointer-events-none w-full duration-500 text-white px-2 z-10">
      <nav className="py-2 items-center font-semibold flex justify-between px-2 md:px-10 lg:px-20 xl:px-40 2xl:px-80">
        <ContactButton className="text-sm pointer-events-auto underline underline-offset-4" />
        <a href='/' className="text-xl font-bold pointer-events-auto"><Image alt='logo' src={logo} width={40} height={40} className="inline"/>Senfu</a>
        <a href="/#portfolio" className="text-sm pointer-events-auto underline underline-offset-4">Portfolio</a>
      </nav>
    </header>
  );
}
