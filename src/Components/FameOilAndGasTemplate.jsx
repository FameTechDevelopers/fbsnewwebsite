import Image from "next/image";
import Link from "next/link";
import React from "react";
import famelogo from "@/assets/famewheels/famewheels.webp";

const FameOilAndGasTemplate = () => {
  return (
    <div className="grid grid-cols-12 items-center mt-4 gap-4">
      <div className="md:col-span-8 col-span-12 md:pr-20">
        <h2 className="text-[26px] font-[500] mt-6 mb-2">
          Oil & Gas & Fuel Station Network
        </h2>

        <p className="mb-6 text-[14px] text-gray-500 leading-relaxed">
          Famewheels Oil & Gas division is designed to modernize fuel station
          operations and energy distribution nationwide. Our focus is on
          delivering high quality petroleum products through a trusted and
          compliant supply network.
          <br />
          <br />
          From smart petrol stations and digital payment integrations to
          real time fuel monitoring and inventory management systems, we enable
          petrol pump owners and customers with efficiency, transparency, and a
          seamless fueling experience. Backed by safety standards and
          technology driven solutions, Famewheels is powering the future of
          reliable energy infrastructure.
        </p>
      </div>
    </div>
  );
};

export default FameOilAndGasTemplate;
