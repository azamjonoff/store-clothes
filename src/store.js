// redux
import { configureStore } from "@reduxjs/toolkit";

// features
import userReducer from "./features/userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
