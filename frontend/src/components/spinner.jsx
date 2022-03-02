import React from "react";

const Spinner = () => {
  return (
    <div className="flex justify-center align-center overflow-hidden">
      <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-24 w-24"></div>
    </div>
  );
};

export default Spinner;
