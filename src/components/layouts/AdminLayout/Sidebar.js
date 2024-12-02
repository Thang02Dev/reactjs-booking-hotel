import React from "react";
import { NavLink } from "react-router-dom";
import "../../../assets/Admin/style.css";
const Sidebar = (props) => {
  return (
    <>
      <div
        id="sideBar"
        className={`relative flex flex-col flex-wrap bg-white border-r border-gray-300 p-6 flex-none w-64 ${
          props.sidebar ? "md:slideInLeft" : "md:slideOutLeft"
        } md:fixed md:top-0 md:z-30 md:h-screen md:shadow-xl animated faster `}
      >
        <div className="flex flex-col">
          <div className="text-right hidden md:block mb-4">
            <button onClick={() => props.setSidebar(false)} id="sideBarHideBtn">
              <i className="fa fa-times-circle"></i>
            </button>
          </div>
          <p className="uppercase text-xs text-gray-600 mb-4 tracking-wider">
            trang chủ
          </p>
          <NavLink
            onClick={() => props.setSidebar(false)}
            to={"/admin/tong-quan"}
            className="mb-3 py-1 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
          >
            <i className="fa fa-chart-pie text-xs mr-2"></i>
            tổng quan
          </NavLink>
          <a
            href="./index-1.html"
            className="mb-3 py-1 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
          >
            <i className="fa fa-shopping-cart text-xs mr-2"></i>
            thống kê
          </a>
          <p className="uppercase text-xs text-gray-600 mb-4 mt-4 tracking-wider">
            danh mục - Thể loại
          </p>
          <NavLink
            onClick={() => props.setSidebar(false)}
            to={"/admin/danh-muc"}
            className="mb-3 py-1 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
          >
            <i className="fa-solid fa-bars text-xs mr-2"></i>
            quản lý danh mục
          </NavLink>

          <NavLink
            onClick={() => props.setSidebar(false)}
            to={"/admin/loai-tien-ich"}
            className="mb-3 py-1 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
          >
            <i className="fa-solid fa-list-ul text-xs mr-2"></i>
            thể loại tiện ích
          </NavLink>
          <p className="uppercase text-xs text-gray-600 mb-4 mt-4 tracking-wider">
            khách sạn - phòng
          </p>
          <NavLink
            onClick={() => props.setSidebar(false)}
            to={"/admin/khach-san"}
            className="mb-3 py-1 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
          >
            <i className="fa-solid fa-hotel text-xs mr-2"></i>
            danh sách khách sạn
          </NavLink>
          {/* <NavLink
            onClick={() => props.setSidebar(false)}
            to={"/admin/phong"}
            className="mb-3 py-1 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
          >
            <i className="fa-solid fa-door-open text-xs mr-2"></i>
            danh sách phòng
          </NavLink> */}
          <NavLink
            onClick={() => props.setSidebar(false)}
            to={"/admin/tien-ich"}
            className="mb-3 py-1 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
          >
            <i className="fa-solid fa-lightbulb text-xs mr-2"></i>
            tiện ích - khách sạn
          </NavLink>

          <NavLink
            onClick={() => props.setSidebar(false)}
            to={"/admin/tinh-nang"}
            className="mb-3 py-1 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
          >
            <i className="fa-solid fa-wifi text-xs mr-2"></i>
            tính năng - phòng
          </NavLink>

          <NavLink
            onClick={() => props.setSidebar(false)}
            to={"/admin/danh-gia"}
            className="mb-3 py-1 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
          >
            <i className="fa-solid fa-comment text-xs mr-2"></i>
            Đánh giá - bình luận
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
