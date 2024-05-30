import React from "react";
import { Link, useLocation } from "react-router-dom";
import { navTabs } from "./common/Helper";

const Navbar = () => {
  const location = useLocation();
  return (
    <>
      <div
        className={` z-50 content lg:w-[256px] sm:w-[180px] w-[60px] transition-all duration-300 ease-linear h-screen overflow-y-scroll bg-white`}
      >
        <h2 className="hidden pl-4 font-bold py-7 lg:text-2xl sm:text-xl lg:pl-7 sm:block">
          My Dashboard
        </h2>
        <div className="">
          <div className="relative z-50 flex flex-col w-full gap-5 pt-2">
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
