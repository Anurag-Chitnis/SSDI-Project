// Default Import
import React, { Fragment, useState, useEffect } from "react";
// Import Components
import ProductCard from "./productCard";

const DisplayProduct = ({ products, category }) => {
  console.log(products, category);
  return (
    <Fragment>
      <h1 className="text-gray-800 mt-5 hover:text-blue-400 hover:underline uppercase font-bold text-3xl">
        {category}
      </h1>
      <div className="grid gap-6 col-end-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 mt-6">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </Fragment>
  );
};

export default DisplayProduct;
