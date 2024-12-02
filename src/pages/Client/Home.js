import React from "react";
import styled from "styled-components";
import ButtonCategory from "../../components/Client/ButtonCategory";
import SearchHotel from "../../components/Client/SearchHotel";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

const BockingOptions = styled.div`
  background-image: url("https://ik.imagekit.io/tvlk/image/imageResource/2023/09/27/1695776209619-17a750c3f514f7a8cccde2d0976c902a.png?tr=q-75");
  background-size: cover;
  background-repeat: no-repeat;
  height: 550px;
  width: 100%;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
`;

const Home = () => {
  const hotels = [
    {
      id: 1,
      name: "Sun City Hotel Nha Trang",
      rating: "⭐⭐⭐⭐",
      score: "8.3/10 (1163)",
      originalPrice: "465.000 VND",
      discountedPrice: "269.700 VND",
      img: "https://placehold.co/300x200",
    },
    {
      id: 2,
      name: "Melissa Hotel Nha Trang",
      rating: "⭐⭐⭐⭐",
      score: "8.6/10 (804)",
      originalPrice: "1.718.759 VND",
      discountedPrice: "616.278 VND",
      img: "https://placehold.co/300x200",
    },
    {
      id: 3,
      name: "Ruby Hotel Nha Trang",
      rating: "⭐⭐⭐⭐",
      score: "8.4/10 (200)",
      originalPrice: "726.667 VND",
      discountedPrice: "545.000 VND",
      img: "https://placehold.co/300x200",
    },
    {
      id: 4,
      name: "Khách sạn Muong Thanh Luxury Nha Trang",
      rating: "⭐⭐⭐⭐",
      score: "8.7/10 (698)",
      originalPrice: "2.790.000 VND",
      discountedPrice: "1.165.607 VND",
      img: "https://placehold.co/300x200",
    },
    {
      id: 5,
      name: "Diamond Bay Hotel",
      rating: "⭐⭐⭐⭐",
      score: "8.5/10 (932)",
      originalPrice: "1.500.000 VND",
      discountedPrice: "750.000 VND",
      img: "https://placehold.co/300x200",
    },
    {
      id: 6,
      name: "Diamond Bay Hotel",
      rating: "⭐⭐⭐⭐",
      score: "8.5/10 (932)",
      originalPrice: "1.500.000 VND",
      discountedPrice: "750.000 VND",
      img: "https://placehold.co/300x200",
    },
    {
      id: 7,
      name: "Diamond Bay Hotel",
      rating: "⭐⭐⭐⭐",
      score: "8.5/10 (932)",
      originalPrice: "1.500.000 VND",
      discountedPrice: "750.000 VND",
      img: "https://placehold.co/300x200",
    },
    {
      id: 8,
      name: "Diamond Bay Hotel",
      rating: "⭐⭐⭐⭐",
      score: "8.5/10 (932)",
      originalPrice: "1.500.000 VND",
      discountedPrice: "750.000 VND",
      img: "https://placehold.co/300x200",
    },
    // Thêm các ảnh khác nếu cần
  ];
  return (
    <div className=" w-[100%]">
      <div>
        <BockingOptions>
          <div className="text-white mt-[108px] w-[1242px]">
            <div className="mx-[12px] text-center mb-4">
              <span className=" text-[30px] leading-[56px] font-bold ">
                Từ Đông Nam Á Đến Thế Giới, Trong Tầm Tay Bạn
              </span>
            </div>
            <div className="w-[100%] pb-2 border-solid border-b-[1px]">
              <div className="flex justify-center gap-4 text-[#cdd0d1] text-[14px] font-bold">
                <ButtonCategory
                  active
                  name="Khách sạn"
                  icon={<i className="fa-solid fa-hotel"></i>}
                ></ButtonCategory>
                <ButtonCategory
                  hover
                  name="Vé máy bay"
                  icon={<i className={`fa-solid fa-plane fa-rotate-by`}></i>}
                ></ButtonCategory>
                <ButtonCategory
                  hover
                  name="Vé xe khách"
                  icon={<i className="fa-solid fa-bus-simple"></i>}
                ></ButtonCategory>
                <ButtonCategory
                  hover
                  name="Đưa đón sân bay"
                  icon={<i className="fa-solid fa-taxi"></i>}
                ></ButtonCategory>
                <ButtonCategory
                  hover
                  name="Cho thuê xe"
                  icon={<i className="fa-solid fa-car-on"></i>}
                ></ButtonCategory>
                <ButtonCategory
                  hover
                  name="Hoạt động & Vui chơi"
                  icon={<i className="fa-solid fa-person-walking"></i>}
                ></ButtonCategory>
                <ButtonCategory
                  hover
                  name="Khác"
                  icon={<i className="fa-solid fa-bars"></i>}
                ></ButtonCategory>
              </div>
            </div>
            <div className="h-[122px] w-[100%] mt-[24px] flex">
              <div className=" flex-auto my-[20px] relative">
                <span className="flex h-[28px] w-max items-start text-[14px] font-medium">
                  Thành phố, địa điểm hoặc tên khách sạn
                </span>
                <div className=" h-max relative">
                  <div className="text-[#44a8eb] text-[20px] absolute left-[12px] top-[15px]">
                    <i className="fa-solid fa-location-crosshairs"></i>
                  </div>
                  <input
                    type="text"
                    className={`h-[50px] w-[100%] focus:border-blue-200 focus:border-[2px] rounded-tl-2xl rounded-bl-2xl p-[13px_8px_13px_40px] text-black placeholder:text-gray-300 font-medium text-[15px] border-solid
        border-gray-500 border-opacity-25 border-y-[3px] border-x-[2px]
        outline-blue-300 outline-2
          hover:border-opacity-45 hover:border-black transition-all `}
                    placeholder={"Thành phố, khách sản, điểm đến"}

                    // onChange={(e) => e.target.value}
                    // defaultValue={props.defaultValue}
                  />
                </div>
              </div>
              <SearchHotel
                typeInput="text"
                index={2}
                title="Ngày nhận phòng và trả phòng"
                icon={<i className="fa-regular fa-calendar"></i>}
                value={2}
              ></SearchHotel>
              <SearchHotel
                typeInput="text"
                index={3}
                title="Khách và Phòng"
                icon={<i className="fa-regular fa-user"></i>}
                value={3}
              ></SearchHotel>
            </div>
          </div>
        </BockingOptions>
        <div className="pt-[450px]">
          <div className="container mx-auto p-4">
            <h2 className="text-xl font-bold mb-4">
              <i className="fa-solid fa-hotel mr-2 text-[14px] bg-css-blue p-[6px] rounded-full text-white"></i>
              Đa dạng lựa chọn khách sạn
            </h2>
            <div class="flex space-x-2 mb-4">
              <button class="bg-css-blue text-white px-4 py-3 rounded-3xl text-[14px] font-semibold">
                Nha Trang
              </button>
              <button class="bg-slate-100 text-css-blue px-4 py-3 rounded-3xl text-[14px] font-semibold">
                Đà Nẵng
              </button>
            </div>
            <Swiper
              className="h-[350px]"
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={4}
              navigation={true}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 4,
                },
              }}
            >
              {hotels.map((hotel) => (
                <SwiperSlide key={hotel.id}>
                  <div className="border rounded-lg overflow-hidden shadow-lg">
                    <img
                      src={hotel.img}
                      alt={hotel.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-3">
                      <h3 className="font-semibold text-[13px] text-[#43434a] ">
                        {hotel.name}
                      </h3>
                      <p className="text-yellow-500 my-2">{hotel.rating}</p>
                      <p className="text-[#0196f3] text-[15px] font-medium mb-2">
                        {hotel.score}
                      </p>
                      <p className="text-xs line-through font-semibold text-slate-400">
                        {hotel.originalPrice}
                      </p>
                      <p className="text-sm font-semibold text-[#f96d01]">
                        {hotel.discountedPrice}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="flex justify-center">
              <button className="flex  mt-4 bg-css-blue text-white px-10 py-3 rounded-md font-semibold ">
                <span>Đặt khách sạn ngay </span>
                <span className="ml-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <g fill="none" fill-rule="evenodd">
                      <rect width="16" height="16"></rect>
                      <polyline
                        stroke="#FFFFFF"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        points="6 3 11 8 6 13"
                      ></polyline>
                    </g>
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-b from-white to-blue-50 py-8">
          <div className="container mx-auto">
            <h2 className="text-xl font-bold mb-6">
              Lý do nên đặt chỗ với Traveloka?
            </h2>
            <div className="md:grid-cols-3 gap-6 flex">
              <div className="bg-white rounded-lg shadow-lg px-4 py-3 w-full flex ">
                <div className="content-center mr-3">
                  <img
                    src="https://via.placeholder.com/200"
                    alt="Icon 1"
                    className="mx-auto"
                  />
                </div>
                <div className="text-start">
                  <h3 className="font-semibold text-sm mb-2">
                    Đáp ứng mọi nhu cầu của bạn
                  </h3>
                  <p className="text-sm font-medium text-gray-600">
                    Từ chuyến bay, lưu trú, đến điểm tham quan, bạn có thể tin
                    chọn sản phẩm hoàn chỉnh và Hướng Dẫn Du Lịch của chúng tôi.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg px-4 py-3 w-full flex  ">
                <div className="content-center mr-2">
                  <img
                    src="https://via.placeholder.com/200"
                    alt="Icon 1"
                    className="mx-auto"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">
                    Đáp ứng mọi nhu cầu của bạn
                  </h3>
                  <p className="text-sm text-gray-600">
                    Từ chuyến bay, lưu trú, đến điểm tham quan, bạn có thể tin
                    chọn sản phẩm hoàn chỉnh và Hướng Dẫn Du Lịch của chúng tôi.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg px-4 py-3 w-full flex  ">
                <div className="content-center mr-2">
                  <img
                    src="https://via.placeholder.com/200"
                    alt="Icon 1"
                    className="mx-auto"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">
                    Đáp ứng mọi nhu cầu của bạn
                  </h3>
                  <p className="text-sm text-gray-600">
                    Từ chuyến bay, lưu trú, đến điểm tham quan, bạn có thể tin
                    chọn sản phẩm hoàn chỉnh và Hướng Dẫn Du Lịch của chúng tôi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
