import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import { NoiseTexture } from "@/components/effects/NoiseTexture";
import { siteConfig } from "@/data/site";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Jandroel | Portafolio de Ingeniería de Software",
    template: "%s | Jandroel",
  },
  description:
    "Estudiante de Ingeniería de Software construyendo proyectos web con frontend, backend y datos.",
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
    title: "Jandroel | Portafolio de Ingeniería de Software",
    description:
      "Estudiante de Ingeniería de Software construyendo proyectos web con frontend, backend y datos.",
    siteName: "Jandroel Portfolio",
    type: "website",
    locale: "es_PE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jandroel | Portafolio de Ingeniería de Software",
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
    <html lang="es" className="scroll-smooth">
      <body className="font-sans antialiased">
        <NoiseTexture />
        {children}
      </body>
    </html>
  );
}
