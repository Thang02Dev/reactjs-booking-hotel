import React from "react";
import styled from "styled-components";
import ButtonCategory from "../../components/Client/ButtonCategory";
import SearchHotel from "../../components/Client/SearchHotel";

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
  return (
    <div className=" w-[100%]">
      <div className=" bg-red-300 ">
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
          <div>home</div>
          <div>home</div>
          <div>home</div>
          <div>home</div>
          <div>home</div>
          <div>home</div>
          <div>home</div>
          <div>home</div>
          <div>home</div>
          <div>home</div>
          <div>home</div>
          <div>home</div>
          <div>home</div>
          <div>home</div>
          <div>home</div>
          <div>home</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
