import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/redux/store";

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
interface Product {
  name: string;
  id: number;
  price: number;
  quantity: number;
}
interface cartState {
  itemsList: Product[];
  totalQuantity: number;
  showCart: boolean;
  totalCartValue: number;
}
const initialState: cartState = {
  itemsList: [],
  totalQuantity: 0,
  showCart: false,
  totalCartValue: 0,
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const newItem = action.payload;
      const existingItem = state.itemsList.find(
        (item) => item.id === newItem.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.price += newItem.price;
      } else {
        state.itemsList = [
          ...state.itemsList,
          {
            name: newItem.name,
            id: newItem.id,
            quantity: 1,
            price: newItem.price,
          },
        ];
      }
      state.totalCartValue += newItem.price;
      state.totalQuantity += 1;
    },
    removeFromCart: (state, action: PayloadAction<Product>) => {
      const remove = action.payload;
      const existingItem = state.itemsList.find(
        (item) => item.id === remove.id
      );
      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
          existingItem.price -= remove.price;
          state.totalQuantity -= 1;
          state.totalCartValue -= remove.price;
        }
      } else {
        state.itemsList = state.itemsList.filter(
          (item) => item.id !== remove.id
        );
        state.totalQuantity -= 1;
        state.totalCartValue -= remove.price;
      }
    },
    showCart: (state) => {
      state.showCart ? (state.showCart = false) : (state.showCart = true);
    },
  },
});

export const { addToCart, removeFromCart, showCart } = cartSlice.actions;
export const selectCart = (state: RootState) => {
  state.cart.itemsList;
  state.cart.totalQuantity;
  state.cart.showCart;
  state.cart.totalCartValue;
};
export default cartSlice.reducer;
