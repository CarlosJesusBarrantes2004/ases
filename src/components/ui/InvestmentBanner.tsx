"use client";

import { useState } from "react";
import { X, TrendingUp } from "lucide-react";
import Link from "next/link";

function InvestmentBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 text-white py-2 px-4 relative overflow-hidden w-full z-50 h-14">
      {/* Altura fija */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 via-teal-400/20 to-cyan-400/20 animate-pulse"></div>
      <div className="container mx-auto flex items-center justify-between relative z-10 h-full">
        <div className="flex items-center space-x-3">
          <TrendingUp className="w-16 h-16 md:w-5 md:h-5 text-yellow-300 animate-bounce" />
          <span className="text-xs md:text-base font-medium">
            🚀 <strong>¡Invierte en tu futuro!</strong> Descubre las
            oportunidades de crecimiento que tenemos para ti
          </span>
        </div>
        <div className="flex items-center space-x-3">
          <Link
            href="/contacto"
            className="bg-white text-red-600 px-4 py-1 rounded-full text-xs md:text-sm font-semibold hover:bg-yellow-100 transition-all duration-300 hover:scale-105"
          >
            Conocer más
          </Link>
          <button
            onClick={() => setIsVisible(false)}
            className="text-white hover:text-yellow-300 transition-colors duration-300 hover:cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default InvestmentBanner;
