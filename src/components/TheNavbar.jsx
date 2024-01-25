import { Link } from "react-router-dom";

const TheNavbar = () => {
   return (
      <nav className="flex items-center justify-between bg-gray-800 h-20 shadow-2xl">
      <div className="logo">
        <h1 className="text-white ml-4 cursor-pointer text-2xl">x Blog</h1>
      </div>
      <ul className="flex">
        <li>
          <Link className="text-white mr-4 bg-gray-500 pt-4 p-4 pr-5 pl-5 hover:bg-gray-600 transition-all rounded" to={"/"}><i className="fas fa-home"></i> Home</Link>
        </li>
        <li>
          <Link className="text-white mr-4 bg-gray-500 pt-4 p-4 pr-5 pl-5 hover:bg-gray-600 transition-all rounded" to={"/about"}><i className="fas fa-home"></i> About</Link>
        </li>
        <li>
          <Link className="text-white mr-4 bg-gray-500 pt-4 p-4 pr-5 pl-5 hover:bg-gray-600 transition-all rounded" to={"/contact"}><i className="fas fa-home"></i> Contact</Link>
        </li>
      </ul>
    </nav>
   )
}

export default TheNavbar;