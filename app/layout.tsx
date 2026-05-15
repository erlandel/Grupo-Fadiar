import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat, Dancing_Script } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header/header";

// Fuentes base de Next.js
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 1. Montserrat para títulos (BIENVENIDO, EON, etc.)
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
});

// 2. Dancing Script para el estilo manuscrito (Sientete familiar)
const signature = Dancing_Script({
  variable: "--font-signature",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Grupo Fadiar",
  description: "Soluciones de calidad e innovación",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} ${signature.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        <main className="grow">
          {children}
        </main>
      </body>
    </html>
  );
}