import ContactForm from "@/components/contact/form/ContactForm";
import ServicesBanner from "@/components/services/ServicesBanner";
import ServicesSection from "@/components/services/ServicesSection";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nuestros Servicios | Grupo Ases",
  description:
    "Descubra nuestra amplia gama de servicios de consultoría y asesoría empresrial que ayudarán a su empresa a alcanzar su máximo potencial.",
};

function ServiciosPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <ServicesBanner></ServicesBanner>

      {/* Introducción a los servicios */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Soluciones a medida para cada necesidad
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-gray-700 text-lg mb-8">
              En Grupo Ases entendemos que cada empresa es única, con sus
              propios desafíos y objetivos. Nuestro equipo de expertos trabaja
              estrechamente con usted para desarrollar estrategias
              personalizadas que impulsen su crecimiento y maximicen su
              rendimiento.
            </p>
            <p className="text-gray-700 text-lg">
              Explore nuestra gama completa de servicios y descubra cómo podemos
              ayudarle a transformar los desafíos en oportunidades de
              crecimiento.
            </p>
          </div>
        </div>
      </div>

      {/* Listado de servicios */}
      <ServicesSection></ServicesSection>

      {/* Sección de diferenciadores */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              ¿Por qué elegir Grupo Ases?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Enfoque personalizado
                </h3>
                <p className="text-gray-700">
                  Adaptamos nuestras soluciones a las necesidades específicas de
                  cada cliente, considerando su industria, tamaño y objetivos
                  particulares.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Equipo experimentado
                </h3>
                <p className="text-gray-700">
                  Contamos con profesionales altamente calificados y con amplia
                  experiencia en diversas industrias y disciplinas
                  empresariales.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Resultados medibles
                </h3>
                <p className="text-gray-700">
                  Nos enfocamos en generar impacto real y cuantificable en el
                  rendimiento y crecimiento de su empresa.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Relaciones a largo plazo
                </h3>
                <p className="text-gray-700">
                  Construimos relaciones duraderas con nuestros clientes,
                  proporcionando soporte continuo más allá de los proyectos
                  iniciales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonios */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Lo que dicen nuestros clientes
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl mr-4">
                  LC
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Laura Campos</h4>
                  <p className="text-sm text-gray-600">
                    Directora Financiera, Empresa A
                  </p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "La asesoría financiera de Grupo Ases ha sido fundamental para
                optimizar nuestra estructura de costos. Logramos reducir gastos
                operativos en un 18% en solo seis meses."
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl mr-4">
                  MR
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Marco Ramírez</h4>
                  <p className="text-sm text-gray-600">CEO, Empresa B</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Su consultoría estratégica nos ayudó a identificar nuevas
                oportunidades de mercado que no habíamos considerado. El
                resultado fue un crecimiento del 25% en nuestro primer año de
                trabajo conjunto."
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl mr-4">
                  CA
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Carolina Araya</h4>
                  <p className="text-sm text-gray-600">
                    Gerente de Operaciones, Empresa C
                  </p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "La implementación de los procesos optimizados ha mejorado
                significativamente nuestra eficiencia. Reducimos los tiempos de
                entrega en un 30% y mejoramos la satisfacción de nuestros
                clientes."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Formulario de contacto */}
      <div id="contacto" className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-3 text-center">
              ¿Listo para potenciar su empresa?
            </h2>
            <p className="text-gray-700 text-lg mb-8 text-center">
              Complete el formulario y un asesor especializado se pondrá en
              contacto con usted para analizar sus necesidades y ofrecerle la
              mejor solución.
            </p>
            <ContactForm></ContactForm>
          </div>
        </div>
      </div>

      {/* CTA final */}
      <div className="py-12 bg-blue-900 text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            ¿Necesita una solución personalizada?
          </h2>
          <p className="text-blue-100 text-lg mb-6 max-w-3xl mx-auto">
            Nuestro equipo está listo para diseñar un plan a medida que se
            adapte a las necesidades específicas de su empresa.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              href="#contacto"
              className="inline-block bg-white text-blue-900 font-medium px-8 py-3 rounded-md hover:bg-gray-100 transition-colors duration-300"
            >
              Agendar una consulta
            </Link>
            <Link
              href="/sobre-nosotros"
              className="inline-block border border-white text-white font-medium px-8 py-3 rounded-md hover:bg-blue-800 transition-colors duration-300"
            >
              Conocer nuestro equipo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiciosPage;
