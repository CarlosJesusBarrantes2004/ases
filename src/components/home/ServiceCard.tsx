import Link from "next/link";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  slug: string;
}

function ServiceCard({ icon, title, description, slug }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 h-full flex flex-col transition-all-300 hover:translate-y-[-8px]">
      <div className="text-red-primary mb-4 text-4xl">{icon}</div>
      <h3 className="text-xl font-bold mb-3 text-black-soft">{title}</h3>
      <p className="text-gray-dark flex-grow mb-1.5">{description}</p>
      <Link
        href={`/servicios/${slug}`}
        className="text-sm text-red-primary font-medium hover:opacity-80 transition-all-300"
      >
        Conocer más →
      </Link>
    </div>
  );
}

export default ServiceCard;
