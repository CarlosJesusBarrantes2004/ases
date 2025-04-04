import {
  Calculator,
  Scale,
  Smartphone,
  Megaphone,
  Monitor,
  Settings,
  Album,
  Coins,
  WalletMinimal,
  Building2,
  ReceiptText,
  AlignEndHorizontal,
} from "lucide-react";
export const services = [
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
    icon: <Calculator size={30}></Calculator>,
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
        imagePath: "/images/basic-accounting.jpg",
        slug: "contabilidad-basica",
        icon: <Album size={24}></Album>,
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
        imagePath: "/images/tax-advice.jpg",
        slug: "asesoria-tributaria",
        icon: <Coins size={24}></Coins>,
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
        imagePath: "/images/financial-audit.jpg",
        slug: "auditoria-financiera",
        icon: <WalletMinimal size={24}></WalletMinimal>,
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
    icon: <Scale size={30}></Scale>,
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
        imagePath: "/images/company-formation.jpg",
        slug: "constitucion-empresas",
        icon: <Building2 size={28}></Building2>,
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
        imagePath: "/images/contract-review.jpg",
        slug: "contratos-revision",
        icon: <ReceiptText size={28}></ReceiptText>,
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
        imagePath: "/images/legal-representation.jpg",
        slug: "representacion-legal",
        icon: <AlignEndHorizontal size={28}></AlignEndHorizontal>,
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
    icon: <Smartphone size={30}></Smartphone>,
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
        imagePath: "/images/marketing-digital.jpg",
        slug: "marketing",
        icon: <Megaphone size={24}></Megaphone>,
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
        imagePath: "/images/web-design.jpg",
        slug: "diseño-web",
        icon: <Monitor size={24}></Monitor>,
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
        imagePath: "/images/software-development.jpg",
        slug: "desarrollo",
        icon: <Settings size={24}></Settings>,
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
