import React from 'react';
import { companyInfo } from '../data/companyInfo';
import { ShieldAlert } from 'lucide-react';

const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

export const Footer = () => {
  return (
    <footer className="w-full bg-[#0b0b0d] border-t border-[#353437]/60">
      
      {/* Legal Banner */}
      <div className="bg-black/80 border-b border-[#353437]/40 py-3 px-4 text-center">
        <p className="font-mono text-[0.7rem] sm:text-xs uppercase tracking-widest text-gray-300 flex items-center justify-center gap-2 max-w-4xl mx-auto leading-relaxed">
          <ShieldAlert className="w-5 h-5 sm:w-6 sm:h-6 text-[#d4af37] shrink-0" />
          <span>Tomar bebidas alcohólicas en exceso es dañino · Venta prohibida a menores de 18 años · Ley Nº 28681</span>
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          
          {/* Column 1: Brand Info */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 rounded-full overflow-hidden border border-[#d4af37]/50 flex items-center justify-center bg-black shadow-lg shrink-0">
                <img
                  src={companyInfo.logoUrl}
                  alt="Somanos Logo"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-2xl uppercase text-white tracking-wider leading-none">
                  {companyInfo.name}
                </span>
                <span className="font-mono text-[0.65rem] uppercase tracking-widest text-[#d4af37] mt-1">
                  Maestría Artesanal en el Desierto Costero
                </span>
              </div>
            </div>

            <p className="text-gray-400 text-xs font-sans max-w-sm leading-relaxed">
              Elaboramos cerveza de autor con precisión quirúrgica y carácter indomable. Fermentación en lotes limitados inspirada en el terroir del valle de Ica, Perú.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-[0.65rem] text-gray-400 uppercase">
              <span className="px-2.5 py-0.5 border border-[#353437] bg-[#121114]">Lote Limitado</span>
              <span className="px-2.5 py-0.5 border border-[#353437] bg-[#121114]">100% Malta</span>
              <span className="px-2.5 py-0.5 border border-[#353437] bg-[#121114]">Ica · PE</span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="flex flex-col gap-3 md:pl-8">
            <span className="font-mono text-xs uppercase tracking-wider text-white border-b border-[#353437] pb-2 font-bold max-w-[200px]">
              Explorar
            </span>
            <div className="flex flex-col gap-2 font-sans text-xs">
              <a href="#cervezas" className="text-gray-400 hover:text-[#d4af37] transition-colors">
                Línea de Cervezas
              </a>
              <a href="#historia" className="text-gray-400 hover:text-[#d4af37] transition-colors">
                Nuestra Historia
              </a>
              <a href="#packs" className="text-gray-400 hover:text-[#d4af37] transition-colors">
                Packs & Envíos
              </a>
              <a href="#contacto" className="text-gray-400 hover:text-[#d4af37] transition-colors">
                Contacto Directo
              </a>
            </div>
          </div>

          {/* Column 3: Location */}
          <div className="flex flex-col gap-3">
            <span className="font-mono text-xs uppercase tracking-wider text-white border-b border-[#353437] pb-2 font-bold max-w-[200px]">
              Ubicación & Contacto
            </span>
            <div className="flex flex-col gap-1.5 font-sans text-xs text-gray-400">
              <p>{companyInfo.address}</p>
              <a href={`mailto:${companyInfo.email}`} className="font-mono text-[0.7rem] text-gray-400 hover:text-[#d4af37] mt-1 transition-colors block">
                {companyInfo.email}
              </a>
              <p className="font-mono text-xs text-[#d4af37] font-bold">{companyInfo.phone}</p>
              <a
                href={companyInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[0.7rem] text-gray-300 hover:text-[#d4af37] mt-1 transition-colors uppercase tracking-wider flex items-center gap-1.5"
              >
                <InstagramIcon className="w-4 h-4 text-[#d4af37]" />
                <span>{companyInfo.instagramHandle}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 pt-6 border-t border-[#353437]/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-mono text-[0.65rem] text-gray-500 tracking-wider">
            © 2026 {companyInfo.fullTitle} RUC {companyInfo.ruc}. Todos los derechos reservados.
          </span>
          <div className="flex items-center gap-6 font-mono text-[0.65rem] text-gray-400 uppercase tracking-wider">
            <a href={companyInfo.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-[#d4af37]">
              Instagram Oficial
            </a>
            <a href="#" className="hover:text-white">Aviso Legal</a>
            <a href="#" className="hover:text-white">Privacidad</a>
            <a href="#" className="hover:text-white">Términos</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
