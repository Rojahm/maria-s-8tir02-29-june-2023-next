import { Suspense } from "react";
import LoadingPage from "@/app/loading";
import Product from "@/app/components/Product";
import ProductDetail from "@/app/components/ProductDetail";

const ProductPage = ({ params: { id } }: any) => {
  return (
    <div className="ProductPage container">
      <div className="card mb-3 shadow" style={{ maxWidth: "90vw" }}>
        <div className="row g-0">
          <div className="col-md-4 product">
            <Suspense fallback={<LoadingPage />}>
              <Product
                id={id}
                name={""}
                price={0}
                quantity={0}
                api_featured_image={""}
              />
            </Suspense>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <Suspense fallback={<div>Loading...</div>}>
                <ProductDetail
                  id={id}
                  name={""}
                  price={0}
                  quantity={0}
                  api_featured_image={""}
                />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
