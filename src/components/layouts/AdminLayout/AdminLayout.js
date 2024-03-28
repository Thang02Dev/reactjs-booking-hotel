import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
const AdminLayout = ({ children }) => {
  let [sidebar, setSidebar] = useState(false);

  return (
    <>
      <Navbar sidebar={sidebar} setSidebar={setSidebar}></Navbar>
      <div className="h-screen flex flex-row flex-wrap ">
        <Sidebar sidebar={sidebar} setSidebar={setSidebar}></Sidebar>
        <div className="bg-gray-100 flex-1 p-6 md:mt-16 w-1">{children}</div>
      </div>
    </>
  );
};

export default AdminLayout;
