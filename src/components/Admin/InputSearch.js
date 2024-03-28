import React from "react";

const InputSearch = (props) => {
  return (
    <>
      <input
        onChange={props.onChange}
        type="text"
        className="border-neutral-300 focus:border-blue-300 focus:border-[3px] focus:border-opacity-50 border-[1px] outline-none text-sm pr-3 pl-9 w-[200px] h-[35px] rounded-md"
        placeholder="Nhập tìm kiếm"
      />
    </>
  );
};

export default InputSearch;
