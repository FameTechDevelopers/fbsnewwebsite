import React from "react";
import { MdOutlineDesignServices } from "react-icons/md";
import Image from "next/image";
import graphicsDesign from "@/assets/graphics-design-service.jpg";
import graphicCharacter from "@/assets/graphic-character.jpg";
import { FaCheck } from "react-icons/fa6";

const page = () => {
  return (
    <>
      <div className=" bg-[#002244] graphics-design pt-32 pb-48 relative flex flex-col justify-center items-center ">
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
      <div className="w-[80%] mt-20 mb-32 mx-auto grid grid-cols-12">
        <div className=" col-span-6">
          <h2 className=" leading-10 mb-4 font-bold text-[2.5rem]">
            What our Graphic Design Services Can Do For You
          </h2>
          <p className="font-medium mb-7 text-[18px] pr-24">
            In Pakistan, graphic design has become indispensable for effective
            marketing and branding. With the rise of social media and online
            presence, businesses of all sizes require a captivating visual
            identity to stand out. From logos to flyers and packaging, creative
            design plays a crucial role in attracting and retaining customers.
            At Brand Impact, we understand the significance of aesthetic design
            in professional marketing. Whether it's a logo or package design, we
            deliver top-notch graphic design services tailored to your needs."
            For the main banner of the website, you might consider something
            like: "Transform Your Brand with Captivating Graphic Design Services
            in Pakistan. Stand out in the competitive market with stunning
            logos, flyers, and packaging designs. Elevate your brand's identity
            and attract more customers with our expert graphic design solutions.
          </p>
        </div>
        <div className=" col-span-6 flex justify-center">
          <Image className=" w-[600px] object-cover" src={graphicsDesign} />
        </div>
      </div>

      <div className=" w-[80%] mx-auto grid grid-cols-12">
        <div className=" col-span-6 flex">
          <div>
            <Image className=" w-[560px]" src={graphicCharacter} />
          </div>
        </div>
        <div className=" col-span-6">
          <h2 className=" leading-10 mb-6 font-bold text-[2.5rem]">
            Design Solutions
            <hr className=" bg-black h-1 w-[150px] mt-3" />
          </h2>
          <p className="font-medium mb-7 text-[18px]">
            Transform your brand's visual identity with our expert graphic
            design services. From brochures to social media graphics, we craft
            impactful designs that engage your audience and drive results.
          </p>
          <div>
            <div className=" flex mb-4">
              <div className="bg-[#25a9e138] mr-10 rounded-full h-10 w-10 flex justify-center items-center p-2">
                {/* <h2 className=" text-[20px] text-white font-bold">1</h2> */}
                <FaCheck className="text-[#25aae1] text-[18px]" />
              </div>
              <div className=" flex flex-col w-[360px]">
                <p className="font-medium text-[16px]">
                  Engaging Brochure Designs
                </p>
              </div>
            </div>
            <div className=" flex mb-4">
              <div className="bg-[#25a9e138] mr-10 rounded-full h-10 w-10 flex justify-center items-center p-2">
                <FaCheck className="text-[#25aae1] text-[18px]" />
              </div>
              <div className=" flex flex-col w-[360px]">
                <p className="font-medium text-[16px]">
                  Professional Business Card Creations
                </p>
              </div>
            </div>
            <div className=" flex mb-4">
              <div className="bg-[#25a9e138] mr-10 rounded-full h-10 w-10 flex justify-center items-center p-2">
                <FaCheck className="text-[#25aae1] text-[18px]" />
              </div>
              <div className=" flex flex-col w-[360px]">
                <p className="font-medium text-[16px]">
                  Polished Publication Services
                </p>
              </div>
            </div>
            <div className=" flex mb-4">
              <div className="bg-[#25a9e138] mr-10 rounded-full h-10 w-10 flex justify-center items-center p-2">
                <FaCheck className="text-[#25aae1] text-[18px]" />
              </div>
              <div className=" flex flex-col w-[360px]">
                <p className="font-medium text-[16px]">
                  Custom Mailer Campaigns
                </p>
              </div>
            </div>
            <div className=" flex mb-4">
              <div className="bg-[#25a9e138] mr-10 rounded-full h-10 w-10 flex justify-center items-center p-2">
                <FaCheck className="text-[#25aae1] text-[18px]" />
              </div>
              <div className=" flex flex-col w-[360px]">
                <p className="font-medium text-[16px]">
                  Attention-Grabbing Poster Designs
                </p>
              </div>
            </div>
            <div className=" flex mb-4">
              <div className="bg-[#25a9e138] mr-10 rounded-full h-10 w-10 flex justify-center items-center p-2">
                <FaCheck className="text-[#25aae1] text-[18px]" />
              </div>
              <div className=" flex flex-col w-[360px]">
                <p className="font-medium text-[16px]">
                  Dynamic Social Media Branding
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
