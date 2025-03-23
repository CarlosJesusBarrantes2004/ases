import Link from "next/link";

function CallToAction() {
  return (
    <section className="py-16 bg-red-primary text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Impulsa tu negocio con el respaldo de expertos
        </h2>
        <p className="text-xl mb-10">
          📩 Agenda una consulta gratuita hoy mismo.
        </p>
        <Link
          href="/contacto"
          className="inline-block bg-white text-red-primary hover:bg-black-soft hover:text-white px-10 py-4 rounded-md font-bold text-lg transition-colors duration-300 shadow-lg"
        >
          Cotizar Servicio
        </Link>
      </div>
    </section>
  );
}

export default CallToAction;
