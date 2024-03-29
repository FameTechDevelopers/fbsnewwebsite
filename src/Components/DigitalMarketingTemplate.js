import React from "react";
import { FaDotCircle } from "react-icons/fa";
import digitalMarketing from "../assets/Services/digital-marketing.jpg";
import Image from "next/image";
import Link from "next/link";

const DigitalMarketingTemplate = () => {
  return (
    <div className="grid grid-cols-12 mt-4">
      <div className=" col-span-8 pr-20">
        <h2 className="text-[26px] font-[500] mt-6 mb-2">
          Our Digital Marketing service encompasses
        </h2>
        <p className=" font-medium mb-6 text-[16px]">
          Dive into the world of digital marketing with Fame Business Solutions.
          We specialize in crafting impactful online strategies customized to
          your brand. From targeted campaigns to engaging content, our team
          leverages the latest tools and techniques to amplify your online
          presence. Let's navigate the digital landscape together and unlock new
          avenues for success.
        </p>
        <Link
          href="/services/digital-marketing"
          className=" bg-[#009fd4] text-white font-bold px-4 py-2 text-[18px]"
        >
          View more
        </Link>
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
