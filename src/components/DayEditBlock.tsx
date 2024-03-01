"use client"
import { useState } from "react";

import EditDietPopup from "./EditDietPopup";

interface DayEditBlockProps {
  day: string;
}

const DayEditBlock: React.FC<DayEditBlockProps> = ({ day }) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <div
        className={`min-w-[340px] h-[14rem] bg-white bg-opacity-50 rounded-lg shadow-md p-8 flex flex-col items-center justify-between lg:hover:scale-105 hover:scale-100 hover:shadow-lg cursor-pointer transition-tranform duration-300`}
      >
        <h2 className="bg-white bg-opacity-85 rounded-md text-xl font-semibold mb-1 text-gray-800 p-2 select-none">
          {day}
        </h2>
        <button
          onClick={handleOpenPopup}
          className="bg-red-600 text-white font-medium rounded-md px-4 py-2 hover:bg-red-700"
        >
          Editar
        </button>
      </div>
      {showPopup && (
        <EditDietPopup day={day} handleClosePopup={handleClosePopup} />
      )}
    </>
  );
};

export default DayEditBlock;
