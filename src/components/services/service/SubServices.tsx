import { SubService } from "@/types";
import Link from "next/link";

interface SubServicesProps {
  service: string;
  subServices?: SubService[];
}

function SubServices({ service, subServices }: SubServicesProps) {
  if (!subServices) return null;

  return (
    <section className="py-16 md:py-20 bg-black-soft">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {service === "contabilidad"
              ? "Nuestros servicios de Contabilidad"
              : service === "asesoria-juridica"
              ? "Nuestros servicios de Asesoría Jurídica"
              : "Nuestros Servicios Digitales"}
          </h2>
          <div className="w-24 h-1 bg-red-primary mx-auto mb-6"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subServices?.map((subService) => (
            <div
              key={subService.slug}
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl text-black-soft font-semibold">
                  {subService.name}
                </h3>
                <p className="mt-2 text-gray-600">
                  {subService.longDescription}
                </p>
                <ul className="mt-4 text-sm text-gray-700">
                  {subService.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center">
                      ✅ {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              <Link href={`/servicios/${service}/${subService.slug}`}>
                <button className="mt-4 px-4 py-2 bg-black-soft text-white rounded-lg hover:bg-red-primary cursor-pointer">
                  Ver más
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SubServices;
