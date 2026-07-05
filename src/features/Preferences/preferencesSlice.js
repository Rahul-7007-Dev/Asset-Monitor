import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "light",
  language: "en",
};

const preferenceSlice = createSlice({
  name: "preference",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
    changeLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { toggleTheme, changeLanguage } = preferenceSlice.actions;

export default preferenceSlice.reducer;

export const selectTheme = (state) => state.preferences.theme;
export const selectLanguage = (state) => state.preferences.language;
