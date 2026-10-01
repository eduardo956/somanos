import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { companyInfo } from '../data/companyInfo';
import { ShoppingBag, Menu, X, Beer } from 'lucide-react';

export const Navbar = () => {
  const { totalItemsCount, setIsCartOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Cervezas', href: '#cervezas' },
    { name: 'Nuestra Historia', href: '#historia' },
    { name: 'Packs & Envíos', href: '#packs' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#0d0d0f]/95 backdrop-blur-md border-b border-[#353437]/60 shadow-lg">
      <div className="min-h-[5rem] max-w-7xl mx-auto px-4 lg:px-8 flex items-center justify-between gap-4">
        
        {/* Brand Logo & Name */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative flex items-center justify-center w-14 h-14 rounded-full overflow-hidden border border-[#d4af37]/50 group-hover:border-[#d4af37] bg-black transition-colors shadow-md shrink-0">
            <img
              src={companyInfo.logoUrl}
              alt={companyInfo.name}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-2xl uppercase tracking-wider text-white leading-none group-hover:text-[#f1d479] transition-colors">
              {companyInfo.name}
            </span>
            <span className="font-mono text-[0.65rem] uppercase tracking-widest text-[#a8a8af] leading-tight mt-0.5">
              {companyInfo.tagline}
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden xl:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-mono text-sm uppercase tracking-wider text-gray-300 hover:text-[#d4af37] transition-colors py-2"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Controls (18+ badge, Cart Trigger, CTA) */}
        <div className="flex items-center gap-3">
          <span className="hidden sm:inline-flex items-center px-2.5 py-1 bg-[#0b0b0d] border border-[#3c3b40] text-[#b8b8c0] font-mono text-xs tracking-widest font-semibold">
            18+
          </span>

          {/* Cart Button with Counter Badge */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2.5 bg-[#1f1e22] border border-[#353437] text-white hover:border-[#d4af37] hover:text-[#d4af37] transition-all"
            aria-label="Abrir Carrito de Compras"
          >
            <ShoppingBag className="w-5 h-5" />
            {totalItemsCount > 0 && (
              <span className="absolute -top-2 -right-2 w-5 h-5 bg-[#d4af37] text-black font-mono font-bold text-[0.7rem] rounded-full flex items-center justify-center shadow-lg animate-pulse">
                {totalItemsCount}
              </span>
            )}
          </button>

          {/* Buy Online CTA */}
          <a
            href="#packs"
            className="hidden md:inline-flex items-center justify-center px-4 py-2.5 bg-[#d4af37] text-black font-mono text-xs font-bold uppercase tracking-widest border border-[#d4af37] hover:bg-black hover:text-[#d4af37] transition-all"
          >
            Comprar Online
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2.5 text-gray-300 hover:text-white"
            aria-label="Alternar menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#121114] border-b border-[#353437] px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="font-mono text-base uppercase tracking-wider text-gray-200 hover:text-[#d4af37] py-2 border-b border-[#1f1e22]"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#packs"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 w-full py-3 bg-[#d4af37] text-black font-mono text-xs font-bold uppercase tracking-widest text-center"
          >
            Comprar Online
          </a>
        </div>
      )}
    </header>
  );
};
