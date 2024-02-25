
"use client"
import React,{useState} from "react";
import Image from "next/image";

import { FaArrowDown, FaArrowUp, FaBars } from "react-icons/fa";

export default function NavBar() {
  const [isNavBarToggled, setIsNavBarToggled] = useState(false);

  return (
    <>
      <div className="">
        <FaBars
          className="size-6"
          onClick={() => setIsNavBarToggled(!isNavBarToggled)}
        ></FaBars>
        <div
          className=" gap-3 items-center"
          onClick={() => setIsNavBarToggled(!isNavBarToggled)}
        >
        </div>
        </div>
      <div className=" nav ">
        <a
          href="#about"
          className="p-4 rounded-2xl hover:bg-white hover:text-black hover:cursor-pointer font-bold text-2xl font-Poppins"
        >
          ABOUT
        </a>
        <a
          href="#schedule"
          className=" ss p-4 rounded-2xl hover:bg-white hover:text-black hover:cursor-pointer font-bold text-2xl font-Poppins"
        >
          HOUSE
        </a>
        <a
          href="#prizes"
          className="ss2 p-4 rounded-2xl hover:bg-white hover:text-black hover:cursor-pointer font-bold text-2xl font-Poppins"
        >
          INDUSTRIES
        </a>
        <a
          href="#rules"
          className="ss3 p-4 rounded-2xl hover:bg-white hover:text-black hover:cursor-pointer font-bold text-2xl font-Poppins"
        >
          AUTOMOBILE
        </a>
        <a
          href="#tracks"
          className=" ss4 p-4 rounded-2xl hover:bg-white hover:text-black hover:cursor-pointer font-bold text-2xl font-Poppins"
        >
          LOGIN
        </a>

        <a
          href="#faq"
          className="ss6 p-4 rounded-2xl hover:bg-white hover:text-black hover:cursor-pointer font-bold text-2xl font-Poppins"
        >
          FAQ
        </a>
      </div>

    </>
  );
}
