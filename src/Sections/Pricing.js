import React from "react";
import { useState } from "react";
import WebsitePricing from "@/Components/WebsitePricing";


const Pricing = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div id="pricing" className=" md:container pb-16 mx-auto px-8">
      <h2 className=" text-center leading-10 font-bold text-[2.5rem]">
        Pricing
      </h2>
      <div className="  flex-col hidden md:flex justify-center  p-4 ml-auto font-bold items-center"></div>
      <div className="flex flex-wrap justify-evenly md:px-4 px-0 py-4 md:mx-auto w-[100%] z-30 rounded-full">
        <button
          className={`${
            activeTab === 0 ? "bg-[#002244] font-[poppins] text-white" : ""
          } 
             py-3 px-4 m-2 text-[14px] font-[poppins] lg:text-[18px] text-[#838383]`}
          type="button"
          onClick={() => {
            setActiveTab(0);
          }}
        >
          Website Development
        </button>
        <button
          className={`${
            activeTab === 1 ? " bg-[#002244] font-[poppins] text-white" : ""
          } 
        py-3 px-4 m-2 text-[14px] font-[poppins] lg:text-[18px] text-[#838383]`}
          type="button"
          onClick={() => {
            setActiveTab(1);
          }}
        >
          Mobile Development
        </button>
        <button
          className={`${
            activeTab === 2 ? "bg-[#002244] font-[poppins] text-white" : ""
          } 
        py-3 px-4 m-2 text-[14px] font-[poppins] lg:text-[18px] text-[#838383]`}
          type="button"
          onClick={() => {
            setActiveTab(2);
          }}
        >
          2D / 3D Animation
        </button>
        <button
          className={`${
            activeTab === 3
              ? "  bg-[#002244] font-[poppins] text-white"
              : ""
          } 
        py-3 px-4 m-2 text-[14px] font-[poppins] lg:text-[18px] text-[#838383]`}
          type="button"
          onClick={() => {
            setActiveTab(3);
          }}
        >
          Graphics Design
        </button>
      </div>
      <div className=" ">
        {activeTab == 0 ? (
          <WebsitePricing />
        ) : activeTab == 1 ? (
          <h2>Mobile Development</h2>
        ) : activeTab == 2 ? (
          <h2>Graphics</h2>
        ) : activeTab == 3 ? (
          <h2>Social Media</h2>
        ) : null}
      </div>
    </div>
  );
};

export default Pricing;
