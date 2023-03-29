import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HiBars4 } from "react-icons/hi2";
import { AiOutlineClose } from "react-icons/ai";

const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "lessons",
    title: "Lessons",
  },
  {
    id: "pricing",
    title: "Pricing",
  },
  {
    id: "testimonials",
    title: "Testimonials",
  },
];

export const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [bgColor, setBgColor] = useState("bg-transparent");
  const [textColor, setTextColor] = useState("text-slate-50");

  useEffect(() => {
    const changleColor = () => {
      if (window.scrollY >= 90) {
        setBgColor("bg-gray-800");
        setTextColor("text-slate-200");
      }
    };
    window.addEventListener("scroll", changleColor);
  }, []);

  return (
    <div
      className={` ${bgColor} fixed top-0 py-4 flex justify-between items-center w-full z-30`}
    >
      <div className="flex items-center justify-between w-[90%] mx-auto ">
        <div className="flex items-center justify-between w-full gap-8">
          {/* logo */}
          <Image src="/images/logo.png" width={150} height={100} alt="logo" />
          {/* navlinks */}
          <div
            className={`hidden lg:flex lg:justify-between space-x-6 xl:space-x-12`}
          >
            <div className="flex items-center space-x-4 xl:space-x-8 font-base xl:text-lg">
              {navLinks.map((nav) => (
                <Link
                  key={nav.id}
                  href={` #${nav.id}`}
                  className={` ${textColor} hover:border-b-2 hover:border-orange-400 hover:text-orange-400 transition duration-300 ease-in `}
                >
                  {nav.title}
                </Link>
              ))}
            </div>
            <div className="space-x-2">
              <button className="bg-yellow-500 hover:bg-yellow-400 text-base tracking-wider font-bold px-6 py-2 transition duration-500 hover:scale-105">
                LOG IN
              </button>
              <button className="bg-orange-500 hover:bg-orange-400 text-base tracking-wider font-bold px-6 py-2 transition duration-500 hover:scale-105">
                SIGN UP
              </button>
            </div>
          </div>
          {/* Hamburger icon */}
          <div
            className={` ${menu ? "hidden" : ""} block lg:hidden z-10`}
            onClick={() => setMenu(!menu)}
          >
            <HiBars4 className={`w-8 h-8 cursor-pointer  ${textColor}`} />
          </div>
          {/* mobile menu */}
          <div
            className={` ${
              menu ? "fixed" : "hidden"
            } lg:hidden right-0 top-0 w-full h-screen bg-gray-800 space-y-12`}
          >
            {/* logo and close button */}
            <div className="flex justify-between items-center px-4 py-3 bg-gray-700 shadow-2xl">
              <Link href="/home">
                <Image
                  src="/images/logo.png"
                  width={180}
                  height={100}
                  alt="logo"
                />
              </Link>

              <div onClick={() => setMenu(!menu)}>
                <AiOutlineClose className="w-8 h-8 text-orange-400 hover:text-slate-100 cursor-pointer" />
              </div>
            </div>
            {/* menu */}
            <div className="w-full flex flex-col gap-8">
              <div className="flex flex-col items-center justify-center gap-8">
                {navLinks.map((nav) => (
                  <Link
                    className="hover:text-orange-400 text-2xl uppercase"
                    key={nav.id}
                    href={`#${nav.id}`}
                    onClick={() => setMenu(!menu)}
                  >
                    {nav.title}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col w-[180px] mx-auto gap-6">
                <button className="bg-yellow-500 hover:bg-yellow-400 text-xl font-semibold font-averia px-8 py-3 tracking-widest">
                  LOG IN
                </button>
                <button className="bg-orange-500 hover:bg-orange-400 text-xl font-semibold font-averia px-8 py-3 tracking-widest">
                  SIGN UP
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
