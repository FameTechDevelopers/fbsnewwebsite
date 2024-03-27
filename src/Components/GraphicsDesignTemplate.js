"use client";

import React from "react";
import { FaDotCircle } from "react-icons/fa";
import graphicsDesign from "../assets/Services/graphics-design.jpg";
import Image from "next/image";

const GraphicsDesignTemplate = () => {
  return (
    <div className=" grid grid-cols-12 mt-12">
      <div className=" col-span-8 pr-20">
        <h2 className=" text-[26px] font-[500] mt-12 mb-2">
          Our Graphic Design service provides
        </h2>
        <div className=" flex flex-wrap justify-between pt-5">
          <div className="flex items-center my-2">
            <FaDotCircle className=" mr-3" />
            <p className=" text-[15px]">Creative Conceptualization</p>
          </div>
          <div className="flex items-center my-2">
            <FaDotCircle className=" mr-3" />
            <p className=" text-[15px]">Customized Visual Identity Design</p>
          </div>
          <div className="flex items-center my-2">
            <FaDotCircle className=" mr-3" />
            <p className=" text-[15px]">Branding and Logo Creation</p>
          </div>
          <div className="flex items-center my-2">
            <FaDotCircle className=" mr-3" />
            <p className=" text-[15px]">Print and Digital Media Design</p>
          </div>
          <div className="flex items-center my-2">
            <FaDotCircle className=" mr-3" />
            <p className=" text-[15px]">Revision and Finalization Support</p>
          </div>
        </div>
      </div>
      <div className="col-span-4">
        <Image className=" w-[90%] ml-auto rounded-2xl" src={graphicsDesign} />
      </div>
    </div>
  );
};

export default GraphicsDesignTemplate;
