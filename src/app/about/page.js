import React from "react";
import { MdWeb } from "react-icons/md";
import missionIcon from "@/assets/About/mission.PNG";
import businessIcon from "@/assets/About/business.PNG";
import visionIcon from "@/assets/About/vision.PNG";
import Image from "next/image";
import Contact from "@/Sections/Contact";
import ContactDrawer from "@/Components/ContactDrawer";

const About = () => {
  return (
    <>
      <div className=" bg-[#002244] about-banner py-60 relative flex flex-col justify-center items-center ">
        <div className=" w-[70%] ">
          <h2 className="text-center text-white leading-10 mb-12 font-bold text-[2.8rem]">
            About Us
          </h2>
          <p className="text-[18px] text-white font-[500] text-center">
            Welcome to Fame Busines Solutions, your premier digital partner in
            Pakistan! We are a dynamic team of creative minds and tech
            enthusiasts dedicated to helping businesses thrive in the
            ever-evolving digital landscape of Pakistan.
          </p>
        </div>
      </div>
      <div className=" py-16  px-28 w-[80%] bg-white mx-auto shadow-2xl relative z-50 rounded-[42px] border-2 mt-[-120px]">
        <div className=" my-12">
          <Image src={businessIcon} className=" w-16 mx-auto mb-2" />
          <h2 className=" text-center mb-5 leading-10 font-bold text-[1.9rem]">
            Business Description
          </h2>
          <p className=" text-center font-[500] text-[18px]">
            Fame Business Solutions is a leading digital agency based in
            Pakistan, dedicated to providing innovative digital solutions to
            businesses across the nation. With a deep understanding of the local
            market dynamics and a commitment to excellence, we specialize in
            crafting bespoke strategies and cutting-edge technologies to help
            our clients thrive in the digital age.
            <br />
            <br />
            From web design and development to digital marketing, branding, and
            consulting services, we offer a comprehensive suite of solutions
            tailored to meet the unique needs and objectives of each client. Our
            team of seasoned professionals combines creativity, technical
            expertise, and strategic insights to deliver results that drive
            growth, enhance brand visibility, and maximize ROI.
            <br />
            <br />
            we believe in the power of collaboration and long-term partnerships.
            We work closely with our clients, taking the time to understand
            their goals, challenges, and aspirations, and then leveraging our
            expertise to devise customized solutions that exceed expectations.
          </p>
        </div>
        <div className=" mt-20 mb-12">
          <Image src={visionIcon} className=" w-16 mx-auto mb-2" />
          <h2 className=" text-center mb-5 leading-10 font-bold text-[1.9rem]">
            Our Vision
          </h2>
          <p className=" text-center font-[500] text-[18px]">
            We envision a Pakistan where every business, regardless of its scale
            or industry, harnesses the power of digital technology to unlock its
            full potential and reach new heights of success. Through our
            expertise and dedication, we strive to be the catalyst for this
            digital transformation.
            <br />
            <br />
          </p>
        </div>
        <div className=" mt-16">
          <Image src={missionIcon} className=" w-16 mx-auto mb-2" />
          <h2 className=" text-center mb-5 leading-10 font-bold text-[1.9rem]">
            Mission Statement
          </h2>
          <p className=" text-center font-[500] text-[18px]">
            At [Your Agency Name], our mission is to empower businesses across
            Pakistan to thrive in the digital era. We are committed to
            delivering innovative digital solutions that drive growth, enhance
            brand visibility, and foster meaningful connections with audiences.
            Through collaboration, creativity, and a relentless pursuit of
            excellence, we strive to be the catalyst for our clients' success,
            helping them navigate the complexities of the digital landscape and
            achieve their business objectives. Our passion lies in leveraging
            technology to unlock the full potential of businesses, fostering
            sustainable growth, and shaping a brighter future for Pakistan's
            digital economy.
            <br />
            <br />
          </p>
        </div>
      </div>
      <ContactDrawer />
      <Contact />
    </>
  );
};

export default About;
