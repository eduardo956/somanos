// Configuración centralizada de WhatsApp para Somanos Cervecería

export const WHATSAPP_CONFIG = {
  phoneNumber: "+51 984 228 573",
  phoneClean: "51984228573",

  // Mensajes predeterminados
  defaultMessages: {
    generalContact: "Hola Somanos, quisiera consultar información sobre sus cervezas de autor.",
    b2bInquiry: "Hola Somanos, quisiera coordinar distribución B2B, venta por mayor o barriles para mi local o evento.",
    singleItem: (beerTitle) => `Hola, deseo pedir la cerveza ${beerTitle} Somanos (330ml).`,
    packItem: (packTitle, price) => `Hola, deseo pedir el ${packTitle} por S/ ${price.toFixed(2)}.`,
  },

  // Función para construir el mensaje completo del carrito de compras
  buildCartMessage: ({ cartItems = [], subtotal = 0, deliveryAddress = '' }) => {
    if (cartItems.length === 0) {
      return WHATSAPP_CONFIG.defaultMessages.generalContact;
    }

    let text = `*NUEVO PEDIDO SOMANOS CERVECERÍA*\n`;
    text += `-----------------------------------\n`;
    cartItems.forEach(item => {
      text += `• ${item.quantity}x ${item.title} (${item.subTitle || item.volume || ''}) - S/ ${(item.price * item.quantity).toFixed(2)}\n`;
    });
    text += `-----------------------------------\n`;
    text += `*TOTAL:* S/ ${subtotal.toFixed(2)}\n`;
    if (deliveryAddress && deliveryAddress.trim() !== '') {
      text += `*Dirección de Envío:* ${deliveryAddress.trim()}\n`;
    }
    text += `*Fecha:* ${new Date().toLocaleDateString('es-PE')} - ${new Date().toLocaleTimeString('es-PE', { hour: '2-digit', minute: '2-digit' })}\n`;
    text += `\n¿Me confirman disponibilidad y tiempo de entrega? ¡Gracias!`;

    return text;
  },

  // Generadores de URL directa de WhatsApp
  getGeneralUrl: () => {
    return `https://wa.me/${WHATSAPP_CONFIG.phoneClean}?text=${encodeURIComponent(WHATSAPP_CONFIG.defaultMessages.generalContact)}`;
  },

  getB2BUrl: () => {
    return `https://wa.me/${WHATSAPP_CONFIG.phoneClean}?text=${encodeURIComponent(WHATSAPP_CONFIG.defaultMessages.b2bInquiry)}`;
  },

  getItemUrl: (beerTitle) => {
    const msg = WHATSAPP_CONFIG.defaultMessages.singleItem(beerTitle);
    return `https://wa.me/${WHATSAPP_CONFIG.phoneClean}?text=${encodeURIComponent(msg)}`;
  },

  getPackUrl: (packTitle, price) => {
    const msg = WHATSAPP_CONFIG.defaultMessages.packItem(packTitle, price);
    return `https://wa.me/${WHATSAPP_CONFIG.phoneClean}?text=${encodeURIComponent(msg)}`;
  },

  getCartUrl: ({ cartItems, subtotal, deliveryAddress }) => {
    const text = WHATSAPP_CONFIG.buildCartMessage({ cartItems, subtotal, deliveryAddress });
    return `https://wa.me/${WHATSAPP_CONFIG.phoneClean}?text=${encodeURIComponent(text)}`;
  }
};
