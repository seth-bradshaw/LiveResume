import React from "react";

export default function FormBanner(props) {
  const {
    close,
    success,
    errorMessage = "There was an issue with your submission. Please try again.",
  } = props;
  return (
    <div
      className={`w-full h-14 mb-4 rounded-md ${
        success ? "bg-green-600" : "bg-red-600"
      } py-1.5 px-2 flex justify-between items-center`}
    >
      <div className="w-full h-full flex justify-start items-center">
        <div
          className={`flex justify-center items-center ${
            success ? "bg-green-800" : "bg-red-800"
          } p-2 w-10 h-10 rounded-md mr-2`}
        >
          <span className="text-white">
            <i
              class={`far ${
                success ? "fa-thumbs-up" : "fa-exclamation-circle"
              } fa-lg`}
            ></i>
          </span>
        </div>
        <div className="text-left flex items-center">
          <p className="text-white text-bold text-sm sm:text-md">
            <strong>{success ? "Success! " : "Error! "}</strong>
            {success
              ? "Thank you for submitting. I will be in contact with you ASAP!"
              : errorMessage}
          </p>
        </div>
      </div>
      <span className="text-white">
        <i
          className="fas fa-times fa-lg cursor-pointer"
          onClick={(e) => close(e)}
        ></i>
      </span>
    </div>
  );
}
