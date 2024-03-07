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
                  icon={<i class="fa-solid fa-bus-simple"></i>}
                ></ButtonCategory>
                <ButtonCategory
                  hover
                  name="Đưa đón sân bay"
                  icon={<i class="fa-solid fa-taxi"></i>}
                ></ButtonCategory>
                <ButtonCategory
                  hover
                  name="Cho thuê xe"
                  icon={<i class="fa-solid fa-car-on"></i>}
                ></ButtonCategory>
                <ButtonCategory
                  hover
                  name="Hoạt động & Vui chơi"
                  icon={<i class="fa-solid fa-person-walking"></i>}
                ></ButtonCategory>
                <ButtonCategory
                  hover
                  name="Khác"
                  icon={<i class="fa-solid fa-bars"></i>}
                ></ButtonCategory>
              </div>
            </div>
            <div className="h-[122px] w-[100%] mt-[24px] flex">
              <SearchHotel
                typeInput="text"
                index={1}
                title="Thành phố, địa điểm hoặc tên khách sạn"
                icon={<i class="fa-solid fa-location-crosshairs"></i>}
                placeholder="Thành phố, khách sản, điểm đến"
                isFisrt
              ></SearchHotel>
              <SearchHotel
                typeInput="text"
                index={2}
                title="Ngày nhận phòng và trả phòng"
                icon={<i class="fa-regular fa-calendar"></i>}
                value="02 thg 3 2024 - 03 thg 3 2024"
              ></SearchHotel>
              <SearchHotel
                typeInput="text"
                index={3}
                title="Khách và Phòng"
                icon={<i class="fa-regular fa-user"></i>}
                // value="1 người lớn, 0 trẻ em, 1 phòng"
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
