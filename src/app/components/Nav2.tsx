"use client";
import Link from "next/link";
import { useAppSelector } from "@/redux/hooks";
import { FaShoppingCart } from "react-icons/fa";
import { useAppDispatch } from "@/redux/hooks";
import { showCart } from "@/redux/reducers/cart/cartSlice";

const Nav2 = () => {
  const count = useAppSelector((state) => state.cart.totalQuantity);
  const dispatch = useAppDispatch();
  return (
    <div className="navbar">
      <Link href="/search" className="nav-item">
        SEARCH
      </Link>
      <Link href="/login" className="nav-item">
        LOGIN
      </Link>
      <button
        className="nav-item position-relative btn"
        id="liveToastBtn"
        onClick={() => dispatch(showCart())}
      >
        <FaShoppingCart style={{ fontSize: "30px" }} />
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
          {count}
          <span className="visually-hidden">Cart Items</span>
        </span>
      </button>
    </div>
  );
};

export default Nav2;
