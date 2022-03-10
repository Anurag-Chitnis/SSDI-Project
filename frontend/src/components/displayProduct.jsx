// Default Import
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
// Import Components
import ProductCard from "./productCard";

const DisplayProduct = ({ products, category }) => {
  return (
    <Fragment>
      <Link
        to={`/products/category/${category}`}
        className="text-gray-800 mt-5 hover:text-blue-400 hover:underline uppercase pt-5 font-bold text-3xl cursor-pointer"
      >
        {category}
      </Link>
      <div className="grid gap-6 col-end-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 mt-6">
        {products
          .filter((_, index) => index < 5)
          .map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
      </div>
    </Fragment>
  );
};

export default DisplayProduct;
