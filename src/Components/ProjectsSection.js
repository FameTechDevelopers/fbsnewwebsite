import React from "react";
import { useState } from "react";
import MobileDevTemplate from "./MobileDevTemplate";
import WebDevTemplate from "./WebDevTemplate";
import DigitalMarketingTemplate from "./DigitalMarketingTemplate";
import AnimationTemplate from "./AnimationTemplate";
import GraphicsDesignTemplate from "./GraphicsDesignTemplate";

const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <div
        id="services"
        className=" md:w-[40%] mx-auto mt-20 flex items-center justify-center"
      >
        <h2 className=" text-center leading-10 font-bold text-[1.9rem]">
          From Innovative Mobile Apps to Dynamic E-Commerce Solutions and
          Beyond!
          {/* <hr className=" bg-black h-1 w-[50%] mt-3 mx-auto" /> */}
        </h2>
      </div>
      <div className=" w-[40%] mt-6 mb-12 mx-auto flex items-center justify-center">
        <p className="  text-center font-medium text-[18px]">
          At Fame Business Solutions, our experienced team specializes in
          all-inclusive app design and development services.
        </p>
      </div>
      <div className=" md:container pb-12 mx-auto px-8">
        <div className="flex flex-wrap justify-evenly md:px-4 px-0 py-4 md:mx-auto w-[100%] z-30 rounded-full">
          <button
            className={`${activeTab === 0 ? "bg-[#002244] text-white" : ""} 
             py-3 px-4 m-2 text-[14px]  lg:text-[18px] text-[#838383]`}
            type="button"
            onClick={() => {
              setActiveTab(0);
            }}
          >
            Mobile Development
          </button>
          <button
            className={`${activeTab === 1 ? " bg-[#002244]  text-white" : ""} 
        py-3 px-4 m-2 text-[14px]  lg:text-[18px] text-[#838383]`}
            type="button"
            onClick={() => {
              setActiveTab(1);
            }}
          >
            Web Development
          </button>
          <button
            className={`${activeTab === 2 ? "bg-[#002244]  text-white" : ""} 
        py-3 px-4 m-2 text-[14px]  lg:text-[18px] text-[#838383]`}
            type="button"
            onClick={() => {
              setActiveTab(2);
            }}
          >
            Digital Marketing
          </button>
          <button
            className={`${activeTab === 3 ? "  bg-[#002244]  text-white" : ""} 
        py-3 px-4 m-2 text-[14px]  lg:text-[18px] text-[#838383]`}
            type="button"
            onClick={() => {
              setActiveTab(3);
            }}
          >
            2D / 3D Animation
          </button>
          <button
            className={`${activeTab === 4 ? "  bg-[#002244]  text-white" : ""} 
        py-3 px-4 m-2 text-[14px]  lg:text-[18px] text-[#838383]`}
            type="button"
            onClick={() => {
              setActiveTab(4);
            }}
          >
            Graphic Design
          </button>
        </div>
        <div className=" px-16 ">
          {activeTab == 0 ? (
            <MobileDevTemplate />
          ) : activeTab == 1 ? (
            <WebDevTemplate />
          ) : activeTab == 2 ? (
            <DigitalMarketingTemplate />
          ) : activeTab == 3 ? (
            <AnimationTemplate />
          ) : activeTab == 4 ? (
            <GraphicsDesignTemplate />
          ) : null}
        </div>
      </div>
    </>
  );
};

export default ProjectsSection;
