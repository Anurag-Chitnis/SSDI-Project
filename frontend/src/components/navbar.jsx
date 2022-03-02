import React from "react";
import NavLink from "./navlink";

const Navbar = () => {
  return (
    <aside className="sidebar flex flex-col items-center bg-white text-gray-700 shadow h-full sticky">
      {/*  Brand Image */}
      <div className="h-16 flex items-center w-full">
        <img
          className="h-7 rounded w-7 mx-auto"
          alt="svelte logo"
          src="/svg/user.svg"
        />
      </div>
      {/* Navigation list */}
      <ul>
        <NavLink link="/" src="/svg/home.svg" alt="dashboard image" />
        <NavLink
          link={`/dashboard/user/profile/`}
          src="/svg/user.svg"
          alt="edit user profile"
        />
        <NavLink
          link="/dashboard/cart"
          src="/svg/shopping-bag.svg"
          alt="cart icon"
        />
        <NavLink
          link="/dashboard/add/issue"
          src="/svg/warning.svg"
          alt="add issue for application"
        />
        <NavLink
          link="/dashboard/setting"
          src="/svg/settings.svg"
          alt="user settings"
        />
      </ul>
      {/* Logout Button */}
      <div className="mt-auto h-16 flex items-center w-full">
        <button
          className="h-16 w-10 mx-auto flex flex justify-center items-center
				w-full focus:text-orange-500 hover:bg-red-200 focus:outline-none"
        >
          <img className="h-5" src="/svg/logout.svg" alt="" />
        </button>
      </div>
    </aside>
  );
};

export default Navbar;
