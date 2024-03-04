import React from "react";

const ButtonCategory = (props) => {
  const activeClass = " bg-white text-black";

  const hoverClass = " hover:text-white hover:border-[1px] hover:border-solid";
  return (
    <div
      className={`flex items-center text-center transition-all  rounded-3xl h-[42px] px-[17px] py-[9px] cursor-pointer ${
        props.active ? activeClass : ""
      }  ${
        props.hover ? hoverClass : ""
      } active:bg-white active:text-black active:border-none`}
    >
      <div className="mr-[10px] ml-[2px] text-[22px] ">{props.icon}</div>
      <span>{props.name}</span>
    </div>
  );
};

export default ButtonCategory;
