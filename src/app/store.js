import { configureStore } from "@reduxjs/toolkit";
import shoppingcart from "../features/shoppingCartSlice/shoppingCartSlice";
import logger from "redux-logger";
const store = configureStore({
  reducer: {
    shoppingcart: shoppingcart,
  },
  middleware: [logger],
});

export default store;
