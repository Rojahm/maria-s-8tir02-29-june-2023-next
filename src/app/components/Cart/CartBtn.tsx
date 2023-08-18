"use client";
import React from "react";
import {
  totalCartItemsSelector,
  showCart,
} from "@/redux/reducers/cart/cartSlice";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { FaShoppingCart } from "react-icons/fa";

interface Props {
  className?: string;
}
const CartBtn = ({ className }: Props) => {
  const totalItems = useAppSelector(totalCartItemsSelector);
  const dispatch = useAppDispatch();

  return (
    <div className={`${className}`}>
      <button
        className="nav-item position-relative btn"
        id="liveToastBtn"
        onClick={() => dispatch(showCart())}
      >
        <FaShoppingCart style={{ fontSize: "30px" }} />
        {!!totalItems && (
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
            <div key={totalItems} className="animate-pingOnce">
              {totalItems}
            </div>
            <span className="visually-hidden">Cart Items</span>
          </span>
        )}
      </button>
    </div>
  );
};

export default CartBtn;
