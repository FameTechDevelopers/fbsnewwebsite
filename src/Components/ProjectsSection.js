import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MobileDevTemplate from "./MobileDevTemplate";
import WebDevTemplate from "./WebDevTemplate";
import DigitalMarketingTemplate from "./DigitalMarketingTemplate";
import AnimationTemplate from "./AnimationTemplate";
import GraphicsDesignTemplate from "./GraphicsDesignTemplate";

const ProjectsSection = () => {
  return (
    <>
      <div id="services" className=" md:w-[40%] mx-auto mt-20 flex items-center justify-center">
        <h2 className=" text-center leading-10 font-bold text-[1.9rem]">
          From Mobile Apps, Business Dashboards and E-Commerce Stores to
          Remarkable Web Apps We Do it All!
          <hr className=" bg-black h-1 w-[50%] mt-3 mx-auto" />
        </h2>
      </div>
      <div className=" w-[80%] mt-6 mb-12 mx-auto flex items-center justify-center">
        <p className=" text-center text-[16px]">
          Our experts know what it takes to offer you an all-inclusive Apps
          designing and development services. Working with a company like eForte
          with a decade of experience entitles you to a diverse team of experts
          who are the connoisseurs of the software designing and development
          industry.
        </p>
      </div>
      <div className=" flex mb-16 justify-center items-center w-[80%] mx-auto">
        <div>
          <Tabs defaultValue="account" className="">
            <TabsList>
              <TabsTrigger className="text-[16px]" value="mobile-dev">
                Mobile Development
              </TabsTrigger>
              <TabsTrigger className="text-[16px]" value="web-dev">
                Web Development
              </TabsTrigger>
              <TabsTrigger className="text-[16px]" value="digital-marketing">
                Digital Marketing
              </TabsTrigger>
              <TabsTrigger className="text-[16px]" value="animation">
                2D / 3D Animation
              </TabsTrigger>
              <TabsTrigger className="text-[16px]" value="graphics-design">
                Graphics Design
              </TabsTrigger>
            </TabsList>
            <TabsContent className="" value="mobile-dev">
              <MobileDevTemplate />
            </TabsContent>
            <TabsContent value="web-dev">
              <WebDevTemplate />
            </TabsContent>
            <TabsContent value="digital-marketing">
              <DigitalMarketingTemplate />
            </TabsContent>
            <TabsContent value="animation">
              <AnimationTemplate />
            </TabsContent>
            <TabsContent value="graphics-design">
              <GraphicsDesignTemplate />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default ProjectsSection;
