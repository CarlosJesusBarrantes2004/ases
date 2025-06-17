const Hero = () => {
  return (
    <section className="text-black-soft py-32">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Nuestros Proyectos
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Descubre los proyectos exitosos que hemos desarrollado para nuestros
            clientes, transformando sus ideas en soluciones reales y efectivas.
          </p>
          <div className="flex justify-center gap-9 text-center">
            <div className="bg-red-primary rounded-2xl px-4 py-6 text-white">
              <div className="text-3xl font-bold">50+</div>
              <div className="">Proyectos Completados</div>
            </div>
            <div className="bg-red-primary rounded-2xl px-4 py-6 text-white">
              <div className="text-3xl font-bold">98%</div>
              <div className="">Satisfacción Cliente</div>
            </div>
            <div className="bg-red-primary rounded-2xl px-4 py-6 text-white">
              <div className="text-3xl font-bold">15</div>
              <div className="">Ciudades</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
