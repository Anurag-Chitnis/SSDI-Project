// Default Import
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
// Import Components
import ProductCard from "./productCard";

const DisplayProduct = ({ products, category, subCategory = null, count }) => {
  const productsBySubCategory = products.filter(
    (prod) => prod.sub_category == subCategory
  );
  return (
    <Fragment>
      {!productsBySubCategory.length > 0 ? (
        <>
          <Link
            to={`/products/category/${category}`}
            className="text-gray-800 hover:text-blue-400 hover:underline uppercase font-bold text-3xl cursor-pointer"
          >
            {category}
          </Link>
          <div className="grid gap-6 col-end-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 mt-6">
            {products
              .filter((_, index) => index < count)
              .map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
          </div>
        </>
      ) : (
        <>
          <Link
            to={`/products/category/${category}`}
            className="text-gray-800 hover:text-blue-400 hover:underline uppercase font-bold text-3xl cursor-pointer"
          >
            {!subCategory ? category : subCategory}
          </Link>
          <div className="grid gap-6 col-end-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 mt-6">
            {productsBySubCategory
              .filter((_, index) => index < count)
              .map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
          </div>
        </>
      )}
    </Fragment>
  );
};

export default DisplayProduct;
