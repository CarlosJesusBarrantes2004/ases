import Link from "next/link";

function CallToAction() {
  return (
    <section className="py-16 bg-gray-dark text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          ¿Listo para llevar tu empresa al siguiente nivel?
        </h2>
        <p className="text-2xl mb-8 text-gray-300 max-w-2xl mx-auto">
          Contacta con nosotros hoy mismo y recibe una asesoría gratuita.
        </p>
        <Link
          href={"/contacto"}
          className="inline-block bg-red-primary text-white px-8 py-4 rounded-md text-lg font-semibold shadow-lg hover:opacity-95 transition-all-300 animate-pulse"
        >
          Hablar con un asesor
        </Link>
      </div>
    </section>
  );
}

export default CallToAction;
