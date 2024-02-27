import React from "react";
import styled from "styled-components";

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
          <div className=" bg-gray-800 text-white mt-[108px] w-[1242px]">
            <div className="mx-[12px] text-center mb-4">
              <span className=" text-[32px] leading-[60px] font-bold ">
                Từ Đông Nam Á Đến Thế Giới, Trong Tầm Tay Bạn
              </span>
            </div>
            <div>
              <div>
                <span>Ooptions</span>
              </div>
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
