import React, { useEffect, useState } from "react";
import service from "../../../services/utitlity";
import cateUtilityService from "../../../services/cateUtility";

import { toast } from "react-toastify";
import AlertError from "../AlertError";

const ModalUpdate = (props) => {
  const [cates, setCates] = useState([]);

  const getCateUtility = async () => {
    const response = await cateUtilityService().getAll();
    if (response && response.status === 200) setCates(response.data);
  };

  const submitUpdate = async () => {
    props.setUtility(props.utility);
    const response = await service().Update(props.utility.id, props.utility);
    if (response && response.status === 200) {
      await props.getAll();
      toast.success(
        <span
          className="font-medium text-[14px]"
          style={{ fontFamily: '"Poppins", sans-serif' }}
        >
          <span className="font-semibold">Cập nhật</span> tiện ích thành công!
        </span>
      );
    } else {
      <AlertError></AlertError>;
    }
    props.setIsModalUpdate(false);
  };
  useEffect(() => {
    getCateUtility();
  }, []);
  return (
    <>
      <div
        tabIndex="-1"
        className={`${
          props.isModalUpdate ? "" : "hidden"
        } fixed flex z-50  bg-black bg-opacity-50 items-center justify-center w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full`}
      >
        <div className="relative w-full max-w-md max-h-full">
          <form
            onSubmit={(e) => {
              submitUpdate();
              e.preventDefault();
            }}
            className="relative bg-white rounded-lg shadow dark:bg-gray-700"
          >
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Cập nhật tiện ích
              </h3>
              <button
                onClick={() => props.setIsModalUpdate(false)}
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
              <div className="text-sm grid gap-y-2">
                <span>Tên tiện ích</span>
                <input
                  className="w-full focus:border-[3px] focus:border-blue-200 border-neutral-300 h-[40px] px-3 text-sm rounded-md"
                  type="text"
                  placeholder="Nhập tên thể loại"
                  required
                  onChange={(e) =>
                    props.setUtility({ ...props.utility, name: e.target.value })
                  }
                  value={props.utility.name || ""}
                />
              </div>
              <div className="text-sm grid gap-y-2">
                <span>Thể loại</span>
                <select
                  value={props.utility.utilityCategoryId ?? 0}
                  onChange={(e) =>
                    props.setUtility({
                      ...props.utility,
                      utilityCategoryId: e.target.value,
                    })
                  }
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option value={0}>--Chọn thể loại--</option>
                  {cates &&
                    cates.map((item, index) => {
                      return (
                        <option key={index} value={item.id}>
                          {item.name}
                        </option>
                      );
                    })}
                </select>
              </div>
            </div>
            <div className="sm:grid sm:gap-y-2 flex gap-x-2 p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
              <button
                type="submit"
                className="text-white bg-yellow-600 hover:bg-yellow-700 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
              >
                Cập nhật
              </button>
              <button
                onClick={() => props.setIsModalUpdate(false)}
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

export default ModalUpdate;
