'use client'

import Header from '@/components/Header';
import ContactPopup, { PopupContext } from '@/components/Contact';
import { useState } from 'react';

export default function Providers({ children }) {
  const [popup, setPopup] = useState(false);
  return (
    <PopupContext.Provider value={{ popup, setPopup }}>
      <ContactPopup />
      <Header />
      {children}
    </PopupContext.Provider>
  )
}
