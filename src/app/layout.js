import { SpeedInsights } from "@vercel/speed-insights/next";
import Providers from './Providers';
import './globals.css'
import CustomHead from "./head";

export const metadata = {
  title: 'Senfu',
  description: 'Experience Real Estate Like Never Before',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <CustomHead />
      <body className='text-left text-lg text-gray-200 bg-gray-800' >
        <Providers>{children}</Providers>
        <SpeedInsights />
      </body>
    </html>
  )
}
