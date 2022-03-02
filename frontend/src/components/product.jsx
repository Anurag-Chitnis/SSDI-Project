import React from "react";

import Rating from "./rating";

const Product = ({ product }) => {
  return (
    <div className="mx-auto flex flex-wrap pb-7">
      <img
        alt="ecommerce"
        className="lg:w-1/2 w-full max-height-100 object-cover object-center rounded border border-gray-200 productImg"
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
          {product.countInStock > 0 && (
            <div className="text-right">
              <span className="text-gray-700 font-bold text-lg">QTY:</span>
              <input
                type="number"
                max={product.countInStock}
                className="font-semibold w-2/4 p-2 px-3 ml-2 text-lg text-center text-gray-700 bg-gray-200 outline-none focus:outline-none hover:text-black focus:text-black"
              />
            </div>
          )}
        </div>
        <hr className="mt-4 mb-5" />
        <div className="flex justify-center mt-3">
          <span className="title-font font-bold text-3xl text-blue-400 mt-1">
            ${product.price}
          </span>
          <div className="ml-auto">
            <button
              className={`"ml-4 text-white text-lg ${
                product.countInStock > 0 ? "bg-blue-500" : "bg-gray-400"
              } border-0 py-2 px-6 focus:outline-none ${
                product.countInStock > 0 ? "hover:bg-blue-600" : ""
              } rounded"`}
              disabled={product.countInStock > 0 ? false : true}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
