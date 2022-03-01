export const sliceArrByProp = (products, category) => {
  let slice = [];
  for (let i = 0; i < category.length; i++) {
    slice.push({
      key: category[i],
      value: products.filter((product) => product.category == category[i]),
    });
  }
  return slice;
};
