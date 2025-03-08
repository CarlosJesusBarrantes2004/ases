import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Grupo Ases | Consultoría y Asesoría Empresarial",
  description:
    "Soluciones de consultoría y asesoría empresarial para potenciar el crecimiento de su negocio con Grupo Ases.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Navbar></Navbar>
        <main>{children}</main>
        <Footer></Footer>
      </body>
    </html>
  );
}
