"use client";
import React from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { totalPriceSelector, showCart } from "@/redux/reducers/cart/cartSlice";
import CartItemCard from "./CardItemCard";
import Toast from "react-bootstrap/Toast";
import Link from "next/link";

const CartPage = () => {
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  const show = useAppSelector((state) => state.cart.showCart);
  const totalPrice = useAppSelector(totalPriceSelector);
  const dispatch = useAppDispatch();

  return (
    <div className="CartPage">
      <Toast className="cart" show={show} onClose={() => dispatch(showCart())}>
        <Toast.Header>
          <strong className="me-auto">Cart</strong>
        </Toast.Header>
        <Toast.Body>
          {cartItems.map((cartItem) => (
            <CartItemCard cartItem={cartItem} key={cartItem.product.id} />
          ))}
          <p className="text-slate-600">
            Total Price:{" "}
            <span className="text-slate-900 font-bold">{totalPrice} $</span>
          </p>
          <hr />
          <Link href={"/cart"}>
            <button type="button" className="btn btn-sm">
              order
            </button>
          </Link>
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={() => dispatch(showCart())}
          >
            Continue
          </button>
        </Toast.Body>
      </Toast>
    </div>
  );
};

export default CartPage;
