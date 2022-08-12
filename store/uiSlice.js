import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartIsVisible: false,
  menuIsVisible: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleCart: (state) => {
      state.cartIsVisible = !state.cartIsVisible;
    },
    toggleCartClose: (state) => {
      state.cartIsVisible = false;
    },
    toggleCartOpen: (state) => {
      state.cartIsVisible = true;
    },
    toggleMenu: (state) => {
      state.menuIsVisible = !state.menuIsVisible;
    },
    toggleMenuClose: (state) => {
      state.menuIsVisible = false;
    },
  },
});

export const {
  toggleCart,
  toggleMenu,
  toggleCartClose,
  toggleCartOpen,
  toggleMenuClose,
} = uiSlice.actions;

export const selectCartIsVisible = (state) => state.ui.cartIsVisible;
export const selectMenuIsVisible = (state) => state.ui.menuIsVisible;

export default uiSlice.reducer;
