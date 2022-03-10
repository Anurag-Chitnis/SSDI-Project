import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

// Import Component
import { DisplayProduct } from "../components/displayProduct";
import { Spinner } from "../components/spinner";
// Import Utils
import { sliceArrByProp } from "../utils/";
const CategoryScreen = () => {
  const { categoryId } = useParams();
  const { isLoading, products, error } = useSelector((state) => state.product);
  console.log(categoryId, products);
  const productsByCategory = sliceArrByProp(products, categoryId);
  console.log(productsByCategory);
  return (
    <Fragment>
      {!isLoading && !error ? (
        <DisplayProduct products={productsByCategory} category={categoryId} />
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};

export default CategoryScreen;
