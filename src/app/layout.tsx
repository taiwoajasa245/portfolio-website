import type { Metadata } from "next";
import { JetBrains_Mono } from '@next/font/google';

import "./globals.css";


// JetBrains Mono font
const jetBrainsMono = JetBrains_Mono({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: "--font-jetbrains-mono",
});



// Metadata for SEO and browser elements
export const metadata: Metadata = {
  title: "Taiwo's Portfolio | Backend Developer",
  description: 
    "I'm a backend developer with expertise in Node.js, creating scalable web solutions. Browse my portfolio and connect for new opportunities.",
  icons: {
    icon: "/favicon.ico",
  },
};



// Root layout component for the entire app
export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body
        className={`${jetBrainsMono.variable} font-mono bg-[#1E1E1E] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
