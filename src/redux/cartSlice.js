import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    isVisible: false,
  },
  reducers: {
    showCart: (state) => {
      state.isVisible = true;
    },
    hideCart: (state) => {
      state.isVisible = false;
    },
  },
});

// actions
export const { showCart, hideCart } = cartSlice.actions;

export default cartSlice.reducer;
