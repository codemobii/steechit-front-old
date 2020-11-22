import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web and AsyncStorage for react-native
import { createFilter } from "redux-persist-transform-filter";
import rootReducer from "./reducers";

const enhancers = [];
const middleware = [reduxThunk];

const keepLoadedIn = createFilter(
  "auth",
  ["loggedin", "token", "_id", "role", "email", "ballance"],
  ["loggedin", "token", "_id", "role", "email", "ballance"]
);
const keepPage = createFilter(
  "currentPage",
  ["page", "subPage"],
  ["page", "subPage"]
);

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "currentPage"],
  transforms: [keepLoadedIn, keepPage],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

export const store = createStore(persistedReducer, composedEnhancers);
export const persistor = persistStore(store);
export default store;
