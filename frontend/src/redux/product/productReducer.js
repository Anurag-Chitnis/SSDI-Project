const INITIAL_STATE = {
  products: [],
  isLoading: false,
  error: false,
};

export const ProductReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case "GET_PRODUCTS_START":
      return {
        ...state,
        isLoading: true,
      };
    case "GET_PRODUCTS_SUCCESS":
      return {
        ...state,
        isLoading: false,
        products: payload,
      };
    case "GET_PRODUCTS_FAIL":
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    default:
      return state;
  }
};
