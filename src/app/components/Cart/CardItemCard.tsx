import { CartItem } from "@/interfaces";
import Image from "next/image";
import React from "react";
import QtyBtn from "./QtyBtn";
import Link from "next/link";

interface Props {
  cartItem: CartItem;
}
function CartItemCard({ cartItem }: Props) {
  if (cartItem.qty) {
    return (
      <div className="CartItemCard">
        <Link
          className="link"
          href={`/shop/products/${cartItem.product.id}`}
          key={cartItem.product.id}
        >
          <div className="cart-item">
            <Image
              src={`https://${cartItem.product.api_featured_image}`}
              alt={cartItem.product.name}
              width={50}
              height={50}
            />
            <p className="name">{cartItem.product.name}</p>
            <p className="qty">
              {" "}
              <QtyBtn product={cartItem.product} />
            </p>
            <p className="price">{cartItem.product.price} $</p>
            <p className="total">{cartItem.qty * cartItem.product.price} $</p>
          </div>
        </Link>
      </div>
    );
  }
}

export default CartItemCard;
