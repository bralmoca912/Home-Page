import React, { useState } from "react";
import logo from "../assets/images/logo.svg";
import iconMenu from "../assets/images/icon-menu.svg";
import iconClose from "../assets/images/icon-menu-close.svg";

function Menu() {
  const [show, setShow] = useState(false);
  const handleClick = (event) => {
    setShow(!show);
  };

  return (
    <div className="mt-5 flex mb-8">
      <img className="sm:hidden" src={logo} alt="" />

      {/* Menu para Desktop */}
      <div className="hidden sm:block w-full">
        <div className="flex p-2 my-10 w-full">
          <img src={logo} alt="Logo W" />
          <ul className="w-full flex justify-end text-[19px] gap-[43px]">
            <button className="hover:text-SoftOrange" to="/">
              Home
            </button>
            <button className="hover:text-SoftOrange" to="/new">
              New
            </button>
            <button className="hover:text-SoftOrange" to="/popular">
              Popular
            </button>
            <button className="hover:text-SoftOrange" to="/trending">
              Trending
            </button>
            <button className="hover:text-SoftOrange" to="/categories">
              Categories
            </button>
          </ul>
        </div>
      </div>

      {/* Menú para Mobile  */}
      <div className="sm:hidden w-full">
        <div className="w-full h-full flex justify-end items-center">
          <button className="h-full" onClick={handleClick}>
            <img className="" src={iconMenu} alt="" />
          </button>
        </div>

        {show && (
          <div className="bg-slate-950/50 w-full h-full fixed top-0 right-0">
            <div className="bg-OffWhite h-full w-4/6 right-0 top-0 absolute">
              <div className="mt-9 pr-5 w-full flex justify-end">
                <button onClick={handleClick}>
                  <img src={iconClose} alt="" />
                </button>
              </div>
              <ul className="ml-5 mt-20 grid gap-6 text-xl font-semibold">
                <button>Home</button>
                <button>New</button>
                <button>Popular</button>
                <button>Trending</button>
                <button>Categories</button>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Menu;
