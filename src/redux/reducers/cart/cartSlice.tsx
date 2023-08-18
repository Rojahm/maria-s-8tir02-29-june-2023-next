import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/redux/store";
import { CartItem, Product } from "@/interfaces";

export interface CartState {
  cartItems: CartItem[];
  cartPrice: number;
  cartQty: number;
  showCart: boolean;
}
const initialState: CartState = {
  cartItems: [],
  cartPrice: 0,
  cartQty: 0,
  showCart: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const item = state.cartItems.find(
        (item) => item.product.id === action.payload.id
      );
      if (item) {
        item.qty++;
        item.price += item.price;
      } else {
        state.cartItems.push({
          product: action.payload,
          qty: 1,
          price: action.payload.price,
        });
      }
    },
    removeFromCart: (state, action: PayloadAction<Product>) => {
      const item = state.cartItems.find(
        (item) => item.product.id === action.payload.id
      );
      if (item) {
        item.qty--;
        if (item.qty === 0) {
          state.cartItems.filter(
            (cartItem) => cartItem.product.id !== action.payload.id
          );
        }
      }
    },
    showCart: (state) => {
      state.showCart = !state.showCart;
    },
  },
});

export const selectCount = (state: RootState) => {
  state.cart.cartItems;
  state.cart.cartPrice;
  state.cart.cartQty;
  state.cart.showCart;
};

const cartItems = (state: RootState) => state.cart.cartItems;

export const productQtyInCartSelector = createSelector(
  [cartItems, (_cartItems, productId: number) => productId],
  (cartItems, productId) =>
    cartItems.find((el) => el.product.id === productId)?.qty
);

export const totalCartItemsSelector = createSelector([cartItems], (cartItems) =>
  cartItems.reduce((total: number, curr: CartItem) => (total += curr.qty), 0)
);
export const totalPriceSelector = createSelector([cartItems], (cartItems) =>
  cartItems.reduce(
    (total: number, curr: CartItem) => (total += curr.qty * curr.product.price),
    0
  )
);

export const { addToCart, removeFromCart, showCart } = cartSlice.actions;
export default cartSlice.reducer;
