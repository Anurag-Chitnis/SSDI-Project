import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

// Import Component
import DisplayProduct from "../components/displayProduct";
// Import Utils
import { filterBySubCategory } from "../utils/filterByProp";

const CategoryScreen = () => {
  const { categoryId } = useParams();
  const { isLoading, products, error } = useSelector((state) => state.product);

  // Filter products by category
  const filteredProducts = products.filter(
    (prod) => prod.category == categoryId
  );
  // Then filter them by sub category: if sub category exists
  const subCategories = filterBySubCategory(filteredProducts);
  return (
    <div className="wrapper">
      {subCategories.length > 1 ? (
        <>
          {subCategories.map((subCategory, index) => (
            <div className="product__wrapper">
              <DisplayProduct
                key={index}
                products={filteredProducts}
                category={categoryId}
                subCategory={subCategory}
                count="5"
              />
            </div>
          ))}
        </>
      ) : (
        <div className="p-2">
          <DisplayProduct
            products={filteredProducts}
            count={filteredProducts.length}
            category={categoryId}
          />
        </div>
      )}
    </div>
  );
};

export default CategoryScreen;
