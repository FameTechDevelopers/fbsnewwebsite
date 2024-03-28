import React from "react";
import { CiBullhorn } from "react-icons/ci";
import girlImage from "@/assets/digi-marketing-girl.jpg";
import digitalProcess from "@/assets/digital-process.jpg";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/Components/ui/accordion";
import Contact from "@/Sections/Contact";

const page = () => {
  return (
    <>
      <div className=" bg-[#002244] digital-marketing pt-32 pb-36 relative flex flex-col justify-center items-center ">
        <div className=" w-[70%] ">
          <div className=" bg-[#25a9e138] mx-auto  rounded-full mb-12 flex justify-center items-center h-28 w-28">
            <CiBullhorn className=" text-[6rem] mx-auto text-white" />
          </div>
          <h2 className="text-center text-white leading-10 mb-12 font-bold text-[2.5rem]">
            Digital Marketing
          </h2>
          <p className=" text-[18px] text-white font-[500] text-center">
            Our skilled team at Fame Business Solutions specializes in digital
            marketing services tailored to your unique needs. From strategizing
            and executing campaigns to ongoing management, we ensure maximum
            effectiveness for businesses of all sizes.
          </p>
        </div>
      </div>

      <div>
        {/* <Image src={mobileDev} className=" mt-[-232px] relative z-10" /> */}
        <div className=" md:w-[40%] mx-auto mt-20">
          <h2 className=" text-center leading-10 font-medium text-[2.2rem]">
            OUR IT TRANSFORMATION SERVICES
            <hr className=" bg-black h-1 w-[50%] mt-3 mx-auto" />
          </h2>
          <p className=" text-center font-[400] mt-6 ">
            Experience the expertise at Fame Business Solutions. Our diverse
            team of digital marketing industry connoisseurs provides
            comprehensive digital marketing services. You can trust us to
            deliver all-inclusive solutions tailored to your needs.
          </p>
        </div>
      </div>

      <div className="my-16 pt-6 pb-6">
        <div className=" grid grid-cols-12 w-[80%] mx-auto">
          <div className=" col-span-6 flex">
            <Accordion
              type="single"
              collapsible
              className="w-full p-3 mx-3 max-w-[1200px]"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  Search Engine Optimization (SEO)
                </AccordionTrigger>
                <AccordionContent>
                  Elevate your website's visibility and organic traffic with our
                  customized SEO strategies, including keyword optimization,
                  on-page and off-page SEO techniques, and local SEO tactics.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  Pay-Per-Click Advertising (PPC)
                </AccordionTrigger>
                <AccordionContent>
                  Drive immediate results and maximize your online advertising
                  budget with our targeted PPC campaigns across platforms like
                  Google Ads, Bing Ads, and social media advertising networks.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Social Media Marketing</AccordionTrigger>
                <AccordionContent>
                  Harness the power of social media platforms to build brand
                  awareness, engage your audience, and drive conversions through
                  strategic content creation, community management, and
                  influencer partnerships.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Content Marketing</AccordionTrigger>
                <AccordionContent>
                  Establish your brand as an authority in your industry with
                  compelling and valuable content that resonates with your
                  target audience, including blogs, articles, videos,
                  infographics, and more.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Email Marketing</AccordionTrigger>
                <AccordionContent>
                  Nurture leads, strengthen customer relationships, and drive
                  sales with personalized email marketing campaigns, automated
                  workflows, A/B testing, and detailed analytics to measure
                  performance.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger>Analytics and Reporting</AccordionTrigger>
                <AccordionContent>
                  Gain valuable insights into your digital marketing campaigns
                  with our comprehensive analytics and reporting services,
                  allowing you to track key metrics, identify trends, and make
                  data-driven decisions for continuous improvement.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className=" col-span-6 flex justify-center">
            <Image
              className=" lg:w-[600px] h-[400px] object-cover"
              src={girlImage}
            />
          </div>
        </div>
      </div>

      <div className="my-16 pt-6 pb-6">
        <div className=" md:w-[40%] mx-auto mt-20">
          <h2 className=" text-center leading-10 font-medium text-[2.2rem]">
            How Digital Marketing Services Drive Business Growth
            <hr className=" bg-black h-1 w-[50%] mt-3 mx-auto" />
          </h2>
        </div>
        <div className=" container grid grid-cols-12 mt-6 w-[80%] mx-auto">
          <div className=" col-span-6">
            <Image className=" w-[550px]" src={digitalProcess} />
          </div>
          <div className=" col-span-6 flex justify-center items-center">
            <p className="font-[400] mt-6 ">
              Digital marketing services offer businesses the chance to promote
              their brand around the clock at an affordable price. Whether
              you're a startup, medium-sized enterprise, or multi-location
              company, partnering with a digital marketing agency expands your
              market reach. With a strong online presence, you can engage with
              prospects and maintain relationships with existing clients
              effortlessly. As long as your business maintains a solid digital
              footprint, your customers will easily connect with you.
              <br />
              <br />
              Hiring an internet marketing agency is one of the best ways to
              reach your prospects while maintaining a robust relationship with
              your existing clients. With expert guidance, you can leverage
              digital channels effectively to expand your brand's visibility and
              engage with your target audience. As long as your business
              maintains a strong digital presence, your customers will always
              find you, ensuring continued growth and success.
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className=" w-[80%] mx-auto relative mt-32">
          <div className="grid grid-cols-12">
            <div className="col-span-12  m-2 rounded-3xl bg-[#009fd4] md:col-span-4 flex p-12 flex-col justify-center items-center">
              {/* <MdScreenSearchDesktop className=" text-[86px] mb-1 text-white" /> */}
              <h2 className=" text-center text-white leading-10 mb-2 font-bold text-[1.4rem]">
                Search Engine Optimization
              </h2>
              <p className="leading-normal text-white mt-3 text-center  md:text-[16px]">
                Enhance your online visibility and attract organic traffic with
                our SEO strategies tailored to your business needs.
              </p>
            </div>
            <div className="col-span-12  m-2 rounded-3xl bg-[#009fd4] md:col-span-4 flex p-12 flex-col justify-center items-center">
              {/* <VscGithubAction className=" text-[86px] mb-1 text-white" /> */}
              <h2 className=" text-center text-white leading-10 mb-2 font-bold text-[1.4rem]">
                PPC Management
              </h2>
              <p className="leading-normal text-white mt-3 text-center  md:">
                Maximize your ROI with our expert PPC management services,
                targeting your audience with precision and driving immediate
                results.
              </p>
            </div>
            <div className="col-span-12  m-2 rounded-3xl bg-[#009fd4] md:col-span-4 flex p-12 flex-col justify-center items-center">
              <h2 className=" text-center text-white leading-10 mb-2 font-bold text-[1.4rem]">
                Custom Web Design
              </h2>
              <p className="leading-normal text-white mt-3 text-center  md:">
                Stand out in the digital landscape with a custom web design that
                reflects your brand identity and captivates your audience.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-12">
            <div className="col-span-12  m-2 rounded-3xl bg-[#009fd4] md:col-span-4 flex p-12 flex-col justify-center items-center">
              {/* <BsRocket className=" text-[86px] mb-1 text-white" /> */}
              <h2 className=" text-center text-white leading-10 mb-2 font-bold text-[1.4rem]">
                Content Writing
              </h2>
              <p className="leading-normal text-white mt-3 text-center  md:">
                Engage your audience and boost your brand's authority with
                high-quality content tailored to your target market's interests
                and needs.
              </p>
            </div>
            <div className="col-span-12  m-2 rounded-3xl bg-[#009fd4] md:col-span-4 flex p-12 flex-col justify-center items-center">
              {/* <BsRocket className=" text-[86px] mb-1 text-white" /> */}
              <h2 className=" text-center text-white leading-10 mb-2 font-bold text-[1.4rem]">
                Social Media Marketing
              </h2>
              <p className="leading-normal text-white mt-3 text-center  md:">
                Harness the power of social media platforms to build brand
                awareness, drive engagement, and foster meaningful connections
                with your audience.
              </p>
            </div>
            <div className="col-span-12  m-2 rounded-3xl bg-[#009fd4] md:col-span-4 flex p-12 flex-col justify-center items-center">
              {/* <BsRocket className=" text-[86px] mb-1 text-white" /> */}
              <h2 className=" text-center text-white leading-10 mb-2 font-bold text-[1.4rem]">
                Email Marketing
              </h2>
              <p className="leading-normal text-white mt-3 text-center  md:">
                Nurture leads and retain customers with personalized email
                campaigns that deliver relevant content and drive conversions.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Contact />
    </>
  );
};

export default page;
