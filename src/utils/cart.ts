export interface CartItemLike {
  id: string;
  name: string;
  price: number;
  qty: number;
  size?: string | null;
  color?: string | null;
}

export const FREE_SHIPPING_THRESHOLD = 800;
export const STANDARD_SHIPPING_FEE = 35;

export const VALID_VOUCHERS: Record<string, number> = {
  ROMA1962: 0.15, // 15% VIP discount
  SARTORIA: 0.10, // 10% atelier discount
  AURORA: 0.05    // 5% season discount
};

export function calculateSubtotal(items: CartItemLike[]): number {
  return items.reduce((sum, item) => sum + Math.max(0, item.price) * Math.max(0, item.qty), 0);
}

export function calculateCartCount(items: CartItemLike[]): number {
  return items.reduce((count, item) => count + Math.max(0, item.qty), 0);
}

export function calculateDiscount(subtotal: number, voucherCode?: string | null): number {
  if (!voucherCode) return 0;
  const normalized = voucherCode.trim().toUpperCase();
  const rate = VALID_VOUCHERS[normalized] || 0;
  return Math.round(subtotal * rate);
}

export function calculateShipping(subtotal: number): number {
  if (subtotal === 0) return 0;
  return subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : STANDARD_SHIPPING_FEE;
}

export function calculateTotal(items: CartItemLike[], voucherCode?: string | null): number {
  const subtotal = calculateSubtotal(items);
  if (subtotal === 0) return 0;
  const discount = calculateDiscount(subtotal, voucherCode);
  const shipping = calculateShipping(subtotal);
  return Math.max(0, subtotal - discount + shipping);
}

export function formatBRL(amount: number): string {
  return amount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

export function formatEuro(amount: number): string {
  return 'R$ ' + amount.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}
