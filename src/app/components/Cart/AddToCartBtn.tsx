"use client";
import React from "react";
import { Product } from "@/interfaces";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  addToCart,
  productQtyInCartSelector,
  removeFromCart,
} from "@/redux/reducers/cart/cartSlice";
import QtyBtn from "./QtyBtn";
import { FaCartPlus } from "react-icons/fa";

interface Props {
  product: Product;
}
const AddToCartBtn = ({ product }: Props) => {
  const qty = useAppSelector((state) =>
    productQtyInCartSelector(state, product.id)
  );
  const dispatch = useAppDispatch();
  if (!qty) {
    return (
      <div>
        <button
          className="btn btn-dark"
          onClick={() => dispatch(addToCart(product))}
        >
          <FaCartPlus />
        </button>
      </div>
    );
  }
  return (
    <div>
      <QtyBtn product={product} />
    </div>
  );
};

export default AddToCartBtn;
