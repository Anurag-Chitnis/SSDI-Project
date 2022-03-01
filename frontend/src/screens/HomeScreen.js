import React, { Fragment } from "react";

// Import Component
import DisplayProduct from "../components/displayProduct";

// Import Utils
import { filterByProp } from "../utils/filterByProp";
import { sliceArrByProp } from "../utils/sliceArrByProp";

// Import Data
import products from "../data/products";

const HomeScreen = () => {
  const categories = filterByProp(products);
  const productsByCategory = sliceArrByProp(products, categories);

  return (
    <Fragment>
      {productsByCategory.map((productObject, index) => (
        <DisplayProduct
          key={index}
          products={productObject.value}
          category={productObject.key}
        />
      ))}
    </Fragment>
  );
};

export default HomeScreen;
