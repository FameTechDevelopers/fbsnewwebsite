import React from "react";
import webmock from "@/assets/Service-mocks/webmock.webp";
import Image from "next/image";
import webmock2 from "@/assets/Service-mocks/img-mockup.PNG";
import { MdWeb } from "react-icons/md";
import { MdScreenSearchDesktop } from "react-icons/md";
import { VscGithubAction } from "react-icons/vsc";
import { BsRocket } from "react-icons/bs";

const page = () => {
  return (
    <>
      <div className=" bg-[#002244] service-main pt-32 pb-48 relative flex flex-col justify-center items-center ">
        <div className=" w-[70%] ">
          <div className=" bg-[#25aae1] mx-auto  rounded-full mb-12 flex justify-center items-center h-28 w-28">
            <MdWeb className=" text-[6rem] mx-auto text-white" />
          </div>
          <h2 className="text-center text-white leading-10 mb-12 font-bold text-[2.5rem]">
            Web Development
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
        <Image src={webmock} className=" mt-[-232px] relative z-10" />
      </div>
      <div className=" my-4">
        {/* <div className=" w-[80%] mt-4 mb-12 mx-auto flex items-center justify-center">
          <p className=" text-center font-medium text-[18px]">
            Empowering positive change, One client at a time
          </p>
        </div> */}

        <div className="w-[80%] mx-auto grid grid-cols-12">
          <div className=" col-span-6">
            <Image className=" w-[100%] sticky top-24" src={webmock2} />
          </div>
          <div className=" col-span-6 pl-20">
            <h2 className=" leading-10 mb-14 font-bold text-[2.5rem]">
              Our Process
              <hr className=" bg-black h-1 w-[150px] mt-3" />
            </h2>

            <div className=" flex mb-12">
              <div className="bg-[#25aae1] mr-10 rounded-full h-10 w-10 flex justify-center items-center p-2">
                <h2 className=" text-[20px] text-white font-bold">1</h2>
              </div>
              <div className=" flex flex-col w-[360px]">
                <h2 className=" text-[20px] mb-3 font-bold">Planning</h2>
                <p className="font-medium text-[16px]">
                  Understand what you want out of your site and how do you plan
                  to implement it.
                </p>
              </div>
            </div>
            <div className=" flex mb-12">
              <div className="bg-[#25aae1] mr-10 rounded-full h-10 w-10 flex justify-center items-center p-2">
                <h2 className=" text-[20px] text-white font-bold">2</h2>
              </div>
              <div className=" flex flex-col w-[360px]">
                <h2 className=" text-[20px] mb-3 font-bold">Development</h2>
                <p className="font-medium text-[16px]">
                  We provide web development in Lahore with content management
                  systems for clients who need more than just the basics.
                </p>
              </div>
            </div>
            <div className=" flex mb-12">
              <div className="bg-[#25aae1] mr-10 rounded-full h-10 w-10 flex justify-center items-center p-2">
                <h2 className=" text-[20px] text-white font-bold">3</h2>
              </div>
              <div className=" flex flex-col w-[360px]">
                <h2 className=" text-[20px] mb-3 font-bold">Review & Test</h2>
                <p className="font-medium text-[16px]">
                  Once the site is ready, it should be checked and tested to
                  ensure an error free working.
                </p>
              </div>
            </div>
            <div className=" flex mb-12">
              <div className="bg-[#25aae1] mr-10 rounded-full h-10 w-10 flex justify-center items-center p-2">
                <h2 className=" text-[20px] text-white font-bold">4</h2>
              </div>
              <div className=" flex flex-col w-[360px]">
                <h2 className=" text-[20px] mb-3 font-bold">Launch</h2>
                <p className="font-medium text-[16px]">
                  After successful testing the product is delivered / deployed
                  to the customer for their use.
                </p>
              </div>
            </div>
            <div className=" flex mb-12">
              <div className="bg-[#25aae1] mr-10 rounded-full h-10 w-10 flex justify-center items-center p-2">
                <h2 className=" text-[20px] text-white font-bold">4</h2>
              </div>
              <div className=" flex flex-col w-[360px]">
                <h2 className=" text-[20px] mb-3 font-bold">Maintenance</h2>
                <p className="font-medium text-[16px]">
                  It is an important step which makes sure that your site works
                  with efficiency all the time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" w-[80%] mx-auto relative my-24">
        <div className="grid grid-cols-12">
          <div className="col-span-12  m-2 rounded-3xl bg-[#009fd4] md:col-span-3 flex p-12 flex-col justify-center items-center">
            {/* <MdScreenSearchDesktop className=" text-[86px] mb-1 text-white" /> */}
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
              <path d="M20.97 7.27a.996.996 0 000-1.41l-2.83-2.83a.996.996 0 00-1.41 0l-4.49 4.49-3.89-3.89c-.78-.78-2.05-.78-2.83 0l-1.9 1.9c-.78.78-.78 2.05 0 2.83l3.89 3.89L3 16.76V21h4.24l4.52-4.52 3.89 3.89c.95.95 2.23.6 2.83 0l1.9-1.9c.78-.78.78-2.05 0-2.83l-3.89-3.89 4.48-4.48zM5.04 6.94l1.89-1.9L8.2 6.31 7.02 7.5l1.41 1.41 1.19-1.19 1.2 1.2-1.9 1.9-3.88-3.88zm11.23 7.44l-1.19 1.19 1.41 1.41 1.19-1.19 1.27 1.27-1.9 1.9-3.89-3.89 1.9-1.9 1.21 1.21zM6.41 19H5v-1.41l9.61-9.61 1.3 1.3.11.11L6.41 19zm9.61-12.44l1.41-1.41 1.41 1.41-1.41 1.41-1.41-1.41z"></path>
            </svg>
            <h2 className=" text-center text-white leading-10 mb-2 font-bold text-[1.9rem]">
              User-Centric Design
            </h2>
            <p className="leading-normal text-white mt-3 text-center text-[18px] md:text-[18px]">
              Prioritize intuitive navigation and a clean interface for a
              seamless user experience.
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
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"></path>
            </svg>
            <h2 className=" text-center text-white leading-10 mb-2 font-bold text-[1.9rem]">
              Execution
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
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              role="img"
              viewBox="0 0 24 24"
              class=" text-[92px] mx-auto mb-8 text-[#ffffff] group-hover:text-white"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title></title>
              <path d="M10.537.904L6.602 12.04l4.798.037-3.748 11.018v.002L17.996 8.39h-5.022L17.847.903h-3.824zM6.903 4.91a.585.585 0 0 0-.412.17L.155 11.285a.682.682 0 0 0 0 .865l6.448 6.396a.625.625 0 0 0 .824 0 .638.638 0 0 0 0-.865l-5.436-5.53a.641.641 0 0 1 0-.865l5.324-5.344a.574.574 0 0 0 0-.865.586.586 0 0 0-.412-.169zm10.193 0a.585.585 0 0 0-.412.17.572.572 0 0 0 0 .864l5.435 5.343a.64.64 0 0 1 0 .866l-5.548 5.53a.64.64 0 0 0 0 .865.625.625 0 0 0 .824 0l6.45-6.396a.68.68 0 0 0 0-.865l-6.337-6.208a.585.585 0 0 0-.412-.169z"></path>
            </svg>
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

      <div>
        
      </div>
    </>
  );
};

export default page;
