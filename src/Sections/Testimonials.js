import React from "react";
import img1 from "../assets/testmonials.jpg";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/Components/ui/carousel";

// import { Carousel } from "@/Components/ui/carousel";

const Testimonials = () => {
  return (
    <div className=" px-12 py-14 ">
      <div className=" md:w-[40%] mx-auto flex items-center justify-center"></div>
      <div className=" grid grid-cols-12 justify-center items-center">
        <div className=" md:col-span-5 col-span-12">
          <Image src={img1} className=" w-[730px] mx-auto" />
        </div>
        <div className="md:col-span-7 col-span-12">
          <h2 className=" text-center leading-10 font-bold text-[2.5rem]">
            Testimonials
            <hr className=" bg-black h-1 w-[30%] mt-3 mx-auto" />
          </h2>
          <Carousel className="w-full shadow-lg mx-auto max-w-[800px]">
            <CarouselContent>
              <CarouselItem>
                <div className="bg-white">
                  <section class="bg-white">
                    <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                      <figure class=" mx-auto">
                        <svg
                          class="h-12 mx-auto mb-3 text-gray-400"
                          viewBox="0 0 24 27"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                            fill="currentColor"
                          />
                        </svg>
                        <blockquote>
                          <p class="text-2xl font-medium text-gray-900">
                            "Thanks to Fame Business Solutions, my clinic now
                            has a professional website that perfectly represents
                            my services. Their team's expertise and attention to
                            detail have made a significant impact on my online
                            presence. Highly recommended!"
                          </p>
                        </blockquote>
                        <figcaption class="flex items-center justify-center mt-6 space-x-3">
                          {/* <img
                            class="w-6 h-6 rounded-full"
                            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                            alt="profile picture"
                          /> */}
                          <div class="flex items-center divide-x-2 divide-gray-500">
                            <div class="pr-3 font-medium text-gray-900">
                              Dr. Kashif
                            </div>
                            <div class="pl-3 text-sm font-light text-gray-500">
                              Cardiologist
                            </div>
                          </div>
                        </figcaption>
                      </figure>
                    </div>
                  </section>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="bg-white">
                  <section class="bg-white">
                    <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                      <figure class=" mx-auto">
                        <svg
                          class="h-12 mx-auto mb-3 text-gray-400"
                          viewBox="0 0 24 27"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                            fill="currentColor"
                          />
                        </svg>
                        <blockquote>
                          <p class="text-2xl font-medium text-gray-900">
                            "Fame Business Solutions delivered exceptional
                            websites for both my personal portfolio and clinic.
                            Their understanding of my field and dedication to
                            quality are evident in the outstanding results. I
                            couldn't be happier with their services!"
                          </p>
                        </blockquote>
                        <figcaption class="flex items-center justify-center mt-6 space-x-3">
                          {/* <img
                            class="w-6 h-6 rounded-full"
                            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                            alt="profile picture"
                          /> */}
                          <div class="flex items-center divide-x-2 divide-gray-500">
                            <div class="pr-3 font-medium text-gray-900">
                              Dr. Shohab
                            </div>
                            <div class="pl-3 text-sm font-light text-gray-500">
                              Orthopedician
                            </div>
                          </div>
                        </figcaption>
                      </figure>
                    </div>
                  </section>
                </div>
              </CarouselItem>
      
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
