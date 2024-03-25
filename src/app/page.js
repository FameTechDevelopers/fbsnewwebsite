"use client"

import Image from "next/image";
import heroImage from "../assets/main-banner.jpg";
import RequestCallback from "@/Components/RequestCallback";
import Benefits from "@/Components/Benefits";
import ProjectsSection from "@/Components/ProjectsSection";
import VideoSection from "@/Sections/VideoSection";
import { useRef } from "react";
import Recognitions from "@/Sections/Recognitions";
import Testimonials from "@/Sections/Testimonials";
import Faqs from "@/Sections/Faqs";
import Contact from "@/Sections/Contact";
import Portofolio from "@/Sections/Portofolio";
import Pricing from "@/Sections/Pricing";
import Process from "@/Sections/Process";
import ContactDrawer from "@/Components/ContactDrawer";

export default function Home() {
  const scrollRef = useRef(null);

  const scrollToNextSection = () => {
    // Scroll to the next section or specific element
    // You can customize this according to your project structure
    window.scrollTo({
      top: scrollRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <div className="hero-section h-[100dvh] relative">
        <video
          loop
          autoPlay
          muted
          type="video/mp4"
          src="https://video-previews.elements.envatousercontent.com/h264-video-previews/263d54ac-7c5a-4758-8bfc-5593d9c74aa2/25346281.mp4"
          className="h-[100dvh] w-[100%] object-cover absolute inset-0"
        ></video>
        <div className="min-h-[400px] bg-[#00000090] absolute w-[100%] inset-0">
          <div className="flex flex-col justify-center items-center h-[100%] text-white py-0 px-10">
            <h2 className="text-[5.5rem] leading-[95px] mb-6 text-center font-black">
              We're Your <span className=" text-[#25aae1]">One-Stop Solution</span> for Efficient Apps Development
            </h2>
            <hr className="h-[6px] border-0 bg-[white] mt-2 mb-3 w-[20%]" />
            <p className="text-[20px] font-[500] text-center">
              Searching for guaranteed ways to develop your business App idea?
              <br />
              Getting yourself a professional team work by the experts at eForte
              is what you need.
            </p>
            <div
              ref={scrollRef}
              className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce"
              onClick={scrollToNextSection}
            >
              {/* Replace the SVG code with your down arrow icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <Benefits />
      <ProjectsSection />
      <VideoSection />
      <Portofolio />
      <Process />
      <Testimonials />
      <Recognitions />
      <Faqs />
      <Pricing />
      <Contact />
    </div>
  );
}
