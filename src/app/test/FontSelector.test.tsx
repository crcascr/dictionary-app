// Unitary tests

import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore, EnhancedStore } from "@reduxjs/toolkit";
import FontSelector from "@/app/components/FontSelector";
import { setFont } from "@/app/store/fontSlice";
import "@testing-library/jest-dom/extend-expect";

describe("FontSelector", () => {
  let store: EnhancedStore<any>;

  beforeEach(() => {
    store = configureStore({
      reducer: {},
      preloadedState: {
        font: { currentFont: "sans" },
      },
    });
  });

  it("should render with the correct initial font", () => {
    render(
      <Provider store={store}>
        <FontSelector />
      </Provider>
    );

    expect(screen.getByDisplayValue("Sans-Serif")).toBeInTheDocument();
  });

  it("should dispatch setFont action on font change", () => {
    const { getByDisplayValue } = render(
      <Provider store={store}>
        <FontSelector />
      </Provider>
    );

    fireEvent.change(getByDisplayValue("Sans-Serif"), {
      target: { value: "serif" },
    });

    expect(store.getState().font.currentFont).toBe("serif");
  });
});
