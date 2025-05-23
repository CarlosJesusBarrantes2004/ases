import React from "react";

export default function Cta() {
  return (
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
          <button className="bg-white text-red-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 hover:cursor-pointer transition-all duration-300 shadow-lg hover:shadow-xl">
            Iniciar mi Proyecto
          </button>
        </div>
      </div>
    </section>
  );
}
