import { Service } from "@/lib/data";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

interface ServiceRelatedProps {
  relatedService: Service;
}

function ServiceRelated({ relatedService }: ServiceRelatedProps) {
  return (
    <div
      key={relatedService.id}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3">
          {relatedService.title}
        </h3>
        <p className="text-gray-700 mb-4">{relatedService.shortDescription}</p>
        <Link
          href={`/servicios/${relatedService.slug}`}
          className="text-blue-600 font-medium hover:text-blue-800 inline-flex items-center"
        >
          Ver más detalles
          <FaChevronRight className="h-4 w-4 ml-1"></FaChevronRight>
        </Link>
      </div>
    </div>
  );
}

export default ServiceRelated;
