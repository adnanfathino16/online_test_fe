import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./slices/navbarSlice";

const store = configureStore({
  reducer: {
    navbar: navReducer,
  },
});

export default store;
