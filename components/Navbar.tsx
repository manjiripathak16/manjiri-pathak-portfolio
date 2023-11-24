"use client";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);

  const toggleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <nav className="bg-slate-800 p-4 sticky top-0 z-50 w-full shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link className="text-white text-2xl" href="/">
          {/* <Image src="my-logo.svg" alt="logo" width={74} height={29} /> */}M
        </Link>
        <button className="md:hidden" onClick={toggleClick}>
          {isClicked ? (
            <Image src="close.svg" alt="close" width={24} height={24} />
          ) : (
            <Image src="menu.svg" alt="menu" width={24} height={24} />
          )}
        </button>
        <ul
          className={`${
            isClicked
              ? "flex flex-col absolute left-0 top-[3rem] mt-2 bg-slate-700 h-screen w-[20rem] text-center p-5"
              : "hidden"
          } md:flex md:space-x-4`}
        >
          {NAV_LINKS.map((link) => (
            <li
              className="py-4 border-b-2 border-slate-600 md:border-b-0 md:py-0 "
              key={link.key}
            >
              <Link
                onClick={() => {
                  setIsClicked(false);
                }}
                className="text-white px-4 pym rounded-md hover:text-slate-400"
                href={link.href}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
