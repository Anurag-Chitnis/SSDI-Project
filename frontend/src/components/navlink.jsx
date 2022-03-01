import React from "react";

const NavLink = ({ link, src, alt }) => {
  return (
    <li className="hover:bg-blue-100 relative">
      <a
        to={link}
        className="h-16 px-6 flex flex justify-center items-center w-full focus:text-orange-500"
      >
        <img className="h-5" src={src} alt={alt} />
      </a>
    </li>
  );
};

export default NavLink;
