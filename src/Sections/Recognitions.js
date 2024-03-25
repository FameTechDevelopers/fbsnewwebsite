import React from "react";
import Image from "next/image";
import fbr from "../assets/Recognition/fbr.PNG";
import pash from "../assets/Recognition/pash.webp";
import psb from "../assets/Recognition/pseb.PNG";
import sepLogo from "../assets/Recognition/sep-logo.webp";
import trustPilot from "../assets/Recognition/topRated2.png";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
const Recognitions = () => {
  return (
    <div className=" recognitions  my-16 py-12">
      <div className=" grid grid-cols-12 w-[80%] mx-auto">
        <div className="col-span-6 mx-auto flex items-center justify-center">
          <h2 className=" text-white leading-10 mb-10 font-bold text-[1.9rem]">
            Get top-rated and Industry recognized professionals for your
            project!
            <hr className=" bg-black h-1 w-[50%] mt-3" />
          </h2>
        </div>

        <div className="col-span-6">
          <div className=" flex justify-center items-center">
            <div className=" m-2 ">
              <div className="bg-white flex mx-auto justify-center rounded-full items-center h-32 w-32">
                <Image className="w-[120px] mx-auto mb-4" src={fbr} />
              </div>
            </div>
            <div className=" m-2">
              <div className="bg-white flex mx-auto justify-center rounded-full items-center h-32 w-32">
                <Image className="w-[110px] mx-auto" src={pash} />
              </div>
            </div>
          </div>

          <div className=" flex justify-center items-center">
            <div className=" m-2">
              <div className="bg-white flex mx-auto justify-center rounded-full items-center h-32 w-32">
                <Image className="w-[75px] mx-auto" src={psb} />
              </div>
            </div>
            <div className=" m-2">
              <div className="bg-white flex mx-auto justify-center rounded-full items-center h-32 w-32">
                <Image className="w-[78px] mx-auto" src={sepLogo} />
              </div>
            </div>
            <div className=" m-2">
              <div className="bg-white flex mx-auto justify-center rounded-full items-center h-32 w-32">
                <Image className="w-[120px] mx-auto" src={trustPilot} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recognitions;
