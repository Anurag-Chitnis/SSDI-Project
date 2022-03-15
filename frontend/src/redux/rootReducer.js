// Redux Imports
import { combineReducers } from "redux";

// Import Reducer
import { ProductReducer } from "./product/productReducer";
import { UserReducer } from "./user/userReducer";
import { CartReducer } from "./cart/cartReducer";
const RootReducer = combineReducers({
  product: ProductReducer,
  user: UserReducer,
  cart: CartReducer,
});

export default RootReducer;
