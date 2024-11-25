import React from "react";
import Image from "next/image";
import ProductImage1 from "../assets/famewheels/famewheelsBanner.png";
import Link from "next/link";

const FeaturedProduct = () => {
  return (
    <div className="featured-product mb-16 bg-gray-50">
      <div className=" md:w-[40%] mx-auto mt-20 flex items-center justify-center">
        <h2 className=" text-center leading-10 mb-4 font-bold md:text-[2.5rem] text-[1.8rem]">
          Featured <span className=" text-[#009fd4] font-[800]">Project</span>
          <hr className=" bg-black h-1 w-[50%] mt-3 mx-auto" />
        </h2>
      </div>
      <div className="grid grid-cols-12 w-[80%] mx-auto">
        {/* Text Column */}
        <div className="lg:col-span-6 col-span-12 flex flex-col justify-center">
          <h2 className="text-gray-800 font-bold text-[1.9rem] leading-tight mb-6">
            FameWheels: Revolutionizing the Automotive Industry
          </h2>
          <p className="text-gray-600 text-[16px] font-medium mb-6">
            Launched in Pakistan, FameWheels is reshaping the car buying and
            selling experience with cutting-edge technology. We’re expanding
            into UAE, North America, and Canada to bring seamless car solutions
            to a global audience. Whether it's live bidding, car inspections, or
            featured ads, FameWheels is your trusted partner in the automotive
            world.
          </p>
          <p className="text-gray-600 text-[16px] font-medium mb-6">
            Our platform offers comprehensive features tailored to meet the
            evolving demands of car buyers and sellers. Join us as we redefine
            how the world connects with vehicles.
          </p>
          <div>
            <Link
              href="https://www.famewheels.com"
              target="_blank"
              rel="noopener noreferrer"
              className=" bg-[#009fd4] text-white font-bold px-4 py-2 text-[18px]"
            >
              View more
            </Link>
          </div>
        </div>

        {/* Image Column */}
        <div className="lg:col-span-6 col-span-12 flex justify-center">
          <Image
            className="rounded-lg"
            src={ProductImage1}
            alt="FameWheels Banner"
            width={500}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;
