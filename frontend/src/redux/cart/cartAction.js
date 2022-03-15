import axios from "axios";

export const addToCart = (qty, id) => async (dispatch) => {
  dispatch({
    type: "ADD_CART_ITEM_START",
  });

  try {
    const { data } = await axios.get(`/api/products/${id}`);
    dispatch({
      type: "ADD_CART_ITEM_SUCCESS",
      payload: { ...data, qty },
    });
  } catch (err) {
    dispatch({
      type: "ADD_CART_ITEM_FAIL",
      payload: err.response.message,
    });
  }
};

export const removeFromCart = (id) => async (dispatch) => {
  dispatch({
    type: "REMOVE_CART_ITEM_START",
  });
  try {
    const { data } = await axios.get(`/api/products/${id}`);
    dispatch({
      type: "REMOVE_CART_ITEM_SUCCESS",
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: "REMOVE_CART_ITEM_FAIL",
      payload: err.response.message,
    });
  }
};
