import Hero from "@/components/services/service/subservice/Hero";
import { services } from "@/data";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface SubservicePageProps {
  params: Promise<{ subservice: string }>;
}

async function SubservicePage({ params }: SubservicePageProps) {
  const { subservice: encodedSlug } = await params;
  const slug = decodeURIComponent(encodedSlug);

  const service = services.find((service) =>
    service.subServices?.find((subService) => subService.slug === slug)
  );

  if (!service)
    return (
      <section className="bg-white py-16 md:py-20 flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-red-primary mb-6">
          Servicio no encontrado
        </h1>
        <Link
          href={"/servicios"}
          className="inline-flex items-center gap-2 bg-black-soft text-white px-6 py-3 rounded-md font-medium hover:bg-red-primary transform hover:-translate-y-1 transition-all duration-300"
        >
          <ArrowLeft className="w-5 h-5"></ArrowLeft>
          <span>Regresar</span>
        </Link>
      </section>
    );

  const subService = service.subServices?.find(
    (subService) => subService.slug === slug
  );

  if (!subService)
    return (
      <section className="bg-white py-16 md:py-20 flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-red-primary mb-6">
          Servicio no encontrado
        </h1>
        <Link
          href={`/servicios/${service.slug}`}
          className="inline-flex items-center gap-2 bg-black-soft text-white px-6 py-3 rounded-md font-medium hover:bg-red-primary transform hover:-translate-y-1 transition-all duration-300"
        >
          <ArrowLeft className="w-5 h-5"></ArrowLeft>
          <span>Regresar</span>
        </Link>
      </section>
    );

  return (
    <>
      <Hero
        items={[
          {
            label: "Servicios",
            href: "/servicios",
          },
          {
            label: service.name,
            href: `/servicios/${service.slug}`,
          },
        ]}
        name={subService.name}
        title={subService.name}
        description={subService.longDescription}
      ></Hero>
    </>
  );
}

export default SubservicePage;
