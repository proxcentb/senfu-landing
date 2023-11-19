import Image from "next/image";
import heroImg from '../../public/asd.svg';

export default function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-2 absolute w-full bg-transparent text-white px-8">
      <span className="text-xl font-bold mb text-white"><Image src={heroImg} width={50} height={50} className="inline"/>Senfu</span>
      <nav className="flex items-center font-semibold">
        <a href="#" className="mx-2 text-sm">Contact</a>
        <a href="#" className="mx-2 text-sm">Portfolio</a>
      </nav>
    </header>
  );
}
