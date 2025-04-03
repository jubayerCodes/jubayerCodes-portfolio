import { Rubik, Lato, Arvo } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from '@vercel/speed-insights/next';

const rubik = Rubik({
  variable: "--font-primary",
  subsets: ["latin"],
  weight: ["400", "700"]
});

const arvo = Arvo({
  variable: "--font-primary",
  subsets: ["latin"],
  weight: ["400", "700"]
});

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
        <meta name="msvalidate.01" content="C08E4976F7C6AFB7564D7A77C7549871" />
      </head>
      <body
        className={`${arvo.variable} ${lato.variable} antialiased`}
      >
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
