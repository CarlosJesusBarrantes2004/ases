import { SubService } from "@/app/servicios/[slug]/page";
import Link from "next/link";

interface SubServicesProps {
  subServices?: SubService[];
}

function SubServices({ subServices }: SubServicesProps) {
  if (!subServices) return null;

  return (
    <section className="container mx-auto py-12 px-6">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8">
        Nuestros Servicios Digitales
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {subServices?.map((subService) => (
          <div
            key={subService.slug}
            className="bg-white shadow-lg rounded-lg p-6"
          >
            <h3 className="text-2xl text-black-soft font-semibold">
              {subService.title}
            </h3>
            <p className="mt-2 text-gray-600">{subService.description}</p>
            <ul className="mt-4 text-sm text-gray-700">
              {subService.benefits.map((benefit, index) => (
                <li key={index} className="flex items-center">
                  ✅ {benefit}
                </li>
              ))}
            </ul>
            <Link href={`/servicios/digitales/${subService.slug}`}>
              <button className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 cursor-pointer">
                Ver más
              </button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SubServices;
