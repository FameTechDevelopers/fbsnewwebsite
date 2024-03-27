import React from "react";
import { MdScreenSearchDesktop } from "react-icons/md";
import { VscGithubAction } from "react-icons/vsc";
import { BsRocket } from "react-icons/bs";

const Process = () => {
  return (
    <div>
      <div className=" w-[90%] mx-auto relative my-6">
        <div className="grid grid-cols-12">
          <div className="col-span-12  m-2 rounded-3xl bg-[#009fd4] md:col-span-3 flex p-12 flex-col justify-center items-center">
            <MdScreenSearchDesktop className=" text-[86px] mb-1 text-white" />
            <h2 className=" text-center text-white leading-10 mb-2 font-bold text-[1.9rem]">
              Initial Phase
            </h2>
            <p className="leading-normal text-white mt-3 text-center text-[18px] md:text-[18px]">
              We listen to our clients to get the initial idea of the project.
              Then our creative teams join their head and polish it into a
              shining diamond.
            </p>
          </div>
          <div className="col-span-12  m-2 rounded-3xl bg-[#009fd4] md:col-span-3 flex p-12 flex-col justify-center items-center">
            <VscGithubAction className=" text-[86px] mb-1 text-white" />
            <h2 className=" text-center text-white leading-10 mb-2 font-bold text-[1.9rem]">
              Executive
            </h2>
            <p className="leading-normal text-white mt-3 text-center text-[18px] md:text-[18px]">
              We are equipped with skilled people and state-of-the-art rendering
              machines. Coming up with brilliant products is our habit.
            </p>
          </div>
          <div className="col-span-12  m-2 rounded-3xl bg-[#009fd4] md:col-span-3 flex p-12 flex-col justify-center items-center">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              class=" text-[92px] mx-auto mb-8 text-[#ffffff] group-hover:text-white"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M21 10.12h-6.78l2.74-2.82c-2.73-2.7-7.15-2.8-9.88-.1-2.73 2.71-2.73 7.08 0 9.79s7.15 2.71 9.88 0C18.32 15.65 19 14.08 19 12.1h2c0 1.98-.88 4.55-2.64 6.29-3.51 3.48-9.21 3.48-12.72 0-3.5-3.47-3.53-9.11-.02-12.58s9.14-3.47 12.65 0L21 3v7.12zM12.5 8v4.25l3.5 2.08-.72 1.21L11 13V8h1.5z"></path>
            </svg>
            <h2 className=" text-center text-white leading-10 mb-2 font-bold text-[1.9rem]">
              REVIEW & TEST
            </h2>
            <p className="leading-normal text-white mt-3 text-center text-[18px] md:text-[18px]">
              On-time delivery is our best service. Our healthy work environment
              ensures that you get your project handed over to you ASAP.
            </p>
          </div>
          <div className="col-span-12  m-2 rounded-3xl bg-[#009fd4] md:col-span-3 flex p-12 flex-col justify-center items-center">
            <BsRocket className=" text-[86px] mb-1 text-white" />
            <h2 className=" text-center text-white leading-10 mb-2 font-bold text-[1.9rem]">
              Delivery
            </h2>
            <p className="leading-normal text-white mt-3 text-center text-[18px] md:text-[18px]">
              On-time delivery is our best service. Our healthy work environment
              ensures that you get your project handed over to you ASAP.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
