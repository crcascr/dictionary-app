"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/lib/redux";
import { searchWord } from "@/app/store/dictionarySlice";
import Layout from "@/app/components/Layout";
import SearchBar from "@/app/components/SearchBar";
import WordDefinition from "@/app/components/WordDefinition";

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const { word, phonetics, meanings, sources, loading, error } = useSelector(
    (state: RootState) => state.dictionary
  );

  useEffect(() => {
    dispatch(searchWord("hello"));
  }, [dispatch]);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 lg:px-[15rem]">
        <SearchBar />
        {loading && (
          <p className="text-gray-600 dark:text-gray-400">Loading...</p>
        )}
        {error && <p className="text-red-500">{error}</p>}
        {word && (
          <WordDefinition
            word={word}
            phonetics={phonetics}
            meanings={meanings}
            sources={sources}
          />
        )}
      </div>
    </Layout>
  );
}
