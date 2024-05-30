import React from "react";
import { Link, useLocation } from "react-router-dom";
import { navTabs } from "./common/Helper";

const Navbar = () => {
  const location = useLocation();
  return (
    <>
      <div className="bg-white">
        <div
          className={`fixed top-0 bottom-0 min-h-screen z-50 lg:w-[256px] sm:w-[180px] w-[60px] transition-all duration-300 ease-linear bg-white left-0`}
        >
          <h2 className="hidden pl-4 my-10 font-bold lg:text-2xl sm:text-xl lg:pl-7 sm:block">My Dashboard</h2>
          <div className="relative z-50 flex flex-col w-full h-full gap-5 mt-4">
            {navTabs.map((value, index) => (
              <Link
                key={index}
                to={value.link}
                className={`flex items-center gap-3 py-3 text-xl font-medium tracking-wide after:absolute after:top-[50%] after:h-0 transition-all after:bg-[#EC6707] duration-300 after:transition-all after:duration-300 after:ease-linear after:w-1 pl-4 lg:pl-12 sm:pl-6 after:right-0 relative after:rounded-md ${
                  location.pathname === value.link
                    ? "text-[#EC6707] after:!top-0 after:h-full bg-[#FEF8F3]"
                    : "text-black after:bg-white bg-white"
                } transition-all duration-300 ease-linear`}
              >
                {value.icon}
                <span className="hidden sm:block">{value.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
