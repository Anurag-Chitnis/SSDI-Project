import React from "react";

const ListGroup = ({ children, marginTop = "mt-3" }) => {
  return <ul className={`px-0 ${marginTop} text-gray-600`}>{children}</ul>;
};

export default ListGroup;
