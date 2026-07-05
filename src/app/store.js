import { configureStore } from "@reduxjs/toolkit";
import preferencesReducer from "../features/Preferences/preferencesSlice";

export const store = configureStore({
  reducer: { preferences: preferencesReducer },
});
