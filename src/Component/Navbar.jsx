import React, { useState } from "react";
import { Link } from "react-router-dom";
function Navbar() {
  window.addEventListener("scroll", () => {
    const scrolled = window.scrollY;
    if (scrolled >= 200) {
      document.querySelector("nav").classList.add("bg-black/80");
    } else {
      document.querySelector("nav").classList.remove("bg-black/80");
    }
  });

  const Show = () => {
    let element = document.querySelectorAll(".navlink");
    let len = element.length;
    for (let i = 0; i <= len - 1; i++) {
      element[i].classList.remove("lg:hidden");
      
    }
  };
  const hide = () => {
    let element = document.querySelectorAll(".navlink");
    let len = element.length;
    for (let i = 0; i <= len - 1; i++) {
      element[i].classList.add("lg:hidden");
    }
  };
  const [toggle, setToggle] = useState(true);
  const menuToggle = (e) => {
    toggle ? setToggle(false) : setToggle(true);
    let element = document.querySelector(".absolute", ".hidden");
    toggle
      ? element.classList.remove("hidden")
      : element.classList.add("hidden");
    console.log(toggle);
  };
  return (
    <nav className="z-10 flex lg:flex-col p-4 lg:p-5 fixed h-fit lg:bg-transparent  lg:bg-gradient-to-r from-black/90 to-transparent lg:min-h-screen lg:justify-center w-full lg:w-fit text-white">
      <div className="flex justify-between items-center w-full lg:w-fit">
        <div className="lg:absolute top-5 left-3">
          <h1 className="flex lg:flex-col text-center text-2xl">
            <span className="font-bold text-red-500 sm:text-[30px]"> SEEK</span>
            <span className="sm:text-[30px] lg:text-[20px]">STREAMER</span>
          </h1>
        </div>
        <ul
          className="absolute bg-black/30 p-3 lg:bg-transparent right-0 top-16 lg:relative hidden lg:flex lg:flex-col lg:p-3 lg:space-y-10 text-[20px] lg:py-10 "
          onMouseEnter={Show}
          onMouseLeave={hide}
        >
          <li className="flex items-center space-x-3">
            <i className="bi bi-house"></i>
            <Link
              className="navlink lg:hidden text-[16px] font-bold hover:text-slate-500"
              to="/"
            >
              Home
            </Link>
          </li>
          <li className="flex items-center space-x-3">
            <i className="bi bi-search"></i>
            <Link
              className="navlink lg:hidden text-[16px] font-bold hover:text-slate-500"
              to="/Search"
            >
              Search
            </Link>
          </li>
          <li className="flex items-center space-x-3">
            <i className="bi bi-camera-reels"></i>
            <Link
              className="navlink lg:hidden text-[16px] font-bold hover:text-slate-500"
              to="/Movies"
            >
              Movies
            </Link>
          </li>
          <li className="flex items-center space-x-3">
            <i className="bi bi-tv"></i>
            <Link
              className="navlink lg:hidden text-[16px] font-bold hover:text-slate-500"
              to="/Series"
            >
              TV Series
            </Link>
          </li>
          {/* <li className='flex items-center space-x-3'>
                <i className="bi bi-bell"></i>
                <a className='hidden text-[16px] font-bold hover:text-slate-500' href="">Notifications</a>
                </li> */}
        </ul>
        <div className="lg:hidden">
          <i onClick={menuToggle} className="bi bi-list text-3xl"></i>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
