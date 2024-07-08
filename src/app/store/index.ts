import { configureStore } from "@reduxjs/toolkit";
import dictionaryReducer from "./dictionarySlice";
import themeReducer from "./themeSlice";
import fontReducer from "./fontSlice";

export const store = configureStore({
  reducer: {
    dictionary: dictionaryReducer,
    theme: themeReducer,
    font: fontReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
