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
            src="/img/hq-logo-color.png"
            width={120}
            height={120}
            alt="color logo maria cosmetics"
          />
        </Link>
      </div>

      <Nav2 />
    </div>
  );
};

export default Header;
