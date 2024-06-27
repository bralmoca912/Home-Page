import React from "react";
import logo from "../assets/images/logo.svg";
import iconMenu from "../assets/images/icon-menu.svg";

function Menu() {
  return (
    <div className="border-2 mt-5 flex">
      <img src={logo} alt="" />

      {/* Menu para Desktop */}
      <div className="border hidden sm:block"></div>

      {/* Menú para Mobile  */}
      <div className="sm:hidden w-full">
        <div className="w-full h-full flex justify-end items-center">
          <img className="" src={iconMenu} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Menu;
