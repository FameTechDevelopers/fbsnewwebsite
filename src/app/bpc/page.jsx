import React from "react";
import Image from "next/image";
import network from "@/assets/investment/network.jpg";
import mentorship from "@/assets/investment/mentorship.jpg";
import Contact from "@/Sections/Contact";

const page = () => {
  return (
    <>
      <div className="bg-[#002244] about-banner py-60 relative flex flex-col justify-center items-center">
        <div className="w-[70%]">
          <h2 className="text-center text-white leading-tight mb-10 font-bold text-[2.8rem]">
            Brand Partners Club (BPC)
          </h2>
          <p className="text-[20px] text-white font-[500] text-center leading-relaxed">
            A Global Growth & Capital Alliance under the Umbrella of FBS Group
            where visionary founders, credible brands, and smart capital come
            together to scale with structure and purpose.
          </p>
        </div>
      </div>

      <div className="w-[90%] mx-auto relative my-24">
        <div className="grid grid-cols-12">
          <div className="col-span-12 m-2 rounded-3xl bg-[#009fd4] md:col-span-4 flex flex-col justify-center items-center text-center px-10 py-16">
            <h2 className="text-white mb-4 font-bold text-[1.9rem]">
              Capital Raise & Investor Readiness
            </h2>
            <p className="text-white text-[18px] leading-relaxed">
              From seed to scale, we guide founders through structured
              fundraising, valuation discipline, and access to global investors,
              family offices, and strategic capital partners.
            </p>
          </div>

          <div className="col-span-12 m-2 rounded-3xl bg-[#009fd4] md:col-span-4 flex flex-col justify-center items-center text-center px-10 py-16">
            <h2 className="text-white mb-4 font-bold text-[1.9rem]">
              Brand Architecture & Positioning
            </h2>
            <p className="text-white text-[18px] leading-relaxed">
              We don’t chase hype. We build global ready brands with
              credibility, governance, and long-term value designed to attract
              and retain serious capital.
            </p>
          </div>

          <div className="col-span-12 m-2 rounded-3xl bg-[#009fd4] md:col-span-4 flex flex-col justify-center items-center text-center px-10 py-16">
            <h2 className="text-white mb-4 font-bold text-[1.9rem]">
              Strategic Advisory & Governance
            </h2>
            <p className="text-white text-[18px] leading-relaxed">
              Board level thinking, institutional mindset, and strategic clarity
              helping founders evolve from operators into global leaders.
            </p>
          </div>
        </div>
      </div>

      <div className="px-24 py-14">
        <div className="grid grid-cols-12 justify-center items-center">
          <div className="col-span-5">
            <Image
              src={network}
              alt="Global Network"
              className="w-[730px] mx-auto"
            />
          </div>
          <div className="col-span-7 pl-12">
            <h2 className="font-bold text-[2.5rem] leading-tight">
              Global Capital & Strategic Partnerships
              <hr className="bg-black h-1 w-[30%] my-4" />
            </h2>
            <p className="text-[17px] leading-relaxed">
              Brand Partners Club connects founders with investors, family
              offices, and strategic partners across GCC, Europe, Asia, and
              North America ensuring capital meets execution with trust,
              transparency, and global standards.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 mt-20 justify-center items-center">
          <div className="col-span-7">
            <h2 className="font-bold text-[2.5rem] leading-tight">
              Founder Mentorship & Institutional Thinking
              <hr className="bg-black h-1 w-[30%] my-4" />
            </h2>
            <p className="text-[17px] leading-relaxed">
              At BPC, mentorship goes beyond advice. We help founders build
              discipline, governance, and long-term vision focusing on legacy
              over shortcuts and value over noise.
            </p>
          </div>
          <div className="col-span-5 pl-12">
            <Image
              src={mentorship}
              alt="Mentorship"
              className="w-[730px] mx-auto"
            />
          </div>
        </div>
      </div>

      <Contact />
    </>
  );
};

export default page;
