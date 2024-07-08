import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface Phonetic {
  text?: string;
  audio: string;
}

interface Meaning {
  partOfSpeech: string;
  definitions: {
    definition: string;
    example?: string;
  }[];
}

interface DictionaryState {
  word: string;
  phonetics: Phonetic[];
  meanings: Meaning[];
  loading: boolean;
  error: string | null;
  searchHistory: { word: string; timestamp: number }[];
}

const initialState: DictionaryState = {
  word: "",
  phonetics: [],
  meanings: [],
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
    return response.data[0]; // Assuming we're always using the first result
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
        state.word = action.payload.word;
        state.phonetics = action.payload.phonetics;
        state.meanings = action.payload.meanings;
        state.searchHistory.unshift({
          word: action.payload.word,
          timestamp: Date.now(),
        });
        if (state.searchHistory.length > 10) {
          state.searchHistory.pop();
        }
      })
      .addCase(searchWord.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "An error occurred";
      });
  },
});

export default dictionarySlice.reducer;
