"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";

function BtnWhatsapp() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Tooltip */}
      <div
        className={`absolute bottom-16 right-0 bg-white rounded-lg shadow-xl p-3 transition-all duration-300 ${
          isHovered
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-2 pointer-events-none"
        }`}
      >
        <div className="text-sm font-medium text-slate-700 whitespace-nowrap">
          ¡Chatea con nosotros!
        </div>
        <div className="text-xs text-slate-500">Te respondemos al instante</div>
        {/* Flecha del tooltip */}
        <div className="absolute -bottom-1 right-4 w-2 h-2 bg-white rotate-45 shadow"></div>
      </div>

      {/* Botón principal */}
      <a
        href="https://wa.me/975733304?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20sus%20servicios%20de%20asesor%C3%ADa"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full shadow-2xl hover:from-green-600 hover:to-emerald-600 hover:scale-110 transition-all duration-300 animate-pulse hover:animate-none"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <MessageCircle
          size={28}
          className="group-hover:scale-110 transition-transform duration-300"
        />

        {/* Efecto de ondas */}
        <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-20"></div>
        <div
          className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-20"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </a>

      {/* Indicador de estado online */}
      <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white shadow-lg">
        <div className="w-full h-full bg-green-500 rounded-full animate-pulse"></div>
      </div>
    </div>
  );
}

export default BtnWhatsapp;
