import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartIsVisible: false,
  menuIsVisible: false,
  successIsVisible: false,
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
    toggleSuccess: (state) => {
      state.successIsVisible = !state.successIsVisible;
    },
  },
});

export const {
  toggleCart,
  toggleMenu,
  toggleCartClose,
  toggleCartOpen,
  toggleMenuClose,
  toggleSuccess,
} = uiSlice.actions;

export const selectCartIsVisible = (state) => state.ui.cartIsVisible;
export const selectMenuIsVisible = (state) => state.ui.menuIsVisible;
export const selectSuccessIsVisible = (state) => state.ui.successIsVisible;

export default uiSlice.reducer;
