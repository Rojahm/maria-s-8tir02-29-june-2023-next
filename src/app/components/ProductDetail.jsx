async function fetchProduct(id) {
  const response = await fetch(
    `https://makeup-api.herokuapp.com/api/v1/products/${id}.json`
  );
  const product = await response.json();
  return product;
}
const ProductDetail = async ({ id }) => {
  const product = await fetchProduct(id);
  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <div>
        {product.product_colors.map((color) => (
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
        <span>
          <button className="btn btn-dark">+</button>
          <button className="btn">0</button>
          <button className="btn btn-dark">-</button>
        </span>
      </div>
    </div>
  );
};

export default ProductDetail;
