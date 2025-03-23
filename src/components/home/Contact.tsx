import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import ContactForm from "../contact/form/ContactForm";

function Contact() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-black-soft text-3xl md:text-5xl font-bold mb-4">
            ¿Hablamos sobre tu proyecto?
          </h2>
          <div className="w-24 h-1 bg-red-primary mx-auto mb-6 animate-expand"></div>
          <p className="text-gray-dark text-base md:text-lg max-w-2xl mx-auto">
            Estamos aquí para ayudarte. Completa el formulario y nos pondremos
            en contacto contigo a la mayor brevedad posible.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
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
                      <a href="tel:+51944668448" className="hover:underline">
                        +51 944 668 448
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
