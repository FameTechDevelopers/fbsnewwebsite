import React from "react";
import Image from "next/image";
import investment from "@/assets/investment/investment.jpg";
import advisory from "@/assets/investment/advisory.jpg";
import facility from "@/assets/investment/facility.jpg";
import network from "@/assets/investment/network.jpg";
import mentorship from "@/assets/investment/mentorship.jpg"
import Contact from "@/Sections/Contact";

const page = () => {
  return (
    <>
      <div className=" bg-[#002244] about-banner py-60 relative flex flex-col justify-center items-center ">
        <div className=" w-[70%] ">
          <h2 className="text-center text-white leading-10 mb-12 font-bold text-[2.8rem]">
            Empowering Early-Stage Ventures for a Prosperous Pakistan
          </h2>
          <p className="text-[18px] text-white font-[500] text-center">
            Access the capital needed to fuel the growth of your venture.
          </p>
        </div>
      </div>
      <div className=" w-[90%] mx-auto relative my-24">
        <div className="grid grid-cols-12">
          <div className="col-span-12 m-2 rounded-3xl bg-[#009fd4] md:col-span-4 flex flex-col justify-between items-center">
            <Image
              src={investment}
              className=" h-[330px] rounded-t-3xl w-full object-cover mb-4"
            />
            <div className="pb-12 px-12">
              <h2 className=" text-center text-white leading-10 mb-2 font-bold text-[1.9rem]">
                Investment Opportunities
              </h2>
              <p className="leading-normal text-white mt-3 text-center text-[18px] md:text-[18px]">
                Connect with a network of investors eager to support
                groundbreaking startup ventures.
              </p>
            </div>
          </div>
          <div className="col-span-12 m-2 rounded-3xl bg-[#009fd4] md:col-span-4 flex flex-col justify-between items-center">
            <Image
              src={facility}
              className=" h-[330px] rounded-t-3xl w-full object-cover mb-4"
            />
            <div className="pb-12 px-12">
              <h2 className=" text-center text-white leading-10 mb-2 font-bold text-[1.9rem]">
                Facilitation Services
              </h2>
              <p className="leading-normal text-white mt-3 text-center text-[18px] md:text-[18px]">
                Enjoy a streamlined process that matches startups with investors
                and advisors.
              </p>
            </div>
          </div>
          <div className="col-span-12 m-2 rounded-3xl bg-[#009fd4] md:col-span-4 flex flex-col justify-between items-center">
            <Image
              src={advisory}
              className=" h-[330px] rounded-t-3xl w-full object-cover mb-4"
            />
            <div className="pb-12 px-12">
              <h2 className=" text-center text-white leading-10 mb-2 font-bold text-[1.9rem]">
                Advisory Network
              </h2>
              <p className="leading-normal text-white mt-3 text-center text-[18px] md:text-[18px]">
                Gain valuable insights from seasoned advisors with diverse
                industry experience.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className=" px-24 py-14 ">
          <div className=" grid grid-cols-12 justify-center items-center">
            <div className=" col-span-5">
              <Image src={network} className=" w-[730px] mx-auto" />
            </div>
            <div className="col-span-7 pl-12">
              <h2 className=" leading-10 font-bold text-[2.5rem]">
                Diverse Investor Network
                <hr className=" bg-black h-1 w-[30%] my-3" />
              </h2>
              <p>
                At FBS Startup Investment, we pride ourselves on offering
                early-stage ventures access to a diverse and dynamic investor
                network. Our platform opens the gateway to a spectrum of
                support, connecting startups with a variety of investors,
                ranging from seasoned angels to forward-thinking venture
                capitalists.
              </p>
            </div>
          </div>
          <div className=" grid grid-cols-12 mt-14 justify-center items-center">
            <div className="col-span-7">
              <h2 className=" leading-10 font-bold text-[2.5rem]">
                Tailored Mentorship
                <hr className=" bg-black h-1 w-[30%] my-3" />
              </h2>
              <p>
                FBS Startup Investment offers tailored mentorship to meet your
                startup's specific needs. Get advice on strategy, market
                positioning, and operational excellence from seasoned mentors
                who've navigated similar paths. Join us for targeted support and
                propel your startup towards success.
              </p>
            </div>
            <div className=" col-span-5 pl-12">
              <Image src={mentorship} className=" w-[730px] mx-auto" />
            </div>
          </div>
        </div>
      </div>
      <Contact />
    </>
  );
};

export default page;
