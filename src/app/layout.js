import { Rubik, Lato, Arvo, Rajdhani } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from "@vercel/analytics/react"
import Script from "next/script";
import * as gtag from "@/utilities/gtag";

const rubik = Rubik({
  variable: "--font-primary",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"]
});

const arvo = Arvo({
  variable: "--font-primary",
  subsets: ["latin"],
  weight: ["400", "700"]
});

const rajdhani = Rajdhani({
  variable: "--font-secondary",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"]
})

const lato = Lato({
  variable: "--font-secondary",
  subsets: ["latin"],
  weight: ["400", "700", "900"]
});

export const metadata = {
  title: "Jubayer Codes - MERN Stack Developer",
  description: "Jubayer Codes - Crafting high-performance web applications with MERN stack. Passionate about clean code, scalable solutions, and seamless user experiences.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${rubik.variable} ${lato.variable} antialiased`}
      >
        {/* Google Analytics Script */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
