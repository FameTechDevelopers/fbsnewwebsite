import React from "react";
import { FaDotCircle } from "react-icons/fa";
import MobileDev from "../assets/Services/app-dev.jpg";
import Image from "next/image";
import { FaCheck } from "react-icons/fa6";
import Link from "next/link";

const MobileDevTemplate = () => {
  return (
    <div className="grid grid-cols-12 mt-4">
      <div className="col-span-8 pr-20">
        <h2 className="text-[26px] font-[500] mt-6 mb-2">
          Our App Development Service
        </h2>
        <p className=" font-medium mb-6 text-[16px]">
          Step into Fame Business Solutions, where innovation meets execution. As
          pioneers in app development, we specialize in crafting seamless
          digital experiences tailored to your unique vision. From concept to
          launch, our dedicated team combines cutting-edge technology with
          creative flair to bring your ideas to life. Join us on the journey to
          redefine possibilities and leave a lasting impact in the digital
          world.
        </p>
        <Link href="/services/mobile-dev" className=" bg-[#009fd4] text-white font-bold px-4 py-2 text-[18px]">
          View more
          </Link>
        {/* <div className=" pt-2">
          <div className="flex items-center my-2">
            <div className="bg-[#25a9e138] mr-5 rounded-full h-10 w-10 flex justify-center items-center p-2">
              <FaCheck className="text-[#25aae1] text-[18px]" />
            </div>
            <p className=" font-medium mb-6 text-[16px]">
              Requirement Analysis through a questionnaire
            </p>
          </div>
          <div className="flex items-center my-2">
            <div className="bg-[#25a9e138] mr-5 rounded-full h-10 w-10 flex justify-center items-center p-2">
              <FaCheck className="text-[#25aae1] text-[18px]" />
            </div>
            <p className=" font-medium mb-6 text-[16px]">
              Detailed Level of Efforts Estimate (for transparent costing)
            </p>
          </div>
          <div className="flex items-center my-2">
            <div className="bg-[#25a9e138] mr-5 rounded-full h-10 w-10 flex justify-center items-center p-2">
              <FaCheck className="text-[#25aae1] text-[18px]" />
            </div>{" "}
            <p className=" font-medium mb-6 text-[16px]">
              Prototype of App Design with Admin panel for KPI measurement
            </p>
          </div>
          <div className="flex items-center my-2">
            <div className="bg-[#25a9e138] mr-5 rounded-full h-10 w-10 flex justify-center items-center p-2">
              <FaCheck className="text-[#25aae1] text-[18px]" />
            </div>{" "}
            <p className=" font-medium mb-6 text-[16px]">
              Testing, Technical and milestone deliveries documents
            </p>
          </div>
          <div className="flex items-center my-2">
            <div className="bg-[#25a9e138] mr-5 rounded-full h-10 w-10 flex justify-center items-center p-2">
              <FaCheck className="text-[#25aae1] text-[18px]" />
            </div>{" "}
            <p className=" font-medium mb-6 text-[16px]">
              World class customer support
            </p>
          </div>
        </div> */}
      </div>
      <div className="col-span-4">
        <Image className=" w-[90%] ml-auto rounded-2xl" src={MobileDev} />
      </div>
    </div>
  );
};

export default MobileDevTemplate;
