import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/redux";

const SearchHistory: React.FC = () => {
  const searchHistory = useSelector(
    (state: RootState) => state.dictionary.searchHistory
  );

  return (
    <div className="mt-6">
      <h3 className="text-xl font-bold mb-2">Search History</h3>
      {searchHistory.length === 0 ? (
        <p>No search history yet.</p>
      ) : (
        <ul className="list-disc list-inside">
          {searchHistory.map((item, index) => (
            <li key={index} className="mb-2">
              <span className="font-semibold">{item.word}</span> -{" "}
              {new Date(item.timestamp).toLocaleString()}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchHistory;
