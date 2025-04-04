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
