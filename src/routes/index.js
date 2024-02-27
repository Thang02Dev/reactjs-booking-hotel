import Home from "../pages/Home/index";
import Hotel from "../pages/Hotel/index";

const publicRoutes = [
    { path : '/', component : Home },
    { path: '/hotel' , component : Hotel}
];
const privateRoutes = [];

export {publicRoutes, privateRoutes}