import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FontState {
  currentFont: string;
}

const initialState: FontState = {
  currentFont: "sans-serif",
};

const FontSlice = createSlice({
  name: "font",
  initialState,
  reducers: {
    setFont: (state, action: PayloadAction<string>) => {
      state.currentFont = action.payload;
    },
  },
});

export const { setFont } = FontSlice.actions;
export default FontSlice.reducer;
