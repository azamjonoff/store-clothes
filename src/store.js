// redux
import { configureStore } from "@reduxjs/toolkit";

// features
import userReducer from "./features/userSlice";
import clothesReducer from "./features/clothesSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    clothes: clothesReducer,
  },
});
