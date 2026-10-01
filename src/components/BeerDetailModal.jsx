import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';
import { X, ShoppingBag, Thermometer, Flame, Utensils, Droplet, Layers, Plus, Minus, Tag, Sparkles } from 'lucide-react';

export const BeerDetailModal = ({ beer, onClose }) => {
  const { addToCart, setIsCartOpen } = useCart();
  const { addToast } = useToast();
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  if (!beer) return null;

  const handleAddToCart = () => {
    addToCart(beer, quantity);
    addToast(`¡${quantity}x Cerveza "${beer.title}" añadida(s) al carrito!`);
    setIsAdded(true);
    setTimeout(() => {
      onClose();
      setIsCartOpen(true);
    }, 300);
  };

  const totalPrice = (beer.price * quantity).toFixed(2);

  return (
    <div 
      className="fixed inset-0 z-[9000] flex items-center justify-center bg-black/85 backdrop-blur-md p-3 sm:p-4 md:p-6 overflow-y-auto animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Modal Container */}
      <div className="relative max-w-2xl lg:max-w-3xl w-full bg-gradient-to-b from-[#141317] to-[#0d0c0f] border border-[#d4af37]/60 shadow-[0_10px_40px_rgba(0,0,0,0.8)] p-5 sm:p-6 md:p-8 my-auto text-white max-h-[92vh] overflow-y-auto rounded-sm animate-in zoom-in-95 duration-200">
        
        {/* Top Gold Accent Bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#d4af37]/20 via-[#d4af37] to-[#d4af37]/20" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-all bg-[#1a191d] border border-[#353437] hover:border-[#d4af37]/50 rounded-sm z-20 active:scale-95 group cursor-pointer"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start pt-2">
          
          {/* Image Column - Styled display card */}
          <div className="md:col-span-5 flex flex-col items-center justify-center bg-[#09080b] border border-[#353437] p-4 relative aspect-[4/3] sm:aspect-square w-full rounded-sm overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 pointer-events-none" />
            <img
              src={beer.image}
              alt={beer.title}
              className="w-full h-full object-cover filter contrast-110 group-hover:scale-105 transition-transform duration-500 ease-out"
            />
            {beer.style && (
              <span className="absolute top-3 left-3 bg-[#d4af37] text-black font-mono text-[0.65rem] px-2.5 py-1 uppercase tracking-wider font-bold shadow-lg z-20 rounded-xs">
                {beer.style}
              </span>
            )}
            {beer.isPopular && (
              <span className="absolute top-3 right-3 bg-black/80 border border-[#d4af37]/60 text-[#d4af37] font-mono text-[0.65rem] px-2.5 py-1 uppercase tracking-wider font-bold z-20 backdrop-blur-xs flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> Más Vendido
              </span>
            )}
          </div>

          {/* Details Column */}
          <div className="md:col-span-7 flex flex-col gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="font-mono text-xs uppercase tracking-widest text-[#d4af37] font-bold">
                  {beer.style}
                </span>
                <span className="text-gray-600">•</span>
                <span className="font-mono text-xs text-gray-400 bg-[#18171a] px-2 py-0.5 border border-[#353437] rounded-xs">
                  {beer.volume}
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl uppercase tracking-wide text-white leading-tight">
                {beer.title}
              </h2>
              <p className="font-mono text-xs text-gray-400 uppercase mt-0.5 tracking-wider">
                {beer.subTitle}
              </p>
            </div>

            <p className="text-xs sm:text-sm text-gray-300 font-sans leading-relaxed">
              {beer.description}
            </p>

            {/* Organoleptic Specs Grid */}
            <div className="grid grid-cols-2 gap-2.5 bg-[#171619] border border-[#353437] p-3 font-mono text-[0.7rem] sm:text-xs rounded-sm">
              <div className="flex items-center gap-2 text-gray-300 truncate">
                <Flame className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                <span>ABV: <strong className="text-white font-bold">{beer.abv}</strong></span>
              </div>
              <div className="flex items-center gap-2 text-gray-300 truncate">
                <Layers className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                <span>IBU: <strong className="text-white font-bold">{beer.ibu}</strong></span>
              </div>
              <div className="flex items-center gap-2 text-gray-300 col-span-2 truncate">
                <Droplet className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                <span>Lúpulo: <strong className="text-white font-medium truncate">{beer.hops}</strong></span>
              </div>
              <div className="flex items-center gap-2 text-gray-300 col-span-2 truncate">
                <Thermometer className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                <span>Servido Ideal: <strong className="text-white font-medium">{beer.temp}</strong></span>
              </div>
            </div>

            {/* Tasting Notes */}
            {beer.tastingNotes && (
              <div className="flex flex-col gap-1.5 bg-[#141316] border-l-2 border-[#d4af37] pl-3 py-1.5">
                <h4 className="font-mono text-[0.7rem] uppercase text-[#d4af37] tracking-wider font-bold">
                  Notas de Cata:
                </h4>
                <ul className="list-disc list-inside text-xs text-gray-300 font-sans space-y-0.5">
                  {beer.tastingNotes.map((note, idx) => (
                    <li key={idx}>{note}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Pairings */}
            {beer.pairings && (
              <div className="flex items-start gap-2 pt-0.5">
                <Utensils className="w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5" />
                <div className="text-xs text-gray-400 font-sans leading-tight">
                  <strong className="text-white font-mono uppercase tracking-wider text-[0.7rem]">Maridaje: </strong>
                  {beer.pairings.join(', ')}.
                </div>
              </div>
            )}

            {/* Enhanced Footer Price & Actions Bar */}
            <div className="bg-[#18171a] border border-[#353437] p-4 rounded-sm mt-3 flex flex-col gap-3.5 shadow-inner">
              
              {/* Top Row: Price and Quantity */}
              <div className="flex items-center justify-between gap-3 border-b border-[#353437]/50 pb-3">
                
                {/* Price Display */}
                <div className="flex flex-col">
                  <span className="font-mono text-[0.65rem] text-gray-400 uppercase tracking-wider flex items-center gap-1">
                    <Tag className="w-3 h-3 text-[#d4af37]" />
                    {quantity > 1 ? `Subtotal (${quantity} un)` : 'Precio Unitario'}
                  </span>
                  <div className="flex items-baseline gap-1 whitespace-nowrap">
                    <span className="font-mono text-xs sm:text-sm font-bold text-[#d4af37]">S/</span>
                    <span className="font-mono text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                      {totalPrice}
                    </span>
                    {quantity > 1 && (
                      <span className="font-mono text-[0.65rem] text-gray-400 ml-1">
                        (S/ {beer.price.toFixed(2)} c/u)
                      </span>
                    )}
                  </div>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center bg-[#0d0c0f] border border-[#353437] rounded-sm p-1 shadow-md">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                    className="w-9 h-9 flex items-center justify-center text-white bg-[#1f1e22] hover:bg-[#d4af37] hover:text-black disabled:opacity-30 disabled:hover:bg-[#1f1e22] disabled:hover:text-white transition-all rounded-xs active:scale-95 cursor-pointer disabled:cursor-not-allowed"
                    aria-label="Disminuir cantidad"
                  >
                    <Minus className="w-4 h-4 stroke-[2.5]" />
                  </button>
                  <span className="w-9 text-center font-mono text-base font-extrabold text-[#d4af37] select-none tracking-wider">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-9 h-9 flex items-center justify-center text-white bg-[#1f1e22] hover:bg-[#d4af37] hover:text-black transition-all rounded-xs active:scale-95 cursor-pointer"
                    aria-label="Aumentar cantidad"
                  >
                    <Plus className="w-4 h-4 stroke-[2.5]" />
                  </button>
                </div>

              </div>

              {/* Add to Cart Button (Full-width CTA) */}
              <button
                onClick={handleAddToCart}
                disabled={isAdded}
                className="w-full py-3.5 bg-gradient-to-r from-[#d4af37] via-[#f1d479] to-[#d4af37] text-black font-mono text-xs font-bold uppercase tracking-widest hover:brightness-110 active:scale-[0.99] transition-all flex items-center justify-center gap-2.5 shadow-[0_4px_20px_rgba(212,175,55,0.25)] hover:shadow-[0_6px_24px_rgba(212,175,55,0.4)] cursor-pointer rounded-sm"
              >
                <ShoppingBag className="w-4.5 h-4.5 text-black shrink-0" />
                <span className="whitespace-nowrap">
                  {isAdded ? '¡Añadido al Carrito!' : 'Añadir al Carrito'}
                </span>
              </button>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
