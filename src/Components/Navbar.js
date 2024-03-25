"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import logo from "@/assets/logo.PNG";
import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <div
      className={`flex justify-between px-24 z-[99] items-center w-full h-20 text-white fixed nav ${
        scrolled ? "bg-black" : "bg-transparent h-28"
      } transition-all duration-300 ease-in-out`}
    >
      <div>
        <h1 className="text-5xl font-signature ml-2">
          <Link className="link-underline link-underline-black" href="/">
            {/* <Image src={logo} /> */}
            Fbs
          </Link>
        </h1>
      </div>

      <ul className="hidden md:flex">
        <li className="nav-links px-4 cursor-pointer capitalize text-[17px] font-[400] text-white hover:scale-105 duration-200 link-underline">
          <Link href="/">HOME</Link>
        </li>
        <li className="nav-links px-4 cursor-pointer capitalize text-[17px] font-[400] text-white hover:scale-105 duration-200 link-underline">
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger className=" menu-bar">
                <p className="nav-links px-4 cursor-pointer capitalize text-[17px] font-[400] text-white hover:scale-105 duration-200 link-underline">
                  SERVICES
                </p>
              </MenubarTrigger>
              <MenubarContent className=" mt-6 shadow-lg border-2">
                <MenubarItem>Mobile Application</MenubarItem>
                <MenubarItem>
                  <Link href="/services/web-dev">Web Development</Link>
                </MenubarItem>
                <MenubarItem>Digtal Marketing</MenubarItem>
                <MenubarItem>2D / 3D Animation</MenubarItem>
                <MenubarItem>Graphics Design</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
          {/* <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button variant="outline">SERVICES</button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span>Billing</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span>Settings</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span>Keyboard shortcuts</span>
                  </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu> */}
        </li>
        <li className="nav-links px-4 cursor-pointer capitalize text-[17px] font-[400] text-white hover:scale-105 duration-200 link-underline">
          <Link href="/about">ABOUT</Link>
        </li>
        <li className="nav-links px-4 cursor-pointer capitalize text-[17px] font-[400] text-white hover:scale-105 duration-200 link-underline">
          <Link href="investment">STARTUP INVESTMENT</Link>
        </li>
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-white md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          <li className="px-4 cursor-pointer capitalize py-6 text-4xl">HOME</li>
          <li className="px-4 cursor-pointer capitalize py-6 text-4xl">
            <a>SERVICES</a>
          </li>
          <li className="px-4 cursor-pointer capitalize py-6 text-4xl">
            PROJECTS
          </li>
          <li className="px-4 cursor-pointer capitalize py-6 text-4xl">
            ABOUT
          </li>
          <li className="px-4 cursor-pointer capitalize py-6 text-4xl">
            STARTUP INVESTMENT
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
