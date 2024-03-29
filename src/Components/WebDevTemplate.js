import React from "react";
import { FaDotCircle } from "react-icons/fa";
import webDev from "../assets/Services/web-dev.jpg";
import Image from "next/image";
import { FaCheck } from "react-icons/fa6";
import Link from "next/link";
const WebDevTemplate = () => {
  return (
    <div className="grid grid-cols-12 mt-4">
      <div className=" col-span-8 pr-20">
        <h2 className=" text-[26px] font-[500] mt-6 mb-2">
          Our Web development service covers everything you need
        </h2>

        <p className=" font-medium mb-6 text-[16px]">
          Experience the forefront of web development with Fame Business Solutions.
          Our team pioneers seamless online experiences tailored to your vision.
          From concept to launch, we merge cutting-edge technology with creative
          expertise to actualize your digital dreams. Join us as we redefine the
          online landscape, one website at a time.
        </p>
        <Link href="/services/web-dev" className=" bg-[#009fd4] text-white font-bold px-4 py-2 text-[18px]">
          View more
          </Link>
      </div>
      <div className="col-span-4">
        <Image className=" w-[90%] ml-auto rounded-2xl" src={webDev} />
      </div>
    </div>
  );
};

export default WebDevTemplate;
