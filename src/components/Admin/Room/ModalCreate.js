import React, { useEffect, useState } from "react";
import service from "../../../services/room";
import hotelService from "../../../services/hotel";
import { toast } from "react-toastify";
import AlertError from "../AlertError";
import { useParams } from "react-router-dom";

const ModalCreate = (props) => {
  const { hotelid } = useParams();
  const [form, setForm] = useState({
    name: "",
    description: "",
    type: "",
    size: null,
    numberOfBeds: null,
    numberOfGuests: null,
    price: null,
    amount: null,
    hotelId: parseInt(hotelid),
  });
  const [hotels, setHotels] = useState([]);

  const getHotel = async () => {
    const response = await hotelService().getAll();
    if (response && response.status === 200) setHotels(response.data);
  };

  const submitCreate = async () => {
    const response = await service().Create(form);
    if (response && response.status === 200) {
      if (response.data.error === 0) {
        await props.getAll();
        toast.success(
          <span
            className="font-medium text-[14px]"
            style={{ fontFamily: '"Poppins", sans-serif' }}
          >
            <span className="font-semibold">Thêm</span> tiện ích{" "}
            <span className="font-semibold">"{form.name}"</span> thành công!
          </span>
        );

        props.setIsModalCreate(false);
        setForm({
          name: "",
          description: "",
          type: "",
          size: null,
          numberOfBeds: null,
          numberOfGuests: null,
          price: null,
          amount: null,
          hotelId: null,
        });
      } else {
        toast.error(<AlertError mess={response.data.mess}></AlertError>);
      }
    } else {
      toast.error(<AlertError></AlertError>);
    }
  };

  useEffect(() => {
    getHotel();
  }, []);

  return (
    <>
      <div
        tabIndex="-1"
        className={`${
          props.isModalCreate ? "" : "hidden"
        } fixed flex z-50  bg-black bg-opacity-50 items-center justify-center w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full`}
      >
        <div className="relative w-full max-w-2xl max-h-full">
          <form
            onSubmit={(e) => {
              submitCreate();
              e.preventDefault();
            }}
            className="relative bg-white rounded-lg shadow dark:bg-gray-700"
          >
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Thêm mới tiện ích
              </h3>
              <button
                onClick={() => props.setIsModalCreate(false)}
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="p-4 md:p-5 grid gap-y-2">
              {/* <div className="text-sm grid gap-y-2">
                <span>Khách sạn</span>
                <select
                  onChange={(e) =>
                    setForm({ ...form, hotelId: e.target.value })
                  }
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option value={null}>--Chọn khách sạn--</option>
                  {hotels &&
                    hotels
                      .sort((a, b) => a.name.localeCompare(b.name))
                      .map((item, index) => {
                        return (
                          <option key={index} value={item.id}>
                            {item.name}
                          </option>
                        );
                      })}
                </select>
              </div> */}
              <div className="text-sm grid gap-y-2">
                <span>Tên phòng</span>
                <input
                  className="w-full focus:border-[3px] focus:border-blue-200 border-neutral-300 h-[40px] px-3 text-sm rounded-md"
                  type="text"
                  placeholder="Nhập tên phòng"
                  required
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  value={form.name}
                />
              </div>
              <div className="flex gap-x-4">
                <div className="w-full text-sm grid gap-y-2">
                  <span>Loại phòng</span>
                  <input
                    className="w-full focus:border-[3px] focus:border-blue-200 border-neutral-300 h-[40px] px-3 text-sm rounded-md"
                    type="text"
                    placeholder="Nhập loại phòng"
                    required
                    onChange={(e) => setForm({ ...form, type: e.target.value })}
                    value={form.type}
                  />
                </div>
                <div className="w-full text-sm grid gap-y-2">
                  <span>Diện tích</span>
                  <input
                    className="w-full focus:border-[3px] focus:border-blue-200 border-neutral-300 h-[40px] px-3 text-sm rounded-md"
                    type="number"
                    placeholder="Nhập diện tích phòng"
                    required
                    onChange={(e) => setForm({ ...form, size: e.target.value })}
                    value={form.size}
                  />
                </div>
              </div>
              <div className=" flex gap-x-4">
                <div className="w-full text-sm grid gap-y-2">
                  <span>SL Giường</span>
                  <input
                    className="w-full focus:border-[3px] focus:border-blue-200 border-neutral-300 h-[40px] px-3 text-sm rounded-md"
                    type="number"
                    placeholder="Nhập số lượng giường"
                    required
                    onChange={(e) =>
                      setForm({ ...form, numberOfBeds: e.target.value })
                    }
                    value={form.numberOfBeds}
                  />
                </div>
                <div className="w-full text-sm grid gap-y-2">
                  <span>SL Khách</span>
                  <input
                    className="w-full focus:border-[3px] focus:border-blue-200 border-neutral-300 h-[40px] px-3 text-sm rounded-md"
                    type="number"
                    placeholder="Nhập số lượng khách"
                    required
                    onChange={(e) =>
                      setForm({ ...form, numberOfGuests: e.target.value })
                    }
                    value={form.numberOfGuests}
                  />
                </div>
              </div>
              <div className=" flex gap-x-4">
                <div className="w-full text-sm grid gap-y-2">
                  <span>Giá</span>
                  <input
                    className="w-full focus:border-[3px] focus:border-blue-200 border-neutral-300 h-[40px] px-3 text-sm rounded-md"
                    type="number"
                    placeholder="Nhập giá phòng"
                    required
                    onChange={(e) =>
                      setForm({ ...form, price: e.target.value })
                    }
                    value={form.price}
                  />
                </div>
                <div className="w-full text-sm grid gap-y-2">
                  <span>Số lượng phòng sử dụng</span>
                  <input
                    className="w-full focus:border-[3px] focus:border-blue-200 border-neutral-300 h-[40px] px-3 text-sm rounded-md"
                    type="number"
                    placeholder="Nhập số lượng phòng"
                    required
                    onChange={(e) =>
                      setForm({ ...form, amount: e.target.value })
                    }
                    value={form.amount}
                  />
                </div>
              </div>
              <div className="text-sm grid gap-y-2">
                <span>Mô tả</span>
                <input
                  className="w-full focus:border-[3px] focus:border-blue-200 border-neutral-300 h-[40px] px-3 text-sm rounded-md"
                  type="text"
                  placeholder="Nhập mô tả"
                  required
                  onChange={(e) =>
                    setForm({ ...form, description: e.target.value })
                  }
                  value={form.description}
                />
              </div>
            </div>
            <div className="sm:grid sm:gap-y-2 flex gap-x-2 p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
              <button
                type="submit"
                className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              >
                Thêm mới
              </button>
              <button
                onClick={() => props.setIsModalCreate(false)}
                type="button"
                className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                Thoát
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ModalCreate;
