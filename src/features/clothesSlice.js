// redux
import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  clothes: [],
  ordered: [],
  clearOrder: [],
  totalClothes: 0,
  totalPrice: 0,
};

export const clothesSlice = createSlice({
  name: "clothes",
  initialState,
  reducers: {
    addAllClothes: (state, { payload }) => {
      state.clothes = payload;
    },
    clearCart: (state) => {
      state.clothes.push(state.clearOrder);
    },
  },
});
