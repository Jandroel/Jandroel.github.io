import type { Metadata, Viewport } from "next";
import {
  DotGothic16,
  Geist,
  Geist_Mono,
  Noto_Serif_JP,
  Pixelify_Sans,
} from "next/font/google";
import type { ReactNode } from "react";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { NoiseTexture } from "@/components/effects/NoiseTexture";
import { siteConfig } from "@/data/site";

import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

const pixelify = Pixelify_Sans({
  subsets: ["latin"],
  variable: "--font-pixelify",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const notoSerifJp = Noto_Serif_JP({
  subsets: ["latin"],
  variable: "--font-jp-serif",
  display: "swap",
  weight: ["400", "600", "700", "900"],
});

const dotGothic = DotGothic16({
  subsets: ["latin"],
  variable: "--font-jp-pixel",
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  title: {
    default: "Jandroel | Software Engineering Portfolio",
    template: "%s | Jandroel",
  },
  description:
    "Software Engineering student building full-stack web experiences one project at a time.",
  keywords: [
    "Jandroel",
    "Software Engineering",
    "Frontend Developer",
    "Backend Developer",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Jandroel" }],
  creator: "Jandroel",
  openGraph: {
    title: "Jandroel | Software Engineering Portfolio",
    description:
      "Software Engineering student building full-stack web experiences one project at a time.",
    siteName: "Jandroel Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jandroel | Software Engineering Portfolio",
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#05060A",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geist.variable} ${geistMono.variable} ${pixelify.variable} ${notoSerifJp.variable} ${dotGothic.variable} font-sans antialiased`}
      >
        <NoiseTexture />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
