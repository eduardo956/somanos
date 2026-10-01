import React from 'react';
import { packs } from '../data/packs';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';
import { WHATSAPP_CONFIG } from '../config/whatsappConfig';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { Check, ShoppingBag } from 'lucide-react';

export const PacksSection = () => {
  const { addToCart, setIsCartOpen } = useCart();
  const { addToast } = useToast();

  const handleAddPackToCart = (pack) => {
    const item = {
      id: pack.id,
      title: pack.title,
      subTitle: pack.categoryTag,
      price: pack.price,
      image: pack.id === 'pack-12x' ? "/images/chancluda.jpg" : "/images/travesia.jpg",
      volume: "Pack Especial"
    };

    addToCart(item, 1);
    addToast(`¡"${pack.title}" añadido al carrito!`);
    setIsCartOpen(true);
  };

  return (
    <section className="w-full py-16 lg:py-24 bg-[#121114] border-b border-[#353437]/40" id="packs">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
              Despacho Directo de Planta · Ica
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-white uppercase tracking-wide mt-1">
              Packs Especiales Somanos
            </h2>
          </div>
          <p className="text-gray-400 font-sans text-sm max-w-sm">
            Envíos a domicilio en Ica en 24h. Embalaje reforzado directo desde nuestra bodega.
          </p>
        </div>

        {/* Packs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packs.map((pack) => (
            <div
              key={pack.id}
              className={`p-6 md:p-8 flex flex-col justify-between relative transition-all duration-300 shadow-xl ${
                pack.isPopular
                  ? 'bg-[#28272b] border-2 border-[#d4af37]'
                  : 'bg-[#0b0b0d] border border-[#353437]/60 hover:border-[#d4af37]/50'
              }`}
            >
              {/* Badge */}
              {pack.badge && (
                <div className="absolute -top-3 right-6 bg-[#d4af37] text-black font-mono text-xs px-3 py-1 uppercase tracking-widest font-bold shadow-md">
                  {pack.badge}
                </div>
              )}

              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-[#d4af37]">
                  {pack.categoryTag}
                </span>

                <h3 className="font-display text-3xl text-white uppercase mt-1 mb-2">
                  {pack.title}
                </h3>

                <div className="flex items-baseline gap-3 mb-6">
                  <span className="font-display text-4xl text-white">
                    S/ {pack.price.toFixed(2)}
                  </span>
                  {pack.originalPrice && (
                    <span className="font-mono text-sm text-gray-500 line-through">
                      S/ {pack.originalPrice.toFixed(2)}
                    </span>
                  )}
                </div>

                {/* Items List */}
                <ul className="flex flex-col gap-2.5 font-sans text-xs text-gray-300 mb-8">
                  {pack.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-[#d4af37] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => handleAddPackToCart(pack)}
                  className={`w-full py-3 font-mono text-xs font-bold uppercase tracking-wider text-center transition-colors flex items-center justify-center gap-2 ${
                    pack.isPopular
                      ? 'bg-[#d4af37] text-black hover:bg-white'
                      : 'bg-[#1f1e22] text-white border border-[#353437] hover:bg-[#d4af37] hover:text-black'
                  }`}
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Añadir al Carrito</span>
                </button>

                <a
                  href={WHATSAPP_CONFIG.getPackUrl(pack.title, pack.price)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 bg-transparent border border-emerald-600/60 text-emerald-400 font-mono text-[0.7rem] uppercase tracking-wider text-center hover:bg-emerald-950/50 transition-colors flex items-center justify-center gap-1.5 font-semibold"
                >
                  <WhatsAppIcon className="w-4 h-4 text-emerald-400" />
                  <span>Pedir directo por WhatsApp</span>
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
