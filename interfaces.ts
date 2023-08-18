export interface Product {
  name: string;
  id: number;
  price: number;
  imagePath: string;
}

export interface CartItem {
  product: Product;
  qty: number;
  price: number;
}

export interface Cart {
  items: CartItem[];
  totalPrice: number;
}
