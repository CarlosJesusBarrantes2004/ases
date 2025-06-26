"use client";

import React, { useState } from "react";
import {
  MapPin,
  Calendar,
  Users,
  Star,
  Clock,
  CheckCircle,
  Phone,
  Mail,
  Globe,
  ChevronLeft,
  Play,
  Award,
  Target,
  TrendingUp,
  Lightbulb,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Datos del proyecto (normalmente vendrían de una API o base de datos)
const proyectoData = {
  id: 1,
  nombre: "Sistema de Gestión Empresarial",
  categoria: "Software",
  ubicacion: "Lima, Perú",
  fecha: "2024",
  duracion: "6 meses",
  cliente: "Empresa Comercial SAC",
  descripcion:
    "Desarrollo de sistema integral para gestión de inventarios, ventas y facturación electrónica que revolucionó los procesos operativos del cliente.",
  descripcionLarga:
    "Este ambicioso proyecto consistió en la creación de un sistema ERP completo que integra múltiples módulos empresariales. El sistema incluye gestión de inventarios en tiempo real, módulo de ventas con CRM integrado, facturación electrónica SUNAT, reportes avanzados y dashboard ejecutivo. La solución fue desarrollada con tecnologías modernas y se implementó siguiendo metodologías ágiles.",
  imagen:
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
  galeria: [
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
  ],
  tags: ["ERP", "Facturación", "Inventarios", "CRM", "SUNAT"],
  rating: 5,
  estado: "Completado",
  presupuesto: "$25,000 - $40,000",
  tecnologias: ["React", "Node.js", "PostgreSQL", "AWS", "TypeScript"],
  objetivos: [
    "Automatizar procesos manuales de inventario",
    "Integrar facturación electrónica con SUNAT",
    "Mejorar trazabilidad de ventas",
    "Reducir errores operativos en un 80%",
    "Generar reportes ejecutivos en tiempo real",
  ],
  resultados: [
    "Reducción del 85% en tiempo de procesamiento",
    "Eliminación total de errores de facturación",
    "Aumento del 40% en productividad",
    "ROI del 300% en el primer año",
    "100% de cumplimiento normativo SUNAT",
  ],
  fases: [
    {
      nombre: "Análisis y Diseño",
      duracion: "1 mes",
      descripcion: "Levantamiento de requerimientos y diseño de arquitectura",
    },
    {
      nombre: "Desarrollo Backend",
      duracion: "2 meses",
      descripcion: "Implementación de APIs y lógica de negocio",
    },
    {
      nombre: "Desarrollo Frontend",
      duracion: "2 meses",
      descripcion: "Creación de interfaces y experiencia de usuario",
    },
    {
      nombre: "Testing e Integración",
      duracion: "3 semanas",
      descripcion: "Pruebas exhaustivas y integración con sistemas externos",
    },
    {
      nombre: "Despliegue y Capacitación",
      duracion: "1 semana",
      descripcion: "Puesta en producción y entrenamiento al equipo",
    },
  ],
  testimonial: {
    texto:
      "El sistema desarrollado por Grupo Ases transformó completamente nuestra operación. La automatización y integración lograda superó nuestras expectativas. Excelente equipo profesional.",
    autor: "María González",
    cargo: "Gerente General",
    empresa: "Empresa Comercial SAC",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
  },
};

export default function ProjectDetailPage() {
  const [imagenActiva, setImagenActiva] = useState(0);
  const [mostrarVideo, setMostrarVideo] = useState(false);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={20}
        className={`${
          i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-red-primary transition-colors">
              Inicio
            </Link>
            <span>/</span>
            <Link
              href="/proyectos"
              className="hover:text-red-primary transition-colors"
            >
              Proyectos
            </Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">
              {proyectoData.nombre}
            </span>
          </div>
        </div>
      </div>

      {/* Header del Proyecto */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <Link
            href="/proyectos"
            className="inline-flex items-center gap-2 text-red-primary hover:text-red-600 transition-colors mb-6"
          >
            <ChevronLeft size={20} />
            Volver a Proyectos
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Información Principal */}
            <div className="lg:col-span-2">
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                  {proyectoData.categoria}
                </span>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    proyectoData.estado === "Completado"
                      ? "bg-green-100 text-green-800"
                      : "bg-blue-100 text-blue-800"
                  }`}
                >
                  {proyectoData.estado}
                </span>
                <div className="flex items-center gap-1">
                  {renderStars(proyectoData.rating)}
                  <span className="text-gray-600 ml-2">
                    ({proyectoData.rating}.0)
                  </span>
                </div>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {proyectoData.nombre}
              </h1>

              <p className="text-xl text-gray-600 mb-6">
                {proyectoData.descripcion}
              </p>

              {/* Información Clave */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Users className="mx-auto mb-2 text-red-primary" size={24} />
                  <div className="text-sm text-gray-600">Cliente</div>
                  <div className="font-semibold">{proyectoData.cliente}</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Calendar
                    className="mx-auto mb-2 text-red-primary"
                    size={24}
                  />
                  <div className="text-sm text-gray-600">Año</div>
                  <div className="font-semibold">{proyectoData.fecha}</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Clock className="mx-auto mb-2 text-red-primary" size={24} />
                  <div className="text-sm text-gray-600">Duración</div>
                  <div className="font-semibold">{proyectoData.duracion}</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <MapPin className="mx-auto mb-2 text-red-primary" size={24} />
                  <div className="text-sm text-gray-600">Ubicación</div>
                  <div className="font-semibold">{proyectoData.ubicacion}</div>
                </div>
              </div>
            </div>

            {/* Sidebar de Contacto */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-red-primary to-red-600 text-white p-6 rounded-xl shadow-lg sticky top-24">
                <h3 className="text-xl font-bold mb-4">¿Proyecto Similar?</h3>
                <p className="text-red-100 mb-6">
                  Podemos desarrollar una solución personalizada para tu empresa
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <Phone size={18} />
                    <span>+51 975 733 304</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail size={18} />
                    <span>info@grupoases.pe</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe size={18} />
                    <span>grupoases.pe</span>
                  </div>
                </div>

                <button className="w-full bg-white text-red-primary py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300">
                  Solicitar Cotización
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galería de Imágenes */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Galería del Proyecto</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Imagen Principal */}
            <div className="lg:col-span-2">
              <div className="relative aspect-video rounded-xl overflow-hidden">
                <Image
                  src={proyectoData.galeria[imagenActiva]}
                  alt={`Vista ${imagenActiva + 1} del proyecto`}
                  width={500}
                  height={300}
                  className="w-full h-full object-cover"
                />
                {!mostrarVideo && (
                  <button
                    onClick={() => setMostrarVideo(true)}
                    className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 hover:bg-opacity-50 transition-all duration-300 group"
                  >
                    <div className="bg-white rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
                      <Play className="text-red-primary" size={32} />
                    </div>
                  </button>
                )}
              </div>
            </div>

            {/* Miniaturas */}
            <div className="space-y-4">
              {proyectoData.galeria.map((imagen, index) => (
                <button
                  key={index}
                  onClick={() => setImagenActiva(index)}
                  className={`w-full aspect-video rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    imagenActiva === index
                      ? "border-red-primary"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <Image
                    src={imagen}
                    width={500}
                    height={300}
                    alt={`Vista ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Descripción Detallada */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Lightbulb className="text-red-primary" />
                Descripción del Proyecto
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                {proyectoData.descripcionLarga}
              </p>

              {/* Tecnologías */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-3">
                  Tecnologías Utilizadas
                </h3>
                <div className="flex flex-wrap gap-2">
                  {proyectoData.tecnologias.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div>
              {/* Objetivos */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Target className="text-red-primary" />
                  Objetivos del Proyecto
                </h3>
                <ul className="space-y-2">
                  {proyectoData.objetivos.map((objetivo, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle
                        className="text-green-500 mt-1 flex-shrink-0"
                        size={16}
                      />
                      <span className="text-gray-700">{objetivo}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resultados */}
              <div>
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <TrendingUp className="text-red-primary" />
                  Resultados Obtenidos
                </h3>
                <ul className="space-y-2">
                  {proyectoData.resultados.map((resultado, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Award
                        className="text-yellow-500 mt-1 flex-shrink-0"
                        size={16}
                      />
                      <span className="text-gray-700 font-medium">
                        {resultado}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <div className="text-6xl text-red-primary mb-4">&quot;</div>
              <p className="text-xl md:text-2xl leading-relaxed mb-8">
                {proyectoData.testimonial.texto}
              </p>
            </div>

            <div className="flex items-center justify-center gap-4">
              <Image
                width={700}
                height={500}
                src={proyectoData.testimonial.avatar}
                alt={proyectoData.testimonial.autor}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="text-left">
                <div className="font-semibold text-lg">
                  {proyectoData.testimonial.autor}
                </div>
                <div className="text-gray-400">
                  {proyectoData.testimonial.cargo}
                </div>
                <div className="text-red-primary">
                  {proyectoData.testimonial.empresa}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-r from-red-primary to-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Te Inspiró Este Proyecto?
            </h2>
            <p className="text-xl mb-8 text-red-100">
              Podemos crear una solución similar o completamente personalizada
              para tu empresa. Conversemos sobre tus necesidades.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-red-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg">
                Solicitar Cotización
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-red-primary transition-all duration-300">
                Ver Más Proyectos
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
