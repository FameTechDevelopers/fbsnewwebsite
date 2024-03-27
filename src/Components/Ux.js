import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Ux = () => {
  const [openModal, setOpenModal] = useState();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      // Add more breakpoints as needed
    ],
  };

  return (
    <>
      <Slider {...settings}>
        <div>
          <div
            class=" px-4 gap-10 flex justify-center text-zinc-800 mt-10"
            style={{ height: "600px" }}
          >
            <div
              class="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl relative  w-full hover:scale-105 transition-all ease-in-out"
              style={{ height: "500px" }}
            >
              <div>
                <div class="flex gap-4 justify-center">
                  <p class="font-medium font-[poppins] text-2xl mb-2">
                    Logo Basic
                  </p>
                </div>
                {/* <p class="opacity-60 text-center">For agencies and businesses</p> */}
                <p class="opacity-60 text-center"></p>
                <div class="flex gap-4 justify-center">
                  <div class="flex flex-col items-center my-8">
                    <p class="font-extrabold text-[#002244] font-[poppins] text-4xl">
                      $35.00
                    </p>
                  </div>
                </div>
              </div>
              <ul className="font-bold list-container">
                <li> 4 Original Logo Concepts</li>
                <li> 2 Dedicated Logo Designer</li>
                <li> 4 Revisions</li>
                <li> With Grey Scale Format</li>
              </ul>

              <div class="flex justify-center mt-8 ">
                <button
                  onClick={() => setOpenModal(true)}
                  class="get-start-btn w-full"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div
            class=" px-4 gap-10 flex justify-center text-zinc-800 mt-10"
            style={{ height: "600px" }}
          >
            <div
              class="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl relative  w-full hover:scale-105 transition-all ease-in-out"
              style={{ height: "500px" }}
            >
              <div>
                <div class="flex gap-4 justify-center">
                  <p class="font-medium font-[poppins] text-2xl mb-2">
                    Logo Plus
                  </p>
                </div>
                {/* <p class="opacity-60 text-center">For agencies and businesses</p> */}
                <p class="opacity-60 text-center"></p>
                <div class="flex gap-4 justify-center">
                  <div class="flex flex-col items-center my-8">
                    <p class="font-extrabold text-[#002244] font-[poppins] text-4xl">
                      $119.00
                    </p>
                  </div>
                </div>
              </div>
              <ul className="font-bold list-container">
                <li>12 Original Logo Concepts</li>
                <li>4 Dedicated Logo Designer (Industry Specific)</li>
                <li>Unlimited Revisions</li>
                <li>Stationery Design (Business Card, Letterhead, Envelope)</li>
                <li>Email Signature Design</li>
                <li>With Grey Scale Format</li>
              </ul>

              <div class="flex justify-center mt-8 ">
                <button
                  onClick={() => setOpenModal(true)}
                  class="get-start-btn w-full"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div
            class=" px-4 gap-10 flex justify-center text-zinc-800 mt-10"
            style={{ height: "600px" }}
          >
            <div
              class="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl relative  w-full hover:scale-105 transition-all ease-in-out"
              style={{ height: "500px" }}
            >
              <div>
                <div class="flex gap-4 justify-center">
                  <p class="font-medium font-[poppins] text-2xl mb-2">
                    Logo Infinite
                  </p>
                </div>
                {/* <p class="opacity-60 text-center">For agencies and businesses</p> */}
                <p class="opacity-60 text-center"></p>
                <div class="flex gap-4 justify-center">
                  <div class="flex flex-col items-center my-8">
                    <p class="font-extrabold text-[#002244] font-[poppins] text-4xl">
                      $299.00
                    </p>
                  </div>
                </div>
              </div>
              <ul className="font-bold list-container">
                <li> Unlimited Original Logo Concepts</li>
                <li> 8 Dedicated Logo Designer (Industry Specific)</li>
                <li> Unlimited Revisions</li>
                <li>
                  {" "}
                  Stationery Design (Business Card, Letterhead, Envelope)
                </li>
                <li> 500 Business Cards </li>
                <li> Email Signature Design</li>
                <li> Social Media Designs (Facebook, Twitter, Instagram)</li>
                <li> With Grey Scale Format</li>
              </ul>

              <div class="flex justify-center mt-8 ">
                <button
                  onClick={() => setOpenModal(true)}
                  class="get-start-btn w-full"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div
            class=" px-4 gap-10 flex justify-center text-zinc-800 mt-10"
            style={{ height: "600px" }}
          >
            <div
              class="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl relative  w-full hover:scale-105 transition-all ease-in-out"
              style={{ height: "500px" }}
            >
              <div>
                <div class="flex gap-4 justify-center">
                  <p class="font-medium font-[poppins] text-2xl mb-2">
                    Logo Platinum
                  </p>
                </div>
                {/* <p class="opacity-60 text-center">For agencies and businesses</p> */}
                <p class="opacity-60 text-center"></p>
                <div class="flex gap-4 justify-center">
                  <div class="flex flex-col items-center my-8">
                    <p class="font-extrabold text-[#002244] font-[poppins] text-4xl">
                      $599.00
                    </p>
                  </div>
                </div>
              </div>
              <ul className="font-bold list-container">
                <li> Unlimited Original Logo Concepts</li>
                <li> 8 Dedicated Logo Designer (Industry Specific)</li>
                <li> Unlimited Revisions</li>
                <li>Stationery Design (Business Card, Letterhead, Envelope)</li>
                <li> Brand Book</li>
                <li> 500 Business Cards </li>
                <li> 500 Letterheads</li>
                <li> Email Signature Design</li>
                <li> Social Media Designs (Facebook, Twitter, Instagram)</li>
                <li> 2 Sided Flyer OR Bi-Fold Brochure Design</li>
                <li> With Grey Scale Format</li>
              </ul>

              <div class="flex justify-center mt-8 ">
                <button
                  onClick={() => setOpenModal(true)}
                  class="get-start-btn w-full"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div
            class=" px-4 gap-10 flex justify-center text-zinc-800 mt-10"
            style={{ height: "600px" }}
          >
            <div
              class="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl relative  w-full hover:scale-105 transition-all ease-in-out"
              style={{ height: "500px" }}
            >
              <div>
                <div class="flex gap-4 justify-center">
                  <p class="font-medium font-[poppins] text-2xl mb-2">
                    Logo Special
                  </p>
                </div>
                {/* <p class="opacity-60 text-center">For agencies and businesses</p> */}
                <p class="opacity-60 text-center"></p>
                <div class="flex gap-4 justify-center">
                  <div class="flex flex-col items-center my-8">
                    <p class="font-extrabold text-[#002244] font-[poppins] text-4xl">
                      $29.00
                    </p>
                  </div>
                </div>
              </div>
              <ul className="font-bold list-container">
                <li> 4 Original Logo Concepts</li>
                <li> 2 Dedicated Logo Designer</li>
                <li> 4 Revisions</li>
                <li> With Grey Scale Format</li>
              </ul>

              <div class="flex justify-center mt-8 ">
                <button
                  onClick={() => setOpenModal(true)}
                  class="get-start-btn w-full"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </>
  );
};

export default Ux;
