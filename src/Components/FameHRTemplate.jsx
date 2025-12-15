import Image from "next/image";
import Link from "next/link";
import React from "react";
import fameHrlogo from "@/assets/famewheels/FAMEHR-LOGO.png"; // adjust image path

const FameHRTemplate = () => {
  return (
    <>
      <div className="grid grid-cols-12 items-center mt-4 gap-4">
        <div className="md:col-span-8 col-span-12 md:pr-20">
          <h2 className="text-[26px] font-[500] mt-6 mb-2">
            Fame HR: Streamlined Human Resource Solutions
          </h2>

          <p className="mb-6 text-[14px] text-gray-500 leading-relaxed">
            Fame HR is a comprehensive human resource platform designed to
            streamline HR operations, improve employee engagement, and optimize
            workforce management. We provide tools for attendance, payroll,
            leave management, and performance tracking, all in one unified
            system.
            <br />
            <br />
            By integrating digital solutions with HR best practices, we help
            organizations reduce administrative overhead, enhance productivity,
            and maintain compliance effortlessly.
            <br />
            <br />
            Partner with Fame HR to simplify HR processes, empower employees,
            and drive organizational growth through smart, efficient workforce
            management.
          </p>

          <Link
            // target="_blank"
            href="#"
            className="inline-block bg-[#009fd4] text-white font-semibold px-12 py-2 text-[14px] rounded-md hover:opacity-90 transition"
          >
            View more
          </Link>
        </div>

        <div className="md:col-span-4 col-span-12 flex justify-center md:justify-end">
          <Image
            className="md:w-[90%] mt-8 md:mt-0 rounded-2xl"
            src={fameHrlogo}
            alt="Fame HR Platform"
            priority
          />
        </div>
      </div>
    </>
  );
};

export default FameHRTemplate;
