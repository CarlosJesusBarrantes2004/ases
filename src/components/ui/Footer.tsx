import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Twitter,
  MapPin,
  Clock,
} from "lucide-react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-800 via-slate-900 to-gray-900 text-white">
      {/* Sección principal */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Información de la empresa */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-red-400 to-rose-400 bg-clip-text text-transparent">
                Grupo Ases
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Somos tu aliado estratégico en el crecimiento empresarial. Con
                más de 10 años de experiencia, ofrecemos soluciones integrales
                que transforman ideas en realidades exitosas.
              </p>

              {/* Redes sociales */}
              <div className="flex space-x-4 mb-6">
                <a
                  href="#"
                  className="bg-gradient-to-r from-red-500 to-rose-500 p-2 rounded-full hover:from-red-600 hover:to-rose-600 transition-all duration-300 hover:scale-110"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="#"
                  className="bg-gradient-to-r from-blue-500 to-indigo-500 p-2 rounded-full hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 hover:scale-110"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="#"
                  className="bg-gradient-to-r from-sky-500 to-blue-500 p-2 rounded-full hover:from-sky-600 hover:to-blue-600 transition-all duration-300 hover:scale-110"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="#"
                  className="bg-gradient-to-r from-pink-500 to-rose-500 p-2 rounded-full hover:from-pink-600 hover:to-rose-600 transition-all duration-300 hover:scale-110"
                >
                  <Instagram size={20} />
                </a>
              </div>

              {/* Horarios */}
              <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                <div className="flex items-center space-x-2 mb-2">
                  <Clock className="w-4 h-4 text-red-400" />
                  <span className="text-sm font-medium text-red-400">
                    Horarios de atención
                  </span>
                </div>
                <p className="text-sm text-gray-300">
                  Lunes a Viernes: 8:00 AM - 6:00 PM
                </p>
                <p className="text-sm text-gray-300">
                  Sábados: 9:00 AM - 1:00 PM
                </p>
              </div>
            </div>

            {/* Enlaces rápidos */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-red-400">
                Enlaces Rápidos
              </h3>
              <nav className="flex flex-col space-y-3">
                <Link
                  href="/"
                  className="text-gray-300 hover:text-red-400 transition-colors duration-300 hover:translate-x-1 transform"
                >
                  → Inicio
                </Link>
                <Link
                  href="/conocenos"
                  className="text-gray-300 hover:text-red-400 transition-colors duration-300 hover:translate-x-1 transform"
                >
                  → Conócenos
                </Link>
                <Link
                  href="/servicios"
                  className="text-gray-300 hover:text-red-400 transition-colors duration-300 hover:translate-x-1 transform"
                >
                  → Servicios
                </Link>
                <Link
                  href="/blog"
                  className="text-gray-300 hover:text-red-400 transition-colors duration-300 hover:translate-x-1 transform"
                >
                  → Blog
                </Link>
                <Link
                  href="/contacto"
                  className="text-gray-300 hover:text-red-400 transition-colors duration-300 hover:translate-x-1 transform"
                >
                  → Contacto
                </Link>
              </nav>
            </div>

            {/* Información de contacto */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-red-400">
                Contáctanos
              </h3>
              <div className="space-y-4">
                <a
                  href="mailto:info@grupoases.pe"
                  className="flex items-center space-x-3 text-gray-300 hover:text-red-400 transition-colors duration-300 group"
                >
                  <div className="bg-red-500/20 p-2 rounded-lg group-hover:bg-red-500/30 transition-colors duration-300">
                    <Mail size={16} />
                  </div>
                  <span className="text-sm">info@grupoases.pe</span>
                </a>

                <a
                  href="tel:+51975733304"
                  className="flex items-center space-x-3 text-gray-300 hover:text-red-400 transition-colors duration-300 group"
                >
                  <div className="bg-rose-500/20 p-2 rounded-lg group-hover:bg-rose-500/30 transition-colors duration-300">
                    <Phone size={16} />
                  </div>
                  <span className="text-sm">+51 975 733 304</span>
                </a>

                <div className="flex items-start space-x-3 text-gray-300">
                  <div className="bg-cyan-500/20 p-2 rounded-lg">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <p className="text-sm mb-1">Lora y Cordero 610</p>
                    <p className="text-sm text-gray-400">Chiclayo, Perú</p>
                    <a
                      href="https://www.google.com/maps/place/Lora+y+Cordero+610,+Chiclayo+14001/@-6.7697124,-79.8437274,17z/data=!3m1!4b1!4m6!3m5!1s0x904ceed821990009:0x43c254479e444279!8m2!3d-6.7697177!4d-79.8411525!16s%2Fg%2F11h1yw5xhl?entry=ttu&g_ep=EgoyMDI1MDMxOS4yIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                      className="text-xs text-red-400 hover:text-red-300 transition-colors duration-300"
                    >
                      Ver en Google Maps →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Línea divisoria */}
      <div className="border-t border-slate-700"></div>

      {/* Sección de copyright */}
      <div className="py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} Grupo Ases. Todos los derechos
                reservados.
              </p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                Desarrollado con ❤️ por{" "}
                <span className="text-red-400 font-medium">
                  Carlos Jesús Barrantes Saldarriaga
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
