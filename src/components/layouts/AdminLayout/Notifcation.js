import React from "react";

const Notifcation = () => {
  return (
    <>
      <div class="dropdown relative mr-5 md:static">
        <button class="text-gray-500 menu-btn p-0 m-0 hover:text-gray-900 focus:text-gray-900 focus:outline-none transition-all ease-in-out duration-300">
          <i class="fad fa-bells"></i>
        </button>

        <button class="hidden fixed top-0 left-0 z-10 w-full h-full menu-overflow"></button>

        <div class="menu hidden rounded bg-white md:right-0 md:w-full shadow-md absolute z-20 right-0 w-84 mt-5 py-2 animated faster">
          <div class="px-4 py-2 flex flex-row justify-between items-center capitalize font-semibold text-sm">
            <h1>notifications</h1>
            <div class="bg-teal-100 border border-teal-200 text-teal-500 text-xs rounded px-1">
              <strong>5</strong>
            </div>
          </div>
          <hr />

          <a
            class="flex flex-row items-center justify-start px-4 py-4 capitalize font-medium text-sm tracking-wide bg-white hover:bg-gray-200 transition-all duration-300 ease-in-out"
            href="/"
          >
            <div class="px-3 py-2 rounded mr-3 bg-gray-100 border border-gray-300">
              <i class="fad fa-birthday-cake text-sm"></i>
            </div>

            <div class="flex-1 flex flex-rowbg-green-100">
              <div class="flex-1">
                <h1 class="text-sm font-semibold">poll..</h1>
                <p class="text-xs text-gray-500">text here also</p>
              </div>
              <div class="text-right text-xs text-gray-500">
                <p>4 min ago</p>
              </div>
            </div>
          </a>
          <hr />

          <a
            class="flex flex-row items-center justify-start px-4 py-4 capitalize font-medium text-sm tracking-wide bg-white hover:bg-gray-200 transition-all duration-300 ease-in-out"
            href="/"
          >
            <div class="px-3 py-2 rounded mr-3 bg-gray-100 border border-gray-300">
              <i class="fad fa-user-circle text-sm"></i>
            </div>

            <div class="flex-1 flex flex-rowbg-green-100">
              <div class="flex-1">
                <h1 class="text-sm font-semibold">mohamed..</h1>
                <p class="text-xs text-gray-500">text here also</p>
              </div>
              <div class="text-right text-xs text-gray-500">
                <p>78 min ago</p>
              </div>
            </div>
          </a>
          <hr />

          <a
            class="flex flex-row items-center justify-start px-4 py-4 capitalize font-medium text-sm tracking-wide bg-white hover:bg-gray-200 transition-all duration-300 ease-in-out"
            href="/"
          >
            <div class="px-3 py-2 rounded mr-3 bg-gray-100 border border-gray-300">
              <i class="fad fa-images text-sm"></i>
            </div>

            <div class="flex-1 flex flex-rowbg-green-100">
              <div class="flex-1">
                <h1 class="text-sm font-semibold">new imag..</h1>
                <p class="text-xs text-gray-500">text here also</p>
              </div>
              <div class="text-right text-xs text-gray-500">
                <p>65 min ago</p>
              </div>
            </div>
          </a>
          <hr />

          <a
            class="flex flex-row items-center justify-start px-4 py-4 capitalize font-medium text-sm tracking-wide bg-white hover:bg-gray-200 transition-all duration-300 ease-in-out"
            href="/"
          >
            <div class="px-3 py-2 rounded mr-3 bg-gray-100 border border-gray-300">
              <i class="fad fa-alarm-exclamation text-sm"></i>
            </div>

            <div class="flex-1 flex flex-rowbg-green-100">
              <div class="flex-1">
                <h1 class="text-sm font-semibold">time is up..</h1>
                <p class="text-xs text-gray-500">text here also</p>
              </div>
              <div class="text-right text-xs text-gray-500">
                <p>1 min ago</p>
              </div>
            </div>
          </a>
          <hr />
          <div class="px-4 py-2 mt-2">
            <a
              href="/"
              class="border border-gray-300 text-center text-xs uppercase rounded p-1 hover:text-teal-500 transition-all ease-in-out duration-500"
            >
              view all
            </a>
          </div>
        </div>
      </div>

      <div class="dropdown relative mr-5 md:static">
        <button class="text-gray-500 menu-btn p-0 m-0 hover:text-gray-900 focus:text-gray-900 focus:outline-none transition-all ease-in-out duration-300">
          <i class="fad fa-comments"></i>
        </button>

        <button class="hidden fixed top-0 left-0 z-10 w-full h-full menu-overflow"></button>

        <div class="menu hidden md:w-full md:right-0 rounded bg-white shadow-md absolute z-20 right-0 w-84 mt-5 py-2 animated faster">
          <div class="px-4 py-2 flex flex-row justify-between items-center capitalize font-semibold text-sm">
            <h1>messages</h1>
            <div class="bg-teal-100 border border-teal-200 text-teal-500 text-xs rounded px-1">
              <strong>3</strong>
            </div>
          </div>
          <hr />

          <a
            class="flex flex-row items-center justify-start px-4 py-4 capitalize font-medium text-sm tracking-wide bg-white hover:bg-gray-200 transition-all duration-300 ease-in-out"
            href="/"
          >
            <div class="w-10 h-10 rounded-full overflow-hidden mr-3 bg-gray-100 border border-gray-300">
              <img
                class="w-full h-full object-cover"
                src="img/user1.jpg"
                alt=""
              />
            </div>

            <div class="flex-1 flex flex-rowbg-green-100">
              <div class="flex-1">
                <h1 class="text-sm font-semibold">mohamed said</h1>
                <p class="text-xs text-gray-500">yeah i know</p>
              </div>
              <div class="text-right text-xs text-gray-500">
                <p>4 min ago</p>
              </div>
            </div>
          </a>
          <hr />

          <a
            class="flex flex-row items-center justify-start px-4 py-4 capitalize font-medium text-sm tracking-wide bg-white hover:bg-gray-200 transition-all duration-300 ease-in-out"
            href="/"
          >
            <div class="w-10 h-10 rounded-full overflow-hidden mr-3 bg-gray-100 border border-gray-300">
              <img
                class="w-full h-full object-cover"
                src="img/user2.jpg"
                alt=""
              />
            </div>

            <div class="flex-1 flex flex-rowbg-green-100">
              <div class="flex-1">
                <h1 class="text-sm font-semibold">sull goldmen</h1>
                <p class="text-xs text-gray-500">for sure</p>
              </div>
              <div class="text-right text-xs text-gray-500">
                <p>1 day ago</p>
              </div>
            </div>
          </a>
          <hr />

          <a
            class="flex flex-row items-center justify-start px-4 py-4 capitalize font-medium text-sm tracking-wide bg-white hover:bg-gray-200 transition-all duration-300 ease-in-out"
            href="/"
          >
            <div class="w-10 h-10 rounded-full overflow-hidden mr-3 bg-gray-100 border border-gray-300">
              <img
                class="w-full h-full object-cover"
                src="img/user3.jpg"
                alt=""
              />
            </div>

            <div class="flex-1 flex flex-rowbg-green-100">
              <div class="flex-1">
                <h1 class="text-sm font-semibold">mick</h1>
                <p class="text-xs text-gray-500">is typing ....</p>
              </div>
              <div class="text-right text-xs text-gray-500">
                <p>31 feb</p>
              </div>
            </div>
          </a>

          <hr />
          <div class="px-4 py-2 mt-2">
            <a
              href="/"
              class="border border-gray-300 text-center text-xs uppercase rounded p-1 hover:text-teal-500 transition-all ease-in-out duration-500"
            >
              view all
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notifcation;
