export const filterByProp = (arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i].category)) {
      result.push(arr[i].category);
    }
  }
  return result;
};

export const filterBySubCategory = (arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i].sub_category)) {
      result.push(arr[i].sub_category);
    }
  }
  return result;
};
