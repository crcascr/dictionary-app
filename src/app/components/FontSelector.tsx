import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFont } from "@/app/store/fontSlice";
import { RootState } from "@/lib/redux";

const FontSelector: React.FC = () => {
  const dispatch = useDispatch();
  const currentFont = useSelector((state: RootState) => state.font.currentFont);

  const fonts = [
    { name: "Serif", value: "serif" },
    { name: "Sans-Serif", value: "sans" },
    { name: "Monospace", value: "mono" },
  ];

  const handleFontChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setFont(e.target.value));
  };

  return (
    <div className="relative inline-block">
      <select
        value={currentFont}
        onChange={handleFontChange}
        className="appearance-none text-black dark:text-white font-bold p-2 pr-8 border border-purple-200 dark:border-purple-700 rounded-xl focus:ring-2 focus:outline-none focus:ring-purple-500 bg-purple-50 dark:bg-purple-900"
      >
        {fonts.map((font) => (
          <option key={font.value} value={font.value}>
            {font.name}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-purple-700 dark:text-purple-100">
        <svg
          className="fill-current h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
        </svg>
      </div>
    </div>
  );
};

export default FontSelector;
