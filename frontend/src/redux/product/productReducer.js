const INITIAL_STATE = {
  products: [],
  product: null,
  isLoading: false,
  error: false,
};

export const ProductReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case "GET_PRODUCTS_START":
    case "GET_PRODUCT_BY_ID_REQUEST":
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
    case "GET_PRODUCT_BY_ID_SUCCESS":
      return {
        ...state,
        product: payload,
        isLoading: false,
      };
    case "GET_PRODUCT_BY_ID_FAIL":
      return {
        ...state,
        isLoading: false,
        error: payload,
        product: null,
      };
    case "CLEAR_STATE":
      return {
        products: [],
        product: null,
        isLoading: false,
        error: false,
      };
    default:
      return state;
  }
};
