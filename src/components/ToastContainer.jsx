import React from 'react';
import { useToast } from '../context/ToastContext';
import { CheckCircle, AlertCircle, Info, X, PartyPopper } from 'lucide-react';

export const ToastContainer = () => {
  const { toasts, removeToast } = useToast();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed top-5 right-4 left-4 sm:left-auto sm:right-6 z-[10005] flex flex-col gap-3 max-w-lg sm:max-w-md w-auto sm:w-full pointer-events-none">
      {toasts.map(toast => {
        // Estilo por defecto ('success' al añadir al carrito - diseño oscuro clásico)
        let bgStyle = "bg-[#18171a]/95 border border-[#d4af37] text-[#e5e1e4]";
        let iconColor = "text-[#d4af37]";
        let closeColor = "text-gray-400 hover:text-white";
        let isCoupon = toast.type === 'coupon' || toast.type === 'coupon-success';

        if (isCoupon) {
          // Cupón válido: Fondo degradado dorado festivo con texto negro elegante
          bgStyle = "bg-gradient-to-r from-[#d4af37] via-[#f3df97] to-[#d4af37] text-black border border-amber-300 shadow-2xl";
          iconColor = "text-black";
          closeColor = "text-black/70 hover:text-black";
        } else if (toast.type === 'error') {
          // Error / Cupón inválido: Fondo rojo completo con letras blancas
          bgStyle = "bg-red-600 text-white border border-red-500 shadow-red-900/50";
          iconColor = "text-white";
          closeColor = "text-white/80 hover:text-white";
        } else if (toast.type === 'info') {
          bgStyle = "bg-blue-600 text-white border border-blue-500";
          iconColor = "text-white";
          closeColor = "text-white/80 hover:text-white";
        }

        return (
          <div
            key={toast.id}
            className={`pointer-events-auto flex items-center justify-between gap-3.5 p-4 shadow-2xl backdrop-blur-md animate-in slide-in-from-top-5 duration-300 ${bgStyle}`}
          >
            <div className="flex items-center gap-3">
              {isCoupon ? (
                <div className="w-8 h-8 rounded-full bg-black/10 border border-black/20 flex items-center justify-center shrink-0">
                  <PartyPopper className="w-5 h-5 text-black" />
                </div>
              ) : toast.type === 'success' ? (
                <CheckCircle className={`w-6 h-6 shrink-0 ${iconColor}`} />
              ) : toast.type === 'error' ? (
                <AlertCircle className={`w-6 h-6 shrink-0 ${iconColor}`} />
              ) : (
                <Info className={`w-6 h-6 shrink-0 ${iconColor}`} />
              )}
              <span className={`text-xs sm:text-sm tracking-wide leading-snug ${isCoupon ? 'font-bold font-sans' : 'font-semibold'}`}>
                {toast.message}
              </span>
            </div>
            <button
              onClick={() => removeToast(toast.id)}
              className={`transition-colors p-1 ${closeColor}`}
              aria-label="Cerrar notificación"
            >
              <X className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>
        );
      })}
    </div>
  );
};
