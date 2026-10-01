import React from 'react';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';
import { beers } from '../data/beers';
import { ArrowRight, ShoppingBag } from 'lucide-react';

export const Hero = () => {
  const { addToCart, setIsCartOpen } = useCart();
  const { addToast } = useToast();

  const featuredBeer = beers.find(b => b.id === 'chancluda') || beers[0];

  const handleAddFeatured = () => {
    addToCart(featuredBeer, 1);
    addToast(`¡Cerveza "${featuredBeer.title}" añadida al carrito!`);
    setIsCartOpen(true);
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#0b0b0d] border-b border-[#353437]/40 py-10 lg:py-16">
      {/* Background Subtle Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(to right, #ffffff 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Monospace Overline Tag */}
        <div className="flex items-center gap-2 mb-6">
          <span className="inline-block w-2.5 h-2.5 bg-[#d4af37]"></span>
          <span className="font-mono text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
            Lote Artesanal No. 24 · Ica, Perú · Alt. 406 m.s.n.m
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Text Column */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl text-white uppercase tracking-tight leading-none">
              MAESTRÍA ARTESANAL <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f1d479] via-white to-gray-400">
                FORJADA EN ICA
              </span>
            </h1>

            <p className="text-gray-300 text-base sm:text-lg max-w-xl font-sans leading-relaxed">
              Cervezas de especialidad elaboradas en pequeños lotes con ingredientes rigurosamente seleccionados: malta pura, agua de manantial, lúpulo noble y pura convicción cervecera.
            </p>

            {/* Specifications quick ribbon */}
            <div className="flex flex-wrap items-center gap-2 pt-1 pb-2">
              <span className="px-3 py-1 bg-[#28272b] border border-[#353437] text-white font-mono text-xs uppercase tracking-wider">
                6.2% ALC/VOL
              </span>
              <span className="px-3 py-1 bg-[#28272b] border border-[#353437] text-white font-mono text-xs uppercase tracking-wider">
                330 ML
              </span>
              <span className="px-3 py-1 bg-[#28272b] border border-[#d4af37]/40 text-[#f1d479] font-mono text-xs uppercase tracking-wider font-semibold">
                Edición Limitada
              </span>
              <span className="px-3 py-1 bg-[#1f1e22] border border-[#353437] text-gray-300 font-mono text-xs uppercase tracking-wider">
                Terroir Costero
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="#cervezas"
                className="px-8 py-4 bg-[#d4af37] text-black font-mono text-sm font-bold uppercase tracking-wider text-center transition-all duration-200 hover:bg-[#f1d479] shadow-lg flex items-center justify-center gap-2"
              >
                <span>Descubrir Cervezas</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#historia"
                className="px-8 py-4 bg-[#1f1e22] border border-[#353437] text-white font-mono text-sm uppercase tracking-wider text-center transition-all duration-200 hover:bg-[#28272b] hover:border-white"
              >
                Nuestra Historia
              </a>
            </div>

            {/* Metrics Ribbon */}
            <div className="grid grid-cols-3 gap-4 pt-6 mt-4 bg-[#1f1e22]/70 border border-[#353437]/60 p-4">
              <div>
                <div className="font-display text-2xl sm:text-3xl text-white leading-none">100%</div>
                <div className="font-mono text-[0.7rem] text-gray-400 uppercase mt-1">Malta y Lúpulo</div>
              </div>
              <div>
                <div className="font-display text-2xl sm:text-3xl text-white leading-none">0%</div>
                <div className="font-mono text-[0.7rem] text-gray-400 uppercase mt-1">Aditivos Industriales</div>
              </div>
              <div>
                <div className="font-display text-2xl sm:text-3xl text-[#d4af37] leading-none">ICA</div>
                <div className="font-mono text-[0.7rem] text-gray-400 uppercase mt-1">Valle Costero · PE</div>
              </div>
            </div>

          </div>

          {/* Visual Hero Showcase */}
          <div className="lg:col-span-5 relative flex items-center justify-center mt-4 lg:mt-0">
            <div className="relative w-full max-w-md mx-auto bg-[#0b0b0d] border border-[#353437] shadow-2xl flex flex-col group overflow-hidden">
              
              {/* Product Bottle Showcase Header Tag */}
              <div className="bg-[#18171a] border-b border-[#353437] px-4 py-2.5 flex items-center justify-between text-xs font-mono">
                <span className="text-[#d4af37] font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-ping"></span>
                  Bestseller Destacado
                </span>
                <span className="text-gray-400 uppercase">330 ML</span>
              </div>

              {/* Product Bottle Image */}
              <div className="relative w-full aspect-square bg-[#0b0b0d] overflow-hidden flex items-center justify-center">
                <img
                  src={featuredBeer.image}
                  alt={featuredBeer.title}
                  className="w-full h-full object-cover filter contrast-110 group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>

              {/* Product Info & Action Card Footer */}
              <div className="p-4 bg-[#121114] border-t border-[#353437] flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col text-left">
                    <span className="font-mono text-sm text-white uppercase font-bold tracking-wider">
                      {featuredBeer.title} {featuredBeer.subTitle}
                    </span>
                    <span className="font-mono text-[0.7rem] text-gray-400 mt-0.5">
                      Lote 012 · Guarda 28 días
                    </span>
                  </div>
                  <span className="font-mono text-xl text-[#d4af37] font-bold">
                    S/ {featuredBeer.price.toFixed(2)}
                  </span>
                </div>

                <button
                  onClick={handleAddFeatured}
                  className="w-full py-3 bg-[#d4af37] text-black font-mono text-xs font-bold uppercase tracking-wider hover:bg-white transition-colors flex items-center justify-center gap-2 shadow-md"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Añadir Bestseller al Carrito</span>
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
