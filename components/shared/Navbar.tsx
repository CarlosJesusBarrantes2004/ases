"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 10 ? setScrolled(true) : setScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Inicio", href: "/" },
    { name: "Servicios", href: "/servicios" },
    { name: "Sobre Nosotros", href: "/sobre-nosotros" },
    { name: "Contacto", href: "/contacto" },
  ];

  return (
    <header
      className={`fiexd w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href={"/"} className="flex items-center">
            <div className="h-10 w-40 relative flex items-center">
              <span className="text-xl font-bold text-blue-900">
                GRUPO ASES
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`transition-colors duration-300 font-medium flex items-center justify-center px-2 ${
                  pathname === link.href
                    ? "text-blue-600 border-2 border-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href={"/contacto"}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-300"
            >
              Contáctanos
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-700 hover:cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <FaTimes size={24}></FaTimes>
            ) : (
              <FaBars size={24}></FaBars>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="lg:hidden bg-white py-4 px-4 shadow-lg absolute w-full z-20">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`transition-colors duration-300 font-medium ${
                  pathname === link.href
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href={"/contacto"}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-300 text-center"
              onClick={() => setIsOpen(false)}
            >
              Contáctanos
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
