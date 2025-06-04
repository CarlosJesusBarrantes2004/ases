"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { navigationLinks } from "@/data";
import InvestmentBanner from "./InvestmentBanner";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState<string[]>([]);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isService, setIsService] = useState(false);
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
    setIsServicesOpen(false);
    setServicesOpen([]);
    setIsService(path.includes("/servicios/"));
  }, [path]);

  return (
    <header
      className={`fixed w-full top-[--banner-height] z-40 transition-all duration-300 ${
        isService && !isScrolled
          ? "bg-slate-800/95 backdrop-blur-md"
          : isScrolled || isMenuOpen
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-red-100"
          : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <InvestmentBanner></InvestmentBanner>
      <div className="container mx-auto px-4 py-4 md:px-6 md:py-5 flex justify-between items-center">
        <Link href={"/"} className="flex items-center space-x-2">
          <div className="font-bold text-xl md:text-2xl lg:text-xl">
            <span
              className={`transition-colors duration-300 ${
                isScrolled || isMenuOpen || !isService
                  ? "text-red-600"
                  : "text-white"
              }`}
            >
              Grupo
            </span>
            <span
              className={`transition-colors duration-300 ${
                isScrolled || isMenuOpen || !isService
                  ? "text-slate-700"
                  : "text-white"
              }`}
            >
              Ases
            </span>
          </div>
        </Link>

        {/* Navegación en PC/Laptop */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navigationLinks.map((item) => {
            return item.subLinks ? (
              <div key={item.name} className="relative group">
                <div
                  className={`flex items-center space-x-1 cursor-pointer transition-colors duration-300 hover:text-red-600 ${
                    path === item.href
                      ? "text-red-600"
                      : isScrolled || !isService
                      ? "text-slate-700"
                      : "text-white"
                  }`}
                >
                  <Link href={item.href}>{item.name}</Link>
                  <ChevronDown size={16}></ChevronDown>
                </div>
                {/* Menú desplegable de Servicios (desktop) */}
                <div className="absolute border left-0 mt-2 w-52 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 bg-white/95 backdrop-blur-md shadow-xl rounded-lg z-50 border-red-100">
                  <ul className="py-2">
                    {item.subLinks.map((item) => {
                      return item.categories ? (
                        <li
                          key={item.name}
                          className={`relative group/subitem`}
                        >
                          <div className="flex items-center justify-between px-4 py-2 text-slate-700 hover:text-red-600 hover:bg-red-50 transition-all duration-300 cursor-pointer rounded-md mx-2">
                            <Link href={item.href}>{item.name}</Link>
                            <ChevronDown size={16}></ChevronDown>
                          </div>
                          <div
                            className={`absolute left-full top-0 w-52 opacity-0 invisible group-hover/subitem:opacity-100 group-hover/subitem:visible transition-all duration-300 bg-white/95 backdrop-blur-md shadow-xl rounded-lg border border-red-100`}
                          >
                            <ul className="py-2">
                              {item.categories.map((item) => (
                                <li key={item.name}>
                                  <Link
                                    href={item.href}
                                    className="block px-4 py-2 text-slate-700 hover:text-red-600 hover:bg-red-50 transition-all duration-300 rounded-md mx-2"
                                  >
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </li>
                      ) : (
                        <li key={item.name}>
                          <Link
                            href={item.href}
                            className="block px-4 py-2 text-slate-700 hover:text-red-600 hover:bg-red-50 transition-all duration-300 rounded-md mx-2"
                          >
                            {item.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className={`transition-colors duration-300 hover:text-red-600 ${
                  path === item.href
                    ? "text-red-600"
                    : isScrolled || !isService
                    ? "text-slate-700"
                    : "text-white"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
          <Link
            href={"/contacto"}
            className="bg-gradient-to-r from-red-400 to-rose-500 text-white px-6 py-2 rounded-full shadow-lg hover:from-red-500 hover:to-rose-600 hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Solicitar Asesoría
          </Link>
        </nav>

        {/* Botón de menú movil */}
        <button
          className={`lg:hidden hover:cursor-pointer transition-colors duration-300 ${
            isScrolled || isMenuOpen || !isService
              ? "text-slate-700"
              : "text-white"
          }`}
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
            setIsServicesOpen(false);
            setServicesOpen([]);
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
        <div className="lg:hidden bg-white/95 backdrop-blur-md py-4 px-4 text-base md:text-xl lg:text-base shadow-xl border-t border-red-100 animate-fadeIn">
          <nav className="flex flex-col space-y-4 md:space-y-5 lg:space-y-4">
            {navigationLinks.map((item) => {
              return item.subLinks ? (
                <div key={`/services/${item.name}`}>
                  {/* Servicios dropdown (movil) */}
                  <div
                    className="flex gap-8 items-center justify-between text-slate-700 hover:text-red-600 transition-all duration-300 cursor-pointer"
                    onClick={() => {
                      setIsServicesOpen(!isServicesOpen);
                      setServicesOpen([]);
                    }}
                  >
                    <Link href={item.href} className="flex-grow">
                      {item.name}
                    </Link>
                    <ChevronDown
                      className={`w-5 h-5 md:w-6 md:h-6 lg:w-5 lg:h-5 transform transition-transform duration-300 ${
                        isServicesOpen ? "rotate-180" : ""
                      }`}
                    ></ChevronDown>
                  </div>
                  {isServicesOpen && (
                    <ul className="pl-4 mt-2 border-l-2 border-red-200 space-y-3 md:space-y-4 lg:space-y-3">
                      {item.subLinks.map((item) => {
                        return item.categories ? (
                          <li key={`/services/service/${item.name}`}>
                            <div
                              className="flex gap-8 items-center justify-between text-slate-700 hover:text-red-600 transition-all duration-300 cursor-pointer"
                              onClick={(e) => {
                                e.stopPropagation();
                                setServicesOpen(
                                  !servicesOpen.includes(item.name)
                                    ? [...servicesOpen, item.name]
                                    : servicesOpen.filter(
                                        (i) => i !== item.name
                                      )
                                );
                              }}
                            >
                              <Link href={item.href} className="flex-grow">
                                {item.name}
                              </Link>
                              <ChevronDown
                                className={`w-4 h-4 md:w-5 md:h-5 lg:w-4 lg:h-4 transform transition-transform duration-300 ${
                                  servicesOpen.includes(item.name)
                                    ? "rotate-180"
                                    : ""
                                }`}
                              ></ChevronDown>
                            </div>
                            {servicesOpen.includes(item.name) && (
                              <ul className="pl-4 mt-2 border-l-2 border-red-200 space-y-3 md:space-y-4 lg:space-y-3">
                                {item.categories.map((item) => (
                                  <li
                                    key={`/services/service/subservice/${item.name}`}
                                  >
                                    <Link
                                      href={item.href}
                                      className="block text-slate-700 hover:text-red-600 transition-all duration-300"
                                    >
                                      {item.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        ) : (
                          <li key={`/services/service/${item.name}`}>
                            <Link
                              href={item.href}
                              className="block text-slate-700 hover:text-red-600 transition-all duration-300"
                            >
                              {item.name}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </div>
              ) : (
                <Link
                  key={`/services/${item.name}`}
                  href={item.href}
                  className="text-slate-700 hover:text-red-600 transition-all duration-300"
                >
                  {item.name}
                </Link>
              );
            })}
            <Link
              href={"/contacto"}
              className="bg-gradient-to-r from-red-400 to-rose-500 text-white px-6 py-3 rounded-full shadow-lg hover:from-red-500 hover:to-rose-600 transition-all duration-300 text-center"
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
