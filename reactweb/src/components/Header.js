import React from "react";

const Header = () => {
  let collapse = document.querySelector("#navbar-collapse");

  function toggle(e) {
    collapse.classList.toggle("hidden");
    collapse.classList.toggle("flex");
  }

  return (
    <nav className="bg-white py-2 md:py-4">
      <div className="container px-4 mx-auto md:flex md:items-center">
        <div className="flex justify-between items-center">
          <button className="font-bold text-xl text-indigo-600">MY</button>
          <button
            onClick={toggle}
            className="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden"
            id="navbar-toggle"
          >
            <i className="bi bi-list"></i>
          </button>
        </div>

        <div
          className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0"
          id="navbar-collapse"
        >
          <button className="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-transparent rounded hover:bg-indigo-100 hover:text-indigo-700 transition-colors duration-300">
            Login
          </button>
          <button className="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-solid border-indigo-600 rounded hover:bg-indigo-600 hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1">
            Signup
          </button>
        </div>
      </div>
    </nav>
  );
};
export default Header;
