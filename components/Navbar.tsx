import Image from "next/image";
import React from "react";
import shopper from "../public/assets/images/Shopper.png";
import { IoIosSearch } from "react-icons/io";
import { BsCartPlus, BsCart2 } from "react-icons/bs";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
const Navbar = () => {
  return (
    <header aria-label="Site Header" className="shadow-sm  bg-blue-200">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4">
        <div className="flex w-0 flex-1 lg:hidden">
          <button
            className="rounded-full bg-gray-100 p-2 text-gray-600"
            type="button"
          >
            <span className="sr-only">Account</span>
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              ></path>
            </svg>
          </button>
        </div>
        <div className="flex items-center justify-center gap-2">
          <Image alt="" src={shopper} height={20} width={20} />
          <h3 className="text-blue-800 font-bold">Shoper</h3>
        </div>
        <div className="flex items-center gap-4">
          <a href="#">
            <span className="sr-only">Logo</span>
            <span className="h-10 w-20 rounded-lg bg-gray-200"></span>
          </a>

          <div className="h-10 flex flex-1 relative">
            <input
              className="h-full w-full rounded-full px-4 text-black text-base outline-none border-[1px] border-transparent 
            focus-visible:border-black duration-200"
              type="text"
              placeholder="Search Everyting"
            />
            <span className="absolute w-8 h-8 rounded-full flex items-center justify-center top-1 right-1 bg-yellow-200 text-black text-xl">
              <IoIosSearch />
            </span>
          </div>
        </div>

        <nav
          aria-label="Site Nav"
          className="hidden items-center justify-center gap-8 text-sm font-medium lg:flex lg:w-0 lg:flex-1"
        >
          <a className="text-gray-900" href="">
            About
          </a>
          <a className="text-gray-900" href="">
            Blog
          </a>
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <div className="flex items-center gap-2">
            <AiOutlineHeart className="text-lg" />
            <div>
              <p className="text-xs">Items</p>
              <h2 className="text-base font-semibold -mt-1">My Favs</h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <AiOutlineUser className="text-lg" />
            <div>
              <p className="text-xs">Sign In</p>
              <h2 className="text-base font-semibold -mt-1">Accounts</h2>
            </div>
          </div>
          <div className="relative flex flex-col justify-center items-center gap-2 h-12 px-5 rounded-full bg-transparent hover:bg-yellow-500 duration-500">
            <BsCart2 className="text-2xl" />
            <p>$0.00</p>
            <span className="absolute w-4 h-4 bg-yellow-400 text-black top-0 right-4 rounded-full flex items-center justify-center font-medium text-xs">
              0
            </span>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-100 lg:hidden">
        <nav className="flex items-center justify-center overflow-x-auto p-4 text-sm font-medium">
          <a className="shrink-0 px-4 text-gray-900" href="">
            About
          </a>
          <a className="shrink-0 px-4 text-gray-900" href="">
            Blog
          </a>
          <a className="shrink-0 px-4 text-gray-900" href="">
            Projects
          </a>
          <a className="shrink-0 px-4 text-gray-900" href="">
            Contact
          </a>
        </nav>
        <nav className="flex items-center justify-center overflow-x-auto p-4 text-sm font-medium gap-7">
          <div className="flex items-center gap-2">
            <AiOutlineHeart className="text-lg" />
            <div>
              <p className="text-xs">Items</p>
              <h2 className="text-base font-semibold -mt-1">My Favs</h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <AiOutlineUser className="text-lg" />
            <div>
              <p className="text-xs">Sign In</p>
              <h2 className="text-base font-semibold -mt-1">Accounts</h2>
            </div>
          </div>
          <div className="relative flex flex-col justify-center items-center gap-2 h-12 px-5 rounded-full bg-transparent hover:bg-yellow-500 duration-500">
            <BsCart2 className="text-2xl" />
            <p>$0.00</p>
            <span className="absolute w-4 h-4 bg-yellow-400 text-black top-0 right-4 rounded-full flex items-center justify-center font-medium text-xs">
              0
            </span>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
