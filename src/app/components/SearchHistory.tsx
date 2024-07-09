import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/redux";

const SearchHistory: React.FC = () => {
  const searchHistory = useSelector(
    (state: RootState) => state.dictionary.searchHistory
  );

  return (
    <div className="mt-6">
      {searchHistory.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-400">
          No search history yet.
        </p>
      ) : (
        <ul className="list-disc list-inside marker:text-purple-600 dark:marker:text-purple-400">
          {searchHistory.map((item, index) => (
            <li key={index} className="mb-2 text-gray-600 dark:text-gray-400">
              <span className="font-semibold text-black dark:text-white">
                {item.word}
              </span>{" "}
              - {new Date(item.timestamp).toLocaleString()}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchHistory;
