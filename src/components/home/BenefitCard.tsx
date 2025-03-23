interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function BenefitCard({ icon, title, description }: BenefitCardProps) {
  return (
    <div className="text-center p-6 transition-all-300 hover:translate-y-[-4px]">
      <div className="text-red-primary mb-4 text-4xl mx-auto">{icon}</div>
      <h3 className="text-xl font-bold mb-3 text-black-soft">{title}</h3>
      <p className="text-gray-dark">{description}</p>
    </div>
  );
}

export default BenefitCard;
