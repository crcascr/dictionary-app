import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "@/app/store/themeSlice";
import { RootState } from "@/lib/redux";
import React from "react";
import { Sun, MoonStar } from "lucide-react";

const ThemeToggle: React.FC = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <button
      onClick={handleToggle}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 focus:ring-2 focus:outline-none focus:ring-purple-500"
    >
      {isDarkMode ? (
        <Sun
          className="w-6 h-6 text-purple-300 hover:text-purple-100 transition-colors"
          fill="currentColor"
        />
      ) : (
        <MoonStar
          className="w-6 h-6 text-purple-500 hover:text-purple-700 transition-colors"
          fill="currentColor"
        />
      )}
    </button>
  );
};

export default ThemeToggle;
