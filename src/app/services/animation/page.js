import React from "react";
import { MdMovieEdit } from "react-icons/md";

const page = () => {
  return (
    <>
      <div className=" bg-[#002244] mobile-main pt-32 pb-48 relative flex flex-col justify-center items-center ">
        <div className=" w-[70%] ">
          <div className=" bg-[#25a9e138] mx-auto  rounded-full mb-12 flex justify-center items-center h-28 w-28">
            <MdMovieEdit className=" text-[5.2rem] mx-auto text-white" />
          </div>
          <h2 className="text-center text-white leading-10 mb-12 font-bold text-[2.5rem]">
            2D / 3D Animation
          </h2>
          <p className="text-[18px] text-white font-[500] text-center">
            Elevate your brand with Fame Business Solutions' 2D and 3D animation
            services. Our team creates captivating visuals that leave a lasting
            impression on your audience, whether for promotional videos or brand
            storytelling.
          </p>
        </div>
      </div>
    </>
  );
};

export default page;
