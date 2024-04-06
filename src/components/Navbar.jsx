import React from "react";

import Button from "../components/Button";

const Navbar = () => {
  return (
    <>
      <nav className="w-full  h-[5rem] flex items-center justify-between px-6 sticky top-0 bg-white">
        <div className="flex items-center gap-6">
          <h1 className=" font-[Pacifico] text-2xl">dribbble</h1>
          <ul className="text-gray-600 font-medium flex gap-6">
            <li>Inspiration</li>
            <li>Find Work</li>
            <li>Learn Design</li>
            <li>Go Pro</li>
            <li>Hire Designers</li>
          </ul>
        </div>

        <div>
          <div className="flex items-center gap-5">
            <div className="flex items-center relative">
              <i class="absolute left-1 text-gray-400 z-[1] ri-search-line"></i>
              <input
                className=" w-[6rem] rounded-md pl-6 py-1 bg-gray-100"
                type="text"
                placeholder="Search"
              />
            </div>
            <i class="ri-briefcase-4-fill"></i>
            <img
              className="w-7 h-7 rounded-full"
              src="https://images.unsplash.com/photo-1521119989659-a83eee488004?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"
              alt=""
            />
            <Button text="Upload"/>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
