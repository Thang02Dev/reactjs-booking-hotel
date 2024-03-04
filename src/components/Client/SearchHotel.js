import React, { useState, useEffect, useRef } from "react";
import ButtonPlusMinus from "./ButtonPlusMinus";

const SearchHotel = (props) => {
  const RoundedClass = props.isFisrt ? "rounded-tl-2xl rounded-bl-2xl" : "";

  const [numberAdult, setNumberAdult] = useState(1);
  const [activeAdult, setActiveAdult] = useState(false);
  const [numberRoom, setNumberRoom] = useState(1);
  const [activeRoom, setActiveRoom] = useState(false);
  const [alert, setAlert] = useState(false);
  const [modalCustomer, setModalCustomer] = useState("hidden");

  const handlePlusAdult = () => {
    setNumberAdult(numberAdult + 1);
    if (numberAdult + 1 > 1) setActiveAdult(true);
  };
  const handleMinusAdult = () => {
    if (numberAdult > 1) {
      setNumberAdult(numberAdult - 1);
      if (numberAdult - 1 === 1) setActiveAdult(false);
    }
  };

  const handlePlusRoom = () => {
    if (numberAdult >= numberRoom + 1) {
      setNumberRoom(numberRoom + 1);
    } else {
      console.log("Số phòng không thể nhiều hơn số khách người lớn");
      setAlert(true);
      setTimeout(() => {
        setAlert(false);
      }, 2500);
    }
    if (numberRoom + 1 > 1 && numberAdult >= numberRoom + 1)
      setActiveRoom(true);
  };
  const handleMinusRoom = () => {
    if (numberRoom > 1) {
      setNumberRoom(numberRoom - 1);
      if (numberRoom - 1 === 1) setActiveRoom(false);
    }
  };

  const handleClickAdress = () => {
    console.log("click 1");
  };
  const handleClickDate = () => {
    console.log("click 2");
  };
  const handleClickCustomer = () => {
    setModalCustomer("animate-fade-in-down");
  };
  const submitCustomer = () => {
    setModalCustomer("animate-fade-in-top");
    setTimeout(() => {
      setModalCustomer("hidden");
    }, 60);
  };

  let outsideRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!outsideRef.current.contains(e.target)) {
        setModalCustomer("hidden");
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <div className=" flex-auto my-[20px] relative">
      <span className="flex h-[28px] w-max items-start text-[14px] font-medium">
        {props.title}
      </span>
      <div className=" h-max relative">
        <div className="text-[#44a8eb] text-[20px] absolute left-[12px] top-[15px]">
          {props.icon}
        </div>
        <input
          onClick={
            props.index === 3
              ? handleClickCustomer
              : props.index === 2
              ? handleClickDate
              : handleClickAdress
          }
          type={props.typeInput}
          className={`h-[50px] w-[100%] ${RoundedClass} p-[13px_8px_13px_40px] text-black placeholder:text-gray-300 font-medium text-[15px] border-solid
        border-gray-500 border-opacity-25 border-y-[3px] border-x-[2px]
        outline-blue-300 outline-2
          hover:border-opacity-45 hover:border-black transition-all `}
          placeholder={props.placeholder}
          value={`${numberAdult} người lớn, ${numberRoom} phòng`}
        />
      </div>
      <div
        id="location"
        className={`${
          props.index === 1 ? "" : "hidden"
        } w-[200px] h-[100px] bg-yellow-500`}
      ></div>
      <div
        id="date"
        className={`${
          props.index === 2 ? "" : "hidden"
        } w-[200px] h-[100px] bg-blue-500`}
      ></div>
      <div
        id="room"
        className={` ${modalCustomer} w-[100%] bg-white grid gap-y-2  rounded-md py-3 px-5`}
        ref={outsideRef}
      >
        <div className="flex items-center justify-between text-black text-[15px]  font-medium">
          <span>Người lớn</span>
          <div className="flex items-center">
            <ButtonPlusMinus
              name="minus"
              icon={<i class="fa-solid fa-minus"></i>}
              onClick={handleMinusAdult}
              active={activeAdult}
            ></ButtonPlusMinus>
            <div
              id="numberAdult"
              className="w-[58px] h-[40px] flex justify-center items-center border-b-[2px] border-neutral-300 border-solid"
            >
              <span>{numberAdult}</span>
            </div>
            <ButtonPlusMinus
              name="plus"
              icon={<i class="fa-solid fa-plus"></i>}
              onClick={handlePlusAdult}
            ></ButtonPlusMinus>
          </div>
        </div>
        <div className="flex items-center justify-between text-black text-[15px]  font-medium">
          <span>Phòng</span>
          <div className="flex items-center">
            <ButtonPlusMinus
              name="minus"
              icon={<i class="fa-solid fa-minus"></i>}
              onClick={handleMinusRoom}
              active={activeRoom}
            ></ButtonPlusMinus>
            <div
              id="numberAdult"
              className="w-[58px] h-[40px] flex justify-center items-center border-b-[2px] border-neutral-300 border-solid"
            >
              <span>{numberRoom}</span>
            </div>
            <ButtonPlusMinus
              name="plus"
              icon={<i class="fa-solid fa-plus"></i>}
              onClick={handlePlusRoom}
            ></ButtonPlusMinus>
          </div>
        </div>
        <div className="text-white flex justify-end font-semibold mt-1">
          <button
            onClick={submitCustomer}
            className="bg-[#007ce8] p-[12px_15px] cursor-pointer hover:bg-blue-600 transition-all rounded-lg"
          >
            Xong
          </button>
        </div>
      </div>
      <div
        className={`w-[100%]  absolute bg-black z-50 ${
          props.index === 3 ? "" : "hidden"
        } ${
          alert ? "" : "hidden "
        } top-[-90px] p-3 text-center rounded-lg leading-6 font-medium transition-all`}
      >
        <span>Số phòng không thể nhiều hơn số khách người lớn</span>
      </div>
      <div
        className={`${
          alert ? "" : "hidden"
        }  transition-all w-3 h-3 bg-black absolute top-[-25px] right-[50%] rotate-[45deg] rounded-sm`}
      ></div>
    </div>
  );
};

export default SearchHotel;
