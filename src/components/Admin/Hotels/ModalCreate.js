import React, { useEffect, useState } from "react";
import service from "../../../services/hotel";
import imageService from "../../../services/imageHotel";
import { toast } from "react-toastify";
import AlertError from "../AlertError";

const ModalCreate = (props) => {
  const [form, setForm] = useState({
    name: "",
    address: "",
    phone_number: "",
    introduce: "",
    categoryId: 0,
    checkIn_time: "",
    CheckOut_time: "",
    favorite: 0,
  });
  const [validPhone, setValidPhone] = useState(false);
  const [images, setImages] = useState([]);

  const submitCreate = async () => {
    const imageForm = {
      fileimage: images.map((image) => image.file),
      position: 1,
      description: "Ảnh khách sạn",
      hotelId: 0,
      id: 1,
      image: "",
      active: true,
    };

    // const createImage = await imageService().Create(imageForm);
    const phoneRegex = /^0\d{9}$/;
    if (phoneRegex.test(form.phone_number)) {
      console.log("sdt hop le");
      setValidPhone(false);
    } else {
      setValidPhone(true);
    }
    const response = await service().Create(form);
    if (response && response.status === 200) {
      const maxHotel = await service().getAll();
      const hotelId = maxHotel.data.reduce((prev, current) => {
        return current.id > prev.id ? current : prev;
      }).id;

      await props.getAll();

      imageForm.hotelId = hotelId;

      await imageService().Create(imageForm);

      if (response.data.error === 0) {
        toast.success(
          <span
            className="font-medium text-[14px]"
            style={{ fontFamily: '"Poppins", sans-serif' }}
          >
            <span className="font-semibold">Thêm</span> khách sạn{" "}
            <span className="font-semibold">"{form.name}"</span> thành công!
          </span>
        );
        props.setIsModalCreate(false);
        setForm({
          name: "",
          address: "",
          phone_number: "",
          introduce: "",
          categoryId: 0,
          checkIn_time: "",
          CheckOut_time: "",
          favorite: 0,
        });
      } else {
        toast.error(<AlertError mess={response.data.mess}></AlertError>);
      }
    } else {
      toast.error(<AlertError></AlertError>);
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

  const removeImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  useEffect(() => {}, []);

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
                Thêm mới khách sạn
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
              <div className="text-sm grid gap-y-2 mb-4">
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

                <div id="preview" className="my-1 flex flex-wrap gap-y-7">
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
              <div
                className={`md:flex-col md:gap-y-2 flex gap-x-4 ${
                  validPhone ? "mb-3" : ""
                }`}
              >
                <div className="w-full text-sm grid gap-y-2">
                  <span>Tên khách sạn</span>
                  <input
                    className="w-full focus:border-[3px] focus:border-blue-200 border-neutral-300 h-[40px] px-3 text-sm rounded-md"
                    type="text"
                    placeholder="Nhập tên khách sạn"
                    required
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    defaultValue={form.name}
                  />
                </div>
                <div className="relative w-full text-sm grid gap-y-2">
                  <span>Số điện thoại liên hệ</span>
                  <input
                    type="number"
                    className={`w-full ${
                      validPhone ? "border-red-500 border-[2px] " : ""
                    }  focus:border-[3px] focus:border-blue-200 border-neutral-300 h-[40px] px-3 text-sm rounded-md`}
                    placeholder="Nhập số điện thoại"
                    required
                    onChange={(e) =>
                      setForm({ ...form, phone_number: e.target.value })
                    }
                    defaultValue={form.phone_number}
                  />
                  <span
                    className={`absolute bottom-[-22px] ${
                      validPhone ? "  text-red-600 " : "hidden"
                    }`}
                  >
                    Số điện thoại không hợp lệ
                  </span>
                </div>
              </div>
              <div className="text-sm grid gap-y-2">
                <span>Địa chỉ</span>
                <input
                  className="w-full focus:border-[3px] focus:border-blue-200 border-neutral-300 h-[40px] px-3 text-sm rounded-md"
                  type="text"
                  placeholder="Nhập địa chỉ"
                  required
                  onChange={(e) =>
                    setForm({ ...form, address: e.target.value })
                  }
                  defaultValue={form.address}
                />
              </div>
              <div className="flex gap-x-4">
                <div className="w-full text-sm grid gap-y-2">
                  <span>Thời gian - Check In</span>
                  <input
                    className="w-full focus:border-[3px] focus:border-blue-200 border-neutral-300 h-[40px] px-3 text-sm rounded-md"
                    type="time"
                    placeholder="Nhập tên danh mục"
                    onChange={(e) =>
                      setForm({
                        ...form,
                        checkIn_time: e.target.value,
                      })
                    }
                    defaultValue={form.checkIn_time}
                  />
                </div>
                <div className="w-full text-sm grid gap-y-2">
                  <span>Thời gian - Check Out</span>
                  <input
                    className="w-full focus:border-[3px] focus:border-blue-200 border-neutral-300 h-[40px] px-3 text-sm rounded-md"
                    type="time"
                    placeholder="Nhập tên danh mục"
                    onChange={(e) =>
                      setForm({
                        ...form,
                        CheckOut_time: e.target.value,
                      })
                    }
                    defaultValue={form.CheckOut_time}
                  />
                </div>
              </div>
              <div className="text-sm grid gap-y-2">
                <span>Thông tin giới thiệu</span>
                <textarea
                  className="w-full focus:border-[3px] focus:border-blue-200 border-neutral-300 h-[100px] p-3 text-sm rounded-md"
                  placeholder="Nhập thông tin giới thiệu"
                  required
                  onChange={(e) =>
                    setForm({ ...form, introduce: e.target.value })
                  }
                  defaultValue={form.introduce}
                ></textarea>
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
