import React from "react";
import { MdOutlineDesignServices } from "react-icons/md";

const page = () => {
  return (
    <>
      <div className=" bg-[#002244] mobile-main pt-32 pb-48 relative flex flex-col justify-center items-center ">
        <div className=" w-[70%] ">
          <div className=" bg-[#25a9e138] mx-auto  rounded-full mb-12 flex justify-center items-center h-28 w-28">
            <MdOutlineDesignServices className=" text-[5.2rem] mx-auto text-white" />
          </div>
          <h2 className="text-center text-white leading-10 mb-12 font-bold text-[2.5rem]">
            Graphics Design
          </h2>
          <p className="text-[18px] text-white font-[500] text-center">
            Transform your brand's identity with Fame Business Solutions'
            graphic design services. Our creative team crafts visually stunning
            designs that captivate your audience and elevate your brand presence
            across print and digital media.
          </p>
        </div>
      </div>
    </>
  );
};

export default page;
