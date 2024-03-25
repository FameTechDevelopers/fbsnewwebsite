import React from "react";

import img1 from "@/assets/mobDev/ip1.png";
import img2 from "@/assets/mobDev/ip2.png";
import img3 from "@/assets/mobDev/ip3.png";
import img4 from "@/assets/mobDev/ip4.png";
import img5 from "@/assets/mobDev/ip5.png";
import img6 from "@/assets/mobDev/ip6.png";
import img7 from "@/assets/mobDev/ip7.png";
import img8 from "@/assets/mobDev/ip8.png";
import img9 from "@/assets/mobDev/ip9.png";
import img10 from "@/assets/mobDev/ip10.png";
import Image from "next/image";

const MobDevProjects = () => {
  return (
    <div className="px-0 md:px-6  mx-auto">
      <section className="portfolio-section" id="portfolio">
        <div className="container-fluid">
          <div className="mx-auto px-2 py-2 lg:pt-4">
            <div className="-m-1 flex flex-wrap md:-m-2">
              <div className="flex w-full flex-wrap">
                <div className="flex justify-center items-center hover:-0 ease-in duration-300 w-full md:w-1/3 p-1 mb-16 md:p-2">
                  <a
                    href="https://apps.apple.com/us/app/the-market-rewards/id1492943567"
                    target="_blank"
                  >
                    <Image
                      alt="gallery"
                      className="block w-[350px] rounded-lg object-cover object-center "
                      src={img1}
                    />
                  </a>
                </div>
                <div className="flex justify-center items-center hover:-0 ease-in duration-300 w-full md:w-1/3 p-1 mb-16 md:p-2">
                  <a
                    href="https://apps.apple.com/us/app/saferkid-protect-children/id1143802529?ls=1"
                    target="_blank"
                  >
                    <Image
                      alt="gallery"
                      className="block w-[350px] rounded-lg object-cover object-center"
                      src={img2}
                    />
                  </a>
                </div>
                <div className="flex justify-center items-center hover:-0 ease-in duration-300 w-full md:w-1/3 p-1 mb-16 md:p-2">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.mayoclinic.patient&hl=en%27"
                    target="_blank"
                  >
                    <Image
                      alt="gallery"
                      className="block w-[350px] rounded-lg object-cover object-center"
                      src={img3}
                    />
                  </a>
                </div>
                <div className="flex justify-center items-center hover:-0 ease-in duration-300 w-full md:w-1/3 p-1 mb-16 md:p-2">
                  <a
                    href="https://apps.apple.com/us/app/crossfit-games/id825019869"
                    target="_blank"
                  >
                    <Image
                      alt="gallery"
                      className="block w-[350px] rounded-lg object-cover object-center"
                      src={img4}
                    />
                  </a>
                </div>
                <div className="flex justify-center items-center hover:-0 ease-in duration-300 w-full md:w-1/3 p-1 mb-16 md:p-2">
                  <Image
                    alt="gallery"
                    className="block w-[350px] rounded-lg object-cover object-center"
                    src={img5}
                  />
                </div>

                <div className="flex justify-center items-center hover:-0 ease-in duration-300 w-full md:w-1/3 p-1 mb-16 md:p-2">
                  <Image
                    alt="gallery"
                    className="block w-[242px] rounded-lg object-cover object-center"
                    src={img6}
                  />
                </div>

                <div className="flex justify-center items-center hover:-0 ease-in duration-300 w-full md:w-1/3 p-1 mb-16 md:p-2">
                  <Image
                    alt="gallery"
                    className="block w-[242px] rounded-lg object-cover object-center"
                    src={img7}
                  />
                </div>

                <div className="flex justify-center items-center hover:-0 ease-in duration-300 w-full md:w-1/3 p-1 mb-16 md:p-2">
                  <Image
                    alt="gallery"
                    className="block w-[242px] rounded-lg object-cover object-center"
                    src={img8}
                  />
                </div>

                <div className="flex justify-center items-center hover:-0 ease-in duration-300 w-full md:w-1/3 p-1 mb-16 md:p-2">
                  <Image
                    alt="gallery"
                    className="block w-[242px] rounded-lg object-cover object-center"
                    src={img9}
                  />
                </div>

                <div className="flex justify-center items-center hover:-0 ease-in duration-300 w-full md:w-1/3 p-1 mb-16 md:p-2">
                  <Image
                    alt="gallery"
                    className="block w-[242px] rounded-lg object-cover object-center"
                    src={img10}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MobDevProjects;
