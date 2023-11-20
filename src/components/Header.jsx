import Image from "next/image";
import logo from '../../public/logo.svg';
import ContactButton from "@/components/ContactButton";

export default function Header() {
  return (
    <header className="top-0 flex items-center justify-center py-2 absolute pointer-events-none w-full bg-transparent text-white px-8 sm:justify-between">
      <span className="text-xl font-bold pointer-events-auto"><Image alt='logo' src={logo} width={50} height={50} className="inline"/>Senfu</span>
      <nav className="hidden items-center font-semibold sm:flex">
        <ContactButton className="mx-2 text-sm pointer-events-auto" />
        <a href="/#portfolio" className="mx-2 text-sm pointer-events-auto">Portfolio</a>
      </nav>
    </header>
  );
}
