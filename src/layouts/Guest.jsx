// import { Outlet } from "react-router-dom";
import { Outlet } from "react-router-dom";
import TheNavbar from "../components/TheNavbar";
// import About from "../pages/About";
import TheFooter from "../components/TheFooter";

const GuestLayout = () => {
  return (
    <div>
      <TheNavbar />
     
      <div>
      <Outlet />
      </div>
      <TheFooter />
    </div>
  );
};

export default GuestLayout;
