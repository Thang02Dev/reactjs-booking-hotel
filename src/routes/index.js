import Home from "../pages/Client/Home";
import Hotel from "../pages/Client/Hotel";
import AdminLayout from "../components/layouts/AdminLayout/AdminLayout";
import AdminHome from "../pages/Admin/Home";
import AdminCategory from "../pages/Admin/Category";
import AdminCateUtility from "../pages/Admin/CateUtility";
import AdminHotel from "../pages/Admin/Hotel";
import AdminRoom from "../pages/Admin/Room";
import AdminUtility from "../pages/Admin/Utility";
import AdminFeature from "../pages/Admin/Feature";
import AdminComment from "../pages/Admin/Comment";

const routes = [
  { path: "/", component: Home },
  { path: "/hotel", component: Hotel },
  { path: "/admin/tong-quan", component: AdminHome, layout: AdminLayout },
  {
    path: "/admin/danh-muc",
    component: AdminCategory,
    layout: AdminLayout,
  },
  {
    path: "/admin/loai-tien-ich",
    component: AdminCateUtility,
    layout: AdminLayout,
  },
  {
    path: "/admin/khach-san",
    component: AdminHotel,
    layout: AdminLayout,
  },
  {
    path: "/admin/phong",
    component: AdminRoom,
    layout: AdminLayout,
  },
  {
    path: "/admin/tien-ich",
    component: AdminUtility,
    layout: AdminLayout,
  },
  {
    path: "/admin/tinh-nang",
    component: AdminFeature,
    layout: AdminLayout,
  },
  {
    path: "/admin/danh-gia",
    component: AdminComment,
    layout: AdminLayout,
  },
];

export default routes;
