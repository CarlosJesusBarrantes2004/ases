import {
  Handshake,
  Lightbulb,
  RefreshCcw,
  Rocket,
  ShieldCheck,
  Users,
} from "lucide-react";

export const benefits = [
  {
    title:
      "No somos una empresa tradicional. Somos un ecosistema que transforma ideas en impacto",
    description:
      "En Grupo ASES conectamos capital, talento y propósito para generar desarrollo real en la región. No vendemos productos: construimos futuro.",
    slug: "experiencia",
    icon: <Rocket size={48}></Rocket>,
  },
  {
    title: "Ofrecemos oportunidades con sentido",
    description:
      "Desde certificados de inversión con rentabilidad fija hasta proyectos sociales de alto impacto, aquí tu dinero y tu esfuerzo trabajan por ti… y por el país",
    slug: "atencion",
    icon: <Lightbulb size={48}></Lightbulb>,
  },
  {
    title: "Tu inversión está respaldada, no improvisada",
    description:
      "Cada proyecto está estructurado legal, financiera y estratégicamente. Aquí las promesas se sustentan en contratos, análisis y experiencia.",
    slug: "resultados",
    icon: <ShieldCheck size={48}></ShieldCheck>,
  },
  {
    title: "Aquí no solo inviertes, participas",
    description:
      "Formas parte de una comunidad de socios, con acceso a formación, beneficios exclusivos y decisiones que construyen el mañana.",
    slug: "experiencia",
    icon: <Users size={48}></Users>,
  },
  {
    title: "Transformamos crisis en oportunidades",
    description:
      "Nuestro fondo de reestructuración rescata empresas en apuros y las convierte en motores de desarrollo económico",
    slug: "atencion",
    icon: <RefreshCcw size={48}></RefreshCcw>,
  },
  {
    title: "Creemos en ti",
    description:
      "Si tienes una buena idea, te ayudamos a estructurarla. Si ya tienes una empresa, te ayudamos a escalarla. Si quieres invertir, te abrimos la puerta con transparencia y visión.",
    slug: "resultados",
    icon: <Handshake size={48}></Handshake>,
  },
];
