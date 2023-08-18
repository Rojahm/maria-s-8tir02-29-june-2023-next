"use client";
import React from "react";
import { UseAppSelector } from "@/redux/hooks";
import { totalPriceSelector } from "@/redux/reducers/cart/cartSlice";
import CartItemCard from "../components/Cart/CardItemCard";

const cartPage = () => {
  const cartItems = UseAppSelector((state) => state.cart.cartItems);
  const totalPrice = UseAppSelector(totalPriceSelector);

  return (
    <div className="cartPage">
      {cartItems.map((cartItem) => (
        <CartItemCard cartItem={cartItem} key={cartItem.product.id} />
      ))}
      <p className="text-slate-600">
        Total Price:{" "}
        <span className="text-slate-900 font-bold">{totalPrice} $</span>
      </p>
    </div>
  );
};

export default cartPage;
