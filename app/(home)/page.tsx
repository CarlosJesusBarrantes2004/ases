import ContactForm from "@/components/contact/form/ContactForm";
import AboutSection from "@/components/home/AboutSection";
import Banner from "@/components/home/Banner";
import ServicesSection from "@/components/services/ServicesSection";

function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Banner></Banner>
      <AboutSection></AboutSection>
      <ServicesSection></ServicesSection>
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Contáctanos
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Estamos listos para ayudarte a potenciar tu negocio. Completa el
              formulario y nos pondremos en contacto contigo a la brevedad.
            </p>
          </div>
          <ContactForm></ContactForm>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
