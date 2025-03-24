"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isDigitalServicesOpen, setIsDigitalServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const servicesRef = useRef(null);
  const digitalServicesRef = useRef(null);
  const path = usePathname();

  console.log(path);

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

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-3 md:py-4 flex justify-between items-center">
        <Link href={"/"} className="flex items-center space-x-2">
          <div className="font-bold text-xl">
            <span
              className={`transition-colors duration-300 ${
                isScrolled || isMenuOpen ? "text-red-primary" : "text-white"
              }`}
            >
              Grupo
            </span>
            <span
              className={`transition-colors duration-300 ${
                isScrolled || isMenuOpen ? "text-black-soft" : "text-white"
              }`}
            >
              Ases
            </span>
          </div>
        </Link>

        {/* Navegación Desktop */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href={"/"}
            className={`transition-colors duration-300 hover:text-red-primary ${
              path === "/"
                ? "text-red-primary"
                : isScrolled
                ? "text-black-soft"
                : "text-white"
            }`}
          >
            Inicio
          </Link>
          <Link
            href={"/conocenos"}
            className={`transition-colors duration-300 hover:text-red-primary ${
              path === "/conocenos"
                ? "text-red-primary"
                : isScrolled
                ? "text-black-soft"
                : "text-white"
            }`}
          >
            Conócenos
          </Link>

          {/* Servicios con menú desplegable */}
          <div className="relative group">
            <div
              className={`flex items-center space-x-1 cursor-pointer transition-colors duration-300 hover:text-red-primary ${
                path === "/servicios"
                  ? "text-red-primary"
                  : isScrolled
                  ? "text-black-soft"
                  : "text-white"
              }`}
            >
              <Link href={"/servicios"}>Servicios</Link>
              <ChevronDown size={16}></ChevronDown>
            </div>

            {/* Menú desplegable de Servicios (desktop) */}
            <div className="absolute left-0 mt-2 w-52 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 bg-white shadow-lg rounded-md z-50">
              <ul className="py-1">
                <li>
                  <Link
                    href={"/servicios/contabilidad"}
                    className="block px-4 py-1 text-black-soft hover:text-red-primary hover:bg-gray-50 transition-all duration-300"
                  >
                    Contabilidad
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/servicios/asesoria-juridica"}
                    className="block px-4 py-1 text-black-soft hover:text-red-primary hover:bg-gray-50 transition-all duration-300"
                  >
                    Asesoría Jurídica
                  </Link>
                </li>
                <li className="relative group/digital">
                  <div className="flex items-center justify-between px-4 py-1 text-black-soft hover:text-red-primary hover:bg-gray-50 transition-all duration-300 cursor-pointer">
                    <Link href={"/servicios/digitales"}>
                      Servicios Digitales
                    </Link>
                    <ChevronDown size={16}></ChevronDown>
                  </div>

                  {/* Submenú de Servicios Digitales (desktop) */}
                  <div className="absolute left-full top-0 w-52 opacity-0 invisible group-hover/digital:opacity-100 group-hover/digital:visible transition-all duration-300 bg-white shadow-lg rounded-md border border-gray-light">
                    <ul className="py-1">
                      <li>
                        <Link
                          href={"/servicios/digitales/marketing"}
                          className="block px-4 py-1 text-black-soft hover:text-red-primary hover:bg-gray-50 transition-all duration-300"
                        >
                          Marketing Digital
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={"/servicios/digitales/diseño-web"}
                          className="block px-4 py-1 text-black-soft hover:text-red-primary hover:bg-gray-50 transition-all duration-300"
                        >
                          Diseño Web
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={"/servicios/digitales/desarrollo"}
                          className="block px-4 py-1 text-black-soft hover:text-red-primary hover:bg-gray-50 transition-all duration-300"
                        >
                          Desarrollo de Sistemas
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <Link
            href={"/contacto"}
            className={`transition-colors duration-300 hover:text-red-primary ${
              path === "/contacto"
                ? "text-red-primary"
                : isScrolled
                ? "text-black-soft"
                : "text-white"
            }`}
          >
            Contáctanos
          </Link>
          <Link
            href={"/contacto"}
            className="bg-red-primary text-white px-4 py-2 rounded-md shadow-sm hover:opacity-80 transition-all duration-300"
          >
            Solicitar Asesoría
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden hover:cursor-pointer transition-colors duration-300 ${
            isScrolled || isMenuOpen ? "text-black-soft" : "text-white"
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24}></X> : <Menu size={24}></Menu>}
        </button>
      </div>

      {/* Navegación Móvil */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-inner animate-fadeIn">
          <nav className="flex flex-col space-y-4">
            <Link
              href={"/"}
              className="text-black-soft hover:text-red-primary transition-all duration-300"
            >
              Inicio
            </Link>
            <Link
              href={"/conocenos"}
              className="text-black-soft hover:text-red-primary transition-all duration-300"
            >
              Conócenos
            </Link>

            {/* Servicios dropdown (mobile) */}
            <div ref={servicesRef}>
              <div
                className="flex gap-8 items-center justify-between text-black-soft hover:text-red-primary transition-all duration-300 cursor-pointer"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                <Link href={"/servicios"} className="flex-grow">
                  Servicios
                </Link>
                <ChevronDown
                  size={16}
                  className={`transform transition-transform duration-300 ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                ></ChevronDown>
              </div>

              {isServicesOpen && (
                <ul className="pl-4 mt-2 border-l-2 border-gray-light space-y-3">
                  <li>
                    <Link
                      href={"/servicios/contabilidad"}
                      className="block text-black-soft hover:text-red-primary transition-all duration-300"
                    >
                      Contabilidad
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/servicios/asesoria-juridica"}
                      className="block text-black-soft hover:text-red-primary transition-all duration-300"
                    >
                      Asesoría Jurídica
                    </Link>
                  </li>
                  <li ref={digitalServicesRef}>
                    <div
                      className="flex gap-8 items-center justify-between text-black-soft hover:text-red-primary transition-all duration-300 cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsDigitalServicesOpen(!isDigitalServicesOpen);
                      }}
                    >
                      <span>Servicios Digitales</span>
                      <ChevronDown
                        size={14}
                        className={`transform transition-transform duration-300 ${
                          isDigitalServicesOpen ? "rotate-180" : ""
                        }`}
                      ></ChevronDown>
                    </div>

                    {isDigitalServicesOpen && (
                      <ul className="pl-4 mt-2 border-l-2 border-gray-light space-y-3">
                        <li>
                          <Link
                            href={"/servicios/digitales/marketing"}
                            className="block text-black-soft hover:text-red-primary transition-all duration-300"
                          >
                            Marketing Digital
                          </Link>
                        </li>
                        <li>
                          <Link
                            href={"/servicios/digitales/diseño-web"}
                            className="block text-black-soft hover:text-red-primary transition-all duration-300"
                          >
                            Diseño Web
                          </Link>
                        </li>
                        <li>
                          <Link
                            href={"/servicios/digitales/desarrollo"}
                            className="block text-black-soft hover:text-red-primary transition-all duration-300"
                          >
                            Desarrollo de Sistemas
                          </Link>
                        </li>
                      </ul>
                    )}
                  </li>
                </ul>
              )}
            </div>

            <Link
              href={"/contacto"}
              className="text-black-soft hover:text-red-primary transition-all duration-300"
            >
              Contáctanos
            </Link>
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
