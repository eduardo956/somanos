/**
 * Configuración centralizada de cupones de descuento para Somanos
 */
export const COUPONS_CONFIG = [
  {
    code: "4SOMANOS26",
    type: "percentage", // 'percentage' (% de descuento) o 'fixed' (monto fijo en soles S/)
    discountValue: 10,  // 10% de descuento sobre el subtotal
    expirationDate: "2027-12-31", // Fecha límite AAAA-MM-DD
    isActive: true,
    successMessage: "¡Felicidades! Eres acreedor de un descuento por vernos en redes.",
    label: "Descuento por Redes Sociales"
  }
];

/**
 * Valida un código de cupón ingresado por el usuario
 * @param {string} code 
 * @returns {object} { valid: boolean, message: string, coupon?: object }
 */
export function validateCoupon(code) {
  if (!code || typeof code !== 'string' || !code.trim()) {
    return { valid: false, message: "Por favor ingresa un código de cupón." };
  }

  const cleanCode = code.trim().toUpperCase();
  const coupon = COUPONS_CONFIG.find(c => c.code.toUpperCase() === cleanCode);

  if (!coupon) {
    return { valid: false, message: "El código de cupón ingresado no es válido." };
  }

  if (!coupon.isActive) {
    return { valid: false, message: "Este cupón ya no está activo." };
  }

  if (coupon.expirationDate) {
    const today = new Date().toISOString().split('T')[0];
    if (today > coupon.expirationDate) {
      return { valid: false, message: "Este cupón ha expirado." };
    }
  }

  return {
    valid: true,
    coupon,
    message: coupon.successMessage
  };
}
