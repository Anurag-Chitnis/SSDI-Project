// Redux Imports
import { combineReducers } from "redux";

// Import Reducer
import { ProductReducer } from "./product/productReducer";
import { UserReducer } from "./user/userReducer";

const RootReducer = combineReducers({
  product: ProductReducer,
  user: UserReducer,
});

export default RootReducer;
