// import { Outlet } from "react-router-dom";
import { Outlet } from "react-router-dom";
import TheNavbar from "../components/TheNavbar";
// import About from "../pages/About";
// import Home from "../pages/Home";

const GuestLayout = () => {
  return (
    <div>
      <TheNavbar />
      <div>
      <Outlet />
      </div>
    </div>
  );
};

export default GuestLayout;
