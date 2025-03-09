import { Service } from "@/lib/data";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

interface ServiceCardProps {
  service: Service;
  index: number;
  isInView: boolean;
}

function ServiceCard({ service, index, isInView }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
    >
      <div className="h-48 bg-gradient-to-r from-blue-800 to-blue-600 relative flex items-center justify-center p-6">
        <h3 className="text-xl font-bold text-white text-center">
          {service.title}
        </h3>
      </div>
      <div className="p-6">
        <p className="text-gray-600 mb-6">{service.shortDescription}</p>
        <Link
          href={`/servicios/${service.slug}`}
          className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors duration-300"
        >
          <span>Saber más</span>
          <FaArrowRight className="ml-2 text-sm" />
        </Link>
      </div>
    </motion.div>
  );
}

export default ServiceCard;
