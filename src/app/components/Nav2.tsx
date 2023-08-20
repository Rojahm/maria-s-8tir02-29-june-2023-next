import Link from "next/link";
import CartBtn from "./Cart/CartBtn";

const Nav2 = () => {
  return (
    <div className="navbar">
      <Link href="/search" className="nav-item">
        SEARCH
      </Link>
      <Link href="/auth/login" className="nav-item">
        LOGIN
      </Link>

      <CartBtn />
    </div>
  );
};

export default Nav2;
