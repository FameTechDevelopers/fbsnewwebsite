import React from "react";
import { useState } from "react";
import MobileDevTemplate from "./MobileDevTemplate";
import WebDevTemplate from "./WebDevTemplate";
import DigitalMarketingTemplate from "./DigitalMarketingTemplate";
import AnimationTemplate from "./AnimationTemplate";
import GraphicsDesignTemplate from "./GraphicsDesignTemplate";
import FamewheelsTemplate from "./FamewheelsTemplate";
import FameHealthcareTemplate from "./FameHealthCareTemplate";
import FameMediaHouseTemplate from "./FameMediaHouseTemplate";
import FameEliteTaxationTemplate from "./FameEliteTaxationTemplate";
import FameHRTemplate from "./FameHRTemplate";
import FameOilAndGasTemplate from "./FameOilAndGasTemplate";

const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <div
        id="services"
        className=" md:w-[40%] mx-auto px-10 mt-20 flex items-center justify-center"
      >
        <h2 className="text-center leading-10 font-bold md:text-[1.7rem] text-[1.5rem]">
          Powering Multiple Ventures Through Innovation, Technology, and
          Expertise
        </h2>
      </div>
      <div className=" md:w-[40%] px-10 mt-6 mb-12 mx-auto flex items-center justify-center">
        <p className="text-center text-gray-500  text-[14px]">
          At Fame Group, we build and scale diverse ventures across technology,
          healthcare, media, finance, HR, and automotive industries delivering
          smart solutions that drive growth, efficiency, and long term impact.
        </p>
      </div>
      <div className=" md:container pb-12 mx-auto px-8">
        <div className="flex flex-wrap justify-evenly md:px-4 px-0 py-4 md:mx-auto w-[100%] z-30 rounded-full">
          <button
            className={`${activeTab === 0 ? "bg-[#002244] text-white" : ""} 
             py-3 px-4 m-2 text-[14px] rounded-md  lg:text-[18px] text-[#838383]`}
            type="button"
            onClick={() => {
              setActiveTab(0);
            }}
          >
            FameWheels
          </button>
          <button
            className={`${activeTab === 1 ? " bg-[#002244]  text-white" : ""} 
        py-3 px-4 m-2 text-[14px] rounded-md  lg:text-[18px] text-[#838383]`}
            type="button"
            onClick={() => {
              setActiveTab(1);
            }}
          >
            Fame HR
          </button>
          <button
            className={`${activeTab === 2 ? "bg-[#002244]  text-white" : ""} 
        py-3 px-4 m-2 text-[14px] rounded-md  lg:text-[18px] text-[#838383]`}
            type="button"
            onClick={() => {
              setActiveTab(2);
            }}
          >
            Fame HealthCare
          </button>
          <button
            className={`${activeTab === 3 ? "  bg-[#002244]  text-white" : ""} 
        py-3 px-4 m-2 text-[14px] rounded-md  lg:text-[18px] text-[#838383]`}
            type="button"
            onClick={() => {
              setActiveTab(3);
            }}
          >
            Fame Media House
          </button>
          <button
            className={`${activeTab === 4 ? "  bg-[#002244]  text-white" : ""} 
        py-3 px-4 m-2 text-[14px] rounded-md  lg:text-[18px] text-[#838383]`}
            type="button"
            onClick={() => {
              setActiveTab(4);
            }}
          >
            Elite Taxation
          </button>
          <button
            className={`${activeTab === 5 ? "  bg-[#002244]  text-white" : ""} 
        py-3 px-4 m-2 text-[14px] rounded-md  lg:text-[18px] text-[#838383]`}
            type="button"
            onClick={() => {
              setActiveTab(5);
            }}
          >
            Fame Oil & Gas
          </button>
        </div>
        <div className=" md:px-16 px-6 ">
          {activeTab == 0 ? (
            // <MobileDevTemplate />
            <FamewheelsTemplate />
          ) : activeTab == 1 ? (
            // <WebDevTemplate />
            <FameHRTemplate />
          ) : activeTab == 2 ? (
            // <DigitalMarketingTemplate />
            <FameHealthcareTemplate />
          ) : activeTab == 3 ? (
            // <AnimationTemplate />
            <FameMediaHouseTemplate />
          ) : activeTab == 4 ? (
            // <AnimationTemplate />
            <FameEliteTaxationTemplate />
          ) : activeTab == 5 ? (
            // <GraphicsDesignTemplate />
            <FameOilAndGasTemplate />
          ) : null}
        </div>
      </div>
    </>
  );
};

export default ProjectsSection;
