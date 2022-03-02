// Default Import
import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
// Import Components
import Product from "../components/product";
import Spinner from "../components/spinner";

// Import Redux Actions
import { getProductById } from "../redux/product/productAction";

const ProductScreen = () => {
  // Init Dispatch
  const dispatch = useDispatch();
  const { productId } = useParams();

  useEffect(() => {
    dispatch(getProductById(productId));
  }, [dispatch, productId]);

  const productReducer = useSelector((state) => state.product);
  const { isLoading, error, product } = productReducer;
  return (
    <Fragment>
      <button className="ml-auto text-white text-lg bg-gray-600 py-2 px-6 rounded mb-10">
        Back Page
      </button>
      {!isLoading && product && !error ? (
        <>
          <Product product={product}></Product>
        </>
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};

export default ProductScreen;
