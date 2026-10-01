import React from 'react';

export const Ticker = () => {
  const items = [
    { text: "CERVECERÍA DE AUTOR", gold: true },
    { text: "AGUA DE POZO PROFUNDO", gold: false },
    { text: "FERMENTACIÓN LENTA", gold: false },
    { text: "MAESTRO CERVECERO LVJ", gold: true },
    { text: "HECHO EN ICA · PERÚ", gold: false },
    { text: "100% GRANOS SELECTOS", gold: false },
    { text: "DESPACHO DIRECTO DE BODEGA", gold: true }
  ];

  return (
    <section className="w-full bg-[#18171b] border-y border-[#353437]/40 py-3 overflow-hidden">
      <div className="relative w-full overflow-hidden whitespace-nowrap">
        <div className="animate-marquee-infinite items-center gap-8 font-mono text-xs uppercase tracking-widest text-[#cfcfd8]">
          <div className="flex items-center gap-8 pr-8">
            {items.map((item, idx) => (
              <React.Fragment key={idx}>
                <span className={item.gold ? "text-[#d4af37] font-semibold" : "text-gray-300"}>
                  {item.text}
                </span>
                <span className="text-gray-600">•</span>
              </React.Fragment>
            ))}
          </div>

          <div aria-hidden="true" className="flex items-center gap-8 pr-8">
            {items.map((item, idx) => (
              <React.Fragment key={`dup-${idx}`}>
                <span className={item.gold ? "text-[#d4af37] font-semibold" : "text-gray-300"}>
                  {item.text}
                </span>
                <span className="text-gray-600">•</span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
