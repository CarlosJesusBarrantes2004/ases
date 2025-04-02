import { Service } from "@/types";

// Navigation
export const navigationLinks = [
  { name: "Inicio", href: "/" },
  { name: "Conócenos", href: "/conocenos" },
  {
    name: "Servicios",
    href: "/servicios",
    subLinks: [
      // Servicio de contabilidad
      {
        name: "Contabilidad",
        href: "/servicios/contabilidad",
        categories: [
          {
            name: "Contabilidad Básica",
            href: "/servicios/contabilidad/contabilidad-basica",
          },
          {
            name: "Asesoría Tributaria",
            href: "/servicios/contabilidad/asesoria-tributaria",
          },
          {
            name: "Auditoría Financiera",
            href: "/servicios/contabilidad/auditoria-financiera",
          },
        ],
      },
      // Servicio de asesoría jurídica
      {
        name: "Asesoría Jurídica",
        href: "/servicios/asesoria-juridica",
        categories: [
          {
            name: "Constitución de Empresas",
            href: "/servicios/asesoria-juridica/constitucion-empresas",
          },
          {
            name: "Contratos y Revisión Legal",
            href: "/servicios/asesoria-juridica/contratos-revision",
          },
          {
            name: "Representación Legal",
            href: "/servicios/asesoria-juridica/representacion-legal",
          },
        ],
      },
      // Servicios digitales
      {
        name: "Servicios Digitales",
        href: "/servicios/digitales",
        categories: [
          { name: "Marketing Digital", href: "/servicios/digitales/marketing" },
          { name: "Diseño Web", href: "/servicios/digitales/diseño-web" },
          {
            name: "Desarrollo de Sistemas",
            href: "/servicios/digitales/desarrollo",
          },
        ],
      },
    ],
  },
  { name: "Contáctanos", href: "/contacto" },
];

// Services
/*
export const services: Service[] = [
  {
    name: "Contabilidad Empresarial",
    title: "Servicios Contables Integrales",
    shortDescription:
      "Gestión contable y tributaria eficiente para que tu empresa cumpla con la normativa y optimice sus recursos.",
    longDescription: "Descripción completa de servicios contables...",
    imagePath: "/images/accounting-service-bg.jpg",
    objective: "Mantener orden financiero y cumplir obligaciones",
    tagline: "Mantén tus Finanzas en Orden sin Estrés",
    audience: "Empresas y emprendedores",
    features: "Declaraciones, balances, asesoría fiscal",
    subServices: [
      {
        name: "",
        shortDescription: "",
        longDescription: "",
        benefits: [""],
        slug: "",
      },
    ],
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
    subServices: [
      {
        name: "",
        shortDescription: "",
        longDescription: "",
        benefits: [""],
        slug: "",
      },
    ],
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
];*/
export const services: Service[] = [
  // Servicio de contabilidad
  {
    name: "Contabilidad Empresarial",
    title: "Servicios Contables Integrales",
    shortDescription:
      "Gestión contable y tributaria eficiente para que tu empresa cumpla con la normativa y optimice sus recursos.",
    longDescription:
      "Ofrecemos soluciones contables integrales diseñadas para simplificar la gestión financiera de tu empresa. Nuestro equipo de expertos te ayuda a mantener tus finanzas organizadas, cumplir con todas las obligaciones fiscales y tomar decisiones estratégicas basadas en información precisa y actualizada.",
    imagePath: "/images/accounting-service-bg.jpg",
    objective: "Mantener orden financiero y cumplir obligaciones",
    tagline: "Mantén tus Finanzas en Orden sin Estrés",
    audience: "Empresas y emprendedores",
    features: "Declaraciones, balances, asesoría fiscal",
    subServices: [
      // Sub-servicio de contabilidad básica
      {
        name: "Contabilidad Básica",
        shortDescription:
          "Registro y organización de tus movimientos financieros",
        longDescription:
          "Servicio fundamental para mantener un registro preciso y actualizado de todos los movimientos financieros de tu empresa. Incluye registro de ingresos, egresos, conciliación bancaria y preparación de estados financieros básicos.",
        benefits: [
          "Registro preciso de transacciones",
          "Mantenimiento de libros contables al día",
          "Preparación de estados financieros mensuales",
          "Soporte para declaraciones tributarias simples",
        ],
        slug: "contabilidad-basica",
      },
      // Sub-servicio de asesoría tributaria
      {
        name: "Asesoría Tributaria",
        shortDescription: "Optimización fiscal y cumplimiento normativo",
        longDescription:
          "Servicio especializado para ayudarte a cumplir con tus obligaciones tributarias de manera eficiente. Te asesoramos en la declaración de impuestos, identificación de beneficios fiscales y estrategias de optimización tributaria.",
        benefits: [
          "Declaraciones de impuestos precisas y oportunas",
          "Estrategias de ahorro fiscal legales",
          "Reducción de riesgos de sanciones",
          "Asesoramiento personalizado en normativa tributaria",
        ],
        slug: "asesoria-tributaria",
      },
      // Sub-servicio de auditoría financiera
      {
        name: "Auditoría Financiera",
        shortDescription: "Revisión y validación de registros contables",
        longDescription:
          "Servicio de auditoría integral que examina detalladamente tus registros financieros, garantizando su precisión, transparencia y cumplimiento de las normas contables vigentes. Incluye revisión de estados financieros, identificación de posibles riesgos y recomendaciones de mejora.",
        benefits: [
          "Verificación exhaustiva de registros contables",
          "Detección temprana de posibles irregularidades",
          "Mejora en los procesos financieros",
          "Informes detallados y recomendaciones",
        ],
        slug: "auditoria-financiera",
      },
    ],
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
  // Servicio de asesoria juridica
  {
    name: "Asesoría Jurídica",
    title: "Asesoría Legal Especializada",
    shortDescription:
      "Soluciones legales estratégicas para proteger y fortalecer tu negocio en cada paso.",
    longDescription:
      "Brindamos asesoramiento jurídico integral diseñado para prevenir y resolver problemas legales. Nuestro equipo de abogados expertos te acompaña en cada etapa, desde la constitución de tu empresa hasta la resolución de conflictos complejos.",
    imagePath: "/images/legal-service-bg.jpg",
    objective: "Solucionar problemas legales y prevenir conflictos",
    tagline: "Protege tu Negocio y Evita Problemas Legales",
    audience: "Negocios y personas con temas legales",
    features: "Contratos, representación legal, asesoría en litigios",
    subServices: [
      // Sub-servicio de constitución de empresas
      {
        name: "Constitución de Empresas",
        shortDescription: "Asesoría integral para la creación de tu negocio",
        longDescription:
          "Te guiamos en todo el proceso de constitución empresarial, desde la elección de la mejor estructura legal hasta la obtención de todos los permisos y registros necesarios. Simplificamos la burocracia para que puedas comenzar a operar rápidamente.",
        benefits: [
          "Selección de la estructura legal más adecuada",
          "Trámites de registro y constitución",
          "Asesoramiento en obligaciones iniciales",
          "Prevención de errores legales comunes",
        ],
        slug: "constitucion-empresas",
      },
      // Sub-servicio de contratos y revisión legal
      {
        name: "Contratos y Revisión Legal",
        shortDescription: "Protección y claridad en tus acuerdos comerciales",
        longDescription:
          "Elaboramos, revisamos y asesoramos en la redacción de contratos para garantizar tus intereses. Desde contratos comerciales hasta acuerdos de servicios, te ayudamos a minimizar riesgos y establecer relaciones contractuales sólidas.",
        benefits: [
          "Redacción de contratos a medida",
          "Revisión exhaustiva de documentos legales",
          "Identificación de cláusulas de riesgo",
          "Asesoramiento en negociación contractual",
        ],
        slug: "contratos-revision",
      },
      // Sub-servicio de representación legal
      {
        name: "Representación Legal",
        shortDescription: "Defensa de tus intereses en procesos legales",
        longDescription:
          "Ofrecemos representación legal integral en diversos ámbitos, incluyendo disputas comerciales, laborales y civiles. Nuestros abogados te representan con estrategia, profesionalismo y compromiso para proteger tus derechos e intereses.",
        benefits: [
          "Representación en tribunales y procesos legales",
          "Estrategias de defensa personalizadas",
          "Negociación y resolución de conflictos",
          "Seguimiento exhaustivo de procesos legales",
        ],
        slug: "representacion-legal",
      },
    ],
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
  // Servicios digitales
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
      // Sub-servicio de marketing digital
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
      // Sub-servicio de diseño web
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
      // Sub-servicio de desarrollo de sistemas
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
