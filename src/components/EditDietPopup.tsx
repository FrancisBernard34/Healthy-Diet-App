"use strict";

import CreateDiet from "@/app/actions/CreateDiet";

interface PopupProps {
  day: string;
  handleClosePopup: Function;
}

const Popup: React.FC<PopupProps> = ({ day, handleClosePopup }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-2xl shadow-black w-full md:w-1/2 lg:w-2/3 xl:w-1/2 2xl:w-1/3 max-h-screen overflow-y-auto p-8 mx-4">
        <div className="p-4 flex flex-col items-start">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Detalhes da Dieta - {day}
          </h2>
          <form
            className="w-full flex flex-col gap-4"
            action={CreateDiet}
          >
            <div>
              <label
                htmlFor="dietShortDescription"
                className="block text-sm font-medium text-gray-700"
              >
                Descrição Curta
              </label>
              <input
                type="text"
                name="dietShortDescription"
                id="dietShortDescription"
                required
                maxLength={40}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label
                htmlFor="dietLongDescription"
                className="block text-sm font-medium text-gray-700"
              >
                Descrição Longa
              </label> 
              <textarea
                name="dietLongDescription"
                id="dietLongDescription"
                required
                maxLength={400}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md resize-none"
              />
            </div>
            <div>
              <input type="hidden" name="day" value={day} />
            </div>
            <button
              type="submit"
              className="rounded-lg bg-red-500 text-white py-2 px-4 shadow-md hover:bg-red-600 transition duration-300 ease-in-out focus:outline-none"
              
            >
              Salvar
            </button>
            <button
              onClick={() => handleClosePopup()}
              className="rounded-lg bg-white text-black py-2 px-4 shadow-md hover:bg-gray-300 transition duration-300 ease-in-out focus:outline-none border border-gray-400"
              
            >
              Voltar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Popup;
