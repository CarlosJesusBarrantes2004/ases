const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-gray-dark to-black-soft text-white py-32">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Nuestros Proyectos
          </h1>
          <p className="text-xl md:text-2xl text-gray-light mb-8">
            Descubre los proyectos exitosos que hemos desarrollado para nuestros
            clientes, transformando sus ideas en soluciones reales y efectivas.
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
  );
};

export default Hero;
