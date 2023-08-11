"use client";
import React, { FC } from "react";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { addToCart, removeFromCart } from "@/redux/reducers/cart/cartSlice";
import type { ProductProps } from "./Product";
import { FaCartPlus } from "react-icons/fa";

const AddToCart: FC<ProductProps> = (product) => {
  const item = useAppSelector((state) =>
    state.cart.itemsList.find((item) => item.id === product.id)
  );
  const dispatch = useAppDispatch();
  console.log(item);

  return (
    <div>
      <h6>add to cart</h6>
      <span>
        <button className="btn">{item?.quantity}</button>
        <button
          className="btn btn-dark"
          onClick={() => dispatch(addToCart(product))}
        >
          <FaCartPlus />
        </button>
        {/* <button
          className="btn btn-dark"
          onClick={() => dispatch(removeFromCart(product))}
        >
          -
        </button> */}
      </span>
    </div>
  );
};

export default AddToCart;
