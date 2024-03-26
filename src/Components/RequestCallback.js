import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

const RequestCallback = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger className=" bg-white text-[18px] border-2 z-[9999] border-[#a2a2a2] left-[-105px] fixed font-medium py-4 px-12 rotate-90">
          Request a Callback
        </SheetTrigger>
        <SheetContent
          side="left"
          className="h-[60%] top-[20%] flex justify-center items-center"
        >
          <SheetHeader className="w-[100%]">
            <SheetTitle className=" text-[26px]">
              Request a Call Back
            </SheetTitle>
            <SheetDescription>
              <form id="MyForm" className="m-0 w-[100%] my-8">
                <div
                  className="contact-form relative mb-6"
                  data-te-input-wrapper-init
                >
                  <input
                    type="text"
                    className="peer border-[1px] py-3 border-black block min-h-[auto] w-full rounded  bg-transparent px-3 leading-[0.9] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary"
                    id="name"
                    placeholder="Name"
                    required
                  />
                  {/* <label className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.8rem] leading-[0.9] text-transparent transition-all duration-200 ease-out peer-focus:-translate-y-[1.9rem] peer-focus:scale-[0.9] peer-focus:text-[#4b20f5] peer-data-[te-input-state-active]:-translate-y-[2.9rem] peer-data-[te-input-state-active]:scale-[2.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-[#4b20f5]">
                    Name
                  </label> */}
                </div>
                <div
                  className="contact-form relative mb-6"
                  data-te-input-wrapper-init
                >
                  <input
                    type="email"
                    className="peer border-[1px] py-3 border-black block min-h-[auto] w-full rounded  bg-transparent px-3 leading-[0.9] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary"
                    id="email"
                    placeholder="Email address"
                    required
                  />
                </div>
                <div
                  className="contact-form relative mb-6"
                  data-te-input-wrapper-init
                >
                  <input
                    type="text"
                    className="peer border-[1px] py-3 border-black block min-h-[auto] w-full rounded  bg-transparent px-3 leading-[0.9] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary"
                    id="contact"
                    placeholder="Your Contact"
                    required
                  />
                </div>
                <div
                  className="contact-form relative mb-6"
                  data-te-input-wrapper-init
                >
                  <textarea
                    rows={5}
                    className="peer border-[1px] py-3 border-black block min-h-[auto] w-full rounded  bg-transparent px-3 leading-[0.9] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary"
                    id="message"
                    placeholder="Your message"
                    required
                  ></textarea>
                </div>

                <button
                  type="button"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  className=" bg-black text-white text-[16px] py-3 px-8 get-started"
                >
                  Send
                </button>
              </form>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default RequestCallback;
