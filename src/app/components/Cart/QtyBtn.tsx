"use client";
import React from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  addToCart,
  productQtyInCartSelector,
  removeFromCart,
} from "@/redux/reducers/cart/cartSlice";
import { Product } from "@/interfaces";
import { FaTrash } from "react-icons/fa";

interface Props {
  product: Product;
}
const QtyBtn = ({ product }: Props) => {
  const qty = useAppSelector((state) =>
    productQtyInCartSelector(state, product.id)
  );
  const dispatch = useAppDispatch();
  return (
    <>
      <button
        className="btn"
        onClick={(event) => {
          event.preventDefault();
          dispatch(removeFromCart(product));
        }}
      >
        {qty === 1 ? <FaTrash /> : "-"}
      </button>
      <span>{qty}</span>
      <button
        className="btn"
        onClick={(event) => {
          event.preventDefault();
          dispatch(addToCart(product));
        }}
      >
        +
      </button>
    </>
  );
};

export default QtyBtn;
