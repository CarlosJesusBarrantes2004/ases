import ContactForm from "@/components/contact/form/ContactForm";
import Info from "@/components/contact/Info";
import Map from "@/components/contact/Map";

function ContactPage() {
  return (
    <>
      <Map></Map>
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Encabezado */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-black-soft">
              ¿Hablamos sobre tu proyecto?
            </h2>
            <div className="w-24 h-1 bg-red-primary mx-auto mb-6"></div>
            <p className="text-gray-dark text-base md:text-lg mx-auto max-w-2xl">
              Estamos aquí para ayudarte. Completa el formulario y nos pondremos
              en contacto contigo a la mayor brevedad posible.
            </p>
          </div>
          {/* Contenedor de formulario e informaciónn de contacto */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Información de contacto */}
            <Info></Info>
            {/* Formulario de contacto */}
            <div className="p-8 border rounded-lg shadow-lg">
              <ContactForm></ContactForm>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactPage;
