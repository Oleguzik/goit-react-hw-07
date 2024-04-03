import { contactsReducer } from "./contactsSlice";
import { filtersReducer } from "./filtersSlice";

import { configureStore } from "@reduxjs/toolkit";

import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
const persistInit = {
  key: "root",
  storage,
};

const store = configureStore({
  reducer: {
    contacts: persistReducer(persistInit, contactsReducer),
    filters: filtersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
export const persistor = persistStore(store);
