import React from "react";
import DashboardHeader from "../components/DashboardHeader";
import Navbar from "../components/Navbar";

const AccordionPage = () => {
  return (
    <div className="max-w-[1920px] mx-auto flex min-h-screen overflow-hidden">
      <Navbar />
      <div className="min-h-screen relative lg:w-[calc(100%-256px)] sm:w-[calc(100%-180px)] w-[calc(100%-60px)] ml-auto bg-white">
        <div className="lg:h-[85px] sm:h-[60px] h-[40px] bg-white">
          <DashboardHeader />
        </div>
        <div className="lg:max-h-[calc(100vh-85px)] content sm:max-h-[calc(100vh-60px)] max-h-[calc(100vh-40px)] w-full bg-[#F5F5F5] overflow-auto">
          <div className="lg:min-h-[calc(100vh-85px)] content sm:min-h-[calc(100vh-60px)] min-h-[calc(100vh-40px)]"></div>
        </div>
      </div>
    </div>
  );
};

export default AccordionPage;
