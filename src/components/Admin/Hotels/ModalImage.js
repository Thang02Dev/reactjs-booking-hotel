import React, { useEffect, useState } from "react";
import service from "../../../services/imageHotel";
import Pagination from "../../../components/Admin/Pagination";
import ModalDeleteImage from "./ModalDeleteImage";

import { toast } from "react-toastify";
import AlertError from "../AlertError";

const ModalImage = (props) => {
  const [images, setImages] = useState([]);
  const [isModalCreate, setIsModalCreate] = useState(false);
  const [isModalDeleteImage, setIsModalDeleteImage] = useState(false);
  const [isModalUpdate, setIsModalUpdate] = useState(false);
  const [idData, setIdData] = useState();
  const [form, setForm] = useState({
    fileimage: [],
    position: 1,
    description: "",
    hotelId: 0,
    id: 1,
    image: "",
    active: true,
  });
  const [edit, setEdit] = useState({});
  const [imageId, setImageId] = useState();
  const getById = async (id) => {
    setImageId(id);
    const response = await service().getById(id);
    if (response && response.status === 200) setEdit(response.data);
  };
  const activeModalCreate = () => {
    setIsModalCreate(true);
    setIsModalUpdate(false);
  };
  const activeModalUpdate = async (id) => {
    setIsModalUpdate(true);
    setIsModalCreate(false);
    await getById(id);
  };

  const submitUpdate = async () => {
    setEdit(edit);

    const response = await service().Update(imageId, edit);
    if (response && response.status === 200) {
      props.getImages(1, props.idHotel);
      toast.success(
        <span
          className="font-medium text-[14px]"
          style={{ fontFamily: '"Poppins", sans-serif' }}
        >
          <span className="font-semibold">Cập nhật</span> thông tin thành công!
        </span>
      );
      setIsModalUpdate(false);
    } else {
      toast.error(<AlertError></AlertError>);
    }
  };
  const getImageById = () => {
    props.getImages(1, props.idHotel);
  };
  const submitCreate = async () => {
    form.hotelId = props.idHotel;
    form.fileimage = images.map((image) => image.file);

    const response = await service().Create(form);
    if (response && response.status === 200) {
      props.getImages(1, form.hotelId);
      toast.success(
        <span
          className="font-medium text-[14px]"
          style={{ fontFamily: '"Poppins", sans-serif' }}
        >
          <span className="font-semibold">Thêm</span> ảnh thành công!
        </span>
      );
      setIsModalCreate(false);
      setForm({
        description: "",
        hotelId: 0,
      });
      setImages([]);
    } else {
      toast.error(<AlertError></AlertError>);
    }
  };
  const handlePageChange = async (current) => {
    const response = await service().getPage(current, props.idHotel);
    if (response && response.status === 200) {
      props.setImages(response.data.data);
    }
  };
  const handleFileChange = (event) => {
    const files = Array.from(event.target.files).map((file) => ({
      file, // Lưu trữ tệp gốc
      url: URL.createObjectURL(file), // URL để xem trước
      name: file.name, // Tên file
      preview: ["jpg", "jpeg", "png", "gif"].includes(
        file.name.split(".").pop().toLowerCase()
      ), // Kiểm tra định dạng xem trước
      size:
        file.size > 1024
          ? file.size > 1048576
            ? Math.round(file.size / 1048576) + "mb"
            : Math.round(file.size / 1024) + "kb"
          : file.size + "b", // Kích thước file ở định dạng dễ đọc
    }));

    setImages((prevImages) => [...prevImages, ...files]);
  };
  const activeModalDeleteImage = (id) => {
    setIsModalDeleteImage(true);
    setIdData(id);
  };

  const removeImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };
  const handleChangedActive = async (id) => {
    await service().ChangedActive(id);
  };
  useEffect(() => {}, []);
  return (
    <>
      <div
        tabIndex="-1"
        className={`${
          props.isModalImage ? "" : "hidden"
        } fixed flex z-50  bg-black bg-opacity-50 items-center justify-center w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full`}
      >
        <div className="relative w-full max-w-5xl max-h-full">
          <div
            className={`${isModalCreate ? "" : "hidden"}
          bg-white p-4 mb-[1px] rounded-md border-b-[1px] border-gray-300 border-solid`}
          >
            <h4>Thêm mới</h4>
            <form
              onSubmit={(e) => {
                submitCreate();
                e.preventDefault();
              }}
              className="p-4 md:p-5 flex "
            >
              <div className="text-sm grid gap-y-7 w-full">
                <div>
                  <span>Ảnh khách sạn</span>
                  <div className="icons flex text-gray-500 ">
                    <span className="flex items-center mr-2">Chọn ảnh</span>
                    <label id="select-image">
                      <svg
                        className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                        />
                      </svg>
                      <input
                        hidden
                        type="file"
                        multiple
                        onChange={handleFileChange}
                      />
                    </label>
                    <div className="count ml-auto text-gray-400 text-xs font-semibold">
                      {images.length}/300
                    </div>
                  </div>
                  <div id="preview" className="my-2 flex flex-wrap gap-y-7">
                    {images.map((image, index) => (
                      <div
                        className="relative w-32 h-32 object-cover rounded"
                        key={index}
                      >
                        {image.preview ? (
                          <div className="relative w-32 h-32 object-cover rounded">
                            <img
                              src={image.url}
                              className="w-32 h-32 object-cover rounded"
                              alt={image.name}
                            />
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                removeImage(index);
                              }}
                              className="w-6 h-6 absolute text-center flex items-center top-0 right-0 m-2 text-white text-lg bg-red-500 hover:text-red-700 hover:bg-gray-100 rounded-full p-1"
                            >
                              <span className="mx-auto">×</span>
                            </button>
                            <div className="text-xs text-center p-2">
                              {image.size}
                            </div>
                          </div>
                        ) : (
                          <div className="relative w-32 h-32 object-cover rounded">
                            <svg
                              className="fill-current w-32 h-32 ml-auto pt-1"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                            >
                              <path d="M15 2v5h5v15h-16v-20h11zm1-2h-14v24h20v-18l-6-6z" />
                            </svg>
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                removeImage(index);
                              }}
                              className="w-6 h-6 absolute text-center flex items-center top-0 right-0 m-2 text-white text-lg bg-red-500 hover:text-red-700 hover:bg-gray-100 rounded-full p-1"
                            >
                              <span className="mx-auto">×</span>
                            </button>
                            <div className="text-xs text-center p-2">
                              {image.size}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <span>Mô tả</span>
                  <textarea
                    className="w-full focus:border-[3px] focus:border-blue-200 border-neutral-300 h-[100px] p-3 text-sm rounded-md"
                    placeholder="Nhập mô tả"
                    required
                    onChange={(e) =>
                      setForm({ ...form, description: e.target.value })
                    }
                    value={form.description}
                  ></textarea>
                </div>
              </div>
              <div className="text-end block sm:gap-y-2  gap-x-2 gap-y-3 p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button
                  type="submit"
                  className="mb-4 px-5 py-3 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-smtext-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                >
                  Thêm
                </button>
                <button
                  onClick={() => setIsModalCreate(false)}
                  type="button"
                  className="py-2 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  Thoát
                </button>
              </div>
            </form>
          </div>
          <div
            className={`${isModalUpdate ? "" : "hidden"}
          bg-white p-4 mb-[1px] rounded-md border-b-[1px] border-gray-300 border-solid`}
          >
            <h4>Sửa thông tin ảnh</h4>
            <form
              onSubmit={(e) => {
                submitUpdate();
                e.preventDefault();
              }}
              className="p-4 md:p-5 flex "
            >
              <div className="text-sm grid gap-y-7 w-full">
                <div>
                  <span>Vị trí</span>
                  <input
                    className="w-full focus:border-[3px] focus:border-blue-200 border-neutral-300 h-[40px] px-3 text-sm rounded-md"
                    type="number"
                    placeholder="Nhập số vị trí"
                    required
                    onChange={(e) =>
                      setEdit({ ...edit, position: e.target.value })
                    }
                    defaultValue={edit.position}
                  />
                </div>
                <div>
                  <span>Mô tả</span>
                  <textarea
                    className="w-full focus:border-[3px] focus:border-blue-200 border-neutral-300 h-[100px] p-3 text-sm rounded-md"
                    placeholder="Nhập mô tả"
                    required
                    onChange={(e) =>
                      setEdit({ ...edit, description: e.target.value })
                    }
                    defaultValue={edit.description}
                  ></textarea>
                </div>
              </div>
              <div className="text-end block sm:gap-y-2  gap-x-2 gap-y-3 p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button
                  type="submit"
                  className="mb-4 px-5 py-3 text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-smtext-center dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
                >
                  Sửa
                </button>
                <button
                  onClick={() => setIsModalUpdate(false)}
                  type="button"
                  className="py-2 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  Thoát
                </button>
              </div>
            </form>
          </div>
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Danh sách ảnh khách sạn
              </h3>
              <button
                onClick={() => props.setIsModalImage(false)}
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
              <button
                type="button"
                className="focus:outline-none text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 me-2  dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                onClick={() => activeModalCreate()}
              >
                <i className="fa-solid fa-plus "></i>
                <span className="ml-2 inline-block lg:hidden">Thêm mới</span>
              </button>

              <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        STT
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Ảnh
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Số thứ tự
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Mô tả
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
                    {props.images &&
                      props.images.map((item, index) => {
                        return (
                          <tr
                            key={index}
                            className="bg-white border-b  text-gray-900  dark:bg-gray-800 dark:border-gray-700  hover:bg-gray-50 dark:hover:bg-gray-600"
                          >
                            <th className="px-6 py-4">{index + 1}</th>
                            <td className="px-6 py-4 content-center">
                              <img
                                className="w-20"
                                src={
                                  process.env.REACT_APP_LOCALHOST_URL +
                                  item.image
                                }
                                alt=""
                              />
                            </td>
                            <td className="px-6 py-4">{item.position}</td>
                            <td className="px-6 py-4">{item.description}</td>
                            <td className="px-6 py-4 content-center">
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
                                onClick={() => activeModalDeleteImage(item.id)}
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

                {props.countImg > 1 && (
                  <Pagination
                    count={props.countImg}
                    handlePageChange={handlePageChange}
                  ></Pagination>
                )}
                <ModalDeleteImage
                  getImages={getImageById}
                  idData={idData}
                  setIsModalDeleteImage={setIsModalDeleteImage}
                  isModalDeleteImage={isModalDeleteImage}
                ></ModalDeleteImage>
              </div>
            </div>
            <div className="justify-end sm:grid sm:gap-y-2 flex gap-x-2 p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
              <button
                onClick={() => props.setIsModalImage(false)}
                type="button"
                className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                Thoát
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalImage;
