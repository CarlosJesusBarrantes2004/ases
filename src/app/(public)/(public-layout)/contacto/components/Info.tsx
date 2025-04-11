import { Clock, Mail, MapPin, Phone } from "lucide-react";

function Info() {
  return (
    <section className="bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-black-soft mb-6 text-center">
        Información de Contacto
      </h2>
      <div className="space-y-4">
        <article className="flex items-center space-x-4 mb-6 animate-slide-in">
          <div className="bg-red-primary/10 p-3 rounded-full">
            <Phone className="text-red-primary w-6 h-6"></Phone>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-black-soft">Teléfono</h3>
            <p className="text-gray-dark">+51 944 668 668</p>
          </div>
        </article>
        <article className="flex items-center space-x-4 mb-6 animate-slide-in">
          <div className="bg-red-primary/10 p-3 rounded-full">
            <Mail className="text-red-primary w-6 h-6"></Mail>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-black-soft">
              Correo Electrónico
            </h3>
            <p className="text-gray-dark">info@grupoases.pe</p>
          </div>
        </article>
        <article className="flex items-center space-x-4 mb-6 animate-slide-in">
          <div className="bg-red-primary/10 p-3 rounded-full">
            <MapPin className="text-red-primary w-6 h-6"></MapPin>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-black-soft">Dirección</h3>
            <p className="text-gray-dark">Lora y Cordero 610, Chiclayo</p>
          </div>
        </article>
        <article className="flex items-center space-x-4 mb-6 animate-slide-in">
          <div className="bg-red-primary/10 p-3 rounded-full">
            <Clock className="text-red-primary w-6 h-6"></Clock>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-black-soft">
              Horario de atención
            </h3>
            <p className="text-gray-dark">
              Lunes a Viernes: 10:00 AM - 1:00 PM y 4:00 PM - 7:00 PM Sábado:
              10:00 AM - 1:00 PM
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Info;
