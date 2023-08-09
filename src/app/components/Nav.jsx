import Link from "next/link";

const Nav = () => {
  return (
    <div className="navbar">
      <Link href="/shop/products" className="nav-item">
        SHOP
      </Link>
      <Link href="/about" className="nav-item">
        ABOUT
      </Link>
      <Link href="/contact" className="nav-item">
        CONTACT
      </Link>
    </div>
  );
};

export default Nav;
