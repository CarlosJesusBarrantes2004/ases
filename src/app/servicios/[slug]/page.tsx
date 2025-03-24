import HeroSection from "@/components/services/service/HeroSection";
import SubServices from "@/components/services/service/SubServices";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface Service {
  name: string;
  title: string;
  description: string;
  imagePath?: string;
  subServices?: SubService[];
}

export interface SubService {
  slug: string;
  title: string;
  description: string;
  benefits: string[];
  pricing: {
    plan: string;
    price: number | string;
    features: string[];
  }[];
}

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;

  const services: Record<string, Service> = {
    contabilidad: {
      name: "Contabilidad",
      title: "Servicios Contables Integrales",
      description: "Descripción completa de servicios contables...",
      imagePath: "/images/contabilidad-bg.jpg",
    },
    "asesoria-juridica": {
      name: "Asesoría Jurídica",
      title: "Asesoría Legal Especializada",
      description: "Descripción completa de asesoría jurídica...",
      imagePath: "/images/juridica-bg.jpg",
    },
    digitales: {
      name: "Servicios Digitales",
      title: "Impulsa tu negocio con soluciones digitales a medida",
      description:
        "En la era digital, contar con una estrategia online es clave para el crecimiento de cualquier empresa. Nuestros servicios digitales te ayudarán a mejorar tu presencia en internet, automatizar procesos y conectar mejor con tus clientes. ¡Lleva tu negocio al siguiente nivel!",
      imagePath: "/images/digital-service-bg.jpg",
      subServices: [
        {
          slug: "marketing",
          title: "Marketing Digital 📢",
          description:
            "Aumenta la visibilidad de tu negocio con estrategias efectivas de redes sociales, publicidad en línea y posicionamiento SEO. Llega a más clientes y haz crecer tu marca con campañas personalizadas.",
          benefits: [
            "Mayor alcance y visibilidad en internet",
            "Estrategias personalizadas para cada negocio",
            "Publicidad pagada optimizada para resultados rápidos",
            "Posicionamiento SEO para atraer clientes orgánicos",
          ],
          pricing: [
            {
              plan: "Básico",
              price: 250,
              features: [
                "Gestión de redes sociales (Facebook e Instagram)",
                "1 campaña publicitaria mensual",
                "Análisis de métricas y reporte mensual",
              ],
            },
            {
              plan: "Avanzado",
              price: 500,
              features: [
                "Gestión de redes sociales (Facebook, Instagram, TikTok)",
                "2 campañas publicitarias mensuales",
                "Optimización de contenido SEO básico",
                "Análisis de métricas y reporte quincenal",
              ],
            },
            {
              plan: "Premium",
              price: 900,
              features: [
                "Gestión completa de redes sociales + Google Ads",
                "SEO avanzado con optimización de contenido",
                "Manejo de email marketing y automatización",
                "Reportes detallados con estrategias de crecimiento",
              ],
            },
          ],
        },
        {
          slug: "diseño-web",
          title: "Diseño Web 🌐",
          description:
            "Creamos páginas web atractivas, funcionales y optimizadas para todos los dispositivos. Desde tiendas en línea hasta sitios corporativos, garantizamos una experiencia de usuario profesional y moderna.",
          benefits: [
            "Diseño responsivo y adaptable a cualquier pantalla",
            "Optimización para velocidad y SEO",
            "Integración con herramientas como Google Analytics",
            "Estrategia UX/UI para una mejor experiencia de usuario",
          ],
          pricing: [
            {
              plan: "Landing Page",
              price: 350,
              features: [
                "Diseño de una página única",
                "Formulario de contacto",
                "Integración con redes sociales",
                "Hosting y dominio (1 año incluido)",
              ],
            },
            {
              plan: "Web Corporativa",
              price: 700,
              features: [
                "Hasta 5 páginas (Inicio, Servicios, Nosotros, Contacto, Blog)",
                "Optimización SEO básica",
                "Diseño responsivo",
                "Integración con herramientas de marketing",
              ],
            },
            {
              plan: "E-commerce",
              price: 1200,
              features: [
                "Tienda online con carrito de compras",
                "Pasarelas de pago integradas",
                "Catálogo de productos autogestionable",
                "Optimización SEO avanzada",
              ],
            },
          ],
        },
        {
          slug: "desarrollo",
          title: "Desarrollo de Sistemas 🖥️",
          description:
            "Automatiza procesos y mejora la gestión de tu empresa con software personalizado. Desarrollamos sistemas a medida para optimizar la eficiencia y productividad de tu negocio.",
          benefits: [
            "Automatización de procesos empresariales",
            "Sistemas personalizados según las necesidades del negocio",
            "Integraciones con otras herramientas y plataformas",
            "Mayor seguridad y escalabilidad en la gestión de datos",
          ],
          pricing: [
            {
              plan: "Sistema Básico",
              price: 1500,
              features: [
                "Módulo de gestión de usuarios",
                "Panel de administración básico",
                "Base de datos segura",
                "Soporte técnico (1 mes incluido)",
              ],
            },
            {
              plan: "Sistema Empresarial",
              price: 3000,
              features: [
                "Módulo de gestión de usuarios y roles",
                "Integración con facturación electrónica",
                "Dashboards personalizados con reportes",
                "Soporte técnico (3 meses incluido)",
              ],
            },
            {
              plan: "Sistema Avanzado",
              price: "Desde 5000",
              features: [
                "Automatización completa de procesos",
                "Inteligencia artificial para análisis de datos",
                "Integración con ERP y CRM",
                "Soporte técnico (6 meses incluido)",
              ],
            },
          ],
        },
      ],
    },
  };

  const service = services[slug];

  if (!service)
    return (
      <section className="bg-white py-20 md:py-32 flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-red-primary mb-6">
          Servicio no encontrado
        </h1>
        <Link
          href={"/servicios"}
          className="inline-flex items-center gap-2 bg-red-primary text-white px-6 py-3 rounded-md font-medium hover:bg-red-600 transform hover:-translate-y-1 transition-all duration-300"
        >
          <ArrowLeft className="w-5 h-5"></ArrowLeft>
          <span>Regresar</span>
        </Link>
      </section>
    );

  return (
    <>
      <HeroSection
        name={service.name}
        title={service.title}
        description={service.description}
        imagePath={service.imagePath}
      ></HeroSection>
      <SubServices subServices={service.subServices}></SubServices>
    </>
  );
}

export default ServicePage;
