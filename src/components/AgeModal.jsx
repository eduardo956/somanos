import React from 'react';
import { useAge } from '../context/AgeContext';
import { ShieldAlert, Check, X } from 'lucide-react';
import { companyInfo } from '../data/companyInfo';

export const AgeModal = () => {
  const { showAgeModal, confirmAge, rejectAge } = useAge();

  if (!showAgeModal) return null;

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 overflow-y-auto">
      <div className="max-w-lg w-full bg-[#121114] border border-[#d4af37]/70 p-6 sm:p-10 shadow-2xl relative flex flex-col items-center text-center my-auto">
        
        {/* Brand Icon Badge */}
        <div className="w-20 h-20 rounded-full border-2 border-[#d4af37] overflow-hidden mb-6 bg-black p-1 shadow-xl">
          <img
            src="/images/logo.png"
            alt="Somanos Logo"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Mandatory Header Tag */}
        <div className="flex items-center justify-center gap-2 text-[#d4af37] font-mono text-[0.7rem] sm:text-xs uppercase tracking-widest mb-3 font-bold">
          <ShieldAlert className="w-4 h-4 shrink-0 text-[#d4af37]" />
          <span>Verificación de Edad Mandatoria</span>
        </div>

        {/* Title */}
        <h2 className="font-display text-3xl sm:text-4xl uppercase tracking-wider text-white mb-3">
          ¿Tienes 18 años o más?
        </h2>

        {/* Description */}
        <p className="text-xs sm:text-sm text-gray-400 mb-8 leading-relaxed font-sans max-w-sm">
          Para acceder a nuestro catálogo de cerveza artesanal y realizar pedidos, debes confirmar que posees la mayoría de edad legal en el Perú.
        </p>

        {/* Buttons Grid - Identical Height & No Awkward Text Wraps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full">
          <button
            onClick={confirmAge}
            className="w-full min-h-[3.25rem] px-3 py-3 bg-[#d4af37] text-black font-mono text-xs font-bold uppercase tracking-wider hover:bg-white transition-all duration-200 flex items-center justify-center gap-2 border border-[#d4af37] shadow-lg whitespace-nowrap"
          >
            <Check className="w-4 h-4 shrink-0 stroke-[2.5]" />
            <span>Sí, soy mayor de 18</span>
          </button>

          <button
            onClick={rejectAge}
            className="w-full min-h-[3.25rem] px-3 py-3 bg-[#18171a] text-gray-300 font-mono text-xs font-semibold uppercase tracking-wider hover:bg-red-950/80 hover:text-red-300 hover:border-red-500/60 border border-[#353437] transition-all duration-200 flex items-center justify-center gap-2 whitespace-nowrap"
          >
            <X className="w-4 h-4 shrink-0 stroke-[2.5]" />
            <span>No, salir</span>
          </button>
        </div>

        {/* Legal Disclaimer Footer */}
        <p className="text-[0.65rem] sm:text-[0.7rem] text-gray-500 uppercase tracking-widest mt-8 font-mono border-t border-[#353437]/60 pt-4 w-full">
          Tomar bebidas alcohólicas en exceso es dañino · Ley Nº 28681
        </p>
      </div>
    </div>
  );
};
