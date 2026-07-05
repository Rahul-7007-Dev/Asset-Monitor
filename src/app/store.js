import { configureStore } from "@reduxjs/toolkit";
import preferencesReducer from "../features/Preferences/preferencesSlice";
import authReducer from "../features/auth/authenticationSlice";

export const store = configureStore({
  reducer: { preferences: preferencesReducer, auth: authReducer },
});
