import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface DictionaryState {
  word: string;
  definitions: any[];
  loading: boolean;
  error: string | null;
  searchHistory: { word: string; timestamp: number }[];
}

const initialState: DictionaryState = {
  word: "",
  definitions: [],
  loading: false,
  error: null,
  searchHistory: [],
};

export const searchWord = createAsyncThunk(
  "dictionary/searchWord",
  async (word: string) => {
    const response = await axios.get(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    return response.data;
  }
);

const dictionarySlice = createSlice({
  name: "dictionary",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(searchWord.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchWord.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.word = action.payload[0].word;
        state.definitions = action.payload[0].meanings;
        state.searchHistory.unshift({
          word: action.payload[0].word,
          timestamp: Date.now(),
        });
        if (state.searchHistory.length > 10) {
          state.searchHistory.pop();
        }
      })
      .addCase(searchWord.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "An error occured";
      });
  },
});

export default dictionarySlice.reducer;
