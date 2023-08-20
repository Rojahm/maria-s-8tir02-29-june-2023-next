import { Suspense } from "react";
import LoadingPage from "@/app/loading";
import ProductDetail from "@/app/components/product/ProductDetail";
import Product from "@/app/components/product/Product";

const ProductPage = ({
  params: { id },
}: {
  params: {
    id: number;
  };
}) => {
  return (
    <div className="ProductPage container">
      <div className="card mb-3 shadow" style={{ maxWidth: "90vw" }}>
        <div className="row g-0">
          <div className="col-md-4 product">
            <Suspense fallback={<LoadingPage />}>
              <Product id={id} />
            </Suspense>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <Suspense fallback={<div>Loading...</div>}>
                <ProductDetail id={id} />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
