import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "@/context";
import { createRandomAvatar } from "@/helpers/createRandomAvatar";

export default function AdminLeftNav({ isAsideOpen, setIsAsideOpen }) {
  const [avatar, setAvatar] = useState("");
  const { user } = useContext(GlobalContext);
  useEffect(() => {
    createRandomAvatar(user, setAvatar);
  }, []);
  return (
    <div className="left-section mt-6">
      <nav className="flex justify-end gap-8">
        <button
          id="menu-btn"
          className="hidden mr-0"
          onClick={() => setIsAsideOpen(!isAsideOpen)}
        >
          {isAsideOpen ? (
            <FontAwesomeIcon
              icon={faTimes}
              color="gray"
              style={{ width: "16", height: "16" }}
            />
          ) : (
            <FontAwesomeIcon
              icon={faBars}
              color="gray"
              style={{ width: "16", height: "16" }}
            />
          )}
        </button>

        <div className=" md:w-full profile flex gap-8 items-center justify-between">
          <div className="info">
            <p>
              مرحبا <b>{user.name}</b>
            </p>
            <p>
              الصلاحية <b>{user.role}</b>
            </p>
          </div>
          <div className="profile-picture w-12 h-12 rounded-full">
            <img
              src={avatar}
              alt={user.name}
              className="w-full h-full rounded-full object-cover max-w-full"
            />
          </div>
        </div>
      </nav>
      {/* end of nav  */}
      <div className="user-profile flex justify-center text-center mt-4 bg-white p-4 rounded-lg shadow-xl cursor-pointer transition-all duration-300 ease-in hover:shadow-none">
        <div className="logo">
          <img
            src={avatar}
            alt={user.name}
            className="w-44 max-h-44 mb-3 rounded-full object-cover"
          />
          <h2 className="mb-[4px]">{user.name}</h2>
          <p>متجر ملابس العباية في الكويت</p>
        </div>
      </div>
      {/* end of user profile */}
      <div className="reminders mt-8">
        <div className="header flex items-center justify-between mb-3">
          <h2 className="text-center mb-2"> التذكيرات</h2>
          <span className="shadow-xl p-3 rounded-full cursor-pointer bg-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M4.214 3.227a.75.75 0 0 0-1.156-.955 8.97 8.97 0 0 0-1.856 3.825.75.75 0 0 0 1.466.316 7.47 7.47 0 0 1 1.546-3.186ZM16.942 2.272a.75.75 0 0 0-1.157.955 7.47 7.47 0 0 1 1.547 3.186.75.75 0 0 0 1.466-.316 8.971 8.971 0 0 0-1.856-3.825Z" />
              <path
                fillRule="evenodd"
                d="M10 2a6 6 0 0 0-6 6c0 1.887-.454 3.665-1.257 5.234a.75.75 0 0 0 .515 1.076 32.91 32.91 0 0 0 3.256.508 3.5 3.5 0 0 0 6.972 0 32.903 32.903 0 0 0 3.256-.508.75.75 0 0 0 .515-1.076A11.448 11.448 0 0 1 16 8a6 6 0 0 0-6-6Zm0 14.5a2 2 0 0 1-1.95-1.557 33.54 33.54 0 0 0 3.9 0A2 2 0 0 1 10 16.5Z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </div>
        <div className="notifications bg-white flex items-center gap-4 mb-3 p-5 rounded-lg shadow-xl cursor-pointer transition-all duration-300 ease-in hover:shadow-none">
          <div className="icon bg-green-700 text-white p-[.6rem] flex rounded-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M10.5 3.75a.75.75 0 0 0-1.264-.546L5.203 7H2.667a.75.75 0 0 0-.7.48A6.985 6.985 0 0 0 1.5 10c0 .887.165 1.737.468 2.52.111.29.39.48.7.48h2.535l4.033 3.796a.75.75 0 0 0 1.264-.546V3.75ZM16.45 5.05a.75.75 0 0 0-1.06 1.061 5.5 5.5 0 0 1 0 7.778.75.75 0 0 0 1.06 1.06 7 7 0 0 0 0-9.899Z" />
              <path d="M14.329 7.172a.75.75 0 0 0-1.061 1.06 2.5 2.5 0 0 1 0 3.536.75.75 0 0 0 1.06 1.06 4 4 0 0 0 0-5.656Z" />
            </svg>
          </div>
          <div className="content flex items-center justify-between m-0 w-full">
            <div className="info">
              <p>انتهت المدة طوال الانتظار للتحقق من الموافقة على الطلب</p>
              <span className="text-muted">منذ 2 ساعات</span>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M10 3a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM10 8.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM11.5 15.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" />
            </svg>
          </div>
        </div>

        <div className="notifications bg-white flex items-center gap-4 mb-3 p-5 rounded-lg shadow-xl cursor-pointer transition-all duration-300 ease-in hover:shadow-none deactive">
          <div className="icon bg-red-700 text-white p-[.6rem] flex rounded-xl">
            {/* edit svg */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="m2.695 14.762-1.262 3.155a.5.5 0 0 0 .65.65l3.155-1.262a4 4 0 0 0 1.343-.886L17.5 5.501a2.121 2.121 0 0 0-3-3L3.58 13.419a4 4 0 0 0-.885 1.343Z" />
            </svg>
          </div>
          <div className="content flex items-center justify-between m-0 w-full">
            <div className="info">
              <p>انتهت المدة طوال الانتظار للتحقق من الموافقة على الطلب</p>
              <span className="text-muted">منذ 2 ساعات</span>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M10 3a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM10 8.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM11.5 15.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" />
            </svg>
          </div>
        </div>

        <div className="notifications bg-white hover:bg-blue-500 hover:text-white flex items-center justify-center gap-4 mb-3 p-5 rounded-lg shadow-xl cursor-pointer transition-all duration-300 ease-in hover:shadow-none border-2 border-dotted border-gray-800 text-gray-600 add-reminder">
          <Link href="/admin/products/add" className="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
            </svg>

            <h3>اضافة منتج</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}
