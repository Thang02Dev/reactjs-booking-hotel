import React from "react";

const AlertError = (props) => {
  return (
    <>
      <span
        className="font-medium text-[14px]"
        style={{ fontFamily: '"Poppins", sans-serif' }}
      >
        {props.mess || "Chức năng xảy ra lỗi"}
      </span>
    </>
  );
};

export default AlertError;
