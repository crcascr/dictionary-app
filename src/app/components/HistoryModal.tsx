import React, { useState } from "react";
import SearchHistory from "./SearchHistory";
import { X } from "lucide-react";

interface HistoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const HistoryModal: React.FC<HistoryModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg w-full max-w-md">
        <div className=" flex flex-row justify-between mb-2 items-center">
          <h2 className="text-2xl font-bold dark:text-white">Search History</h2>
          <button
            onClick={onClose}
            className="bg-purple-400 text-black/70 dark:text-white/70 p-2 rounded-full dark:bg-purple-700 dark:hover:bg-purple-600 hover:bg-purple-600 transition-colors focus:ring-2 focus:outline-none focus:ring-purple-500"
          >
            <X className="w-6 h-6" fill="currentColor" />
          </button>
        </div>
        <SearchHistory />
      </div>
    </div>
  );
};

export default HistoryModal;
