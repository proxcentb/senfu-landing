import { SpeedInsights } from "@vercel/speed-insights/next";
import Providers from './Providers';
import './globals.css'
import Script from "next/script";
import Head from "next/head";

export const metadata = {
  title: 'Senfu',
  description: 'Experience Real Estate Like Never Before',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'G-14P6H3SCPH');
            `,
          }}
        />
      </Head>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-14P6H3SCPH`}
      />
      <body className='text-left text-lg text-gray-200 bg-gray-800' >
        <Providers>{children}</Providers>
        <SpeedInsights />
      </body>
    </html>
  )
}
