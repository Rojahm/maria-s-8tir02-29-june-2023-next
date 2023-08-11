"use client";

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducers/counter/counterSlice";
import cartReducer from "./reducers/cart/cartSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
  },
});

//typescript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
