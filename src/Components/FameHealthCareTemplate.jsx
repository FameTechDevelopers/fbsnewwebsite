import Image from "next/image";
import Link from "next/link";
import React from "react";
import fameHealthCarelogo from "@/assets/famewheels/fame-heathcare.webp"; // adjust image path

const FameHealthcareTemplate = () => {
  return (
    <>
      <div className="grid grid-cols-12 items-center mt-4 gap-4">
        <div className="md:col-span-8 col-span-12 md:pr-20">
          <h2 className="text-[26px] font-[500] mt-6 mb-2">
            Fame Healthcare Tech: Accessible, Efficient, Patient-Centered
          </h2>

          <p className="mb-6 text-[14px] text-gray-500 leading-relaxed">
            Fame Healthcare Tech is a digital-first platform making healthcare
            more accessible, efficient, and patient-focused. We connect patients
            with providers, streamline processes, and enhance care experiences.
            <br />
            <br />
            Our platform offers secure appointments, telemedicine consultations,
            and integrated health records, empowering patients and professionals
            to make informed decisions and improve outcomes.
            <br />
            <br />
            Experience healthcare where convenience, transparency, and quality
            lead every interaction.
          </p>
        </div>

        <div className="md:col-span-4 col-span-12 flex justify-center md:justify-end">
          <Image
            className="md:w-[90%] mt-8 md:mt-0 rounded-2xl"
            src={fameHealthCarelogo}
            alt="Fame Healthcare Tech"
            priority
          />
        </div>
      </div>
    </>
  );
};

export default FameHealthcareTemplate;
