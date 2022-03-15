import axios from "axios";

// Get Product Id and Qty of product
// Fetch that product
// Dispatch Action with product
// Otherwise throw error

export const addToCart = (qty, id) => (dispatch) => {
  dispatch({
    type: "ADD_CART_ITEM_START",
  });

  try {
  } catch (err) {}
};
