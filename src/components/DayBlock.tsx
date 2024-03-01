import { useState } from "react";

import Popup from "./Popup";

import { Diet } from "@/models/diet";

interface DayBlockProps {
  day: string;
  diet: Diet;
}

const DayBlock: React.FC<DayBlockProps> = ({ day, diet }) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  function formatarString(plainText: string) {
    const normalizedText = plainText
      .normalize("NFD")
      .replace(/[\u0300-\u036F]/g, "")
      .toLowerCase();
    return normalizedText;
  }

  return (
    <>
      <div
        style={{ backgroundImage: `url(/cards/${formatarString(day)}.webp)` }}
        className={`min-w-[340px] h-auto rounded-lg shadow-md p-8 flex flex-col items-center justify-between lg:hover:scale-105 hover:scale-100 hover:shadow-lg cursor-pointer transition-tranform lg:duration-300`}
      >
        <h2 className="bg-white bg-opacity-85 rounded-md text-xl font-semibold mb-1 text-gray-800 p-2 select-none">
          {day}
        </h2>
        <p className="bg-white bg-opacity-85 rounded-md text-gray-600 mb-8 p-2 select-none">
          {diet.shortDescription}
        </p>
        <button
          onClick={handleOpenPopup}
          className="bg-red-600 text-white font-medium rounded-md px-4 py-2 hover:bg-red-700"
        >
          Ver Detalhes
        </button>
      </div>
      {showPopup && (
        <Popup diet={diet} day={day} handleClosePopup={handleClosePopup} />
      )}
    </>
  );
};

export default DayBlock;
