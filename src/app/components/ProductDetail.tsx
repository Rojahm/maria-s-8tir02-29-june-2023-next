import AddToCart from "./AddToCart";
import type { ProductProps } from "./Product";

async function fetchProduct(id: number) {
  const response = await fetch(
    `https://makeup-api.herokuapp.com/api/v1/products/${id}.json`
  );
  const product = await response.json();
  return product;
}

interface ColorObj {
  color_name: string;
  hex_value: string;
}
export interface product {
  product: ProductProps;
}

const ProductDetail = async ({ id }: ProductProps) => {
  const product = await fetchProduct(id);
  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <div>
        {product.product_colors.map((color: ColorObj) => (
          <button
            key={color.color_name}
            style={{
              width: "20px",
              height: "20px",
              border: "0",
              borderRadius: "50px",
              margin: "0px 15px",
              marginBottom: "3rem",
              backgroundColor: `${color.hex_value}`,
            }}
          ></button>
        ))}
      </div>
      <div>
        <span>{product.price}$</span>
      </div>

      <AddToCart
        name={product.name}
        id={product.id}
        price={product.price}
        quantity={product.quantity}
      />
    </div>
  );
};

export default ProductDetail;
