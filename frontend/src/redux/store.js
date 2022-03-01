// Import Root Reducer
import RootReducer from "./rootReducer";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

const middleware = [logger, thunk];

const store = createStore(RootReducer, applyMiddleware(...middleware));

export default store;
