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
    <div className="ProductDetail">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <div>
        {product.product_colors.map((color: ColorObj) => (
          <button
            className="swatch"
            key={color.color_name}
            style={{
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
        api_featured_image={""}
      />
    </div>
  );
};

export default ProductDetail;
