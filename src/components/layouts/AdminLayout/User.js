import React, { useState } from "react";

const User = () => {
  let [profile, setProfile] = useState(false);
  const handleClickProfile = () => {
    if (!profile) setProfile(true);
    else setProfile(false);
  };
  return (
    <>
      <div classNameName="dropdown relative md:static">
        <button
          onClick={handleClickProfile}
          className="menu-btn focus:outline-none focus:shadow-outline flex flex-wrap items-center"
        >
          <div className="w-8 h-8 overflow-hidden rounded-full">
            <img
              alt=""
              className="w-full h-full object-cover"
              src="img/user.svg"
            />
          </div>

          <div className="ml-2 capitalize flex ">
            <h1 className="text-sm text-gray-800 font-semibold m-0 p-0 leading-none">
              moeSaid
            </h1>
            <i className="fa fa-chevron-down ml-2 text-xs leading-none"></i>
          </div>
        </button>

        {/* <button
          
          className="hidden fixed top-0 left-0 z-10 w-full h-full menu-overflow"
        ></button> */}

        <div
          className={`text-gray-500 menu md:mt-10 md:w-full rounded bg-white shadow-md absolute z-20 right-0 w-40 mt-5 py-2 animated faster ${
            profile ? "fadeIn" : "hidden"
          }`}
        >
          <a
            className="px-4 py-2 block capitalize font-medium text-sm tracking-wide bg-white hover:bg-gray-200 hover:text-gray-900 transition-all duration-300 ease-in-out"
            href="/"
          >
            <i className="fad fa-user-edit text-xs mr-1"></i>
            edit my profile
          </a>

          <a
            className="px-4 py-2 block capitalize font-medium text-sm tracking-wide bg-white hover:bg-gray-200 hover:text-gray-900 transition-all duration-300 ease-in-out"
            href="/"
          >
            <i className="fad fa-inbox-in text-xs mr-1"></i>
            my inbox
          </a>

          <a
            className="px-4 py-2 block capitalize font-medium text-sm tracking-wide bg-white hover:bg-gray-200 hover:text-gray-900 transition-all duration-300 ease-in-out"
            href="/"
          >
            <i className="fad fa-badge-check text-xs mr-1"></i>
            tasks
          </a>

          <a
            className="px-4 py-2 block capitalize font-medium text-sm tracking-wide bg-white hover:bg-gray-200 hover:text-gray-900 transition-all duration-300 ease-in-out"
            href="/"
          >
            <i className="fad fa-comment-alt-dots text-xs mr-1"></i>
            chats
          </a>

          <hr />

          <a
            className="px-4 py-2 block capitalize font-medium text-sm tracking-wide bg-white hover:bg-gray-200 hover:text-gray-900 transition-all duration-300 ease-in-out"
            href="/"
          >
            <i className="fad fa-user-times text-xs mr-1"></i>
            log out
          </a>
        </div>
      </div>
    </>
  );
};

export default User;
