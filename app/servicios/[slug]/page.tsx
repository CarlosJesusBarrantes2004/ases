import ContactForm from "@/components/contact/form/ContactForm";
import ServiceBanner from "@/components/services/ServiceBanner";
import Content from "@/components/services/Content";
import ServiceRelated from "@/components/services/ServiceRelated";
import { services } from "@/lib/data";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

interface ServicioPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: ServicioPageProps): Promise<Metadata> {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) return { title: "Servicio no encontrado | Grupo Ases" };

  return {
    title: `${service.title} | Grupo Ases`,
    description: service.shortDescription,
  };
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

function ServicioPage({ params }: ServicioPageProps) {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) notFound();

  const relatedServices = services
    .filter((s) => s.id !== service.id)
    .slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      <ServiceBanner service={service}></ServiceBanner>
      <Content service={service}></Content>

      {/* Servicios relacionados */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
            Servicios relacionados
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedServices.map((relatedService) => (
              <ServiceRelated
                key={relatedService.id}
                relatedService={relatedService}
              ></ServiceRelated>
            ))}
          </div>
        </div>
      </div>

      {/* Formulario de contacto */}
      <div id="contacto" className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-3 text-center">
              ¿Necesita más información?
            </h2>
            <p className="text-gray-700 text-lg mb-8 text-center">
              Complete el formulario y un asesor especializado en{" "}
              {service.title.toLowerCase()} se pondrá en contacto con usted a la
              brevedad.
            </p>
            <ContactForm></ContactForm>
          </div>
        </div>
      </div>

      {/* CTA final */}
      <div className="py-12 bg-blue-900 text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            ¿Listo para llevar su empresa al siguiente nivel?
          </h2>
          <p className="text-blue-100 text-lg mb-6 max-w-3xl mx-auto">
            En Grupo Ases estamos comprometidos con su éxito. Permítanos ser su
            aliado estratégico en el crecimiento y optimización de su negocio.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              href="/contacto"
              className="inline-block bg-white text-blue-900 font-medium px-8 py-3 rounded-md hover:bg-gray-100 transition-colors duration-300"
            >
              Contáctenos
            </Link>
            <Link
              href="/servicios"
              className="inline-block border border-white text-white font-medium px-8 py-3 rounded-md hover:bg-blue-800 transition-colors duration-300"
            >
              Ver todos los servicios
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicioPage;
