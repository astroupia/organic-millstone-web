"use client";

import React, { useState, useEffect } from "react";
import { NAV_LINKS as links } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const Nav = () => {
  const [nav, setNav] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const path = usePathname();

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY === 0) {
          setShow(true);
        } else if (window.scrollY > lastScrollY) {
          // if scroll down hide the navbar
          setShow(false);
        } else {
          // if scroll up show the navbar
          setShow(true);
        }
        // remember current page location to use in the next move
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <div
      className={`bg-white flex justify-between items-center w-full h-20 px-4 fixed top-0 left-0 z-[2000] transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="md:ml-10 ml-5">
        <Link href="/">
          <Image
            src="/assets/images/Om.png"
            height={80}
            width={85}
            alt="logo"
            unoptimized
          />
        </Link>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ label, route }) => (
          <li
            key={label}
            className={`nav-links px-4 cursor-pointer capitalize font-medium hover:scale-105 hover:text-black duration-200 link-underline ${
              path === route ? "text-green-600" : "text-black"
            }`}
          >
            <Link href={route}>{label}</Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 md:hidden"
      >
        {nav ? <X size={30} /> : <Menu size={30} />}
      </div>

      {nav && (
        <ul className="bg-white flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen text-gray-500">
          {links.map(({ label, route }) => (
            <li
              key={label}
              className={`px-4 cursor-pointer capitalize py-4 text-base ${
                path === route ? "text-green-600" : "text-gray-500"
              }`}
            >
              <Link onClick={() => setNav(!nav)} href={route}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Nav;
