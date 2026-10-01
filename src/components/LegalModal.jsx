import React from 'react';
import { X, ShieldCheck, FileText, Lock } from 'lucide-react';
import { companyInfo } from '../data/companyInfo';

export const LegalModal = ({ isOpen, onClose, activeTab, setActiveTab }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-backdrop-in">
      <div 
        className="relative w-full max-w-2xl bg-[#121114] border border-[#353437] shadow-2xl rounded-none flex flex-col max-h-[85vh] overflow-hidden animate-modal-pop"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Modal */}
        <div className="bg-[#18171a] border-b border-[#353437] px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#28272b] border border-[#353437] flex items-center justify-center text-[#d4af37]">
              {activeTab === 'privacy' ? <Lock className="w-4 h-4" /> : <FileText className="w-4 h-4" />}
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-[0.65rem] text-[#d4af37] uppercase tracking-widest font-semibold">
                SOMANOS E.I.R.L. · RUC {companyInfo.ruc}
              </span>
              <h3 className="font-display text-xl text-white uppercase tracking-wider">
                {activeTab === 'privacy' ? 'Politica de Privacidad' : 'Terminos y Condiciones'}
              </h3>
            </div>
          </div>
          
          <button 
            onClick={onClose}
            className="p-1.5 text-gray-400 hover:text-white hover:bg-[#28272b] border border-transparent hover:border-[#353437] transition-all"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selector */}
        <div className="flex border-b border-[#353437] bg-[#0b0b0d]">
          <button
            onClick={() => setActiveTab('privacy')}
            className={`flex-1 py-3 px-4 font-mono text-xs uppercase tracking-wider font-semibold border-b-2 transition-colors ${
              activeTab === 'privacy' 
                ? 'border-[#d4af37] text-[#d4af37] bg-[#121114]' 
                : 'border-transparent text-gray-400 hover:text-white'
            }`}
          >
            Politica de Privacidad
          </button>
          <button
            onClick={() => setActiveTab('terms')}
            className={`flex-1 py-3 px-4 font-mono text-xs uppercase tracking-wider font-semibold border-b-2 transition-colors ${
              activeTab === 'terms' 
                ? 'border-[#d4af37] text-[#d4af37] bg-[#121114]' 
                : 'border-transparent text-gray-400 hover:text-white'
            }`}
          >
            Terminos y Condiciones
          </button>
        </div>

        {/* Modal Body Scrollable */}
        <div className="p-6 overflow-y-auto space-y-6 text-gray-300 font-sans text-xs sm:text-sm leading-relaxed">
          {activeTab === 'privacy' ? (
            <>
              <div className="p-4 bg-[#18171a] border border-[#353437] flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                <p className="font-mono text-xs text-gray-300">
                  En cumplimiento con la <strong>Ley Nº 29733 (Ley de Protección de Datos Personales de Perú)</strong>, SOMANOS garantiza la confidencialidad y buen uso de la información compartida por nuestros usuarios.
                </p>
              </div>

              <div>
                <h4 className="font-mono text-xs text-[#d4af37] uppercase font-bold tracking-wider mb-2">
                  1. Titular del Tratamiento de Datos
                </h4>
                <p className="text-gray-400">
                  El sitio web es operado por <strong>{companyInfo.fullTitle}</strong> con RUC <strong>{companyInfo.ruc}</strong>, domiciliada en {companyInfo.address}. Para cualquier consulta sobre privacidad, puede escribirnos a <a href={`mailto:${companyInfo.email}`} className="text-[#d4af37] hover:underline">{companyInfo.email}</a>.
                </p>
              </div>

              <div>
                <h4 className="font-mono text-xs text-[#d4af37] uppercase font-bold tracking-wider mb-2">
                  2. Datos Personales y Pedidos por WhatsApp
                </h4>
                <p className="text-gray-400">
                  No solicitamos creación de cuenta ni almacenamos credenciales privadas. Los datos de contacto, nombres y direcciones de entrega facilitados por el cliente al coordinar un pedido vía WhatsApp se utilizan exclusivamente para el despacho, facturación y logística de su compra.
                </p>
              </div>

              <div>
                <h4 className="font-mono text-xs text-[#d4af37] uppercase font-bold tracking-wider mb-2">
                  3. Analítica Web y Cookies
                </h4>
                <p className="text-gray-400">
                  Este sitio utiliza herramientas de analítica (Google Analytics y Vercel Analytics) para medir métricas anónimas de tráfico (navegador, dispositivo, páginas consultadas). Estas métricas no contienen información identificable directa y sirven únicamente para mejorar la velocidad y calidad del servicio.
                </p>
              </div>

              <div>
                <h4 className="font-mono text-xs text-[#d4af37] uppercase font-bold tracking-wider mb-2">
                  4. Derechos ARCO
                </h4>
                <p className="text-gray-400">
                  Los usuarios pueden solicitar el acceso, rectificación, cancelación u oposición al tratamiento de sus datos de contacto en cualquier momento enviando una solicitud a nuestro correo oficial.
                </p>
              </div>
            </>
          ) : (
            <>
              <div className="p-4 bg-[#18171a] border border-[#353437] flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                <p className="font-mono text-xs text-gray-300">
                  <strong>Venta de Alcohol Restringida:</strong> El ingreso a este sitio y la compra de nuestros productos está estrictamente reservada para mayores de 18 años (Ley Nº 28681).
                </p>
              </div>

              <div>
                <h4 className="font-mono text-xs text-[#d4af37] uppercase font-bold tracking-wider mb-2">
                  1. Aceptacion de los Terminos
                </h4>
                <p className="text-gray-400">
                  Al ingresar y navegar en el sitio web de SOMANOS, el usuario declara haber leído, comprendido y aceptado en su totalidad los presentes Terminos y Condiciones.
                </p>
              </div>

              <div>
                <h4 className="font-mono text-xs text-[#d4af37] uppercase font-bold tracking-wider mb-2">
                  2. Lotes Limitados y Precios
                </h4>
                <p className="text-gray-400">
                  Nuestras cervezas son elaboradas artesanalmente en pequeños lotes en Ica, Perú. Los precios exhibidos están expresados en Soles Peruanos (PEN) e incluyen impuestos de ley. La disponibilidad de los productos puede variar según stock y temporada de producción.
                </p>
              </div>

              <div>
                <h4 className="font-mono text-xs text-[#d4af37] uppercase font-bold tracking-wider mb-2">
                  3. Proceso de Pedidos y Envíos
                </h4>
                <p className="text-gray-400">
                  La confirmación de pedidos, disponibilidad de stock, costos de envío local o nacional y métodos de pago (Yape, Plin, transferencia o tarjeta) se concretan directamente a través de nuestra línea oficial de atención en WhatsApp.
                </p>
              </div>

              <div>
                <h4 className="font-mono text-xs text-[#d4af37] uppercase font-bold tracking-wider mb-2">
                  4. Propiedad Intelectual
                </h4>
                <p className="text-gray-400">
                  Todos los contenidos gráficos, marcas, ilustraciones de etiquetas y elementos distintivos de SOMANOS son propiedad exclusiva de SOMANOS E.I.R.L. Queda prohibida su reproducción sin consentimiento previo por escrito.
                </p>
              </div>
            </>
          )}
        </div>

        {/* Footer Modal */}
        <div className="bg-[#18171a] border-t border-[#353437] px-6 py-3 flex items-center justify-between">
          <span className="font-mono text-[0.65rem] text-gray-400 uppercase">
            Ultima actualizacion: Octubre 2026
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-[#d4af37] text-black font-mono text-xs uppercase font-bold tracking-wider hover:bg-white transition-colors"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
};
