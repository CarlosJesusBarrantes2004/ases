import { Inter } from "next/font/google";
import { Metadata } from "next";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import "./globals.css";
import BtnWhatsapp from "@/components/ui/BtnWhatsapp";
import CallToAction from "@/components/ui/CallToAction";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Grupo Ases - Asesoría Contable, Jurídica y Digital para Empresas",
  description:
    "Impulsa tu negocio con servicios de contabilidad, asesoría jurídica y soluciones digitales. En Grupo Ases, ofrecemos experiencia y confianza para hacer crecer tu empresa.",
  keywords:
    "asesoría contable, asesoría jurídica, servicios digitales, consultoría empresarial, gestión financiera, desarrollo web, marketing digital, empresa, negocios, impuestos, legal, asesoría legal",
  authors: [{ name: "Grupo Ases", url: "https://grupoases.pe" }],
  openGraph: {
    title: "Grupo Ases - Soluciones Integrales para Empresas",
    description:
      "Asesoría en contabilidad, derecho y tecnología para optimizar y hacer crecer tu negocio con seguridad y confianza.",
    url: "https://grupoases.pe",
    siteName: "Grupo Ases",
    type: "website",
    images: [
      {
        url: "https://grupoases.pe/images/og-image.jpg", // Cambia esto por tu imagen real
        width: 1200,
        height: 630,
        alt: "Grupo Ases - Soluciones Integrales para Empresas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@GrupoAses", // Cambia esto si tienes Twitter
    title: "Grupo Ases - Asesoría Empresarial",
    description:
      "Optimiza tu empresa con nuestros servicios en contabilidad, asesoría legal y soluciones digitales.",
    images: ["https://grupoases.pe/images/twitter-card.jpg"], // Cambia esto por tu imagen real
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Header></Header>
          <main className="flex-grow">
            {children}
            <CallToAction></CallToAction>
          </main>
          <Footer></Footer>
          <BtnWhatsapp></BtnWhatsapp>
        </div>
      </body>
    </html>
  );
}
