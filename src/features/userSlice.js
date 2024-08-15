// redux
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthReady: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    isAuthChange: (state) => {
      state.isAuthReady = true;
    },
  },
});

export const { isAuthChange } = userSlice.actions;
export default userSlice.reducer;
