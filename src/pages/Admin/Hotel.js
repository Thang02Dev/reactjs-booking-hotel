import { debounce } from "lodash";
import React, { useEffect, useState } from "react";
import service from "../../services/hotel";
import imageService from "../../services/imageHotel";
import InputSearch from "../../components/Admin/InputSearch";
import { Bounce, ToastContainer } from "react-toastify";
import ModalCreate from "../../components/Admin/Hotels/ModalCreate";
import ModalDelete from "../../components/Admin/Hotels/ModalDelete";
import ModalUpdate from "../../components/Admin/Hotels/ModalUpdate";
import ModalImage from "../../components/Admin/Hotels/ModalImage";
import Pagination from "../../components/Admin/Pagination";
import { NavLink } from "react-router-dom";

const Hotel = () => {
  const [datas, setDatas] = useState([]);
  const [idData, setIdData] = useState();
  const [nameData, setNameData] = useState();
  const [isModalDelete, setIsModalDelete] = useState(false);
  const [isModalCreate, setIsModalCreate] = useState(false);
  const [isModalUpdate, setIsModalUpdate] = useState(false);
  const [isModalImage, setIsModalImage] = useState(false);
  const [loading, setLoading] = useState(true);

  const [hotel, setHotel] = useState({});
  const [count, setCount] = useState();

  const [images, setImages] = useState([]);
  const [idHotel, setHotelId] = useState();
  const [countImg, setCountImg] = useState();

  const getById = async (id) => {
    const response = await service().getById(id);
    if (response && response.status === 200) setHotel(response.data);
  };

  const getAll = async () => {
    const response = await service().getAll();
    if (response && response.status === 200) setDatas(response.data);
  };

  const getPage = async (page) => {
    const response = await service().getPage(page);
    if (response && response.status === 200) {
      setLoading(false);

      setDatas(response.data.data);
      setCount(response.data.count);
    }
  };
  const getImages = async (page, hotelId) => {
    const response = await imageService().getPage(page, hotelId);
    if (response && response.status === 200) {
      setImages(response.data.data);
      setCountImg(response.data.count);
    }
  };

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
  const activeModalImage = async (hotelId) => {
    setIsModalImage(true);
    await getImages(1, hotelId);
    setHotelId(hotelId);
  };

  const handlePageChange = async (current) => {
    const response = await service().getPage(current);
    if (response && response.status === 200) {
      setDatas(response.data.data);
    }
  };

  const handleChangedActive = async (id) => {
    await service().ChangedActive(id);
  };

  useEffect(() => {
    // getAll();
    getPage(1);
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
          Quản Lý Thông Tin Khách Sạn
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
          {loading ? (
            <div className="p-24 flex justify-center">
              <div className="loading"></div>
            </div>
          ) : (
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    STT
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <div className="flex items-center">
                      Tên khách sạn
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
                    Địa chỉ
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Nhận/trả phòng
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Lượt thích
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Tiện ích
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Trạng thái
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
                        key={item.id}
                        className=" bg-white border-b  text-gray-900  dark:bg-gray-800 dark:border-gray-700  hover:bg-gray-50 dark:hover:bg-gray-600"
                      >
                        <th className="px-3 py-4">{index + 1}</th>
                        <td className="px-3 py-4">
                          <p>{item.name}</p>
                          <small>
                            <i>SĐT: {item.phone_Number}</i>
                          </small>
                          <p className="mt-2">
                            <NavLink
                              className="bg-gray-600 hover:bg-gray-500 text-white text-[13px] px-2 py-1"
                              to={"/admin/phong/" + item.id}
                            >
                              <i>DS Phòng ➧</i>
                            </NavLink>
                          </p>
                        </td>
                        <td className="px-3 py-4">{item.address}</td>
                        <td className="px-3 py-4">
                          {item.checkIn_Time} - {item.checkOut_Time}
                        </td>
                        <td className="px-3 py-4">
                          <i className="fa-regular fa-heart text-red-600 mr-2"></i>
                          <span>{item.favorite}</span>
                        </td>
                        <td className="py-4 ">
                          <span className="limited-height cursor-pointer text-blue-700">
                            {Object.entries(
                              item.hotelUtilityViewModels.reduce((acc, u) => {
                                const categoryName =
                                  u.utilityViewModel.utilityCategoryViewModel
                                    .name || "Khác"; // Tên nhóm, fallback nếu null
                                if (!acc[categoryName]) {
                                  acc[categoryName] = [];
                                }
                                acc[categoryName].push(u.utilityViewModel.name);
                                return acc;
                              }, {})
                            ).map(([categoryName, utilities], index) => (
                              <div key={index}>
                                <p className="font-semibold">
                                  • {categoryName}
                                </p>
                                <div className="ml-4 ">
                                  {utilities.map((utilityName, idx) => (
                                    <p key={idx}>-{utilityName}</p>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </span>
                        </td>
                        <td className="px-3 py-4 text-center">
                          {/* {item.active ? "true" : "false"} */}
                          <label className="inline-flex items-center me-5 cursor-pointer">
                            <input
                              onChange={() => handleChangedActive(item.id)}
                              type="checkbox"
                              value={item.active}
                              className="sr-only peer"
                              defaultChecked={item.active}
                            />
                            <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                          </label>
                        </td>
                        <td className="px-3 py-4 flex gap-1">
                          <button
                            onClick={() => activeModalImage(item.id)}
                            type="button"
                            className="focus:outline-none text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 me-2 mb-2 dark:focus:ring-blue-900"
                          >
                            <i className="fa-regular fa-image"></i>
                            <span className=" ml-3 inline-block lg:hidden">
                              Ảnh
                            </span>
                          </button>
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
                            onClick={() =>
                              activeModalDelete(item.id, item.name)
                            }
                            className=" focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
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
          )}
          {count > 1 && (
            <Pagination
              count={count}
              handlePageChange={handlePageChange}
            ></Pagination>
          )}
          <ModalCreate
            getAll={getAll}
            isModalCreate={isModalCreate}
            setIsModalCreate={setIsModalCreate}
          ></ModalCreate>
          <ModalUpdate
            hotel={hotel}
            setHotel={setHotel}
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
          <ModalImage
            idHotel={idHotel}
            getImages={getImages}
            images={images}
            setImages={setImages}
            countImg={countImg}
            setIsModalImage={setIsModalImage}
            isModalImage={isModalImage}
          ></ModalImage>
        </div>
      </div>
    </>
  );
};

export default Hotel;
