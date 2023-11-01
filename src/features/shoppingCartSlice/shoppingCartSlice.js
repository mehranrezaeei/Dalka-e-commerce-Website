import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  itemsCounter: 0,
  selectedItems: [],
  total: 0,
  checkout: false,
};

const itemsCount = (state) => {
  let itemsCounter = 0;
  state.selectedItems.map((item) => (itemsCounter += item.quantity));
  return itemsCounter;
};
const totalCount = (state) => {
  let result = 0;
  state.selectedItems.map((item) => (result += item.price * item.quantity));
  return result;
};

const ShoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {
    AddItem(state, action) {
      if (!state.selectedItems.find((item) => item.id === action.payload.id)) {
        state.selectedItems.push({ ...action.payload, quantity: 1 });
        state.itemsCounter = itemsCount(state);
      }
      state.total = totalCount(state);
    },
    RemoveItem(state, action) {
      const newSelectedItems = state.selectedItems.filter(
        (item) => item.id !== action.payload
      );
      state.selectedItems = newSelectedItems;
      state.itemsCounter = itemsCount(state);
      state.total = totalCount(state);
    },
    Increase(state, action) {
      const indexI = state.selectedItems.findIndex(
        (item) => item.id === action.payload
      );
      state.selectedItems[indexI].quantity += 1;
      state.itemsCounter = itemsCount(state);
      state.total = totalCount(state);
    },
    Decrease(state, action) {
      const indexD = state.selectedItems.findIndex(
        (item) => item.id === action.payload
      );
      state.selectedItems[indexD].quantity -= 1;
      state.itemsCounter = itemsCount(state);
      state.total = totalCount(state);
    },
    Checkout(state, action) {
      return {
        itemsCounter: 0,
        selectedItems: [],
        total: 0,
        checkout: false,
      };
    },
    Clear(state, action) {
      return {
        itemsCounter: 0,
        selectedItems: [],
        total: 0,
        checkout: false,
      };
    },
  },
});
export default ShoppingCartSlice.reducer;
export const { AddItem, RemoveItem, Increase, Decrease, Checkout, Clear } =
  ShoppingCartSlice.actions;
