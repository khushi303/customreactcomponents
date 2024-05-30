import React from "react";
import profileLogo from '../assets/Images/png/profilelogo.png'

const DashboardHeader = () => {
  return (
    <div className="w-full lg:px-12 sm:px-7 px-4 lg:py-[20px] flex items-center justify-between sm:py-3.5 py-1.5">
      <p className="text-lg text-black sm:text-2xl lg:text-4xl text-bold">
        Hi Khushi
      </p>
      <div>
        <img src={profileLogo} alt="profileLogo" className="w-4 h-4 cursor-pointer lg:h-10 lg:w-10 sm:w-6 sm:h-6"/>
      </div>
    </div>
  );
};

export default DashboardHeader;
