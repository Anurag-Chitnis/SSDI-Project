import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// Import Component
import DisplayProduct from "../components/displayProduct";
import Spinner from "../components/spinner";

// Import Utils
import { filterByProp } from "../utils/filterByProp";
import { sliceArrByProp } from "../utils/sliceArrByProp";

// Import Actions
import { getProducts } from "../redux/product/productAction";

const HomeScreen = () => {
  // Dispatch
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const product = useSelector((state) => state.product);
  const { products, isLoading, error } = product;

  const categories = filterByProp(products);
  const productsByCategory = sliceArrByProp(products, categories);
  return (
    <Fragment>
      <div className="wrapper">
        {!isLoading && productsByCategory && !error ? (
          <>
            {productsByCategory.map((productObject, index) => (
              <div className="product__wrapper">
                <DisplayProduct
                  key={index}
                  products={productObject.value}
                  category={productObject.key}
                  count="5"
                />
              </div>
            ))}
          </>
        ) : (
          <Spinner />
        )}
      </div>
    </Fragment>
  );
};

export default HomeScreen;
