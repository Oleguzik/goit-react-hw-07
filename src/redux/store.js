import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice";
import { filtersReducer } from "./filtersSlice";

// import storage from "redux-persist/lib/storage";
// import { persistStore, persistReducer } from "redux-persist";
// const persistInit = {
//   key: "root",
//   storage,
// };

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
  },
});

export default store;

// export const persistor = persistStore(store);
