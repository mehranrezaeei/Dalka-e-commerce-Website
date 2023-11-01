import { configureStore } from "@reduxjs/toolkit";
import shoppingcart from "../features/shoppingCartSlice/shoppingCartSlice";
const store = configureStore({
  reducer: {
    shoppingcart: shoppingcart,
  },
});

export default store;
