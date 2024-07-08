"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { searchWord } from "@/app/store/dictionarySlice";
import { AppDispatch } from "@/lib/redux";
import { debounce } from "@/app/utils/helpers";

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
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex">
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Enter a word..."
          className="flex-grow p-2 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-blue-600 dark:hover:bg-blue-700"
        >
          Search
        </button>
      </div>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </form>
  );
};

export default SearchBar;
