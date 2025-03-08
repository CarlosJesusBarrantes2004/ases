import Link from "next/link";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    {
      name: "Consultoría Estratégica",
      href: "/servicios/consultoria-estrategica",
    },
    { name: "Gestión Financiera", href: "/servicios/gestion-financiera" },
    {
      name: "Transformación Digital",
      href: "/servicios/transformacion-digital",
    },
    { name: "Recursos Humanos", href: "/servicios/recursos-humanos" },
    { name: "Marketing y Ventas", href: "/servicios/marketing" },
    { name: "Operaciones y Procesos", href: "/servicios/operaciones" },
  ];

  const quickLinks = [
    { name: "Inicio", href: "/" },
    { name: "Servicios", href: "/servicios" },
    { name: "Sobre Nosotros", href: "/sobre-nosotros" },
    { name: "Contacto", href: "/contacto" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Grupo Ases</h3>
            <p className="text-gray-400 mb-6">
              Somos una empresa líder en consultoría y asesoría empresarial,
              dedicada a potenciar el crecimiento y éxito de nuestros clientes.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="#"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="#"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Servicios</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="w-5 h-5 mr-3 text-blue-500 mt-1"></FaMapMarkerAlt>
                <span className="text-gray-400">
                  Lora y Cordero 610, Chiclayo, Perú
                </span>
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="w-5 h-5 mr-3 text-blue-500"></FaPhoneAlt>
                <span className="text-gray-400">+51 987 654 321</span>
              </li>
              <li className="flex items-center">
                <IoMail className="w-5 h-5 mr-3 text-blue-500"></IoMail>
                <a
                  href="mailto:contacto@grupoases.com"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  contacto@grupoases.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Grupo Ases. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
