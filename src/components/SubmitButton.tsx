"use client";

import { useFormStatus } from "react-dom";
import Loading from "react-loading";

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      aria-disabled={pending}
      className="rounded-lg bg-red-500 text-white text-center py-2 px-4 shadow-md flex justify-center hover:bg-red-600 transition duration-300 ease-in-out focus:outline-none"
    >
      {pending ? ( <Loading type="spin" color="#fff" height={30} width={30} />) : "Salvar"}
    </button>
  );  
};

export default SubmitButton;
