import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

interface PrivateLayoutProps {
  children: React.ReactNode;
}

function PrivateLayout({ children }: PrivateLayoutProps) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

export default PrivateLayout;
