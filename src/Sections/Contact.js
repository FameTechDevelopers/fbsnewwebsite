import React from 'react'

const Contact = () => {
  return (
    <div className=" bg-[#7ed6f31c] my-16 py-16">
      <div className=" md:w-[40%] mx-auto flex items-center justify-center">
        <h2 className=" text-center leading-10 font-bold text-[2.5rem] mb-8">
          Get a free quote!
          <hr className=" bg-black h-1 w-[50%] mt-3 mx-auto" />
        </h2>
      </div>

      <section class="text-gray-600 body-font relative">
        <div class="py-8 mx-auto flex sm:flex-nowrap flex-wrap">
          <div class="lg:w-2/4 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              class="absolute inset-0"
              frameborder="0"
              title="map"
              marginheight="0"
              marginwidth="0"
              scrolling="no"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=the%20plaza%20shopping+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
            <div class="bg-white relative flex flex-wrap py-6 rounded shadow-md">
              <div class="lg:w-1/2 px-6">
                <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p class="mt-1">
                  Office # 214, 2nd floor, The plaza shopping center, Clifton
                  Block 9, Karachi
                </p>
              </div>
              <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  EMAIL
                </h2>
                <a class="text-red-500 leading-relaxed">info@famebusinesssolutions.com</a>
                <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p class="leading-relaxed">+923338539146</p>
              </div>
            </div>
          </div>
          <div class="lg:w-2/4 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-12 px-16 mt-8 md:mt-0">
            <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">
              Feedback
            </h2>
            <p class="leading-relaxed mb-5 text-gray-600">
              Post-ironic portland shabby chic echo park, banjo fashion axe
            </p>
            <div class="relative mb-4">
              <label for="name" class="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="message" class="leading-7 text-sm text-gray-600">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button class="text-white bg-[#009fd4] border-0 py-2 px-6 focus:outline-none hover:bg-[#2aafdb] rounded text-lg">
              Button
            </button>
            <p class="text-xs text-gray-500 mt-3">
              Chicharrones blog helvetica normcore iceland tousled brook viral
              artisan.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact