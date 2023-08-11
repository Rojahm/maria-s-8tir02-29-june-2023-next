"use client";
import Link from "next/link";
import { useAppSelector } from "@/redux/hooks";

const Nav2 = () => {
  const count = useAppSelector((state) => state.cart.totalQuantity);

  return (
    <div className="navbar">
      <Link href="/search" className="nav-item">
        SEARCH
      </Link>
      <Link href="/login" className="nav-item">
        LOGIN
      </Link>
      <Link href="/cart" className="nav-item position-relative">
        CART
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
          {count}
          <span className="visually-hidden">Cart Items</span>
        </span>
      </Link>
    </div>
  );
};

export default Nav2;
