import React from "react";
import Image from "next/image";
import mock from "../assets/mock-png.png";
import { BsTelephoneOutbound } from "react-icons/bs";
import { FaRegAddressBook } from "react-icons/fa";
import { FaRegPaperPlane } from "react-icons/fa";


const Footer = () => {
  return (
    <div className=" relative z-[999] mt-[420px]">
      <svg
        className="footer-bg-blue absolute bottom-0 d-none d-lg-block"
        viewBox="0 0 1440 405"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M764 177.961C551 -15.4529 138.667 -26.0393 0 29.9607V443.961H1440V231C1330.67 252.333 1042.4 430.761 764 177.961Z"
          fill="#002244"
        ></path>
      </svg>

      <div className=" absolute bottom-0 right-48 w-[350px] m-0">
        <div className="bg-slate-600 h-9 w-[285px] top-7 text-white z-[-99] left-8 absolute"></div>
        <div className="newsletter-container px-6 pt-8 absolute z-[99] top-16 left-8 w-[285px] bg-slate-600">
          <h2 className=" text-white font-bold text-[28px]">
            Subscribe to our newsletter
          </h2>
          <p className=" text-white text-[18px] mt-4 mb-5">
            Most newsletters suck — but this isn’t 'industry standards' and
            'best practices' — only the real stuff that moves the needle.
          </p>

          <div className=" relative z-[1000]">
            <input type="text" className=" w-full p-3 rounded-full bg-white" />

            <button className=" bg-[#7ed6f3] text-[18px] mt-6 px-6 py-3 rounded-full text-black">
              Subscribe
            </button>
          </div>
        </div>
        <div className="bg-slate-600 w-[285px] bottom-0 h-[80%] z-[-99] left-8 absolute">
          s
        </div>
        <Image className=" w-full relative z-[-44]" src={mock} />
      </div>

      <div className=" w-[70%] pb-48 mx-auto">
        <footer className="">
          <div>
            <ul class=" relative font-medium">
              <li class="mb-8 text-[20px] flex items-center">
                <BsTelephoneOutbound  className="text-[#7ed6f3] text-[36px] mr-2" />
                <a href="#" class="font-[400] text-white ">
                  +923338539146
                </a>
              </li>
              <li class="mb-8 text-[20px] flex items-center">
                <FaRegAddressBook className="text-[#7ed6f3] text-[36px] mr-2" />
                <a href="#" class="font-[400] text-white">
                  Office # 214, 2nd floor, The plaza <br /> shopping center,
                  Clifton Block 9, Karachi
                </a>
              </li>
              <li class="text-[20px] flex items-center">
                <FaRegPaperPlane className="text-[#7ed6f3] text-[36px] mr-2" />
                <a href="#" class="font-[400] text-white">
                  info@famebusinesssolutions.com
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
