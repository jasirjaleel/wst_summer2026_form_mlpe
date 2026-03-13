import type { Metadata } from "next";
import { DM_Sans, DM_Mono, Instrument_Serif, Anek_Malayalam } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const dmMono = DM_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const anekMalayalam = Anek_Malayalam({
  variable: "--font-malayalam",
  subsets: ["malayalam"],
  weight: ["400", "500", "600"],
});

import FloatingWhatsApp from "./components/FloatingWhatsApp";

export const metadata: Metadata = {
  title: "Wisdom Students — Summer Camps 2026",
  description:
    "Register for Wisdom Students Malappuram East District Committee summer camp programs — Butterflies, Bliss, and Jalakam. A summer that shapes who you become.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${dmSans.variable} ${dmMono.variable} ${instrumentSerif.variable} ${anekMalayalam.variable}`}
        suppressHydrationWarning
      >
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
