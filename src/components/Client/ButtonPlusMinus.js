import React from "react";

const ButtonPlusMinus = (props) => {
  return (
    <button
      type="button"
      onClick={props.onClick}
      className={` ${
        props.active === true
          ? "text-[#44a8eb]"
          : props.active === undefined
          ? "text-[#44a8eb]"
          : "text-neutral-500"
      } focus:border-blue-300 focus:border-[4px]  flex justify-center items-center w-[40px] h-[32px] bg-[#f7f9fa] rounded-md`}
    >
      {props.icon}
    </button>
  );
};

export default ButtonPlusMinus;
