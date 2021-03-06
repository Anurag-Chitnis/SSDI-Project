import React from "react";

const TableBody = ({ children }) => {
  return (
    <tbody className="text-left bg-white divide-y divide-gray-200">
      {children}
    </tbody>
  );
};

export default TableBody;
