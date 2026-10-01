// Utilitario opcional para enviar eventos a Google Tag Manager (dataLayer)

/**
 * Envía un evento personalizado a Google Tag Manager vía dataLayer.
 * @param {string} eventName - Nombre del evento (ej: 'click_whatsapp', 'add_to_cart')
 * @param {object} customData - Datos adicionales descriptivos
 */
export const pushGTMEvent = (eventName, customData = {}) => {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: eventName,
      ...customData
    });
  }
};
