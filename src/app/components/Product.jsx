import Image from "next/image";

async function fetchProduct(id) {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await fetch(
    `https://makeup-api.herokuapp.com/api/v1/products/${id}.json`
  );
  const product = response.json();
  return product;
}
const Product = async ({ id }) => {
  const product = await fetchProduct(id);
  console.log(product);
  return (
    <>
      <div>
        <Image
          src={`https:${product.api_featured_image}`}
          width={200}
          height={200}
          layout="responsive"
          alt={product.name}
        />
      </div>
    </>
  );
};

export default Product;
