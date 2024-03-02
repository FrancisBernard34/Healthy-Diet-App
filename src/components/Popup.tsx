
import { Diet } from "../../models/diet";

interface PopupProps {
  day: string;
  diet: Diet;
  handleClosePopup: Function;
}

const Popup: React.FC<PopupProps> = ({ diet, day, handleClosePopup }) => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50"
    >
      <div className="bg-white rounded-lg shadow-2xl shadow-black w-full md:w-1/2 lg:w-2/3 xl:w-1/2 2xl:w-1/3 max-h-screen overflow-y-auto p-8 mx-4">
        <div className="p-4 flex flex-col items-start">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Detalhes da Dieta - {day}
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            {diet.fullDescription}
          </p>
          <button
            className="rounded-lg bg-red-500 text-white py-2 px-4 shadow-md hover:bg-red-600 transition duration-300 ease-in-out focus:outline-none"
            onClick={() => handleClosePopup()}
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};


export default Popup;
