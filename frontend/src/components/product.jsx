import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// Import Components
import Rating from "./rating";
import ListGroup from "./listGroup";
import ListGroupItem from "./listGroupItem";

const Product = ({ product }) => {
  const [qty, setQty] = useState(1);
  const navigate = useNavigate();
  const { productId } = useParams();
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
                value={qty}
                className="font-semibold w-2/4 p-2 px-3 ml-2 text-lg text-center text-gray-700 bg-gray-200 outline-none focus:outline-none hover:text-black focus:text-black"
                onChange={(e) => setQty(e.target.value)}
              />
            </div>
          )}
        </div>
        {product.category === "clothing" && (
          <ListGroup marginTop="mt-5">
            <ListGroupItem
              label="sub category"
              value={product.sub_category}
              fontSize="base"
              display="flex justify-between"
            />
            <ListGroupItem
              label="material"
              value={product.material}
              fontSize="base"
              display="flex justify-between"
            />
            <ListGroupItem
              label="sleeve length"
              value={product.sleeve_length}
              fontSize="base"
              display="flex justify-between"
            />
            <ListGroupItem
              label="gender"
              value={product.gender}
              fontSize="base"
              display="flex justify-between"
            />
            <ListGroupItem
              label="collar"
              value={product.collar}
              fontSize="base"
              display="flex justify-between"
            />
            <ListGroupItem
              label="pattern"
              value={product.pattern}
              fontSize="base"
              display="flex justify-between"
            />
            <ListGroupItem
              label="fit"
              value={product.fit}
              fontSize="base"
              display="flex justify-between"
            />
            <ListGroupItem
              label="occassion"
              value={product.occasion}
              fontSize="base"
              display="flex justify-between"
            />
          </ListGroup>
        )}
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
              onClick={() => navigate(`/cart/${productId}?qty=${qty}`)}
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
