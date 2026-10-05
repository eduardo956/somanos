import React, { useState } from 'react';
import { beers } from '../data/beers';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';
import { BeerDetailModal } from './BeerDetailModal';
import { ShoppingBag, Eye } from 'lucide-react';

export const BeerCatalog = () => {
  const { addToCart, setIsCartOpen } = useCart();
  const { addToast } = useToast();

  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedBeerModal, setSelectedBeerModal] = useState(null);

  const filterCategories = [
    { id: 'all', label: 'Todas las Variedades' },
    { id: 'pilsner', label: 'Pilsner' },
    { id: 'red-ale', label: 'Red Ale' },
    { id: 'porter', label: 'Porter' },
  ];

  const filteredBeers = activeFilter === 'all'
    ? beers
    : beers.filter(b => b.category === activeFilter);

  const handleQuickAdd = (beer, e) => {
    e.stopPropagation();
    addToCart(beer, 1);
    addToast(`¡Cerveza "${beer.title}" añadida al carrito!`);
    setIsCartOpen(true);
  };

  return (
    <section className="w-full py-16 lg:py-24 bg-[#121114]" id="cervezas">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div className="flex flex-col">
            <span className="font-mono text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
              Catalogo de Temporada
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-white uppercase tracking-wide mt-1">
              Nuestra Coleccion de Autor
            </h2>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 border-b border-[#353437] pb-4">
          {filterCategories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-4 py-2 font-mono text-xs uppercase tracking-wider transition-all duration-150 ${
                activeFilter === cat.id
                  ? 'bg-[#d4af37] text-black font-bold border border-[#d4af37]'
                  : 'bg-[#18171a] text-gray-400 hover:text-white border border-[#353437]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Beer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredBeers.map((beer) => (
            <div
              key={beer.id}
              className="group flex flex-col bg-[#0b0b0d] border border-[#353437]/60 hover:border-[#d4af37]/60 transition-all duration-300 shadow-xl relative"
            >
              {/* Card Header Media */}
              <div
                onClick={() => setSelectedBeerModal(beer)}
                className="relative aspect-[4/5] w-full bg-[#0b0b0d] overflow-hidden flex items-center justify-center border-b border-[#353437]/40 cursor-pointer"
              >
                <img
                  src={beer.image}
                  alt={`Botella de Cerveza Artesanal Somanos ${beer.title} - Estilo ${beer.style} ${beer.volume}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />

                {/* Badges */}
                <span className="absolute top-3 left-3 bg-black/90 border border-[#353437] text-white font-mono text-[0.65rem] px-2.5 py-1 uppercase tracking-wider">
                  {beer.style}
                </span>

                {beer.isPopular && (
                  <span className="absolute top-3 right-3 bg-[#d4af37] text-black font-mono text-[0.65rem] px-2.5 py-1 uppercase tracking-wider font-bold shadow-lg">
                    Más Vendido
                  </span>
                )}

                {/* Quick View Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-3">
                  <span className="px-4 py-2 bg-[#d4af37] text-black font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                    <Eye className="w-4 h-4" />
                    <span>Ver Detalles</span>
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-1 justify-between bg-[#0b0b0d]">
                <div>
                  <div className="flex items-baseline justify-between mb-1">
                    <h3
                      onClick={() => setSelectedBeerModal(beer)}
                      className="font-bottle text-2xl text-white uppercase tracking-wide hover:text-[#d4af37] cursor-pointer transition-colors"
                    >
                      {beer.title}
                    </h3>
                    <span className="font-mono text-base text-[#d4af37] font-bold">
                      S/ {beer.price.toFixed(2)}
                    </span>
                  </div>

                  <p className="font-mono text-xs text-gray-400 uppercase mb-6">
                    {beer.subTitle} · {beer.volume}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-2 pt-2 border-t border-[#353437]/40">
                  <button
                    onClick={(e) => handleQuickAdd(beer, e)}
                    className="flex-1 py-2.5 bg-[#d4af37] text-black font-mono text-xs font-bold uppercase tracking-wider text-center hover:bg-[#f1d479] transition-colors flex items-center justify-center gap-2"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Añadir al Carrito</span>
                  </button>

                  <button
                    onClick={() => setSelectedBeerModal(beer)}
                    className="p-2.5 bg-[#1f1e22] text-gray-300 hover:text-white border border-[#353437] transition-colors"
                    title="Ver detalles completos"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Beer Details Modal */}
      {selectedBeerModal && (
        <BeerDetailModal
          beer={selectedBeerModal}
          onClose={() => setSelectedBeerModal(null)}
        />
      )}
    </section>
  );
};
