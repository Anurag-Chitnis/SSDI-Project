// Default imports
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
// Import Components
import Rating from "./rating";

const ProductCard = ({ product }) => {
  const { name, price, image, rating, _id } = product;
  return (
    <Fragment>
      <div
        key={_id}
        className="wrapper h-full bg-white-300 rounded-b-md shadow-lg overflow-hidden"
      >
        <div className="min-h-2/4">
          <img className="w-full h-60 object-cover" src={image} />
        </div>
        <div className="p-6 min-h-2/4 space-y-3">
          <Link
            to={`/products/${_id}`}
            className="text-gray-700 hover:underline font-medium text-lg"
          >
            {name}
          </Link>
          <Rating rating={rating} />
          <p className="flex uppercase text-xl font-bold text-blue-500">
            ${price}
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductCard;
