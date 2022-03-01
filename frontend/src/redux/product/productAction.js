// Default Imports
import axios from "axios";

export const getProducts = () => async (dispatch) => {
  dispatch({
    type: "GET_PRODUCTS_START",
  });

  try {
    const { data } = await axios.get("/api/products");
    // On Success of Fetching data
    dispatch({
      type: "GET_PRODUCTS_SUCCESS",
      payload: data,
    });
  } catch (err) {
    // On dispatch error
    dispatch({
      type: "GET_PRODUCTS_FAIL",
      payload: err.response.data.message
        ? err.response.data.message
        : err.message,
    });
  }
};
