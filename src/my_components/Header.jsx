import React from "react";
import Logo from "../assets/img/logo.png";
const Header = () => {
  return (
    <div>
      <header className="bg-[rgba(28,28,28,0.8)] fixed w-full top-0 z-50">
        <div className="mycontainer">
          <nav className="flex items-center justify-between gap-3 py-4">
            <nav className="nav_logo flex items-center gap-5">
              <img src={Logo} alt="" />
              <ul className="sm:flex hidden items-center gap-5">
                <li>
                  <a
                    className="font-medium text-lg text-center text-white hover:text-gray-400 transition-[1s] cursor-pointer"
                    href="#"
                  >
                    Categories
                  </a>
                </li>
                <li>
                  <a
                    className="font-medium text-lg text-center text-white hover:text-gray-400 transition-[1s] cursor-pointer"
                    href="#"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    className="font-medium text-lg text-center text-white hover:text-gray-400 transition-[1s] cursor-pointer"
                    href="#"
                  >
                    Help center
                  </a>
                </li>
              </ul>
            </nav>

            <nav className="flex items-center gap-3">
              <a
                className="lg:flex hidden font-semibold text-lg text-white hover:text-gray-400 transition-[1s] cursor-pointer"
                href="tel:+1 855 420 0000"
              >
                +1 855 420 0000
              </a>

              <button className="bg-[#272727] md:flex hidden p-[15px] rounded-[100px] text-white hover:text-gray-400 transition-[1s] cursor-pointer">
                <i class="fa-solid fa-sun"></i>
              </button>
              <button className="bg-[#299764] font-medium text-lg text-white hover:bg-green-700 transition-[1s] cursor-pointer px-[30px] py-4 sm:flex hidden items-center gap-3 rounded-[100px]">
                Login<i class="fa-solid fa-arrow-right-to-bracket"></i>
              </button>
            </nav>

            <nav className="text-[#299764] block sm:hidden text-2xl">
                <i class="fa-solid fa-bars-staggered"></i>
            </nav>
          </nav>
        </div>

        <hr className="text-gray-400" />
      </header>
    </div>
  );
};

export default Header;
