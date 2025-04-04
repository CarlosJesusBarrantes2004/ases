import Hero from "@/app/servicios/components/service/Hero";
import SubServices from "@/app/servicios/components/service/SubServices";
import { services } from "../index";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface ServicePageProps {
  params: Promise<{ service: string }>;
}

async function ServicePage({ params }: ServicePageProps) {
  const { service: slug } = await params;

  const service = services.find((s) => s.slug === slug);

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

  return (
    <>
      <Hero
        items={[
          {
            label: "Servicios",
            href: "/servicios",
          },
        ]}
        name={service.name}
        title={service.title}
        description={service.longDescription}
        imagePath={service.imagePath}
      ></Hero>
      <SubServices
        service={service.slug}
        subServices={service.subServices}
      ></SubServices>
    </>
  );
}

export default ServicePage;
