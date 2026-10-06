import React from 'react';
import { companyInfo } from '../data/companyInfo';
import { Wheat, Droplets, ShieldCheck, MapPin, Award, CheckCircle2 } from 'lucide-react';

export const StoryManifesto = () => {
  const guarantees = [
    {
      icon: Wheat,
      title: "100% Granos Puros",
      desc: "Sin jarabes de maíz ni cereales adjuntos de relleno industrial."
    },
    {
      icon: Droplets,
      title: "Filtrado Natural",
      desc: "Clarificación natural por decantación en frío sin químicos abrasivos."
    },
    {
      icon: ShieldCheck,
      title: "Trazabilidad Total",
      desc: "Cada botella porta su número de lote y fecha de embotellado."
    },
    {
      icon: MapPin,
      title: "Orgullo Regional",
      desc: "Elaborada y embotellada en origen por Leonardo Velarde en Ica."
    }
  ];

  return (
    <section className="w-full pt-12 pb-8 lg:pt-16 lg:pb-10 bg-[#18171a] border-t border-[#353437]/40" id="historia">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Narrative */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
                {companyInfo.manifesto.subtitle}
              </span>
              <span className="h-px w-12 bg-[#353437]"></span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl text-white uppercase tracking-tight leading-none">
              {companyInfo.manifesto.title}
            </h2>

            <p className="text-gray-300 text-base font-sans leading-relaxed">
              {companyInfo.manifesto.text1}
            </p>

            <p className="text-gray-400 text-sm font-sans leading-relaxed">
              {companyInfo.manifesto.text2}
            </p>

            {/* Guarantees List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {guarantees.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-[#121114] border border-[#353437]/60">
                    <Icon className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-mono text-xs text-white uppercase font-bold">
                        {item.title}
                      </h4>
                      <p className="text-gray-400 text-xs font-sans mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Display + Process Visual */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="relative w-full aspect-video bg-black overflow-hidden border border-[#353437] shadow-2xl">
              <img
                src="/images/historia.jpg"
                alt="Elaboración artesanal de cerveza Somanos en Ica"
                className="w-full h-full object-cover filter contrast-110 hover:contrast-125 transition-all duration-700"
              />
            </div>

            {/* Metric Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-[#0b0b0d] border border-[#353437]/60 flex flex-col justify-between">
                <span className="font-mono text-xs uppercase tracking-wider text-gray-400">
                  Ediciones en Micro-Lotes
                </span>
                <div className="my-3">
                  <span className="font-display text-4xl lg:text-5xl text-white font-bold">500</span>
                  <span className="font-mono text-xs text-[#d4af37] ml-1 font-bold">LITROS</span>
                </div>
                <p className="text-xs text-gray-400 font-sans">
                  Lotes pequeños y exclusivos para garantizar la máxima frescura y sabor en cada botella.
                </p>
              </div>

              <div className="p-6 bg-[#0b0b0d] border border-[#353437]/60 flex flex-col justify-between">
                <span className="font-mono text-xs uppercase tracking-wider text-gray-400">
                  Reposo y Maduración
                </span>
                <div className="my-3">
                  <span className="font-display text-4xl lg:text-5xl text-white font-bold">28+</span>
                  <span className="font-mono text-xs text-[#d4af37] ml-1 font-bold">DÍAS</span>
                </div>
                <p className="text-xs text-gray-400 font-sans">
                  Sin prisa comercial; respetamos el tiempo natural de fermentación y maduración en frío.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
