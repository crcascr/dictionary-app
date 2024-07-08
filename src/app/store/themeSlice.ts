import { createSlice } from "@reduxjs/toolkit";

interface ThemeState {
  isDarkMode: boolean;
}

const initialState: ThemeState = {
  isDarkMode: false,
};

const ThemeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
    setThemeFromSystem: (state) => {
      state.isDarkMode = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
    },
  },
});

export const { toggleTheme, setThemeFromSystem } = ThemeSlice.actions;
export default ThemeSlice.reducer;
