import { configureStore } from "@reduxjs/toolkit";
import dictionaryReducer from "@/app/store/dictionarySlice";
import themeReducer from "@/app/store/themeSlice";
import fontReducer from "@/app/store/fontSlice";

export const store = configureStore({
  reducer: {
    dictionary: dictionaryReducer,
    theme: themeReducer,
    font: fontReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
