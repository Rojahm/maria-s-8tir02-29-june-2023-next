"use client";
import React, { FC } from "react";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import type { ProductProps } from "./Product";
// import type { RootState } from "@/redux/store";
// import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  removeFromCart,
  showCart,
} from "@/redux/reducers/cart/cartSlice";

const AddToCart: FC<ProductProps> = (product) => {
  const item = useAppSelector((state) =>
    state.cart.itemsList.find((item) => item.id === product.id)
  );
  const dispatch = useAppDispatch();

  return (
    <div>
      <h6>add to cart</h6>
      <span>
        <button
          className="btn btn-dark"
          onClick={() => dispatch(addToCart(product))}
        >
          +
        </button>
        <button className="btn">{item?.quantity}</button>
        <button
          className="btn btn-dark"
          onClick={() => dispatch(removeFromCart(product))}
        >
          -
        </button>
      </span>
    </div>
  );
};

export default AddToCart;
