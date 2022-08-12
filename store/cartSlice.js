import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
  grandPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      state.totalPrice += newItem.price;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          name: newItem.name,
          nameShort: newItem.nameShort,
          category: newItem.category,
          image: newItem.image,
          quantity: 1,
        });
      } else {
        existingItem.quantity++;
      }
    },
    removeFromCart: (state, action) => {
      const removedItem = action.payload;
      const existingItem = state.items.find(
        (item) => item.id === removedItem.id
      );
      state.totalQuantity--;
      state.totalPrice -= removedItem.price;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== removedItem.id);
      } else {
        existingItem.quantity--;
      }
    },
    removeAllFromCart: (state) => {
      state.items = [];
      state.totalPrice = 0;
      state.totalQuantity = 0;
      state.grandPrice = 0;
    },
    setGrandPrice: (state, action) => {
      state.grandPrice = action.payload;
    },
  },
});

export const { addToCart, removeFromCart, removeAllFromCart, setGrandPrice } =
  cartSlice.actions;

export const selectItems = (state) => state.cart.items;
export const selectTotalQty = (state) => state.cart.totalQuantity;
export const selectTotalPrice = (state) => state.cart.totalPrice;
export const selectGrandPrice = (state) => state.cart.grandPrice;

export default cartSlice.reducer;
