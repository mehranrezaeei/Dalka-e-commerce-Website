import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  itemsCounter: 0,
  selectedItems: [],
  total: 0,
  CheckOut: false,
};

const itemsCount = (state) => {
  let itemsCounter = 0;
  state.selectedItems.map((item) => {
    itemsCounter += item.quantity;
  });
  return itemsCounter;
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
    },
    RemoveItem(state, action) {
      const newSelectedItems = state.selectedItems.filter(
        (item) => item.id !== action.payload
      );
      state.selectedItems = newSelectedItems;
      state.itemsCounter = itemsCount(state);
    },
    Increase(state, action) {
      const indexI = state.selectedItems.findIndex(
        (item) => item.id === action.payload
      );
      state.selectedItems[indexI].quantity += 1;
      state.itemsCounter = itemsCount(state);
    },
    Decrease(state, action) {
      const indexD = state.selectedItems.findIndex(
        (item) => item.id === action.payload
      );
      state.selectedItems[indexD].quantity -= 1;
      state.itemsCounter = itemsCount(state);
    },
    CheckOut(state, action) {
      return {
        itemsCounter: 0,
        selectedItems: [],
        total: 0,
        CheckOut: true,
      };
    },
    Clear(state, action) {
      return {
        itemsCounter: 0,
        selectedItems: [],
        total: 0,
        CheckOut: false,
      };
    },
  },
});
export default ShoppingCartSlice.reducer;
export const { AddItem, RemoveItem, Increase, Decrease, CheckOut, Clear } =
  ShoppingCartSlice.actions;
