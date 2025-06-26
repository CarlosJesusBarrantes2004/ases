"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { navigationLinks } from "@/data";
import Image from "next/image";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [isServicesOpen, setIsServicesOpen] = useState(false);
  // const [servicesOpen, setServicesOpen] = useState<string[]>([]);
  const [isScrolled, setIsScrolled] = useState(false);
  const path = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    // setIsServicesOpen(false);
    // setServicesOpen([]);
  }, [path]);

  return (
    <header
      className={
        "fixed w-full top-0 z-50 transition-all duration-300 border-b border-gray-light shadow-md bg-white"
      }
    >
      <div className="container mx-auto px-4 py-3 md:px-6 md:py-2 flex justify-between items-center">
        <Link href={"/"} className="flex justify-center items-center">
          <div className="relative w-[78px] h-[60px]">
            <Image
              src={"/images/logo.png"}
              alt="Logo - Grupo Ases"
              fill
              className="object-contain"
            ></Image>
          </div>
        </Link>
        {/* Navegación en PC/Laptop */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navigationLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`transition-colors duration-300 hover:text-red-primary ${
                path === item.href ? "text-red-primary" : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href={"/contacto"}
            className="bg-red-primary text-white px-4 py-2 rounded-md shadow-sm hover:opacity-80 transition-all duration-300"
          >
            Solicitar Asesoría
          </Link>
        </nav>
        {/* Botón de menú movil */}
        <button
          className={`lg:hidden hover:cursor-pointer transition-colors duration-300 ${
            isScrolled || isMenuOpen ? "text-black-soft" : "text-white"
          }`}
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
            // setIsServicesOpen(false);
            // setServicesOpen([]);
          }}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 md:w-7 md:h-7 lg:w-6"></X>
          ) : (
            <Menu className="w-6 h-6 md:w-7 md:h-7 lg:h-6"></Menu>
          )}
        </button>
      </div>
      {/* Navegación Móvil */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white py-4 px-4 text-base md:text-xl lg:text-base shadow-inner animate-fadeIn">
          <nav className="flex flex-col space-y-4 md:space-y-5 lg:space-y-4">
            {navigationLinks.map((item) => (
              <Link
                key={`/services/${item.name}`}
                href={item.href}
                className="text-black-soft hover:text-red-primary transition-all duration-300"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href={"/contacto"}
              className="bg-red-primary text-white px-4 py-2 rounded-md shadow-sm hover:opacity-80 transition-all duration-300 text-center"
            >
              Solicitar Asesoría
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
