"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { searchWord } from "@/app/store/dictionarySlice";
import { AppDispatch } from "@/lib/redux";
import { debounce } from "@/app/utils/helpers";
import { Search } from "lucide-react";

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  const validateSearchTerm = (term: string) => {
    if (term.trim() === "") {
      setError("Please enter a word to search");
      return false;
    }

    if (!/^[a-zA-Z\s-]+$/.test(term)) {
      setError("Please enter only letters, spaces, and hyphens");
      return false;
    }
    setError("");
    return true;
  };

  const debouncedSearch = useCallback(
    debounce((term: string) => {
      if (validateSearchTerm(term)) {
        dispatch(searchWord(term));
      }
    }, 300),
    [dispatch]
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTerm = e.target.value;
    setSearchTerm(newTerm);
    debouncedSearch(newTerm);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateSearchTerm(searchTerm)) {
      dispatch(searchWord(searchTerm));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="flex">
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Enter a word..."
          className="flex-grow font-bold p-2 bg-purple-50 dark:bg-purple-900 border border-purple-200 dark:border-purple-700 rounded-l-xl focus:ring-2 focus:outline-none focus:ring-purple-500 focus:border-transparent dark:text-white placeholder-purple-400 dark:placeholder-purple-300"
        />
        <button
          type="submit"
          className="bg-purple-200 dark:bg-purple-700 hover:bg-purple-300 dark:hover:bg-purple-600 transition-colors text-purple-700 dark:text-purple-100 px-4 py-2 rounded-r-xl border border-purple-200 dark:border-purple-700 focus:ring-2 focus:outline-none focus:ring-purple-500"
        >
          <Search className="h-5 w-5" />
        </button>
      </div>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </form>
  );
};

export default SearchBar;
