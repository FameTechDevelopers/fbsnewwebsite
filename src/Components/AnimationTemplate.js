import React from "react";
import { FaDotCircle } from "react-icons/fa";
import animation from "../assets/Services/animation.jpg";
import Image from "next/image";

const AnimationTemplate = () => {
  return (
    <div className=" grid grid-cols-12 mt-12">
      <div className=" col-span-8 pr-20">
        <h2 className=" text-[26px] font-[500] mt-12 mb-2">
          Our 2D/3D Animation service offers
        </h2>
        <div className=" flex flex-wrap justify-between pt-5">
          <div className="flex items-center my-2">
            <FaDotCircle className=" mr-3" />
            <p className=" text-[15px]">Creative Concept Development</p>
          </div>
          <div className="flex items-center my-2">
            <FaDotCircle className=" mr-3" />
            <p className=" text-[15px]">High-Quality Animation Production</p>
          </div>
          <div className="flex items-center my-2">
            <FaDotCircle className=" mr-3" />
            <p className=" text-[15px]">Customized Character Design</p>
          </div>
          <div className="flex items-center my-2">
            <FaDotCircle className=" mr-3" />
            <p className=" text-[15px]">Storyboarding and Scripting</p>
          </div>
          <div className="flex items-center my-2">
            <FaDotCircle className=" mr-3" />
            <p className=" text-[15px]">Post-Production Editing and Effects</p>
          </div>
        </div>
      </div>
      <div className="col-span-4">
        <Image className=" w-[90%] ml-auto rounded-2xl" src={animation} />
      </div>
    </div>
  );
};

export default AnimationTemplate;
