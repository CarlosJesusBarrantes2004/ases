import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import ContactForm from "../../contacto/components/form/ContactForm";
import Reveal from "@/components/ui/Reveal";

function Contact() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Encabezado */}
        <div className="text-center mb-12 md:mb-16">
          <Reveal className="text-4xl md:text-5xl lg:text-4xl xl:text-6xl font-bold mb-4 text-black-soft">
            ¿Hablamos sobre tu proyecto?
          </Reveal>
          <div className="w-24 h-1 xl:w-32 bg-red-primary mx-auto mb-6"></div>
          <Reveal className="text-gray-dark text-base md:text-lg mx-auto max-w-2xl">
            Estamos aquí para ayudarte. Completa el formulario y nos pondremos
            en contacto contigo a la mayor brevedad posible.
          </Reveal>
        </div>
        {/* Contenido */}
        <div className="max-w-5xl mx-auto">
          <Reveal className="bg-white rounded-xl border border-gray-light shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-5">
              <div className="md:col-span-2 bg-red-primary text-white p-8 md:p-10 flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-6">
                  Información de contacto
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-red-600 p-2 rounded-full mr-4">
                      <Mail size={20}></Mail>
                    </div>
                    <div>
                      <p className="font-semibold">Correo electrónico</p>
                      <a
                        href="mailto:info@grupoases.pe"
                        className="hover:underline"
                      >
                        info@grupoases.pe
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-red-600 p-2 rounded-full mr-4">
                      <Phone size={20}></Phone>
                    </div>
                    <div>
                      <p className="font-semibold">Teléfono</p>
                      <a href="tel:+51975733304" className="hover:underline">
                        +51 975 733 304
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-red-600 p-2 rounded-full mr-4">
                      <MapPin size={20}></MapPin>
                    </div>
                    <div>
                      <p className="font-semibold">Dirección</p>
                      <p>Lora y Cordero 610, Chiclayo, Perú</p>
                    </div>
                  </div>
                </div>
                <div className="mt-10">
                  <h4 className="text-xl font-semibold mb-4">Síguenos</h4>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      target="_blank"
                      className="bg-red-600 hover:bg-red-700 transition-colors p-2 rounded-full"
                    >
                      <Facebook size={20}></Facebook>
                    </a>
                    <a
                      href="#"
                      target="_blank"
                      className="bg-red-600 hover:bg-red-700 transition-colors p-2 rounded-full"
                    >
                      <Instagram size={20}></Instagram>
                    </a>
                    <a
                      href="#"
                      target="_blank"
                      className="bg-red-600 hover:bg-red-700 transition-colors p-2 rounded-full"
                    >
                      <Twitter size={20}></Twitter>
                    </a>
                  </div>
                </div>
              </div>
              <div className="md:col-span-3 p-6 md:p-10">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default Contact;
