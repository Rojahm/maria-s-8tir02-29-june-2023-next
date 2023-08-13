import Link from "next/link";
import Image from "next/image";
import { FaEye } from "react-icons/fa";

import type { ProductProps } from "@/app/components/Product";

async function apiCall() {
  const response = await fetch(
    "https://makeup-api.herokuapp.com/api/v1/products.json?brand=dior",
    {
      next: { revalidate: 60 },
    }
  );
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const products = await response.json();
  return products;
}
const ProductsPage = async () => {
  const products = await apiCall();
  return (
    <div className="ProductsPage">
      <h1>SHOP</h1>
      {/* <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul> */}
      <div className="container">
        <div className="row row-cols-4">
          {products.map((product: ProductProps) => (
            <div className="col" key={product.id}>
              <div
                className="card border-dark mb-3"
                style={{ maxWidth: "18rem" }}
              >
                <div className="card-header">
                  <Image
                    src={`https:${product.api_featured_image}`}
                    alt="beauty product"
                    width={200}
                    height={200}
                    quality={100} // {number 1-100}
                    // fill="true"
                    layout="responsive"
                    className="product-img"
                  />
                </div>
                <div className="card-body text-dark">
                  <h5 className="card-title">{product.name}</h5>
                  {/* <p className="card-text">{product.description}</p> */}
                  <Link
                    href={`/shop/products/${product.id}`}
                    className="btn btn-outline-dark"
                  >
                    <FaEye />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
