// Import Root Reducer
import RootReducer from "./rootReducer";
import { applyMiddleware, createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import logger from "redux-logger";

const middleware = [logger, thunk];

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, RootReducer);

export const store = createStore(
  persistedReducer,
  applyMiddleware(...middleware)
);
export const persistor = persistStore(store);
