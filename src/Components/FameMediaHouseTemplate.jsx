import Image from "next/image";
import Link from "next/link";
import React from "react";
import fameMedialogo from "@/assets/famewheels/fame-media-house.webp"; // adjust image path

const FameMediaHouseTemplate = () => {
  return (
    <>
      <div className="grid grid-cols-12 items-center mt-4 gap-4">
        {/* LEFT CONTENT */}
        <div className="md:col-span-8 col-span-12 md:pr-20">
          <h2 className="text-[26px] font-[500] mt-6 mb-2">
            Creative Film & Media Production with Cultural Impact
          </h2>

          <p className="mb-6 text-[14px] text-gray-500 leading-relaxed">
            We craft branded content, documentaries, and digital stories that
            resonate culturally and emotionally. Our team blends creativity,
            cinematic expertise, and strategy to deliver compelling narratives.
            <br />
            <br />
            From concept to post production, we help brands and creators produce
            visually stunning stories that engage audiences and leave a lasting
            impact.
            <br />
            <br />
            Partner with us to bring stories to life and create media content
            that inspires, entertains, and drives cultural relevance.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="md:col-span-4 col-span-12 flex justify-center md:justify-end">
          <Image
            className="md:w-[90%] mt-8 md:mt-0 rounded-2xl"
            src={fameMedialogo}
            alt="Fame Media Production"
            priority
          />
        </div>
      </div>
    </>
  );
};

export default FameMediaHouseTemplate;
