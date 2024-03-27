import React from "react";
import { FaDotCircle } from "react-icons/fa";
import digitalMarketing from "../assets/Services/digital-marketing.jpg";
import Image from "next/image";

const DigitalMarketingTemplate = () => {
  return (
    <div className=" grid grid-cols-12 mt-12">
      <div className=" col-span-8 pr-20">
        <h2 className=" text-[26px] font-[500] mt-12 mb-2">
          Our Digital Marketing service encompasses
        </h2>
        <div className=" flex flex-wrap justify-between pt-5">
          <div className="flex items-center my-2">
            <FaDotCircle className=" mr-3" />
            <p className=" text-[15px]">In-depth Market Analysis</p>
          </div>
          <div className="flex items-center my-2">
            <FaDotCircle className=" mr-3" />
            <p className=" text-[15px]">Customized Strategy Development</p>
          </div>
          <div className="flex items-center my-2">
            <FaDotCircle className=" mr-3" />
            <p className=" text-[15px]">Targeted Campaign Execution</p>
          </div>
          <div className="flex items-center my-2">
            <FaDotCircle className=" mr-3" />
            <p className=" text-[15px]">Performance Tracking and Analytics</p>
          </div>
          <div className="flex items-center my-2">
            <FaDotCircle className=" mr-3" />
            <p className=" text-[15px]">Continuous Optimization and Support</p>
          </div>
        </div>
      </div>
      <div className="col-span-4">
        <Image
          className=" w-[90%] ml-auto rounded-2xl"
          src={digitalMarketing}
        />
      </div>
    </div>
  );
};

export default DigitalMarketingTemplate;
