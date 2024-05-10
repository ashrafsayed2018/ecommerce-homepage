"use client";
import { NavbarLinks } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);

  return (
    <nav className="bg-white">
      <div className="flex items-center justify-between p-4">
        {/* site logo and links */}
        <div className="flex items-center gap-8">
          <Link href="/">
            <Image
              src="/images/tahani_logo.jpg"
              width={60}
              height={60}
              priority={true}
              alt="logo"
            />
          </Link>
          <ul className="hidden sm:flex gap-6 items-center">
            {NavbarLinks.map((link) => {
              return (
                <li
                  key={link.id}
                  className="border-b-0 border-transparent hover:border-b-2  hover:border-black transition-width "
                >
                  <Link href={link.href}>{link.name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        {/* account and cart and menu icon */}
        <div className="flex gap-6 items-center">
          <div className="cart cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
          </div>
          <div className="account cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div
            className="menu cursor-pointer sm:hidden"
            onClick={() => setIsOpen((prevState) => (prevState = !prevState))}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
      {/* mobile menu items */}
      <ul
        className={`bg-white p-4 border-[1px] border-gray-300 z-50 ${
          isOpen ? "flex flex-col fixed right-0 left-0" : "hidden"
        }`}
      >
        {NavbarLinks.map((link) => {
          return (
            <li key={link.id} className="py-2">
              <Link href={link.href}>{link.name}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
