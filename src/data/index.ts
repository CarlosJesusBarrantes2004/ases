import { Service, SubService } from "@/types";

// Services
export const services: Service[] = [
  {
    name: "Contabilidad Empresarial",
    title: "Servicios Contables Integrales",
    shortDescription:
      "Gestión contable y tributaria eficiente para que tu empresa cumpla con la normativa y optimice sus recursos.",
    longDescription: "Descripción completa de servicios contables...",
    imagePath: "",
    objective: "Mantener orden financiero y cumplir obligaciones",
    tagline: "Mantén tus Finanzas en Orden sin Estrés",
    audience: "Empresas y emprendedores",
    features: "Declaraciones, balances, asesoría fiscal",
    cases: [
      {
        text: "Mi negocio está creciendo y no quiero problemas con la SUNAT.",
        solution:
          "Te ayudamos a manejar tus impuestos y llevar la contabilidad de forma eficiente para evitar sanciones.",
        slug: "file",
      },
      {
        text: "No tengo tiempo para llevar mi contabilidad.",
        solution: "Olvídate del papeleo y déjalo en manos de expertos.",
        slug: "clock",
      },
      {
        text: "Quiero optimizar mis costos y pagar menos impuestos legalmente.",
        solution:
          "Te asesoramos para que aproveches beneficios tributarios sin riesgos.",
        slug: "calculator",
      },
    ],
    slug: "contabilidad",
  },
  {
    name: "Asesoría Jurídica",
    title: "Asesoría Legal Especializada",
    shortDescription:
      "Soluciones legales estratégicas para proteger y fortalecer tu negocio en cada paso.",
    longDescription: "Descripción completa de asesoría jurídica...",
    imagePath: "",
    objective: "Solucionar problemas legales y prevenir conflictos",
    tagline: "Protege tu Negocio y Evita Problemas Legales",
    audience: "Negocios y personas con temas legales",
    features: "Contratos, representación legal, asesoría en litigios",
    cases: [
      {
        text: "Quiero formalizar mi empresa, pero no sé cómo hacerlo.",
        solution:
          "Desde la inscripción hasta los permisos legales, te guiamos paso a paso.",
        slug: "building",
      },
      {
        text: "Tengo problemas con un cliente que no me paga.",
        solution:
          "Te ayudamos con cobranzas legales y soluciones jurídicas efectivas.",
        slug: "dollar",
      },
      {
        text: "Voy a firmar un contrato importante, pero no sé si es seguro para mí.",
        solution: "Revisamos y redactamos contratos para protegerte.",
        slug: "clipboard",
      },
    ],
    slug: "asesoria-juridica",
  },
  {
    name: "Servicios Digitales",
    title: "Impulsa tu negocio con soluciones digitales a medida",
    shortDescription:
      "Desarrollo web, marketing digital y tecnología para posicionar tu empresa en el mundo digital.",
    longDescription:
      "En la era digital, contar con una estrategia online es clave para el crecimiento de cualquier empresa. Nuestros servicios digitales te ayudarán a mejorar tu presencia en internet, automatizar procesos y conectar mejor con tus clientes. ¡Lleva tu negocio al siguiente nivel!",
    imagePath: "/images/digital-service-bg.jpg",
    objective: "Mejorar la presencia online y optimizar procesos",
    tagline: "Lleva tu Negocio al Mundo Digital",
    audience: "Empresas que buscan digitalizar su negocio",
    features: "Marketing digital, diseño web, desarrollo de sistemas",
    subServices: [
      {
        name: "Marketing Digital",
        shortDescription: "Estrategias para aumentar tu presencia online.",
        longDescription:
          "Aumenta la visibilidad de tu negocio con estrategias efectivas de redes sociales, publicidad en línea y posicionamiento SEO. Llega a más clientes y haz crecer tu marca con campañas personalizadas.",
        benefits: [
          "Mayor alcance y visibilidad en internet",
          "Estrategias personalizadas para cada negocio",
          "Publicidad pagada optimizada para resultados rápidos",
          "Posicionamiento SEO para atraer clientes orgánicos",
        ],
        slug: "marketing",
      },
      {
        name: "Diseño Web",
        shortDescription: "Páginas atractivas y funcionales para tu negocio.",
        longDescription:
          "Creamos páginas web atractivas, funcionales y optimizadas para todos los dispositivos. Desde tiendas en línea hasta sitios corporativos, garantizamos una experiencia de usuario profesional y moderna.",
        benefits: [
          "Diseño responsivo y adaptable a cualquier pantalla",
          "Optimización para velocidad y SEO",
          "Integración con herramientas como Google Analytics",
          "Estrategia UX/UI para una mejor experiencia de usuario",
        ],
        slug: "diseño-web",
      },
      {
        name: "Desarrollo de Sistemas",
        shortDescription: "Soluciones a medida para optimizar tus procesos.",
        longDescription:
          "Automatiza procesos y mejora la gestión de tu empresa con software personalizado. Desarrollamos sistemas a medida para optimizar la eficiencia y productividad de tu negocio.",
        benefits: [
          "Automatización de procesos empresariales",
          "Sistemas personalizados según las necesidades del negocio",
          "Integraciones con otras herramientas y plataformas",
          "Mayor seguridad y escalabilidad en la gestión de datos",
        ],
        slug: "desarrollo",
      },
    ],
    cases: [
      {
        text: "Mi negocio necesita más clientes y no sé cómo hacer publicidad.",
        solution:
          "Implementamos estrategias de marketing digital para atraer más clientes.",
        slug: "users",
      },
      {
        text: "Quiero tener presencia en internet, pero no tengo página web.",
        solution:
          "Diseñamos y desarrollamos un sitio web profesional adaptado a tu negocio.",
        slug: "zap",
      },
      {
        text: "Me gustaría automatizar algunas tareas de mi empresa.",
        solution:
          "Creamos sistemas personalizados para mejorar la gestión de tu negocio.",
        slug: "calculator",
      },
    ],
    slug: "digitales",
  },
];

// Benefits
export const benefits = [
  {
    title: "Experiencia Comprobada",
    description:
      "Más de 6 años ayudando a empresas a crecer con soluciones eficientes.",
    slug: "experiencia",
  },
  {
    title: "Atención Personalizada",
    description:
      "Brindamos asesoría adaptada a las necesidades de cada cliente",
    slug: "atencion",
  },
  {
    title: "Resultados Garantizados",
    description:
      "Optimizamos procesos y mejoramos la rentabilidad de tu negocio.",
    slug: "resultados",
  },
];

// Questions
export const faqData = [
  {
    category: "Preguntas Generales",
    questions: [
      {
        id: "q1",
        question: "¿Qué servicios ofrece Grupo Ases?",
        answer:
          "Grupo Ases brinda asesoría en contabilidad, asistencia legal y servicios digitales para potenciar el crecimiento de tu empresa.",
      },
      {
        id: "q2",
        question: "¿Cómo puedo solicitar un servicio?",
        answer:
          "Puedes contactarnos a través del formulario en nuestra página o llamarnos directamente para agendar una consulta.",
      },
    ],
  },
  {
    category: "Sobre los Servicios",
    questions: [
      {
        id: "q3",
        question: "¿Qué incluye la asesoría contable?",
        answer:
          "Ofrecemos declaración de impuestos, gestión de nóminas y asesoramiento financiero adaptado a tu negocio.",
      },
      {
        id: "q4",
        question: "¿Qué tipo de asesoría jurídica brindan?",
        answer:
          "Brindamos asesoría en constitución de empresas, contratos y resolución de conflictos legales.",
      },
      {
        id: "q5",
        question: "¿En qué consisten los servicios digitales?",
        answer:
          "Incluyen diseño web, marketing digital y desarrollo de software a medida.",
      },
    ],
  },
  {
    category: "Otras Preguntas",
    questions: [
      {
        id: "q6",
        question: "¿Grupo Ases trabaja con empresas de cualquier tamaño?",
        answer:
          "Sí, trabajamos con pequeñas, medianas y grandes empresas adaptando nuestros servicios a sus necesidades.",
      },
    ],
  },
];

// History
export const timelineItems = [
  {
    year: "2010",
    title: "Fundación y Visión",
    content:
      "Grupo ASES nació con la misión de ayudar a empresas y emprendedores a alcanzar sus objetivos con asesoría especializada y estrategias efectivas. Desde el principio, entendimos que el éxito de nuestros clientes sería también el nuestro.",
    icon: "🏢",
  },
  {
    year: "2015",
    title: "Expansión y Crecimiento",
    content:
      "A medida que avanzamos, incorporamos nuevos servicios para ofrecer una solución más completa. No solo nos enfocamos en la gestión contable y tributaria, sino que también expandimos nuestra oferta a marketing digital, desarrollo web y optimización de procesos empresariales.",
    icon: "📈",
  },
  {
    year: "2025",
    title: "Hoy y el Futuro",
    content:
      "Actualmente, somos un equipo sólido de expertos comprometidos en ofrecer asesoría estratégica, tecnología innovadora y soluciones personalizadas. Nuestro objetivo es seguir creciendo junto a nuestros clientes, adaptándonos a los cambios del mercado y ofreciendo un servicio de calidad que marque la diferencia.",
    icon: "🚀",
  },
];

// Values
export const values = [
  {
    icon: "💡",
    title: "Compromiso con la Excelencia",
    description:
      "Nos esforzamos por ofrecer soluciones de alta calidad, con un enfoque en la innovación y la mejora continua.",
  },
  {
    icon: "🤝",
    title: "Confianza y Transparencia",
    description:
      "Creemos en la honestidad y la comunicación abierta. Generamos relaciones de confianza con nuestros clientes, brindando asesoría clara y ética.",
  },
  {
    icon: "📈",
    title: "Orientación a Resultados",
    description:
      "Trabajamos con estrategias efectivas que garantizan el crecimiento y la estabilidad de los negocios que asesoramos.",
  },
  {
    icon: "💼",
    title: "Profesionalismo y Responsabilidad",
    description:
      "Cada cliente es único y merece un servicio a la altura de sus necesidades. Actuamos con responsabilidad y compromiso en cada tarea que realizamos.",
  },
  {
    icon: "🚀",
    title: "Adaptabilidad e Innovación",
    description:
      "El mundo cambia constantemente y nosotros evolucionamos con él. Nos mantenemos a la vanguardia para ofrecer soluciones modernas y eficientes.",
  },
];
