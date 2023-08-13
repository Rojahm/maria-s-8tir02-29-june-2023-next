"use client";

import React from "react";
import Toast from "react-bootstrap/Toast";

import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import {
  addToCart,
  removeFromCart,
  showCart,
} from "@/redux/reducers/cart/cartSlice";

const CartPage = () => {
  const show = useAppSelector((state) => state.cart.showCart);
  const cartList = useAppSelector((state) => state.cart.itemsList);
  const dispatch = useAppDispatch();
  console.log(cartList);
  return (
    <div className="CartPage">
      <Toast className="cart" show={show} onClose={() => dispatch(showCart())}>
        <Toast.Header>
          <strong className="me-auto">Cart</strong>
        </Toast.Header>
        <Toast.Body>
          <div className="cart-items">
            {cartList.map((item) => (
              <div className="cart-item" key={item.id}>
                <span className="border">{item.name}</span>
                <span className="border">{item.quantity}</span>
                <span className="border">{item.price}</span>
              </div>
            ))}
          </div>
          <hr />
          <button type="button" className="btn btn-sm">
            order
          </button>
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
