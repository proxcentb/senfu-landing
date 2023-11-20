'use client'

import { PopupContext } from "./Contact";
import { useContext } from 'react';

export default function ContactButton({ ...props }) {
  const { setPopup } = useContext(PopupContext);
  return <button className="bg-white text-c2 px-6 py-2 rounded font-bold" onClick={() => setPopup('contact')} {...props}>Contact</button>;
}
