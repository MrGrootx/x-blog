import { RiMessage2Fill } from "react-icons/ri";
import { FaBell } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import logo from "../assets/img/icon.png";
import { MdMenu } from "react-icons/md";

import profile from "../assets/img/profile.png";

import { useState } from "react";

import { HiOutlineXMark } from "react-icons/hi2";
import { Link } from "react-router-dom";

const TheNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className=" sticky top-0 z-40">
      <div className="sm:flex sm:justify-between items-center justify-end p-5 bg-ctm3">
      <Link to="/" className="cursor-pointer">
        <div className="flex justify-center items-center gap-x-2 mb-4 md:mb-0">
        <img src={logo} alt="logo" className="w-8" />
          <h3 className="font-Viga text-2xl">Blog</h3>
        </div>
        </Link>
        <div className="hidden md:block">
          <ul className="flex gap-x-6 cursor-pointer">
            <Link to={"/"}><li className="hover:text-ctm5 font-bold">Home</li></Link>
            <Link to={"/about"}><li className="hover:text-ctm5 font-bold">About</li></Link>
            <Link to={"/contact"}><li className="hover:text-ctm5 font-bold">Contact</li></Link>
          </ul>
        </div>

        {/* icons */}
        <div className="md:px-0 flex justify-between items-center mt-1 sm:p-0 ">
          <ul className="text-ctm2 flex gap-x-3 md:mt-0 justify-center items-center my-auto  mt-auto">
            <div className="relative flex items-center ">
              <div className="hidden md:block">
                <div className="items-center  flex ">
                  <IoSearch className="w-5 h-5 absolute  ml-2 text-gray-400 focus-within:text-gray-600 pointer-events-none " />
                  <input
                    type="text"
                    className="outline-none border-none rounded bg-ctm1 px-3 pr-3 pl-8 py-1 "
                    autoComplete="off"
                    placeholder="Search"
                  />
                </div>
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
            <button
              type="button"
              className=" md:hidden "
              onClick={() => {
                setMenuOpen(!menuOpen);
              }}
            >
              {menuOpen ? (
                <HiOutlineXMark className="bg-gray-400 p-1 text-3xl rounded-full hover:bg-ctm5 cursor-pointer duration-300 sm:ml-2" />
              ) : (
                <MdMenu className=" bg-gray-400 p-1 text-3xl rounded-full hover:bg-ctm5 cursor-pointer duration-300 sm:ml-2" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Responsive Navbar */}

      <div
        className={`w-full inset-0 bg-opacity-100 md:hidden ${
          menuOpen ? "block top-12 " : "hidden top-[-490px]"
        }`}
      > 

        {/* What this line does is if we click the nav it will set setMenuOpen() to false ->  onClick={() => setMenuOpen(!menuOpen)} */}
        <div className="w-full h-[500px] bg-ctm2 rounded-b-md">
          <ul className="gap-x-6 cursor-pointer w-full text-center">
            <Link to={"/"} onClick={() => setMenuOpen(!menuOpen)}>
              <li className="hover:text-ctm5 font-bold py-5">Home</li>
            </Link>

            <Link to={"/about"} onClick={() => setMenuOpen(!menuOpen)}>
              <li className="hover:text-ctm5 font-bold py-5">About</li>
            </Link>
            <Link to={"/contact"} onClick={() => setMenuOpen(!menuOpen)}>
              <li className="hover:text-ctm5 font-bold py-5">Contact</li>
            </Link>
          </ul>
          <div className="flex mt-56 justify-center">
            <img src={logo} alt="logo" className="w-8" />
            <h3 className="font-Viga text-2xl">Blog</h3>
          </div>
          {/* </motion.div> */}
        </div>
      </div>
    </nav>
  );
};

export default TheNavbar;
