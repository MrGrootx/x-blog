import logo from "../assets/img/icon.png";
import { FaDiscord } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
const BottomFooter = () => {
  return (
    <div>
      <div className=" flex justify-between  items-center">
        <div className="flex gap-x-1">
          <img src={logo} alt="logo" className="w-8" />
          <h3 className="font-Viga text-2xl">Blog</h3>
        </div>
        <div>
          <div className="flex items-center gap-x-2">
            <h3 className="text-xl font-semibold hidden md:block">Follow Us</h3>
            <ul className="flex gap-x-2 ">
              <a
                href="https://discord.gg/Nm5FSxK2gv"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li>
                  <FaDiscord className="w-6" />
                </li>
              </a>
              <a
                href="https://www.instagram.com/grootdev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li>
                  <FaInstagram className="w-8" />
                </li>
              </a>
            </ul>
          </div>
        </div>
      </div>
      <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700" />

      <div className="md:flex justify-center md:justify-between">
        <ul className="flex gap-x-4 justify-center mb-3 md:mb-0">
          <a href="">
            <li className="bg-ctm5 px-2 text-white hover:bg-teal-400 hover:text-black hidden md:block">
              Package i Used
            </li>
          </a>
          <a href="https://github.com/MrGrootx/x-blog" target="_blank" rel="noopener noreferrer">
            <li className="bg-[#C70039] px-2 text-white hover:bg-red-600">
              Contributions
            </li>
          </a>
        </ul>
        <div>
         <h3 className="text-center">All Rights Reserved © 2024</h3>
        </div>
      </div>
    </div>
  );
};

export default BottomFooter;
