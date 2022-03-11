import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import DisplayProduct from "../components/displayProduct";

const SubCategoryScreen = () => {
  const { categoryId, subCategoryId } = useParams();
  console.log(categoryId, subCategoryId);
  const { products } = useSelector((state) => state.product);
  const filterBySubCategory = products.filter(
    (prod) => prod.sub_category == subCategoryId
  );
  console.log(filterBySubCategory);

  return (
    <div className="wrapper">
      <div className="product__wrapper">
        <DisplayProduct
          products={filterBySubCategory}
          subCategory={subCategoryId}
          count={filterBySubCategory.length}
        />
      </div>
    </div>
  );
};

export default SubCategoryScreen;
