"use client";

import { useFormStatus } from "react-dom";

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      aria-disabled={pending}
      className="rounded-lg bg-red-500 text-white py-2 px-4 shadow-md hover:bg-red-600 transition duration-300 ease-in-out focus:outline-none"
    >
      Salvar
    </button>
  );
};

export default SubmitButton;
