import { Suspense } from "react";
import LoadingPage from "@/app/loading";
import Product from "@/app/components/Product";
import ProductDetail from "@/app/components/ProductDetail";

const ProductPage = ({ params: { id } }) => {
  return (
    <div className="ProductPage container">
      <nav style={{ ariaLabel: "breadcrumb" }}>
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="#">Home</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Library
          </li>
        </ol>
      </nav>
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
