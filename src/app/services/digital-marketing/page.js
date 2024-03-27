import React from "react";
import { CiBullhorn } from "react-icons/ci";

const page = () => {
  return (
    <>
      <div className=" bg-[#002244] mobile-main pt-32 pb-48 relative flex flex-col justify-center items-center ">
        <div className=" w-[70%] ">
          <div className=" bg-[#25a9e138] mx-auto  rounded-full mb-12 flex justify-center items-center h-28 w-28">
            <CiBullhorn className=" text-[6rem] mx-auto text-white" />
          </div>
          <h2 className="text-center text-white leading-10 mb-12 font-bold text-[2.5rem]">
            Digital Marketing
          </h2>
          <p className="text-[18px] text-white font-[500] text-center">
            Our skilled team at Fame Business Solutions specializes in digital
            marketing services tailored to your unique needs. From strategizing
            and executing campaigns to ongoing management, we ensure maximum
            effectiveness for businesses of all sizes.
          </p>
        </div>
      </div>
    </>
  );
};

export default page;
