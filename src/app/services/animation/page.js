import React from "react";
import sapparow from "@/assets/sparrow-animation.jpg"
import { MdMovieEdit } from "react-icons/md";
import Image from "next/image";

const page = () => {
  return (
    <>
      <div className=" bg-[#002244] animation pt-32 pb-48 relative flex flex-col justify-center items-center ">
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

      <div className="w-[80%] mt-20 mx-auto grid grid-cols-12">
        <div className=" col-span-6">
          <h2 className=" leading-10 mb-4 font-bold text-[2.5rem]">Turning Your Ideas Into Visuals</h2>
          <p className="font-medium text-[18px]">
            Anideos is a full-package 3D animation agency that can be your go-to
            partner for creating high-quality 3D animations. Together with our
            creativity and lifelike visuals, we help you connect with your
            audience emotionally and propel your business to new heights of
            success.
          </p>
        </div>
        <div className=" col-span-6 flex justify-center">
          <Image className=" w-[550px]" src={sapparow} />
        </div>
      </div>
    </>
  );
};

export default page;
