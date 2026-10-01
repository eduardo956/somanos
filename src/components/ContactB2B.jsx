import React from 'react';
import { companyInfo } from '../data/companyInfo';
import { WHATSAPP_CONFIG } from '../config/whatsappConfig';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { Building2, ArrowRight } from 'lucide-react';

const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

export const ContactB2B = () => {
  return (
    <section className="w-full py-16 lg:py-24 bg-[#18171a] border-b border-[#353437]/40" id="contacto">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div className="flex flex-col">
            <span className="font-mono text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
              Canal Directo & Atención al Cliente
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-white uppercase tracking-wide mt-1">
              Contáctanos y Haz Tu Pedido
            </h2>
          </div>
          <p className="text-gray-400 font-sans text-sm max-w-md">
            Atención prioritaria y despacho directo desde nuestra planta en Ica. Coordina packs de autor, cajas de degustación y suministros para bares o eventos.
          </p>
        </div>

        {/* Grid 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: WhatsApp Direct */}
          <div className="p-6 md:p-8 bg-[#0b0b0d] border border-[#353437]/60 hover:border-emerald-500/50 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-full bg-[#18171b] border border-emerald-500/50 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                  <WhatsAppIcon className="w-6 h-6 text-emerald-400" />
                </div>
                <span className="bg-emerald-950/70 border border-emerald-500/40 text-emerald-400 font-mono text-[0.65rem] px-2.5 py-1 uppercase tracking-wider font-semibold">
                  Respuesta &lt; 5 min
                </span>
              </div>
              <h3 className="font-display text-2xl text-white uppercase tracking-wide mb-1">
                Línea Directa WhatsApp
              </h3>
              <div className="font-mono text-base text-[#d4af37] font-bold mb-3">
                {WHATSAPP_CONFIG.phoneNumber}
              </div>
              <p className="text-gray-400 font-sans text-xs mb-6 leading-relaxed">
                Pide tus six-packs o cajas de colección al instante con delivery local en Ica y envíos directos de bodega.
              </p>
            </div>
            <a
              href={WHATSAPP_CONFIG.getGeneralUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 bg-[#d4af37] text-black font-mono text-xs font-bold uppercase tracking-wider text-center hover:bg-[#f1d479] transition-colors flex items-center justify-center gap-2"
            >
              <WhatsAppIcon className="w-4 h-4 text-black" />
              <span>Chatear por WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Card 2: Instagram Official */}
          <div className="p-6 md:p-8 bg-[#0b0b0d] border border-[#353437]/60 hover:border-[#d4af37]/50 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-full bg-[#18171b] border border-[#353437] flex items-center justify-center text-white group-hover:border-[#d4af37]/50 transition-colors">
                  <InstagramIcon className="w-6 h-6" />
                </div>
                <span className="bg-[#1f1e22] border border-[#353437] text-[#b8b8c0] font-mono text-[0.65rem] px-2.5 py-1 uppercase tracking-wider font-semibold">
                  {companyInfo.instagramHandle}
                </span>
              </div>
              <h3 className="font-display text-2xl text-white uppercase tracking-wide mb-1">
                Instagram Oficial
              </h3>
              <div className="font-mono text-base text-[#d4af37] font-bold mb-3">
                Comunidad & Novedades
              </div>
              <p className="text-gray-400 font-sans text-xs mb-6 leading-relaxed">
                Síguenos para conocer lotes experimentales, procesos de fermentación y eventos especiales en Ica.
              </p>
            </div>
            <a
              href={companyInfo.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 bg-[#1f1e22] border border-[#353437] text-white font-mono text-xs font-bold uppercase tracking-wider text-center hover:bg-[#d4af37] hover:text-black transition-colors flex items-center justify-center gap-2"
            >
              <span>Ver en Instagram</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Card 3: B2B & Wholesale */}
          <div className="p-6 md:p-8 bg-[#0b0b0d] border border-[#353437]/60 hover:border-emerald-500/50 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-full bg-[#18171b] border border-[#353437] flex items-center justify-center text-[#d4af37] group-hover:border-[#d4af37]/50 transition-colors">
                  <Building2 className="w-6 h-6" />
                </div>
                <span className="bg-[#1f1e22] border border-[#353437] text-[#f1d479] font-mono text-[0.65rem] px-2.5 py-1 uppercase tracking-wider font-semibold">
                  Ventas Corporativas B2B
                </span>
              </div>
              <h3 className="font-display text-2xl text-white uppercase tracking-wide mb-1">
                Bares, Resto & Eventos
              </h3>
              <a href={`mailto:${companyInfo.email}`} className="font-mono text-xs text-[#d4af37] font-bold mb-3 truncate hover:underline block">
                {companyInfo.email}
              </a>
              <p className="text-gray-400 font-sans text-xs mb-6 leading-relaxed">
                Atención comercial a bares, restaurantes gastronómicos y eventos privados con barriles (kegs) y cajas máster.
              </p>
            </div>
            <a
              href={WHATSAPP_CONFIG.getB2BUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 bg-[#1f1e22] border border-[#353437] text-white font-mono text-xs font-bold uppercase tracking-wider text-center hover:bg-emerald-500 hover:text-black hover:border-emerald-500 transition-colors flex items-center justify-center gap-2"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>Coordinar Venta B2B</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
