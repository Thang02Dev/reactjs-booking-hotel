import React from "react";
// import Logo from "./Logo";
// import Notifcation from "./Notifcation";
// import Message from "./Message";
import User from "./User";

const Navbar = (props) => {
  const handleClickSidebar = () => {
    console.log(props.sidebar);
    if (!props.sidebar) props.setSidebar(true);
    else props.setSidebar(false);
  };
  return (
    <>
      <div className="md:fixed md:w-full md:top-0 md:z-20 flex flex-row flex-wrap items-center bg-white p-6 border-b border-gray-300">
        <div className="flex-none w-56 flex flex-row items-center">
          <img alt="" src="img/logo.png" className="w-10 flex-none" />
          <strong className="capitalize ml-1 flex-1">admin</strong>
          <button
            id="sliderBtn"
            onClick={handleClickSidebar}
            className="flex-none text-right text-[20px] text-gray-900 hidden md:block"
          >
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
        {/* <button id="navbarToggle" class="hidden md:block md:fixed right-0 mr-6">
          <i class="fa fa-chevron-double-down"></i>
        </button> */}
        <div
          id="navbar"
          className="animated md:hidden md:fixed md:top-0 md:w-full md:left-0 md:mt-16 md:border-t md:border-b md:border-gray-200 md:p-10 md:bg-white flex-1 pl-3 flex flex-row flex-wrap justify-end items-center md:flex-col md:items-center"
        >
          <div className="text-gray-600 md:w-full md:flex md:flex-row md:justify-evenly md:pb-10 md:mb-10 md:border-b md:border-gray-200"></div>

          <div className="flex flex-row-reverse">
            <User></User>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
