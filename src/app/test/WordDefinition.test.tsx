// Integration tests

import React from "react";
import { render } from "@testing-library/react";
import WordDefinition from "@/app/components/WordDefinition";

const mockData = {
  word: "hello",
  phonetics: [
    {
      text: "həˈləʊ",
      audio: "",
    },
  ],
  meanings: [
    {
      partOfSpeech: "interjection",
      definitions: [
        {
          definition: "Used to greet someone",
          example: "Hello, Cristian!",
        },
      ],
      synonyms: ["hi", "hey"],
      antonyms: ["bye", "goodbye"],
    },
  ],
  sources: ["https://en.wiktionary.org/wiki/hello"],
};

describe("WordDefinition", () => {
  it("should render,word, phonetics, meanings, and source", () => {
    const { getByText, getByRole } = render(<WordDefinition {...mockData} />);

    // Verify word
    expect(getByText("hello")).toBeInTheDocument();

    // Verify phonetics
    expect(getByText("həˈləʊ")).toBeInTheDocument();

    // Verify meanings
    expect(getByText("interjection")).toBeInTheDocument();
    expect(getByText("Used to greet someone")).toBeInTheDocument();
    expect(getByText('"Hello, Cristian!"')).toBeInTheDocument();

    // Verify synonyms
    expect(getByText("hi")).toBeInTheDocument();
    expect(getByText("hey")).toBeInTheDocument();

    // Verify antonyms
    expect(getByText("bye")).toBeInTheDocument();
    expect(getByText("goodbye")).toBeInTheDocument();

    // Verify source
    expect(
      getByRole("link", { name: "https://en.wiktionary.org/wiki/hello" })
    ).toHaveAttribute("href", "https://en.wiktionary.org/wiki/hello");
  });
});
