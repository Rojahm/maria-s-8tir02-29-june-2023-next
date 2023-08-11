import "./globals.css";
import "bootstrap/dist/css/bootstrap.css";

import { Inter } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Credit from "./components/Credit";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <hr />
        <div className="container">{children}</div>
        <Footer />
        <Credit />
      </body>
    </html>
  );
}