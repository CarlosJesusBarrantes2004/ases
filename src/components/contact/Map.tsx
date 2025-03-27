function Map() {
  return (
    <section className="py-16 md:py-20 bg-gray-dark">
      <div className="container mx-auto px-4">
        {/* Encabezado */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Contáctanos y Ubícanos
          </h2>
          <div className="w-24 h-1 bg-red-primary mx-auto mb-6"></div>
          <p className="text-white text-base md:text-lg mx-auto max-w-2xl">
            Estamos listos para escuchar tu proyecto. Completa el formulario o
            visítanos en nuestra ubicación.
          </p>
        </div>
        {/* Contenedor responsivo para el mapa */}
        <div className="relative w-full" style={{ aspectRatio: "16 / 9" }}>
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.001147208791!2d-79.84372742623135!3d-6.769712366198449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x904ceed821990009%3A0x43c254479e444279!2sLora%20y%20Cordero%20610%2C%20Chiclayo%2014001!5e0!3m2!1ses-419!2spe!4v1743022684972!5m2!1ses-419!2spe"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Map;
