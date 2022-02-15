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
  },
});

// actions
export const { showCart } = cartSlice.actions;

export default cartSlice.reducer;
