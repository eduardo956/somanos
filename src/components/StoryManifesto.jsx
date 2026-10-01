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
    <section className="w-full py-16 lg:py-24 bg-[#18171a] border-y border-[#353437]/40" id="historia">
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
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBixy-uo7alDBYEIl8tqYpv6eWnoP2ym6uJ017_iA0p1PJbHIwGD8IQbd_Dgi8XKjzYrRupCWQ3VXILJSsgnkYUP0QdTZpgiSwdqLJUFSd2DmAZLglMbRa8BY_csSQ3meaaCrrKOim-nKOP-hYDeKJEdAjHyKfqv7KlgRtLnrOQt1tPmT4LkNbx7bktfcJUYQlAzIyQylXBF4jzZGOFZ5sPpd-w46wtKikPPd7n9p_k6R7YQfMjJ4CAWA"
                alt="Planta de fermentación y tanques industriales de Somanos en Ica"
                className="w-full h-full object-cover filter grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono">
                <span className="text-white bg-black/80 px-2.5 py-1 border border-[#353437]">
                  Planta Piloto · Ica, Perú
                </span>
                <span className="text-gray-400 bg-black/80 px-2.5 py-1 border border-[#353437]">
                  Reg. Sanitario: {companyInfo.sanitaryReg}
                </span>
              </div>
            </div>

            {/* Metric Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-[#0b0b0d] border border-[#353437]/60 flex flex-col justify-between">
                <span className="font-mono text-xs uppercase tracking-wider text-gray-400">
                  Capacidad por Lote
                </span>
                <div className="my-3">
                  <span className="font-display text-4xl lg:text-5xl text-white font-bold">500</span>
                  <span className="font-mono text-xs text-[#d4af37] ml-1 font-bold">LITROS</span>
                </div>
                <p className="text-xs text-gray-400 font-sans">
                  Micro-lotes cuidados para garantizar frescura y máxima potencia organoléptica.
                </p>
              </div>

              <div className="p-6 bg-[#0b0b0d] border border-[#353437]/60 flex flex-col justify-between">
                <span className="font-mono text-xs uppercase tracking-wider text-gray-400">
                  Dias de Maduracion
                </span>
                <div className="my-3">
                  <span className="font-display text-4xl lg:text-5xl text-white font-bold">28+</span>
                  <span className="font-mono text-xs text-[#d4af37] ml-1 font-bold">DIAS</span>
                </div>
                <p className="text-xs text-gray-400 font-sans">
                  Sin apuros industriales; respetamos el tiempo sagrado de reposo cervecero.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
