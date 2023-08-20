import ShopCard from "@/app/components/product/ShopCard";

const ProductsPage = () => {
  return (
    <div className="ProductsPage">
      <h1>SHOP</h1>
      <div className="container">
        <div className="row row-cols-4">
          <ShopCard />
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
