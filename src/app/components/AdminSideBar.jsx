"use client";

import { GlobalContext } from "@/context";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { AdminLinks } from "@/utils";
import Link from "next/link";
import { useContext } from "react";
export default function AdminSideBar({ isAsideOpen, setIsAsideOpen }) {
  const router = useRouter();
  const { user, setUser, setIsAuthUser, siteSetting } =
    useContext(GlobalContext);
  const handleLogout = () => {
    setIsAuthUser(false);
    setUser({});
    Cookies.remove("token");
    localStorage.clear();
    router.push("/");
  };
  return (
    <aside
      className={`h-screen  ${isAsideOpen ? "block" : "hidden md:block"} block`}
    >
      <div className="toggle  flex items-center justify-between ">
        <Link href="/" className="logo flex items-center justify-between gap-2">
          <img
            src={`${siteSetting?.logoUrl || "/images/tahani_logo.jpg"}`}
            alt="logo"
            className="w-8 h-8 object-cover"
          />
          <h2 className="hidden sm:block">
            تهاني <span className="text-red-500">السعيدي</span>
          </h2>
        </Link>
        <div
          className="close md:hidden pl-4"
          id="colse-btn"
          onClick={() => setIsAsideOpen(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
          </svg>
        </div>
      </div>
      {/* sidebar */}
      <div className="sidebar flex flex-col bg-white shadow-2xl rounded-2xl h-[88%] relative top-6 transition-all duration-300 ease-linear hover:shadow-none cursor-pointer">
        {AdminLinks.map((link) => (
          <Link
            key={link.id}
            href={link.href}
            className="flex items-center text-gray-600 h-14 gap-4 relative active:bg-gray-400 pr-8 transition-all duration-300 ease-in hover:text-blue-600 hover:mr-2"
          >
            {link.icon}
            <h3> {link.name} </h3>
          </Link>
        ))}

        <button
          onClick={handleLogout}
          className="w-full flex items-center text-gray-600 h-14 gap-4 active:bg-gray-400 pr-8 transition-all duration-300 ease-in absolute bottom-8 hover:text-blue-600 hover:mr-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M17 4.25A2.25 2.25 0 0 0 14.75 2h-5.5A2.25 2.25 0 0 0 7 4.25v2a.75.75 0 0 0 1.5 0v-2a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 .75.75v11.5a.75.75 0 0 1-.75.75h-5.5a.75.75 0 0 1-.75-.75v-2a.75.75 0 0 0-1.5 0v2A2.25 2.25 0 0 0 9.25 18h5.5A2.25 2.25 0 0 0 17 15.75V4.25Z"
              clipRule="evenodd"
            />
            <path
              fillRule="evenodd"
              d="M14 10a.75.75 0 0 0-.75-.75H3.704l1.048-.943a.75.75 0 1 0-1.004-1.114l-2.5 2.25a.75.75 0 0 0 0 1.114l2.5 2.25a.75.75 0 1 0 1.004-1.114l-1.048-.943h9.546A.75.75 0 0 0 14 10Z"
              clipRule="evenodd"
            />
          </svg>

          <h3>تسجيل الخروج</h3>
        </button>
      </div>
    </aside>
  );
}
