export interface ProductColor {
  name: string;
  hex: string;
  img?: string;
}

export interface Product {
  id: string;
  name: string;
  cat: string;
  catLabel: string;
  price: number;
  originalPrice?: number;
  installments?: string;
  tag: string | null;
  img: string;
  desc: string;
  details: string[];
  sizes: string[] | null;
  badge: string | null;
  discountPercentage?: number;
  colors?: ProductColor[];
  handcraftedHours?: number;
  origin?: string;
  material?: string;
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  img: string;
  size: string | null;
  qty: number;
  color?: string | null;
}

export type CategoryFilter = 'all' | 'outerwear' | 'footwear' | 'resort' | 'polo';
