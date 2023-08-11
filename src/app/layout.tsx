import { Providers } from "../redux/provider";

import "./globals.css";
import "bootstrap/dist/css/bootstrap.css";

import { Inter } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Credit from "./components/Credit";
import Cart from "@/app/components/Cart/Cart";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  keywords: "",
};
export interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          <hr />
          <Cart />
          <div className="container">{children}</div>
          <Footer />
          <Credit />
        </Providers>
      </body>
    </html>
  );
}
