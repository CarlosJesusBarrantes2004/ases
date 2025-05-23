"use client";
import React, { useState, useMemo } from "react";
import { Search, Filter, ChevronDown, MapPin, Calendar, Users, Star } from "lucide-react";

// Datos de ejemplo para los proyectos
const proyectosData = [
  {
    id: 1,
    nombre: "Sistema de Gestión Empresarial",
    categoria: "Software",
    ubicacion: "Lima, Perú",
    fecha: "2024",
    cliente: "Empresa Comercial SAC",
    descripcion: "Desarrollo de sistema integral para gestión de inventarios, ventas y facturación electrónica.",
    imagen: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
    tags: ["ERP", "Facturación", "Inventarios"],
    rating: 5,
    estado: "Completado"
  },
  {
    id: 2,
    nombre: "Consultoría Financiera",
    categoria: "Consultoría",
    ubicacion: "Chiclayo, Perú",
    fecha: "2024",
    cliente: "Grupo Industrial Norte",
    descripcion: "Reestructuración financiera y optimización de procesos contables para mejora de rentabilidad.",
    imagen: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop",
    tags: ["Finanzas", "Optimización", "Rentabilidad"],
    rating: 5,
    estado: "Completado"
  },
  {
    id: 3,
    nombre: "Plataforma E-commerce",
    categoria: "Desarrollo Web",
    ubicacion: "Trujillo, Perú",
    fecha: "2024",
    cliente: "Retail Fashion Store",
    descripcion: "Desarrollo de tienda online con pasarela de pagos y sistema de gestión de productos.",
    imagen: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop",
    tags: ["E-commerce", "Pagos", "Retail"],
    rating: 4,
    estado: "En Progreso"
  },
  {
    id: 4,
    nombre: "Automatización de Procesos",
    categoria: "Automatización",
    ubicacion: "Arequipa, Perú",
    fecha: "2023",
    cliente: "Manufactura Industrial SA",
    descripcion: "Implementación de RPA para automatización de procesos administrativos y operativos.",
    imagen: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=300&fit=crop",
    tags: ["RPA", "Automatización", "Procesos"],
    rating: 5,
    estado: "Completado"
  },
  {
    id: 5,
    nombre: "App Móvil Corporativa",
    categoria: "Desarrollo Móvil",
    ubicacion: "Lima, Perú",
    fecha: "2024",
    cliente: "Servicios Logísticos Corp",
    descripcion: "Aplicación móvil para tracking de entregas y gestión de rutas logísticas.",
    imagen: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
    tags: ["Mobile", "Logística", "Tracking"],
    rating: 4,
    estado: "En Progreso"
  },
  {
    id: 6,
    nombre: "Business Intelligence",
    categoria: "Análisis de Datos",
    ubicacion: "Cusco, Perú",
    fecha: "2023",
    cliente: "Grupo Turismo Andino",
    descripcion: "Dashboard de BI para análisis de ventas, tendencias y toma de decisiones estratégicas.",
    imagen: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
    tags: ["BI", "Analytics", "Dashboard"],
    rating: 5,
    estado: "Completado"
  }
];

const categorias = ["Todas", "Software", "Consultoría", "Desarrollo Web", "Automatización", "Desarrollo Móvil", "Análisis de Datos"];
const ubicaciones = ["Todas", "Lima", "Chiclayo", "Trujillo", "Arequipa", "Cusco"];

export default function ProyectosPage() {
  const [busqueda, setBusqueda] = useState("");
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todas");
  const [ubicacionSeleccionada, setUbicacionSeleccionada] = useState("Todas");
  const [mostrarFiltros, setMostrarFiltros] = useState(false);

  const proyectosFiltrados = useMemo(() => {
    return proyectosData.filter(proyecto => {
      const coincideBusqueda = proyecto.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
                              proyecto.descripcion.toLowerCase().includes(busqueda.toLowerCase()) ||
                              proyecto.tags.some(tag => tag.toLowerCase().includes(busqueda.toLowerCase()));
      
      const coincideCategoria = categoriaSeleccionada === "Todas" || proyecto.categoria === categoriaSeleccionada;
      const coincideUbicacion = ubicacionSeleccionada === "Todas" || proyecto.ubicacion.includes(ubicacionSeleccionada);
      
      return coincideBusqueda && coincideCategoria && coincideUbicacion;
    });
  }, [busqueda, categoriaSeleccionada, ubicacionSeleccionada]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        size={16} 
        className={`${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-dark to-black-soft text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Nuestros Proyectos
            </h1>
            <p className="text-xl md:text-2xl text-gray-light mb-8">
              Descubre los proyectos exitosos que hemos desarrollado para nuestros clientes, 
              transformando sus ideas en soluciones reales y efectivas.
            </p>
            <div className="flex justify-center space-x-8 text-center">
              <div>
                <div className="text-3xl font-bold text-red-primary">50+</div>
                <div className="text-gray-light">Proyectos Completados</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-primary">98%</div>
                <div className="text-gray-light">Satisfacción Cliente</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-primary">15</div>
                <div className="text-gray-light">Ciudades</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filtros y Búsqueda */}
      <section className="py-8 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Barra de búsqueda */}
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Buscar proyectos..."
                  value={busqueda}
                  onChange={(e) => setBusqueda(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-primary focus:border-transparent outline-none"
                />
              </div>
            </div>

            {/* Botón de filtros móvil */}
            <button
              onClick={() => setMostrarFiltros(!mostrarFiltros)}
              className="lg:hidden flex items-center gap-2 px-4 py-3 bg-red-primary text-white rounded-lg hover:opacity-90 transition-all duration-300"
            >
              <Filter size={20} />
              Filtros
              <ChevronDown className={`transform transition-transform ${mostrarFiltros ? 'rotate-180' : ''}`} size={16} />
            </button>

            {/* Filtros desktop */}
            <div className="hidden lg:flex gap-4">
              <select
                value={categoriaSeleccionada}
                onChange={(e) => setCategoriaSeleccionada(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-primary focus:border-transparent outline-none"
              >
                {categorias.map(categoria => (
                  <option key={categoria} value={categoria}>{categoria}</option>
                ))}
              </select>
              
              <select
                value={ubicacionSeleccionada}
                onChange={(e) => setUbicacionSeleccionada(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-primary focus:border-transparent outline-none"
              >
                {ubicaciones.map(ubicacion => (
                  <option key={ubicacion} value={ubicacion}>{ubicacion}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Filtros móvil */}
          {mostrarFiltros && (
            <div className="lg:hidden mt-4 p-4 bg-gray-50 rounded-lg space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Categoría</label>
                <select
                  value={categoriaSeleccionada}
                  onChange={(e) => setCategoriaSeleccionada(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-primary focus:border-transparent outline-none"
                >
                  {categorias.map(categoria => (
                    <option key={categoria} value={categoria}>{categoria}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Ubicación</label>
                <select
                  value={ubicacionSeleccionada}
                  onChange={(e) => setUbicacionSeleccionada(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-primary focus:border-transparent outline-none"
                >
                  {ubicaciones.map(ubicacion => (
                    <option key={ubicacion} value={ubicacion}>{ubicacion}</option>
                  ))}
                </select>
              </div>
            </div>
          )}

          {/* Resultados */}
          <div className="mt-6 flex justify-between items-center text-gray-600">
            <p>
              Mostrando {proyectosFiltrados.length} de {proyectosData.length} proyectos
            </p>
          </div>
        </div>
      </section>

      {/* Grid de Proyectos */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {proyectosFiltrados.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-gray-700 mb-2">No se encontraron proyectos</h3>
              <p className="text-gray-500">Intenta ajustar tus filtros de búsqueda</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {proyectosFiltrados.map((proyecto) => (
                <div
                  key={proyecto.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
                >
                  {/* Imagen */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={proyecto.imagen}
                      alt={proyecto.nombre}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        proyecto.estado === 'Completado' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {proyecto.estado}
                      </span>
                    </div>
                  </div>

                  {/* Contenido */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-red-primary bg-red-50 px-2 py-1 rounded">
                        {proyecto.categoria}
                      </span>
                      <div className="flex items-center gap-1">
                        {renderStars(proyecto.rating)}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-primary transition-colors">
                      {proyecto.nombre}
                    </h3>

                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {proyecto.descripcion}
                    </p>

                    {/* Info del proyecto */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <Users size={16} className="mr-2" />
                        <span>{proyecto.cliente}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin size={16} className="mr-2" />
                        <span>{proyecto.ubicacion}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar size={16} className="mr-2" />
                        <span>{proyecto.fecha}</span>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {proyecto.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Botón */}
                    <button className="w-full bg-red-primary text-white py-3 rounded-lg font-medium hover:opacity-90 transition-all duration-300 group-hover:bg-gray-dark">
                      Ver Detalles
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-red-primary to-gray-dark text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Tienes un proyecto en mente?
            </h2>
            <p className="text-xl mb-8 text-gray-light">
              Conversemos sobre cómo podemos ayudarte a materializar tus ideas y 
              alcanzar tus objetivos empresariales.
            </p>
            <button className="bg-white text-red-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl">
              Iniciar mi Proyecto
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}