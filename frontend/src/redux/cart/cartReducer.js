const INITIAL_STATE = {
  cartItems: [],
  isLoading: false,
  error: null,
};

export const CartReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case "ADD_CART_ITEM_START":
      return {
        ...state,
        isLoading: true,
      };
    case "ADD_CART_ITEM_SUCCESS":
      return {
        ...state,
        cartItems: payload,
      };
    case "ADD_CART_ITEM_FAIL":
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
};
