import React from "react";
import { FaDotCircle } from "react-icons/fa";
import webDev from "../assets/Services/web-dev.jpg";
import Image from "next/image";

const WebDevTemplate = () => {
  return (
    <div className="grid grid-cols-12 mt-12">
      <div className=" col-span-8 pr-20">
        <h2 className=" text-[26px] font-[500] mt-12 mb-5">
          Our Web development service covers everything you need
        </h2>

        <div className=" flex flex-wrap justify-between pt-2">
          <div className="flex items-center my-2">
            <FaDotCircle className=" mr-3" />
            <p className=" text-[15px]">Thorough Requirement Analysis</p>
          </div>
          <div className="flex items-center my-2">
            <FaDotCircle className=" mr-3" />
            <p className=" text-[15px]">Transparent Costing Estimates</p>
          </div>
          <div className="flex items-center my-2">
            <FaDotCircle className=" mr-3" />
            <p className=" text-[15px]">
              Prototyping and Design with Admin Panel
            </p>
          </div>
          <div className="flex items-center my-2">
            <FaDotCircle className=" mr-3" />
            <p className=" text-[15px]">
              Rigorous Testing and Milestone Documentation
            </p>
          </div>
          <div className="flex items-center my-2">
            <FaDotCircle className=" mr-3" />
            <p className=" text-[15px]">World class customer support</p>
          </div>
          <div className="flex items-center my-2">
            <FaDotCircle className=" mr-3" />
            <p className=" text-[15px]">
              Continuous World-Class Customer Support
            </p>
          </div>
        </div>
      </div>
      <div className="col-span-4">
        <Image className=" w-[90%] ml-auto rounded-2xl" src={webDev} />
      </div>
    </div>
  );
};

export default WebDevTemplate;
