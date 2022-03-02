import React from "react";

import Rating from "./rating";

const Product = ({ product }) => {
  console.log(product);
  return (
    <div className="mx-auto flex flex-wrap">
      <img
        alt="ecommerce"
        className="lg:w-1/2 w-full max-height-140 object-cover object-center rounded border border-gray-200"
        src={product.image}
      />
      <div className="lg:w-1/2 w-full lg:pl-10 mt-5 lg:mt-0">
        <h2 className="text-lg title-font text-gray-500 tracking-widest">
          {product.brand.toUpperCase()}
        </h2>
        <h1 className="text-gray-700 text-4xl mt-2 mb-4 title-font font-medium mb-1">
          {product.name.toUpperCase()}
        </h1>
        <p className="text-base text-gray-600 font-medium py-2 mb-4">
          {product.description}
        </p>
        <div className="flex justify-between">
          <div className="flex items-center">
            <Rating rating={product.rating} />
            <strong className="text-lg mx-2">{product.numReviews}</strong>
          </div>
        </div>
        <hr className="mt-4 mb-5" />
        <div className="flex justify-center mt-3">
          <span className="title-font font-bold text-3xl text-blue-400 mt-1">
            ${product.price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Product;
