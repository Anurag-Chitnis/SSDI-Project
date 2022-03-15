import React from "react";

const ProgressBar = ({ progress }) => {
  return (
    <div className="relative pt-1">
      <div className="h-2 mb-4 text-xs duration-100 flex rounded bg-blue-200">
        <div
          style={{ width: progress }}
          className="shadow-none transition ease-in delay-75 duration-100 rounded flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
