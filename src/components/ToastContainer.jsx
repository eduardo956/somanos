import React from 'react';
import { useToast } from '../context/ToastContext';
import { CheckCircle, AlertCircle, Info, X } from 'lucide-react';

export const ToastContainer = () => {
  const { toasts, removeToast } = useToast();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed top-20 sm:top-auto sm:bottom-5 left-4 right-4 sm:left-5 sm:right-auto z-[9999] flex flex-col gap-3 max-w-md sm:max-w-sm w-auto sm:w-full pointer-events-none">
      {toasts.map(toast => (
        <div
          key={toast.id}
          className="pointer-events-auto flex items-center justify-between gap-3 p-3.5 sm:p-4 bg-[#18171a]/95 border border-[#d4af37] text-[#e5e1e4] shadow-2xl backdrop-blur-md animate-in slide-in-from-top-5 sm:slide-in-from-bottom-5 duration-300"
        >
          <div className="flex items-center gap-3">
            {toast.type === 'success' && <CheckCircle className="w-5 h-5 text-[#d4af37] shrink-0" />}
            {toast.type === 'error' && <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />}
            {toast.type === 'info' && <Info className="w-5 h-5 text-blue-400 shrink-0" />}
            <span className="text-xs sm:text-sm font-medium tracking-wide">{toast.message}</span>
          </div>
          <button
            onClick={() => removeToast(toast.id)}
            className="text-gray-400 hover:text-white transition-colors p-1"
            aria-label="Cerrar notificación"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  );
};
