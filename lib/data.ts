export interface Service {
  id: number;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  benefits: string[];
  icon?: string;
}

export const services: Service[] = [
  {
    id: 1,
    title: "Consultoría Estratégica",
    slug: "consultoria-estrategica",
    shortDescription:
      "Desarrollamos estrategias personalizadas para optimizar el rendimiento y el crecimiento sostenible de su empresa.",
    fullDescription:
      "Nuestra consultoría estratégica proporciona un análisis profundo de su negocio y su entorno competitivo. Desarrollamos planes de acción claros que le permiten alcanzar sus objetivos a corto y largo plazo, adaptándose a las condiciones cambiantes del mercado.",
    features: [
      "Análisis competitivo del mercado",
      "Definición de objetivos estratégicos",
      "Diseño de planes de acción",
      "Implementación y seguimiento de estrategias",
      "Asesoramiento en decisiones clave",
      "Optimización de modelos de negocio",
    ],
    benefits: [
      "Mejora en la toma de decisiones",
      "Claridad en la dirección estratégica",
      "Identificación de nuevas oportunidades",
      "Ventaja competitiva sostenible",
      "Alineación organizacional con objetivos",
    ],
  },
  {
    id: 2,
    title: "Gestión Financiera",
    slug: "gestion-financiera",
    shortDescription:
      "Asesoramos en la planificación, control y optimización de recursos financieros para maximizar la rentabilidad de su empresa.",
    fullDescription:
      "Nuestro servicio de gestión financiera le ayuda a entender, controlar y mejorar el desempeño financiero de su organización. Desde la planificación presupuestaria hasta el análisis de inversiones, le proporcionamos las herramientas necesarias para tomar decisiones financieras informadas y estratégicas.",
    features: [
      "Planificación financiera y presupuestaria",
      "Análisis de costos y rentabilidad",
      "Optimización de capital de trabajo",
      "Gestión de tesorería",
      "Estructura de financiamiento",
      "Valoración de empresas y proyectos",
    ],
    benefits: [
      "Mayor control sobre los recursos financieros",
      "Reducción de costos operativos",
      "Mejora en la liquidez empresarial",
      "Incremento en la rentabilidad",
      "Decisiones de inversión más acertadas",
    ],
  },
  {
    id: 3,
    title: "Transformación Digital",
    slug: "transformacion-digital",
    shortDescription:
      "Acompañamos a su empresa en el proceso de adopción y aprovechamiento de tecnologías digitales para mejorar su operación.",
    fullDescription:
      "La transformación digital es un proceso integral que va más allá de implementar tecnología. Ayudamos a su empresa a adoptar nuevas formas de trabajo, desarrollar capacidades digitales y crear una cultura de innovación que le permita competir efectivamente en la era digital.",
    features: [
      "Diagnóstico de madurez digital",
      "Diseño de hoja de ruta de transformación",
      "Implementación de herramientas digitales",
      "Automatización de procesos",
      "Capacitación en competencias digitales",
      "Gestión del cambio organizacional",
    ],
    benefits: [
      "Mayor eficiencia operacional",
      "Mejora en la experiencia del cliente",
      "Creación de nuevos modelos de negocio",
      "Acceso a nuevos mercados",
      "Adaptabilidad ante cambios del entorno",
    ],
  },
  {
    id: 4,
    title: "Recursos Humanos",
    slug: "recursos-humanos",
    shortDescription:
      "Desarrollamos soluciones para la gestión efectiva del talento, mejorando el clima laboral y la productividad de su equipo.",
    fullDescription:
      "Entendemos que las personas son el activo más valioso de su organización. Nuestros servicios de recursos humanos están diseñados para ayudarle a atraer, desarrollar y retener el mejor talento, creando un entorno laboral positivo y productivo que impulse los resultados de su negocio.",
    features: [
      "Evaluación y mejora del clima organizacional",
      "Diseño de estructuras organizativas",
      "Reclutamiento y selección de talento",
      "Gestión del desempeño",
      "Programas de capacitación y desarrollo",
      "Estrategias de compensación y beneficios",
    ],
    benefits: [
      "Retención del talento clave",
      "Aumento de la productividad",
      "Mejora del clima laboral",
      "Reducción de la rotación de personal",
      "Mayor compromiso de los empleados",
    ],
  },
  {
    id: 5,
    title: "Marketing y Ventas",
    slug: "marketing",
    shortDescription:
      "Diseñamos e implementamos estrategias para potenciar su marca, captar clientes y aumentar sus ventas.",
    fullDescription:
      "Nuestro enfoque de marketing y ventas se centra en desarrollar estrategias que conecten con su público objetivo y generen resultados medibles. Combinamos creatividad con análisis de datos para maximizar el retorno de su inversión en marketing y potenciar el crecimiento de sus ventas.",
    features: [
      "Diagnóstico y posicionamiento de marca",
      "Desarrollo de planes de marketing",
      "Estrategias de marketing digital",
      "Optimización de canales de venta",
      "Capacitación de equipos comerciales",
      "Análisis y segmentación de clientes",
    ],
    benefits: [
      "Incremento en el reconocimiento de marca",
      "Generación de leads cualificados",
      "Mejora en tasas de conversión",
      "Aumento de ingresos por ventas",
      "Mayor fidelización de clientes",
    ],
  },
  {
    id: 6,
    title: "Operaciones y Procesos",
    slug: "operaciones",
    shortDescription:
      "Optimizamos los procesos operativos de su empresa para mejorar la eficiencia, reducir costos y aumentar la calidad.",
    fullDescription:
      "La optimización de operaciones y procesos es fundamental para la competitividad de su empresa. Ayudamos a identificar oportunidades de mejora, rediseñar flujos de trabajo y aplicar metodologías de gestión que permitan elevar la eficiencia operativa, reducir costos y mejorar la calidad de sus productos o servicios.",
    features: [
      "Diagnóstico y mapeo de procesos",
      "Reingeniería y optimización de procesos",
      "Implementación de metodologías Lean y Six Sigma",
      "Gestión de la cadena de suministro",
      "Planificación y control de la producción",
      "Sistemas de gestión de calidad",
    ],
    benefits: [
      "Reducción de tiempos y costos operativos",
      "Mejora en la calidad del producto o servicio",
      "Estandarización de procesos clave",
      "Eliminación de cuellos de botella",
      "Mayor agilidad y flexibilidad operativa",
    ],
  },
];
