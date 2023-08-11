import Link from "next/link";
import Nav from "./Nav";
import Nav2 from "./Nav2";
import Image from "next/image";

const Header = () => {
  return (
    <div className="Header">
      <Nav />
      <div className="logo">
        <Link href="/">
          <Image
            src="/img/logo-color-high-thick.png"
            width={150}
            height={50}
            alt="color logo maria cosmetics"
          />
        </Link>
      </div>

      <Nav2 />
    </div>
  );
};

export default Header;
