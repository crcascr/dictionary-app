import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "@/app/store/themeSlice";
import { RootState } from "@/lib/redux";
import React from "react";
import { Sun, Moon } from "lucide-react";

const ThemeToggle: React.FC = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <button
      onClick={handleToggle}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      {isDarkMode ? (
        <Sun className="w-6 h-6 text-yellow-500" fill="currentColor" />
      ) : (
        <Moon
          className="w-6 h-6 text-gray-800 dark:text-white"
          fill="currentColor"
        />
      )}
    </button>
  );
};

export default ThemeToggle;
