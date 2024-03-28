import React, { useEffect, useState } from "react";
import InputSearch from "../../components/Admin/InputSearch";
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { debounce } from "lodash";
import service from "../../services/cateUtility";
import ModalCreate from "../../components/Admin/CateUtilities/ModalCreate";
import ModalUpdate from "../../components/Admin/CateUtilities/ModalUpdate";
import ModalDelete from "../../components/Admin/CateUtilities/ModalDelete";

const CateUtility = () => {
  const [datas, setDatas] = useState([]);
  const [idData, setIdData] = useState();
  const [nameData, setNameData] = useState();
  const [cate, setCate] = useState({});
  const [isModalDelete, setIsModalDelete] = useState(false);
  const [isModalCreate, setIsModalCreate] = useState(false);
  const [isModalUpdate, setIsModalUpdate] = useState(false);

  const searchData = debounce(async (e) => {
    const value = e.target.value;
    if (value.length > 0) {
      const response = await service().getAll();
      const list = response.data.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase())
      );
      setDatas(list);
    } else {
      await getAll();
    }
  }, 500);

  const getAll = async () => {
    const response = await service().getAll();
    if (response && response.status === 200) setDatas(response.data);
  };
  const getById = async (id) => {
    const response = await service().getById(id);
    if (response && response.status === 200) setCate(response.data);
  };
  const activeModalDelete = (id, name) => {
    setIsModalDelete(true);
    setIdData(id);
    setNameData(name);
  };

  const activeModalCreate = () => {
    setIsModalCreate(true);
  };
  const activeModalUpdate = async (id) => {
    setIsModalUpdate(true);
    await getById(id);
  };
  useEffect(() => {
    getAll();
  }, []);
  return (
    <>
      <ToastContainer
        className="text-[15px]"
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
      <div className="w-[100%] md:w-[100%] p-3 rounded-md bg-white">
        <p className="mb-8 mt-2 font-semibold text-[18px]">
          Quản Lý Thể Loại Tiện Ích
        </p>
        <div className="flex md:inline-block items-center mb-3 justify-between">
          <div className="relative md:mb-3">
            <i className="fa-solid fa-magnifying-glass text-gray-400 absolute top-2 left-3 text-sm"></i>
            <InputSearch onChange={searchData}></InputSearch>
          </div>
          <button
            onClick={() => activeModalCreate()}
            type="button"
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 me-2  dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            <i className="fa-solid fa-plus "></i>
            <span className="ml-2 inline-block lg:hidden">Thêm mới</span>
          </button>
        </div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  STT
                </th>
                <th scope="col" className="px-6 py-3">
                  <div className="flex items-center">
                    Tên thể loại
                    <a href="/">
                      <svg
                        className="w-3 h-3 ms-1.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                      </svg>
                    </a>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3">
                  Slug
                </th>
                <th scope="col" className="px-6 py-3">
                  Chức năng
                </th>
              </tr>
            </thead>
            <tbody>
              {datas &&
                datas.map((item, index) => {
                  return (
                    <tr
                      key={index}
                      className="bg-white border-b  text-gray-900  dark:bg-gray-800 dark:border-gray-700  hover:bg-gray-50 dark:hover:bg-gray-600"
                    >
                      <th className="px-6 py-4">{index + 1}</th>
                      <td className="px-6 py-4">{item.name}</td>
                      <td className="px-6 py-4">{item.slug}</td>
                      <td className="px-6 py-4 flex gap-5">
                        <button
                          onClick={() => activeModalUpdate(item.id)}
                          type="button"
                          className="focus:outline-none text-white bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-4 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
                        >
                          <i className="fa-solid fa-pen-to-square"></i>
                          <span className=" ml-3 inline-block lg:hidden">
                            Sửa
                          </span>
                        </button>
                        <button
                          type="button"
                          onClick={() => activeModalDelete(item.id, item.name)}
                          className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                        >
                          <i className=" fa-solid fa-trash "></i>
                          <span className=" inline-block lg:hidden ml-3">
                            Xóa
                          </span>
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
          <ModalCreate
            getAll={getAll}
            isModalCreate={isModalCreate}
            setIsModalCreate={setIsModalCreate}
          ></ModalCreate>
          <ModalUpdate
            cate={cate}
            setCate={setCate}
            getAll={getAll}
            isModalUpdate={isModalUpdate}
            setIsModalUpdate={setIsModalUpdate}
          ></ModalUpdate>
          <ModalDelete
            getAll={getAll}
            nameData={nameData}
            idData={idData}
            setIsModalDelete={setIsModalDelete}
            isModalDelete={isModalDelete}
          ></ModalDelete>
        </div>
      </div>
    </>
  );
};

export default CateUtility;
