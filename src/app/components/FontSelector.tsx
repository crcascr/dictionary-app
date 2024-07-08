import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFont } from "@/app/store/fontSlice";
import { RootState } from "@/lib/redux";

const FontSelector: React.FC = () => {
  const dispatch = useDispatch();
  const currentFont = useSelector((state: RootState) => state.font.currentFont);

  const fonts = ["serif", "sans-serif", "monospace"];

  const handleFontChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setFont(e.target.value));
  };

  return (
    <select
      value={currentFont}
      onChange={handleFontChange}
      className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      {fonts.map((font) => (
        <option key={font} value={font}>
          {font}
        </option>
      ))}
    </select>
  );
};

export default FontSelector;
