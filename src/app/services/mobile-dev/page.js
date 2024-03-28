import React from "react";
import { CiMobile1 } from "react-icons/ci";
import mobileDev from "@/assets/app.png";
import Image from "next/image";
import { FaCheck } from "react-icons/fa6";
import { FaSwift } from "react-icons/fa";
import swift from "@/assets/our-services/Swift-Logo.jpg";
import objectC from "@/assets/our-services/objective-c-logo.png";
import swiftui from "@/assets/our-services/swiftui.png";
import reactNative from "@/assets/our-services/react.png";
import kotlin from "@/assets/our-services/kotlin.png";
import java from "@/assets/our-services/Java-Logo.png";

import flutter from "@/assets/our-services/Flutter.png";
import javascript from "@/assets/our-services/Javascript.png";
import typescript from "@/assets/our-services/typescript.png";
import Contact from "@/Sections/Contact";

const page = () => {
  return (
    <>
      <div className=" bg-[#002244] mobile-main pt-32 pb-48 relative flex flex-col justify-center items-center ">
        <div className=" w-[70%] ">
          <div className=" bg-[#25a9e138] mx-auto  rounded-full mb-12 flex justify-center items-center h-28 w-28">
            <CiMobile1 className=" text-[6rem] mx-auto text-white" />
          </div>
          <h2 className="text-center text-white leading-10 mb-12 font-bold text-[2.5rem]">
            Mobile Application Development
          </h2>
          <p className="text-[18px] text-white font-[500] text-center">
            Web development services have a wide range of tasks, from designing
            and building websites to developing and maintaining websites.Our
            skilled team designs, build and maintain websites to your unique
            needs. web development services can be beneficial for bussinesses of
            all sizes.
          </p>
        </div>
      </div>
      <div>
        {/* <Image src={mobileDev} className=" mt-[-232px] relative z-10" /> */}
        <div className=" md:w-[40%] mx-auto mt-20 flex items-center justify-center">
          <h2 className=" text-center leading-10 font-bold text-[2.5rem]">
            Our <span className=" text-[#009fd4] font-[800]">Expertise</span>
            <hr className=" bg-black h-1 w-[50%] mt-3 mx-auto" />
          </h2>
        </div>
        <div className=" w-[80%] mt-6 mb-12 mx-auto flex items-center justify-center">
          <p className=" text-center font-medium text-[18px]">
            Experience the expertise of a decade with Fame Business Solutions.
            Our diverse team of software designing and development industry
            connoisseurs provides comprehensive app designing and development
            services. You can trust us to deliver all-inclusive solutions
            tailored to your needs.
          </p>
        </div>
      </div>

      <div className="w-[80%] mx-auto grid grid-cols-12">
        <div className=" col-span-6">
          <Image className=" w-[100%] sticky top-24" src={mobileDev} />
        </div>
        <div className=" col-span-6 pl-20">
          <h2 className=" leading-10 mb-14 font-bold text-[2.5rem]">
            Our Process
            <hr className=" bg-black h-1 w-[150px] mt-3" />
          </h2>

          <div className=" flex mb-4">
            <div className="bg-[#25a9e138] mr-10 rounded-full h-10 w-10 flex justify-center items-center p-2">
              {/* <h2 className=" text-[20px] text-white font-bold">1</h2> */}
              <FaCheck className="text-[#25aae1] text-[18px]" />
            </div>
            <div className=" flex flex-col w-[360px]">
              <p className="font-medium text-[16px]">
                Custom iOS and Android apps development
              </p>
            </div>
          </div>
          <div className=" flex mb-4">
            <div className="bg-[#25a9e138] mr-10 rounded-full h-10 w-10 flex justify-center items-center p-2">
              <FaCheck className="text-[#25aae1] text-[18px]" />
            </div>
            <div className=" flex flex-col w-[360px]">
              <p className="font-medium text-[16px]">
                Native and cross-platform solutions
              </p>
            </div>
          </div>
          <div className=" flex mb-4">
            <div className="bg-[#25a9e138] mr-10 rounded-full h-10 w-10 flex justify-center items-center p-2">
              <FaCheck className="text-[#25aae1] text-[18px]" />
            </div>
            <div className=" flex flex-col w-[360px]">
              <p className="font-medium text-[16px]">
                Second platform app development
              </p>
            </div>
          </div>
          <div className=" flex mb-4">
            <div className="bg-[#25a9e138] mr-10 rounded-full h-10 w-10 flex justify-center items-center p-2">
              <FaCheck className="text-[#25aae1] text-[18px]" />
            </div>
            <div className=" flex flex-col w-[360px]">
              <p className="font-medium text-[16px]">UI/UX design</p>
            </div>
          </div>
          <div className=" flex mb-4">
            <div className="bg-[#25a9e138] mr-10 rounded-full h-10 w-10 flex justify-center items-center p-2">
              <FaCheck className="text-[#25aae1] text-[18px]" />
            </div>
            <div className=" flex flex-col w-[360px]">
              <p className="font-medium text-[16px]">
                Consulting and prototyping
              </p>
            </div>
          </div>
          <div className=" flex mb-4">
            <div className="bg-[#25a9e138] mr-10 rounded-full h-10 w-10 flex justify-center items-center p-2">
              <FaCheck className="text-[#25aae1] text-[18px]" />
            </div>
            <div className=" flex flex-col w-[360px]">
              <p className="font-medium text-[16px]">
                Automated QA and testing
              </p>
            </div>
          </div>
          <div className=" flex mb-4">
            <div className="bg-[#25a9e138] mr-10 rounded-full h-10 w-10 flex justify-center items-center p-2">
              <FaCheck className="text-[#25aae1] text-[18px]" />
            </div>
            <div className=" flex flex-col w-[360px]">
              <p className="font-medium text-[16px]">
                Power management, notification and geofencing
              </p>
            </div>
          </div>
          <div className=" flex mb-4">
            <div className="bg-[#25a9e138] mr-10 rounded-full h-10 w-10 flex justify-center items-center p-2">
              <FaCheck className="text-[#25aae1] text-[18px]" />
            </div>
            <div className=" flex flex-col w-[360px]">
              <p className="font-medium text-[16px]">
                Embedded Android & AOSP customizations
              </p>
            </div>
          </div>
          <div className=" flex mb-12">
            <div className="bg-[#25a9e138] mr-10 rounded-full h-10 w-10 flex justify-center items-center p-2">
              <FaCheck className="text-[#25aae1] text-[18px]" />
            </div>
            <div className=" flex flex-col w-[360px]">
              <p className="font-medium text-[16px]">
                Maintenance and post-warranty support
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="recognitions">
        <div className="recognitions w-[80%] mx-auto mt-16 mb-16 py-12">
          <h2 className=" text-white text-center leading-10 mb-10 font-bold text-[1.9rem]">
            Mobile development for various platforms
            <hr className=" bg-black h-1 mx-auto w-[40%] mt-3" />
          </h2>
          <div className="grid grid-cols-12">
            <div className=" col-span-3 m-8">
              <h2 className="text-white font-bold text-[22px]">
                Native Mobile App Development
              </h2>
              <p className=" text-white">
                Our mobile app developers can build high-quality native apps for
                both Android and iOS systems aligned with your business and
                security requirements.
              </p>
            </div>
            <div className=" col-span-3 m-8">
              <h2 className="text-white font-bold text-[22px]">
                Hybrid Mobile App Development
              </h2>
              <p className=" text-white">
                Cross-platform apps that can work in different environments
                thanks to a unique blend of native and web app technologies.
              </p>
            </div>
            <div className=" col-span-3 m-8">
              <h2 className="text-white font-bold text-[22px]">
                Progressive Web App Development
              </h2>
              <p className=" text-white">
                With Progressive Web Apps, we deliver native-like capabilities
                and installability while reaching anyone, anywhere, on any
                device with a single codebase.
              </p>
            </div>
            <div className=" col-span-3 m-8">
              <h2 className="text-white font-bold text-[22px]">
                Wearables and Embedded Software
              </h2>
              <p className=" text-white">
                We can create companion apps for a number of wearable devices,
                integrate with smart devices or proprietary peripherals.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className=" w-[80%] mx-auto">
        <div className=" md:w-[40%] mx-auto mt-20 flex items-center justify-center">
          <h2 className=" text-center leading-10 font-bold text-[2.5rem]">
            App development technologies
            <hr className=" bg-black h-1 w-[50%] mt-3 mx-auto" />
          </h2>
        </div>
        <div className=" w-[80%] mt-6 mb-12 mx-auto flex items-center justify-center">
          <p className=" text-center font-medium text-[18px]">
            Delight your users with expressive and feature-rich native iOS /
            Android, cross-platform or Progressive Web Apps leveraging our
            extensive experience of working with all major technologies.
          </p>
        </div>

        {/* ISO development */}
        <div className="w-[80%] mt-24 mx-auto grid grid-cols-12">
          <div className=" col-span-6">
            <h2 className="leading-10 font-bold text-[1.7rem]">
              iOS App Development
            </h2>
            <p className=" mt-2">
              We have all the expertise you need to produce fully-fledged,
              stable, and scalable mobile applications, including:
            </p>
            <div className=" flex my-6">
              <div className=" mr-8">
                <Image className=" w-28" src={swift} />
              </div>
              <div className=" mr-8">
                <Image className=" w-20" src={objectC} />
              </div>
              <div className=" mr-8">
                <Image className=" w-20" src={swiftui} />
              </div>
              <div className=" mr-8">
                <Image className=" w-20" src={reactNative} />
              </div>
            </div>
          </div>
          <div className=" col-span-6 mt-10 pl-20">
            <div className=" flex mb-4">
              <div className="bg-[#25a9e138] mr-10 rounded-full h-10 w-10 flex justify-center items-center p-2">
                {/* <h2 className=" text-[20px] text-white font-bold">1</h2> */}
                <FaCheck className="text-[#25aae1] text-[18px]" />
              </div>
              <div className=" flex flex-col w-[360px]">
                <p className="font-medium text-[18px]">
                  iPhone App Development
                </p>
              </div>
            </div>
            <div className=" flex mb-4">
              <div className="bg-[#25a9e138] mr-10 rounded-full h-10 w-10 flex justify-center items-center p-2">
                <FaCheck className="text-[#25aae1] text-[18px]" />
              </div>
              <div className=" flex flex-col w-[360px]">
                <p className="font-medium text-[18px]">iPad App Development</p>
              </div>
            </div>
            <div className=" flex mb-4">
              <div className="bg-[#25a9e138] mr-10 rounded-full h-10 w-10 flex justify-center items-center p-2">
                <FaCheck className="text-[#25aae1] text-[18px]" />
              </div>
              <div className=" flex flex-col w-[360px]">
                <p className="font-medium text-[18px]">
                  Apple Watch App Development
                </p>
              </div>
            </div>
            <div className=" flex mb-4">
              <div className="bg-[#25a9e138] mr-10 rounded-full h-10 w-10 flex justify-center items-center p-2">
                <FaCheck className="text-[#25aae1] text-[18px]" />
              </div>
              <div className=" flex flex-col w-[360px]">
                <p className="font-medium text-[18px]">
                  Apple TV App Development
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Android development */}
        <div className="w-[80%] mt-32 mx-auto grid grid-cols-12">
          <div className=" col-span-6">
            <h2 className="leading-10 font-bold text-[1.7rem]">
              Android App Development
            </h2>
            <p className=" mt-2">
              Using the latest technologies, we help businesses establish their
              presence on any modern device and platform, including:
            </p>
            <div className=" flex my-6">
              <div className=" mr-12">
                <Image className=" w-16" src={kotlin} />
              </div>
              <div className=" mr-8">
                <Image className=" w-10" src={java} />
              </div>
              <div className=" mr-8">
                <Image className=" w-20" src={reactNative} />
              </div>
            </div>
          </div>
          <div className=" col-span-6 mt-10 pl-20">
            <div className=" flex mb-4">
              <div className="bg-[#25a9e138] mr-10 rounded-full h-10 w-10 flex justify-center items-center p-2">
                {/* <h2 className=" text-[20px] text-white font-bold">1</h2> */}
                <FaCheck className="text-[#25aae1] text-[18px]" />
              </div>
              <div className=" flex flex-col w-[360px]">
                <p className="font-medium text-[18px]">
                  Android Mobile App Development
                </p>
              </div>
            </div>
            <div className=" flex mb-4">
              <div className="bg-[#25a9e138] mr-10 rounded-full h-10 w-10 flex justify-center items-center p-2">
                <FaCheck className="text-[#25aae1] text-[18px]" />
              </div>
              <div className=" flex flex-col w-[360px]">
                <p className="font-medium text-[18px]">
                  Android TV App Development
                </p>
              </div>
            </div>
            <div className=" flex mb-4">
              <div className="bg-[#25a9e138] mr-10 rounded-full h-10 w-10 flex justify-center items-center p-2">
                <FaCheck className="text-[#25aae1] text-[18px]" />
              </div>
              <div className=" flex flex-col w-[360px]">
                <p className="font-medium text-[18px]">
                  Apple Watch App Development
                </p>
              </div>
            </div>
            <div className=" flex mb-4">
              <div className="bg-[#25a9e138] mr-10 rounded-full h-10 w-10 flex justify-center items-center p-2">
                <FaCheck className="text-[#25aae1] text-[18px]" />
              </div>
              <div className=" flex flex-col w-[360px]">
                <p className="font-medium text-[18px]">
                  Android Tablet App Development
                </p>
              </div>
            </div>
            <div className=" flex mb-4">
              <div className="bg-[#25a9e138] mr-10 rounded-full h-10 w-10 flex justify-center items-center p-2">
                <FaCheck className="text-[#25aae1] text-[18px]" />
              </div>
              <div className=" flex flex-col w-[360px]">
                <p className="font-medium text-[18px]">
                  Android Wear App Development
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Cross platform development */}
        <div className="w-[80%] mt-32 mx-auto grid grid-cols-12 mb-16">
          <div className=" col-span-6">
            <h2 className="leading-10 font-bold text-[1.7rem]">
              Cross-platform App Development
            </h2>
            <p className=" mt-2">
              Get top-notch mobile applications that run on multiple platforms
              costs while providing your users with an app that fits their OS.
              Use this alternative to reduce costs and time-to-market and to
              reach more users without loss of quality, including:
            </p>
            <div className=" flex my-6">
              <div className=" mr-12">
                <Image className=" w-20" src={flutter} />
              </div>
              <div className=" mr-8">
                <Image className=" w-20" src={javascript} />
              </div>
              <div className=" mr-8">
                <Image className=" w-20" src={typescript} />
              </div>
              <div className=" mr-8">
                <Image className=" w-20" src={reactNative} />
              </div>
            </div>
          </div>
          <div className=" col-span-6 mt-10 pl-20">
            <div className=" flex mb-4">
              <div className="bg-[#25a9e138] mr-10 rounded-full h-10 w-10 flex justify-center items-center p-2">
                {/* <h2 className=" text-[20px] text-white font-bold">1</h2> */}
                <FaCheck className="text-[#25aae1] text-[18px]" />
              </div>
              <div className=" flex flex-col w-[360px]">
                <p className="font-medium text-[18px]">
                  Cross-browser Web App Development
                </p>
              </div>
            </div>
            <div className=" flex mb-4">
              <div className="bg-[#25a9e138] mr-10 rounded-full h-10 w-10 flex justify-center items-center p-2">
                <FaCheck className="text-[#25aae1] text-[18px]" />
              </div>
              <div className=" flex flex-col w-[360px]">
                <p className="font-medium text-[18px]">
                  Responsive Web App Development
                </p>
              </div>
            </div>
            <div className=" flex mb-4">
              <div className="bg-[#25a9e138] mr-10 rounded-full h-10 w-10 flex justify-center items-center p-2">
                <FaCheck className="text-[#25aae1] text-[18px]" />
              </div>
              <div className=" flex flex-col w-[360px]">
                <p className="font-medium text-[18px]">
                  Offline Web App Development
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" recognitions mb-16 py-24">
        <div className=" grid grid-cols-12 w-[80%] mx-auto">
          <div className="col-span-8 mx-auto flex items-center justify-center">
            <h2 className=" text-white leading-10 font-bold text-[2.2rem]">
              READY TO MAKE YOUR MOBILE APP MORE EFFECTIVE?
              <hr className=" bg-black h-1 w-[50%] mt-3" />
            </h2>
          </div>

          <div className="col-span-4 flex justify-center items-center">
            <button className=" bg-[#009fd4] text-white text-[20px] py-3 px-8">Talk to Us</button>
          </div>
        </div>
      </div>
      <Contact />
    </>
  );
};

export default page;
