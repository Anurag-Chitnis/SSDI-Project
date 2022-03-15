const INITIAL_STATE = {
  cartItems: [],
  isLoading: false,
  error: null,
};

// Add To cart logic
// Check in cart if item is already present
// if present then append qty by given qty
// Otherwise add new item

export const CartReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case "ADD_CART_ITEM_START":
    case "REMOVE_CART_ITEM_START":
      return {
        ...state,
        isLoading: true,
      };
    case "ADD_CART_ITEM_SUCCESS":
      const exists = state.cartItems.find((itm) => itm._id === payload._id);
      if (!exists) {
        return {
          ...state,
          cartItems: [...state.cartItems, payload],
        };
      } else {
        return {
          ...state,
          cartItems: state.cartItems.map((itm) =>
            itm._id === payload._id ? payload : itm
          ),
        };
      }
    case "REMOVE_CART_ITEM_SUCCESS":
      return {
        ...state,
        cartItems: state.cartItems.filter((itm) => itm._id !== payload._id),
      };

    case "REMOVE_CART_ITEM_FAIL":
    case "ADD_CART_ITEM_FAIL":
      return {
        ...state,
        error: payload,
      };
    case "CLEAR_CART":
      return {
        cartItems: [],
        isLoading: false,
        error: null,
      };
    default:
      return state;
  }
};
