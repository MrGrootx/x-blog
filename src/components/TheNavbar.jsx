// import { Link } from "react-router-dom";
import { RiMessage2Fill } from "react-icons/ri";
import { FaBell } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import logo from "../assets/img/icon.png";
import { MdMenu } from "react-icons/md";
import profile from "../assets/img/profile.png";

const TheNavbar = () => {
  return (
    <nav className="bg-ctm3 p-5 border">
      <div className="sm:flex sm:justify-between items-center justify-center">
        <div className="flex justify-center items-center gap-x-2 ">
          <img src={logo} alt="logo" className="w-8" />
          <h3 className="font-Viga text-2xl">Blog</h3>
        </div>

        <div className="hidden md:block">
          <ul className="flex gap-x-6 cursor-pointer">
            <li className="hover:text-ctm5 font-bold">Home</li>
            <li className="hover:text-ctm5 font-bold">About</li>
            <li className="hover:text-ctm5 font-bold">Contact</li>
          </ul>
        </div>

        {/* icons */}
        <div className="md:px-0 flex justify-between items-center p-3 sm:p-0 ">
          <ul className="text-ctm2 flex md:gap-x-3 gap-x-3 md:mt-0 justify-center items-center my-auto  mt-auto ">
            <div className="relative flex items-center">
              <div className="items-center flex ">
                <IoSearch className="w-5 h-5 absolute  ml-2 text-gray-400 focus-within:text-gray-600 pointer-events-none" />
                <input
                  type="text"
                  className="outline-none border-none rounded bg-ctm1 px-3 pr-3 pl-8 py-1 "
                  autoComplete="off"
                  placeholder="Search"
                />
              </div>
            </div>
            <li className="">
              <RiMessage2Fill className="bg-gray-400 p-1 text-3xl rounded-full hover:bg-ctm5 cursor-pointer duration-300" />
            </li>
            <li className="">
              <FaBell className=" bg-gray-400 p-1 text-3xl rounded-full hover:bg-ctm5 cursor-pointer duration-300" />
            </li>
            <div className="cursor-pointer">
              <img
                src={profile}
                alt="profile"
                className="w-8 h-8 object-cover rounded-full "
              />
            </div>
          </ul>

          <div className="items-center flex">
            <button type="button" className=" md:hidden ">
              <MdMenu className=" bg-gray-400 p-1 text-3xl rounded-full hover:bg-ctm5 cursor-pointer duration-300 " />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TheNavbar;
