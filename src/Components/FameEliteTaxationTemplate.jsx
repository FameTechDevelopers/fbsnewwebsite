import Image from "next/image";
import Link from "next/link";
import React from "react";
import fameElitelogo from "@/assets/famewheels/elite-financial.webp"; 

const FameEliteTaxationTemplate = () => {
  return (
    <>
      <div className="grid grid-cols-12 items-center mt-4 gap-4">
        <div className="md:col-span-8 col-span-12 md:pr-20">
          <h2 className="text-[26px] font-[500] mt-6 mb-2">
            Expert Financial Advisory & Business Solutions
          </h2>

          <p className="mb-6 text-[14px] text-gray-500 leading-relaxed">
            We are a financial advisory firm offering expert services in
            taxation, wealth planning, compliance, and business finance
            solutions. Our team combines deep industry knowledge with strategic
            insight to provide tailored financial guidance.
            <br />
            <br />
            From managing complex tax regulations to optimizing wealth and
            streamlining business finance operations, we help individuals and
            organizations achieve their financial goals efficiently and
            confidently.
            <br />
            <br />
            Partner with us to navigate financial complexities, ensure
            compliance, and make informed decisions that drive growth and
            long term success.
          </p>

          <Link
            target="_blank"
            href="https://elitetaxation.pk"
            className="inline-block bg-[#009fd4] text-white font-semibold px-12 py-2 text-[14px] rounded-md hover:opacity-90 transition"
          >
            View more
          </Link>
        </div>

        <div className="md:col-span-4 col-span-12 flex justify-center md:justify-end">
          <Image
            className="md:w-[90%] mt-8 md:mt-0 rounded-2xl"
            src={fameElitelogo}
            alt="Fame Financial Advisory"
            priority
          />
        </div>
      </div>
    </>
  );
};

export default FameEliteTaxationTemplate;
