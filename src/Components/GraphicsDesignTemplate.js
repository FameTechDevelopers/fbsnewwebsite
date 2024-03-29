"use client";

import React from "react";
import { FaDotCircle } from "react-icons/fa";
import graphicsDesign from "../assets/Services/graphics-design.jpg";
import Image from "next/image";
import Link from "next/link";

const GraphicsDesignTemplate = () => {
  return (
    <div className="grid grid-cols-12 mt-4">
      <div className=" col-span-8 pr-20">
        <h2 className="text-[26px] font-[500] mt-6 mb-2">
          Our Graphic Design service provides
        </h2>
        <p className="font-medium mb-6 text-[16px]">
          Immerse yourself in the world of visual storytelling with Fame Business Solutions. Our graphic design services are your gateway to
          stunning visuals that captivate and inspire. From eye-catching logos
          to impactful branding, our team combines creativity with expertise to
          elevate your brand to new heights. Join us as we transform your ideas
          into unforgettable designs that make a statement.
        </p>
        <Link
          href="/services/graphics"
          className=" bg-[#009fd4] text-white font-bold px-4 py-2 text-[18px]"
        >
          View more
        </Link>
      </div>
      <div className="col-span-4">
        <Image className=" w-[90%] ml-auto rounded-2xl" src={graphicsDesign} />
      </div>
    </div>
  );
};

export default GraphicsDesignTemplate;
