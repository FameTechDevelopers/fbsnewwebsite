import React from "react";
import { useState } from "react";
import WebDevProjects from "@/Components/WebDevProjects";
import MobDevProjects from "@/Components/MobDevProjects";
import AnimationProjects from "@/Components/AnimationProjects";
import LogoDesignProjects from "@/Components/LogoDesignProjects";

const Portofolio = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <div id="projects" className=" mt-14 mb-32">
        <div className=" md:w-[40%] mx-auto mt-20 flex items-center justify-center">
          <h2 className=" text-center leading-10 font-bold text-[2.5rem]">
            Our <span className=" text-[#009fd4] font-[800]">Work</span>
            <hr className=" bg-black h-1 w-[50%] mt-3 mx-auto" />
          </h2>
        </div>
        <div className=" w-[80%] mt-6 mb-12 mx-auto flex items-center justify-center">
          <p className=" text-center font-medium text-[18px]">
            Empowering positive change, One client at a time
          </p>
        </div>
        <div className="grid grid-cols-12 w-full mx-auto">
          <div className=" col-span-3">
            <div className="flex flex-col flex-wrap justify-evenly md:px-4 px-0 py-4 md:mx-auto w-[100%] mb-12 z-30 rounded-full">
              <button
                className={`${activeTab === 0 ? "bg-[#002244] text-white" : ""} 
              py-3 px-4 m-2 text-[14px] lg:text-[18px]`}
                type="button"
                onClick={() => {
                  setActiveTab(0);
                }}
              >
                Web Development
              </button>
              <button
                className={`${activeTab === 1 ? "bg-[#002244] text-white" : ""} 
              py-3 px-4 m-2 text-[14px] lg:text-[18px]`}
                type="button"
                onClick={() => {
                  setActiveTab(1);
                }}
              >
                Mobile Development
              </button>

              <button
                className={`${activeTab === 2 ? "bg-[#002244] text-white" : ""} 
                py-3 px-4 m-2 text-[14px] lg:text-[18px]`}
                type="button"
                onClick={() => {
                  setActiveTab(2);
                }}
              >
                2D / 3D Animation
              </button>

              <button
                className={`${activeTab === 3 ? "bg-[#002244] text-white" : ""} 
              py-3 px-4 m-2 text-[14px] lg:text-[18px]`}
                type="button"
                onClick={() => {
                  setActiveTab(3);
                }}
              >
                Graphics Design
              </button>
            </div>
          </div>
          <div className=" h-[80vh] col-span-9 overflow-y-scroll">
            {activeTab == 0 ? (
              <WebDevProjects setActiveTab={setActiveTab} />
            ) : activeTab == 1 ? (
              <MobDevProjects setActiveTab={setActiveTab} />
            ) : activeTab == 2 ? (
              <AnimationProjects setActiveTab={setActiveTab} />
            ) : activeTab == 3 ? (
              <LogoDesignProjects setActiveTab={setActiveTab} />
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Portofolio;
