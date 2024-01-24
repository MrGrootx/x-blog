const TheNavbar = () => {
   return (
      <nav className="flex items-center justify-between bg-gray-800 h-20 shadow-2xl">
      <div className="logo">
        <h1 className="text-white ml-4 cursor-pointer text-2xl">x Blog</h1>
      </div>
      <ul className="flex">
        <li>
          <a className="text-white mr-4 bg-gray-500 pt-4 p-4 pr-5 pl-5 hover:bg-gray-600 transition-all rounded" href="#"><i className="fas fa-home"></i> Home</a>
        </li>
        <li>
          <a className="text-white mr-4 bg-gray-500 pt-4 p-4 pr-5 pl-5 hover:bg-gray-600 transition-all rounded" href="#"><i className="fas fa-question"></i> About</a>
        </li>
        <li>
          <a className="text-white mr-4 bg-gray-500 pt-4 p-4 pr-5 pl-5 hover:bg-gray-600 transition-all rounded" href="#"><i className="fas fa-reply"></i> Contact</a>
        </li>
      </ul>
    </nav>
   )
}

export default TheNavbar;