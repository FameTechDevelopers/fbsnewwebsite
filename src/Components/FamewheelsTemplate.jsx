import Image from "next/image";
import Link from "next/link";
import React from "react";
import famelogo from "@/assets/famewheels/famewheels.webp";

const FamewheelsTemplate = () => {
  return (
    <>
      <div className="grid grid-cols-12 items-center mt-4 gap-4">
        <div className="md:col-span-8 col-span-12 md:pr-20">
          <h2 className="text-[26px] font-[500] mt-6 mb-2">
            Car Bidding Platform
          </h2>

          <p className=" mb-6 text-[14px] text-gray-500 leading-relaxed">
            Car bidding platform, created to revolutionize how vehicles are
            bought and sold nationwide. We offer a trust-driven ecosystem with
            real-time live auctions, ensuring fair pricing and complete
            transparency at every stage.
            <br />
            <br />
            Each vehicle goes through detailed professional inspections with
            verified condition reports, helping buyers make confident decisions.
            Combined with a smooth digital experience and smart financing
            options, our platform empowers buyers, dealers, and investors with
            reliability, clarity, and modern automotive solutions.
          </p>

          <Link
            target="_blank"
            href="https://www.famewheels.com"
            className="inline-block bg-[#009fd4] text-white font-semibold px-12 py-2 text-[14px] rounded-md hover:opacity-90 transition"
          >
            View more
          </Link>
        </div>

        <div className="md:col-span-4 col-span-12 flex justify-center md:justify-end">
          <Image
            className="md:w-[90%] mt-8 md:mt-0 rounded-2xl"
            src={famelogo}
            alt="Famewheels Car Bidding Platform"
            priority
          />
        </div>
      </div>
    </>
  );
};

export default FamewheelsTemplate;
