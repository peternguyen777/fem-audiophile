import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formData: {
    name: "",
    email: "",
    phone: "",
    address: "",
    suburb: "",
    state: "",
    pcode: "",
    payment: "",
  },
};

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    submitCheckout: (state, action) => {
      const data = action.payload;
      state.formData = data;
    },
    eraseCheckout: (state) => {
      state.formData = initialState.formData;
    },
  },
});

export const { submitCheckout, eraseCheckout } = checkoutSlice.actions;

export const selectData = (state) => state.checkout.formData;

export default checkoutSlice.reducer;
