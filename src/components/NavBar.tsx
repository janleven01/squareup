"use client";

import Image from "next/image";
import Buttons from "./Button";
import { navLinks } from "@/constants/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const path = usePathname();

  return (
    <nav className="border border-b-2 border-grey_15 px-4 py-5 sm:px-10 lg:px-20">
      <div className="max-container flex items-center justify-between">
        <Link href="/">
          <Image
            src="/logo-w-name.svg"
            alt="SquareUp Logo"
            width={180}
            height={60}
            className="h-10 w-[119px] sm:h-10 xl:h-[60px] xl:w-44"
          />
        </Link>
        <ul className="hidden md:flex">
          {navLinks.map((item) => (
            <li
              key={item.label}
              className={`rounded-lg px-3.5 py-[14px] font-medium text-grey_90 hover:text-grey_60 sm:py-3 sm:text-sm lg:px-[22px] xl:px-7 xl:text-lg ${path === item.href && "bg-grey_15 font-semibold text-white"}`}
            >
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
        <button className="block md:hidden">
          <Image
            src="/icons/hamburger.svg"
            alt="hamburger icon"
            width={50}
            height={50}
            className="size-[34px]"
          />
        </button>
        <Buttons
          title="Contact Us"
          className="hidden rounded-lg bg-green_50 text-grey_15 hover:bg-green_45 hover:text-black sm:px-3 sm:py-3 md:block xl:px-6 xl:py-4"
        />
      </div>
    </nav>
  );
};

export default NavBar;
