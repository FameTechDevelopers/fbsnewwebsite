import React from "react";
import { FaDotCircle } from "react-icons/fa";
import animation from "../assets/Services/animation.jpg";
import Image from "next/image";
import Link from "next/link";

const AnimationTemplate = () => {
  return (
    <div className=" grid grid-cols-12 mt-4">
      <div className=" md:col-span-8 col-span-12 md:pr-20">
        <h2 className=" text-[26px] font-[500] mt-6 mb-2">
          Our 2D/3D Animation service offers
        </h2>
        <p className="font-medium mb-6 text-[16px]">
          Enter the realm of animation excellence with Fame Business Solutions. From
          captivating 3D masterpieces to engaging 2D animations, we bring
          stories to life with creativity and precision. Our team of skilled
          animators and designers craft immersive experiences that captivate
          audiences and leave a lasting impression. Join us as we animate the
          extraordinary and push the boundaries of imagination.
        </p>
        <Link
          href="/services/animation"
          className=" bg-[#009fd4] text-white font-bold px-4 py-2 text-[18px]"
        >
          View more
        </Link>
      </div>
      <div className="md:col-span-4 col-span-12">
        <Image className=" md:w-[90%] ml-auto md:mt-0 mt-8 rounded-2xl" src={animation} />
      </div>
    </div>
  );
};

export default AnimationTemplate;
