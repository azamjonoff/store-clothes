// redux
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const url = "https://json-api.uz/api/project/clothes-abdulloh/clothes";

export const getData = createAsyncThunk("clothes/getData", async () => {
  const req = await fetch(url)
    .then((data) => data.json())
    .then((data) => data.data);

  return req;
});

export const initialState = {
  clothes: [],
  ordered: [],
  clearOrder: [],
  totalClothes: 0,
  totalPrice: 0,
  isLoading: false,
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
  extraReducers: (builder) => {
    builder
      .addCase(getData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getData.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.clothes = payload;
      })
      .addCase(getData.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { addAllClothes, clearCart } = clothesSlice.actions;
export default clothesSlice.reducer;
