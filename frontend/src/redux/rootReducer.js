// Redux Imports
import { combineReducers } from "redux";

// Import Reducer
import { ProductReducer } from "./product/productReducer";

const RootReducer = combineReducers({
  product: ProductReducer,
});

export default RootReducer;
