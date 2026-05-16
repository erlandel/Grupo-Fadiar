import type { Metadata } from "next";
// 1. Añadimos Comfortaa a la importación
import { Geist, Geist_Mono, Montserrat, Dancing_Script, Varela_Round, Satisfy, Open_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header/header";
import Footer from "@/components/footer/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const vital = Satisfy({
  variable: "--font-vital",
  subsets: ["latin"],
  weight: ["400"], // Satisfy solo tiene un peso, pero es gordita.
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
});

const openSans = Open_Sans({
  variable: "--font-open-sans", // Define la variable
  subsets: ["latin"],
});

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
      /* 3. Inyectamos la variable de Vital aquí */
      className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} ${signature.variable} ${vital.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <Header />        
        <main className="grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}