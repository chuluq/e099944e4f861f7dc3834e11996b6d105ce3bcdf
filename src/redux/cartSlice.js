import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    isVisible: false,
    orderCount: 0,
    orderDetails: [],
  },
  reducers: {
    showCart: (state) => {
      state.isVisible = true;
    },
    addOrderCount: (state) => {
      state.orderCount += 1;
    },
    addOrderDetails: (state, action) => {
      state.orderDetails.push(action.payload);
    },
  },
});

// actions
export const { showCart, addOrderCount, addOrderDetails } = cartSlice.actions;

export default cartSlice.reducer;
