import React, { ReactNode, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setThemeFromSystem } from "@/app/store/themeSlice";
import { RootState } from "@/lib/redux";
import ThemeToggle from "@/app/components/ThemeToggle";
import FontSelector from "@/app/components/FontSelector";
import { Book, History } from "lucide-react";
import HistoryModal from "./HistoryModal";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);
  const currentFont = useSelector((state: RootState) => state.font.currentFont);

  useEffect(() => {
    dispatch(setThemeFromSystem());
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => dispatch(setThemeFromSystem());
    mediaQuery.addListener(handleChange);
    return () => mediaQuery.removeListener(handleChange);
  }, [dispatch]);

  useEffect(() => {
    document.body.className = isDarkMode ? "dark" : "";
  }, [isDarkMode]);

  const [isHistoryModalOpen, setIsHistoryModalOpen] = useState(false);

  return (
    <div
      className={`min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 font-${currentFont}`}
    >
      <header className="py-4 px-6 lg:px-[15rem] flex justify-between items-center bg-gray-100 dark:bg-gray-800">
        <div>
          <Book className="w-8 h-8 text-gray-800 dark:text-white" />
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setIsHistoryModalOpen(true)}
            className="bg-purple-400 text-black/70 dark:text-white/70 p-2 rounded-full dark:bg-purple-700 dark:hover:bg-purple-600 hover:bg-purple-600 transition-colors focus:ring-2 focus:outline-none focus:ring-purple-500"
          >
            <History className="w-6 h-6" />
          </button>
          <FontSelector />
          <ThemeToggle />
        </div>
      </header>
      <main className="flex items-center space-x-4">{children}</main>
      <HistoryModal
        isOpen={isHistoryModalOpen}
        onClose={() => setIsHistoryModalOpen(false)}
      />
    </div>
  );
};

export default Layout;
