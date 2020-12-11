import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";

import authReducer from "./authReducer";
import persistedReducer from "./toPersistReducer";

const persistConfig = {
  key: "root",
  storage: storageSession,
  whitelist: ["persist"],
};

const rootReducer = combineReducers({
  auth: authReducer,
  persist: persistedReducer,
});

export default persistReducer(persistConfig, rootReducer);
