export interface Product {
  // name: string;
  // id: number;
  // price: number;
  // imagePath: string;
  id: number;
  brand: string;
  name: string;
  price: number;
  price_sign: string;
  currency: string;
  image_link: string;
  product_link: string;
  website_link: string;
  description: string;
  rating: number;
  category: string;
  product_type: string;
  tag_list: [];
  created_at: Date;
  updated_at: Date;
  product_api_url: string;
  api_featured_image: string;
  product_colors: [
    {
      hex_value: `#${string}`;
      colour_name: string;
    }
  ];
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
export interface ProductDetail {
  id: number;
  brand: string;
  name: string;
  price: number;
  price_sign: string;
  currency: string;
  image_link: URL;
  product_link: URL;
  website_link: URL;
  description: string;
  rating: number;
  category: string;
  product_type: string;
  tag_list: [];
  created_at: Date;
  updated_at: Date;
  product_api_url: URL;
  api_featured_image: URL;
  product_colors: [
    {
      hex_value: `#${string}`;
      colour_name: string;
    }
  ];
}
// export interface Product {
//   name: string;
//   id: number;
//   price: number;
//   quantity: number;
//   api_featured_image: string;
// }
