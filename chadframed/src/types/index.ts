export type ProductType = 'physical' | 'digital';

export interface ProductVariant {
  id: string;
  name: string;
  sku: string;
  price: number;
  stock: number;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  type: ProductType;
  price: number;
  currency: string;
  images: string[];
  description: string;
  specifications: Record<string, string>;
  variants?: ProductVariant[];
  availability: 'in_stock' | 'out_of_stock' | 'preorder';
  isFeatured?: boolean;
}

export interface CartItem {
  product: Product;
  variantId?: string;
  quantity: number;
}
