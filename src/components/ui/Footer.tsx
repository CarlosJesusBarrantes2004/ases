import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Twitter,
} from "lucide-react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-black-soft text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Grupo Ases</h3>
            <p className="text-gray-light mb-4">
              Soluciones integrales para impulsar el crecimiento de tu negocio
              con confianza y eficiencia.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-light hover:text-red-primary transition-all-300"
              >
                <Facebook size={20}></Facebook>
              </a>
              <a
                href="#"
                className="text-gray-light hover:text-red-primary transition-all-300"
              >
                <Linkedin size={20}></Linkedin>
              </a>
              <a
                href="#"
                className="text-gray-light hover:text-red-primary transition-all-300"
              >
                <Twitter size={20}></Twitter>
              </a>
              <a
                href="#"
                className="text-gray-light hover:text-red-primary transition-all-300"
              >
                <Instagram size={20}></Instagram>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Enlaces Rápidos</h3>
            <nav className="flex flex-col space-y-2">
              <Link
                href={"/"}
                className="text-gray-light hover:text-red-primary transition-all-300"
              >
                Inicio
              </Link>
              <Link
                href="/conocenos"
                className="text-gray-light hover:text-red-primary transition-all-300"
              >
                Conócenos
              </Link>
              <Link
                href="/servicios"
                className="text-gray-light hover:text-red-primary transition-all-300"
              >
                Servicios
              </Link>
              <Link
                href="/blog"
                className="text-gray-light hover:text-red-primary transition-all-300"
              >
                Blog
              </Link>
              <Link
                href="/contacto"
                className="text-gray-light hover:text-red-primary transition-all-300"
              >
                Contacto
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <div className="flex flex-col space-y-2">
              <a
                href="mailto:info@grupoases.pe"
                className="text-gray-light hover:text-red-primary transition-all-300 flex items-center space-x-2"
              >
                <Mail size={16}></Mail>
                <span>info@grupoases.pe</span>
              </a>
              <a
                href="tel:+51944668448"
                className="text-gray-light hover:text-red-primary transition-all-300 flex items-center space-x-2"
              >
                <Phone size={16}></Phone>
                <span>+51 944 668 448</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Ubicación</h3>
            <div className="flex flex-col space-y-2">
              <p className="text-gray-light">
                Lora y Cordero 610, Chiclayo, Perú
              </p>
              <a
                href="https://www.google.com/maps/place/Lora+y+Cordero+610,+Chiclayo+14001/@-6.7697124,-79.8437274,17z/data=!3m1!4b1!4m6!3m5!1s0x904ceed821990009:0x43c254479e444279!8m2!3d-6.7697177!4d-79.8411525!16s%2Fg%2F11h1yw5xhl?entry=ttu&g_ep=EgoyMDI1MDMxOS4yIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                className="text-gray-light hover:text-red-primary transition-all-300"
              >
                Ver en Google Maps
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Grupo Ases. Todos los derechos
            reservados.
          </p>
          <p className="mt-1">
            Desarrollado por Carlos Jesús Barrantes Saldarriaga
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
