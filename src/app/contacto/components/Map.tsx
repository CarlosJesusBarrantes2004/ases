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
        <section className="flex">
          <div className="bg-black-soft/60 duration-300 flex flex-col p-7 sm:p-10 lg:p-16 gap-4 items-center text-center lg:text-start lg:items-start justify-center h-fit lg:h-96 lg:w-1/3 rounded-s-md">
            <span className="text-3xl text-white group-hover:text-white font-medium  duration-300">
              Grupo Ases
            </span>
            <p className=" text-gray-200 text-lg duration-300">
              Calle Lora y Cordero 610, Chiclayo
            </p>
            <a
              className="rounded-lg bg-mainSection items-center self-center w-full max-w-96 group-hover:bg-transparent group-hover:border-main group-hover:text-main justify-center flex border-2 border-mainSection shadow-lg text-white duration-300 cursor-pointer active:scale-[0.98] mt-3"
              href="https://www.google.com/maps/dir//Lora+y+Cordero+610,+Chiclayo+14001/@-6.7697177,-79.8411525,17z/data=!3m1!4b1!4m6!3m5!1s0x904ceed821990009:0x43c254479e444279!8m2!3d-6.7697177!4d-79.8411525!16s%2Fg%2F11h1yw5xhl?entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoJLDEwMjExNjQwSAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="px-5 py-2">Como llegar</span>
            </a>
          </div>
          <div className="relative w-full rounded-e-md">
            <iframe
              className="absolute inset-0 w-full h-full rounded-e-md"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.001147208791!2d-79.84372742623135!3d-6.769712366198449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x904ceed821990009%3A0x43c254479e444279!2sLora%20y%20Cordero%20610%2C%20Chiclayo%2014001!5e0!3m2!1ses-419!2spe!4v1743022684972!5m2!1ses-419!2spe"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
      </div>
    </section>
  );
}

export default Map;
