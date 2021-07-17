import React from "react";

export default function SubmitButton() {
  return (
    <button
      className="bg-gray_blue text-white active:bg-gray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
      type="submit"
    >
      Send
    </button>
  );
}
