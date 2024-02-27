import React, { useState, useEffect } from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
  height: 100px;
  width: 100%;
  z-index: 99;
  transition: 0.2s all;
`;

function Header(props) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState("");
  const [hover, setHover] = useState("hover:bg-black/25");
  const [logo, setLogo] = useState(
    "https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/f/fbab4f587da2242fbe9858fe3e5ba717.svg"
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      if (scrollPosition > 15) {
        setBackgroundColor("bg-white");
        setLogo(
          "https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/9/97f3e7a54e9c6987283b78e016664776.svg"
        );
        setHover("hover:bg-black/5");
      } else {
        setBackgroundColor("");
        setHover("hover:bg-black/25");
        setLogo(
          "https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/f/fbab4f587da2242fbe9858fe3e5ba717.svg"
        );
      }
    };
    // Thêm sự kiện cuộn chuột
    window.addEventListener("scroll", handleScroll);
    // // Xóa sự kiện khi component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);
  return (
    <StyledHeader
      className={`flex justify-center sticky top-0 ${
        backgroundColor === "" ? "" : backgroundColor
      }`}
    >
      <div
        className={`h-[100px] w-[1242px] ${
          backgroundColor === "" ? "text-white" : "text-black"
        }`}
      >
        <div className="h-[56px] w-[100%] flex justify-between px-[12px] py-[4px]">
          <div className="w-[135px] h-[47px] ">
            <a href="/">
              <img className="w-[100%] h-[100%] " src={`${logo}`} alt="logo" />
            </a>
          </div>
          <div className="flex items-center text-[14px] gap-[10px] ">
            <a
              href="/"
              className={`p-[8px] cursor-pointer ${hover} transition-all rounded-md leading-5`}
            >
              VI/VND
            </a>
            <a
              href="/"
              className={`p-[8px] cursor-pointer ${hover} transition-all rounded-md leading-5`}
            >
              Khuyến mãi
            </a>
            <a
              href="/"
              className={`p-[8px] cursor-pointer ${hover} transition-all rounded-md leading-5`}
            >
              Hỗ trợ
            </a>
            <a
              href="/"
              className={`p-[8px] cursor-pointer ${hover} transition-all rounded-md leading-5`}
            >
              Hợp tác với chúng tôi
            </a>
            <a
              href="/"
              className={`p-[8px] cursor-pointer ${hover} transition-all rounded-md leading-5`}
            >
              Đặt chỗ của tôi
            </a>
            <a
              href="/"
              className={`p-[8px] border-solid border-[1px] ${
                backgroundColor !== "" ? "border-[#0194f3]" : "border-white"
              } transition-all px-4 py-[10px] rounded-md ${hover}`}
            >
              Đăng nhập
            </a>
            <a
              href="/"
              className={`p-[8px] rounded-md bg-[#0194f3] px-4 py-[10px] transition-all ${hover}:bg-blue-500 text-white`}
            >
              Đăng ký
            </a>
          </div>
        </div>
        <div
          className="w-[100%] h-[calc(100%-56px)] border-solid border-y-[1px] border-gray-200 border-opacity-20
              shadow-black "
        >
          <div className="flex items-center gap-[16px] h-[100%] w-[100%] p-[4px] text-[14px] font-medium">
            <div
              className={`p-[8px] rounded-md ${hover} py-[10px] transition-all`}
            >
              <a href="/">Khách sạn</a>
            </div>
            <div
              className={`p-[8px] rounded-md ${hover} py-[10px] transition-all`}
            >
              <a href="/">Vé máy bay</a>
            </div>
            <div
              className={`p-[8px] rounded-md ${hover} py-[10px] transition-all`}
            >
              <a href="/">Vé xe khách</a>
            </div>
            <div
              className={`p-[8px] rounded-md ${hover} py-[10px] transition-all`}
            >
              <a href="/">Đưa đón sân bay</a>
            </div>
            <div
              className={`p-[8px] rounded-md ${hover} py-[10px] transition-all`}
            >
              <a href="/">Cho thuê xe</a>
            </div>
            <div
              className={`p-[8px] rounded-md ${hover} py-[10px] transition-all`}
            >
              <a href="/">Hoạt động & Vui chơi</a>
            </div>
            <div
              className={`p-[8px] rounded-md ${hover} py-[10px] transition-all`}
            >
              <a href="/">More</a>
            </div>
          </div>
        </div>
      </div>
    </StyledHeader>
  );
}

export default Header;
