import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';
import { validateCoupon } from '../config/couponsConfig';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { X, Trash2, Plus, Minus, ShoppingBag, MapPin, Truck, Ticket, Tag } from 'lucide-react';

export const CartDrawer = () => {
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    clearCart,
    subtotal,
    generateWhatsAppUrl
  } = useCart();
  const { addToast } = useToast();

  const [address, setAddress] = useState('');
  const [couponInput, setCouponInput] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState(null);

  if (!isCartOpen) return null;

  // Cálculo del descuento
  let discountAmount = 0;
  if (appliedCoupon) {
    if (appliedCoupon.type === 'percentage') {
      discountAmount = (subtotal * appliedCoupon.discountValue) / 100;
    } else if (appliedCoupon.type === 'fixed') {
      discountAmount = Math.min(subtotal, appliedCoupon.discountValue);
    }
  }

  const finalTotal = Math.max(0, subtotal - discountAmount);

  const handleApplyCoupon = (e) => {
    e?.preventDefault();
    const result = validateCoupon(couponInput);

    if (result.valid) {
      setAppliedCoupon(result.coupon);
      addToast(result.message, 'success');
    } else {
      setAppliedCoupon(null);
      addToast(result.message, 'error');
    }
  };

  const handleRemoveCoupon = () => {
    setAppliedCoupon(null);
    setCouponInput('');
  };

  const handleSendOrder = () => {
    const url = generateWhatsAppUrl({
      deliveryAddress: address,
      appliedCoupon,
      discountAmount,
      total: finalTotal
    });
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-[9500] flex justify-end">
      {/* Backdrop */}
      <div
        onClick={() => setIsCartOpen(false)}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300"
      ></div>

      {/* Drawer Panel */}
      <div className="relative w-full max-w-md bg-[#121114] border-l border-[#353437] h-full shadow-2xl flex flex-col justify-between z-10 text-white animate-in slide-in-from-right duration-300">

        {/* Header */}
        <div className="p-6 border-b border-[#353437] flex items-center justify-between bg-[#0b0b0d]">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-5 h-5 text-[#d4af37]" />
            <h2 className="font-display text-2xl uppercase tracking-wide">
              Tu Carrito ({cartItems.reduce((acc, i) => acc + i.quantity, 0)})
            </h2>
          </div>

          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 text-gray-400 hover:text-white transition-colors bg-[#1f1e22] border border-[#353437]"
            aria-label="Cerrar carrito"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-8">
              <div className="w-16 h-16 rounded-full bg-[#18171a] border border-[#353437] flex items-center justify-center mb-4 text-gray-500">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <h3 className="font-display text-xl uppercase tracking-wide text-white mb-2">
                Tu carrito está vacío
              </h3>
              <p className="text-gray-400 text-xs font-sans mb-6">
                Explora nuestras variedades de Pilsner, Red Ale, Porter y packs especiales.
              </p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="px-6 py-3 bg-[#d4af37] text-black font-mono text-xs font-bold uppercase tracking-wider hover:bg-white transition-colors"
              >
                Ver Cervezas
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 bg-[#18171a] border border-[#353437] p-3 shadow-md"
                >
                  {/* Thumbnail */}
                  <div className="w-16 h-16 bg-[#0b0b0d] border border-[#353437] flex items-center justify-center shrink-0 p-1">
                    <img
                      src={item.image}
                      alt={`Cerveza ${item.title} agregada al carrito`}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bottle text-lg uppercase text-white truncate">
                      {item.title}
                    </h4>
                    <span className="font-mono text-[0.7rem] text-gray-400 block truncate">
                      {item.subTitle || item.volume}
                    </span>
                    <span className="font-mono text-xs font-bold text-[#d4af37] mt-0.5 block">
                      S/ {(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-1.5 bg-[#0b0b0d] border border-[#353437] p-1">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="p-1 text-gray-400 hover:text-white"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="px-2 font-mono text-xs font-bold">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="p-1 text-gray-400 hover:text-white"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>

                  {/* Remove */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-gray-500 hover:text-red-400 transition-colors p-1"
                    title="Eliminar ítem"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Checkout */}
        {cartItems.length > 0 && (
          <div className="p-6 border-t border-[#353437] bg-[#0b0b0d] flex flex-col gap-4">

            {/* Delivery address input */}
            <div className="flex flex-col gap-1.5">
              <label className="font-mono text-[0.7rem] uppercase text-gray-400 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Dirección de Entrega (Opcional)</span>
              </label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Ej. Urb. San José F-14, Ica"
                className="w-full bg-[#18171a] border border-[#353437] px-3 py-2 text-xs text-white placeholder-gray-500 font-sans focus:outline-none focus:border-[#d4af37]"
              />
            </div>

            {/* Coupon Code Section */}
            <div className="flex flex-col gap-2 pt-1">
              <label className="font-mono text-[0.7rem] uppercase text-gray-400 flex items-center gap-1.5">
                <Ticket className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Cupón de Descuento</span>
              </label>

              {!appliedCoupon ? (
                <form onSubmit={handleApplyCoupon} className="flex gap-2">
                  <input
                    type="text"
                    value={couponInput}
                    onChange={(e) => setCouponInput(e.target.value)}
                    className="flex-1 bg-[#18171a] border border-[#353437] px-3 py-2 text-xs text-white uppercase placeholder-gray-500 font-mono focus:outline-none focus:border-[#d4af37]"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#d4af37] text-black font-mono text-xs font-bold uppercase hover:bg-white transition-colors"
                  >
                    Aplicar
                  </button>
                </form>
              ) : (
                <div className="flex items-center justify-between p-2.5 bg-emerald-950/40 border border-emerald-500/50 text-emerald-300 font-mono text-xs">
                  <div className="flex items-center gap-2">
                    <Tag className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Cupón: <strong>{appliedCoupon.code}</strong></span>
                  </div>
                  <button
                    onClick={handleRemoveCoupon}
                    className="text-gray-400 hover:text-red-400 text-[0.7rem] underline uppercase ml-2"
                  >
                    Quitar
                  </button>
                </div>
              )}
            </div>

            {/* Totals Breakdown */}
            <div className="flex flex-col gap-1.5 pt-2 border-t border-[#353437]/60 font-mono">
              <div className="flex items-center justify-between text-xs text-gray-400">
                <span>Subtotal</span>
                <span>S/ {subtotal.toFixed(2)}</span>
              </div>

              {discountAmount > 0 && (
                <div className="flex items-center justify-between text-xs text-emerald-400 font-semibold">
                  <span>Descuento ({appliedCoupon?.code})</span>
                  <span>- S/ {discountAmount.toFixed(2)}</span>
                </div>
              )}

              <div className="flex items-center justify-between pt-1 border-t border-[#353437]/40 text-base">
                <span className="text-white uppercase font-bold">Total a Pagar</span>
                <span className="text-xl font-bold text-[#d4af37]">
                  S/ {finalTotal.toFixed(2)}
                </span>
              </div>
            </div>


            {/* WhatsApp Checkout Button */}
            <button
              onClick={handleSendOrder}
              className="w-full py-3.5 bg-emerald-500 text-black font-mono text-xs font-bold uppercase tracking-widest hover:bg-emerald-400 transition-colors flex items-center justify-center gap-2 shadow-lg"
            >
              <WhatsAppIcon className="w-5 h-5 text-black" />
              <span>Enviar Pedido por WhatsApp</span>
            </button>

            <button
              onClick={() => {
                clearCart();
                handleRemoveCoupon();
              }}
              className="text-center font-mono text-[0.65rem] text-gray-500 hover:text-gray-300 uppercase tracking-wider underline"
            >
              Vaciar carrito
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
