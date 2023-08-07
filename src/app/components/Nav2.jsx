import Link from "next/link";

const Nav2 = () => {
  return (
    <div className="navbar">
      <Link href="/search" className="nav-item">
        SEARCH
      </Link>
      <Link href="/login" className="nav-item">
        LOGIN
      </Link>
      <Link href="/cart" className="nav-item">
        CART
      </Link>
    </div>
  );
};

export default Nav2;
