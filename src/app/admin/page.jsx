import Link from "next/link";
import React from "react";
import AnalyticsCard from "../components/AnalyticsCard";
import UserCard from "../components/UserCard";

export default function AdminPage() {
  return (
    <div className="admin-container grid gap-6 w-[96%] mx-auto my-0">
      <aside className="h-screen">
        <div className="toggle flex items-center justify-between mt-6">
          <div className="logo flex items-center justify-between gap-2">
            <img
              src="/images/tahani_logo.jpg"
              alt="logo"
              className="w-8 h-8 object-cover"
            />
            <h2>
              تهاني <span className="text-red-500">السعيدي</span>
            </h2>
          </div>
          <div className="close pl-4" id="colse-btn">
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
        <div className="sidebar flex flex-col bg-white shadow-xl rounded-2xl h-[88%] relative top-6 transition-all duration-300 ease-linear hover:shadow-none cursor-pointer">
          <Link
            href="/admin"
            className="flex items-center text-gray-600 h-14 gap-4 relative active:bg-gray-400 pr-8 transition-all duration-300 ease-in hover:text-blue-600 hover:mr-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M10 3.75a2 2 0 1 0-4 0 2 2 0 0 0 4 0ZM17.25 4.5a.75.75 0 0 0 0-1.5h-5.5a.75.75 0 0 0 0 1.5h5.5ZM5 3.75a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 .75.75ZM4.25 17a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5h1.5ZM17.25 17a.75.75 0 0 0 0-1.5h-5.5a.75.75 0 0 0 0 1.5h5.5ZM9 10a.75.75 0 0 1-.75.75h-5.5a.75.75 0 0 1 0-1.5h5.5A.75.75 0 0 1 9 10ZM17.25 10.75a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5h1.5ZM14 10a2 2 0 1 0-4 0 2 2 0 0 0 4 0ZM10 16.25a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z" />
            </svg>
            <h3>لوحة التحكم</h3>
          </Link>
          <Link
            href="/admin/users"
            className="flex items-center text-gray-600 h-14 gap-4 relative active:bg-gray-400 pr-8 transition-all duration-300 ease-in hover:text-blue-600 hover:mr-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
            <h3>المستخدمين</h3>
          </Link>
          <Link
            href="/admin/products"
            className="flex items-center text-gray-600 h-14 gap-4 relative active:bg-gray-400 pr-8 transition-all duration-300 ease-in hover:text-blue-600 hover:mr-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                clipRule="evenodd"
              />
            </svg>
            <h3>المنتجات</h3>
          </Link>
          <Link
            href="/admin/orders"
            className="flex items-center text-gray-600 h-14 gap-4 relative active:bg-gray-400 pr-8 transition-all duration-300 ease-in hover:text-blue-600 hover:mr-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z"
                clipRule="evenodd"
              />
            </svg>
            <h3>الطلبات</h3>
          </Link>
          <Link
            href="/admin/settings"
            className="flex items-center text-gray-600 h-14 gap-4 relative active:bg-gray-400 pr-8 transition-all duration-300 ease-in hover:text-blue-600 hover:mr-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M8.34 1.804A1 1 0 0 1 9.32 1h1.36a1 1 0 0 1 .98.804l.295 1.473c.497.144.971.342 1.416.587l1.25-.834a1 1 0 0 1 1.262.125l.962.962a1 1 0 0 1 .125 1.262l-.834 1.25c.245.445.443.919.587 1.416l1.473.294a1 1 0 0 1 .804.98v1.361a1 1 0 0 1-.804.98l-1.473.295a6.95 6.95 0 0 1-.587 1.416l.834 1.25a1 1 0 0 1-.125 1.262l-.962.962a1 1 0 0 1-1.262.125l-1.25-.834a6.953 6.953 0 0 1-1.416.587l-.294 1.473a1 1 0 0 1-.98.804H9.32a1 1 0 0 1-.98-.804l-.295-1.473a6.957 6.957 0 0 1-1.416-.587l-1.25.834a1 1 0 0 1-1.262-.125l-.962-.962a1 1 0 0 1-.125-1.262l.834-1.25a6.957 6.957 0 0 1-.587-1.416l-1.473-.294A1 1 0 0 1 1 10.68V9.32a1 1 0 0 1 .804-.98l1.473-.295c.144-.497.342-.971.587-1.416l-.834-1.25a1 1 0 0 1 .125-1.262l.962-.962A1 1 0 0 1 5.38 3.03l1.25.834a6.957 6.957 0 0 1 1.416-.587l.294-1.473ZM13 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                clipRule="evenodd"
              />
            </svg>

            <h3>الاعدادات</h3>
          </Link>
          <Link
            href="/admin/logout"
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
          </Link>
        </div>
      </aside>
      {/* end sidebar */}
      {/* main content */}
      <main className="mt-6">
        <h2>الاحصائيات</h2>
        <div className="analytics grid grid-cols-3 gap-6">
          {/* sales */}
          <AnalyticsCard
            title="اجمالي المبيعات"
            value="KWD 500.00"
            color="red"
            percentage="75%"
          />
          {/* sales */}
          <AnalyticsCard
            title="اجمالي المستخدمين"
            value="50"
            color="blue"
            percentage="35%"
          />
          {/* sales */}
          <AnalyticsCard
            title="اجمالي المنتجات"
            value="20"
            color="green"
            percentage="11%"
          />
        </div>
        {/* end analytics */}
        <div className="new-users mt-6">
          <h2>مستخدمين جدد</h2>
          <div className="user-list flex items-center justify-around flex-nowrap gap-6 ">
            <UserCard />
            <UserCard />
            <UserCard />
          </div>
        </div>
        {/* end new users */}
        <div className="recent-orders mt-6">
          <h2>الطلبات الحالية</h2>
          <table className="w-full bg-white p-4 text-center shadow-xl rounded-lg transition-all duration-300 ease-in hover:shadow-none">
            <thead>
              <tr>
                <th>اسم العميل</th>
                <th>رقم الطلب</th>
                <th>التاريخ</th>
                <th>الحالة</th>
                <th>السعر</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="h-10 border-b-2 border-gray-200 text-gray-600">
                  محمد محمد
                </td>
                <td className="h-10 border-b-2 border-gray-200 text-gray-600">
                  12345
                </td>
                <td className="h-10 border-b-2 border-gray-200 text-gray-600">
                  2022-01-01
                </td>
                <td className="h-10 border-b-2 border-gray-200 text-gray-600">
                  مكتملة
                </td>
                <td className="h-10 border-b-2 border-gray-200 text-gray-600">
                  500.00
                </td>
              </tr>
              <tr>
                <td className="h-10 border-b-2 border-gray-200 text-gray-600">
                  محمد محمد
                </td>
                <td className="h-10 border-b-2 border-gray-200 text-gray-600">
                  12345
                </td>
                <td className="h-10 border-b-2 border-gray-200 text-gray-600">
                  2022-01-01
                </td>
                <td className="h-10 border-b-2 border-gray-200 text-gray-600">
                  مكتملة
                </td>
                <td className="h-10 border-b-2 border-gray-200 text-gray-600">
                  500.00
                </td>
              </tr>
              <tr>
                <td className="h-10 border-b-2 border-gray-200 text-gray-600">
                  محمد محمد
                </td>
                <td className="h-10 border-b-2 border-gray-200 text-gray-600">
                  12345
                </td>
                <td className="h-10 border-b-2 border-gray-200 text-gray-600">
                  2022-01-01
                </td>
                <td className="h-10 border-b-2 border-gray-200 text-gray-600">
                  مكتملة
                </td>
                <td className="h-10 border-b-2 border-gray-200 text-gray-600">
                  500.00
                </td>
              </tr>
              <tr>
                <td className="h-10 border-b-2 border-gray-200 text-gray-600">
                  محمد محمد
                </td>
                <td className="h-10 border-b-2 border-gray-200 text-gray-600">
                  12345
                </td>
                <td className="h-10 border-b-2 border-gray-200 text-gray-600">
                  2022-01-01
                </td>
                <td className="h-10 border-b-2 border-gray-200 text-gray-600">
                  مكتملة
                </td>
                <td className="h-10 border-b-2 border-gray-200 text-gray-600">
                  500.00
                </td>
              </tr>
            </tbody>
          </table>

          <Link
            href="/admin/orders"
            className="block text-center  my-4 mx-auto text-blue-600"
          >
            عرض جميع الطلبات
          </Link>
        </div>
        {/* end recent orders */}
      </main>
      {/* end main */}
      {/* left section */}
      <div className="left-section mt-6">
        <nav className="flex justify-end gap-8">
          <button id="menu-btn" className="block mr-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75ZM2 10a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10Zm0 5.25a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <button
            id="dark-mode"
            className=" bg-gray-300 flex justify-between items-center h-6 w-16 cursor-pointer rounded-full"
          >
            {/* light mode */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 flex items-center justify-center"
            >
              <path d="M10 2a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 10 2ZM10 15a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 10 15ZM10 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM15.657 5.404a.75.75 0 1 0-1.06-1.06l-1.061 1.06a.75.75 0 0 0 1.06 1.06l1.06-1.06ZM6.464 14.596a.75.75 0 1 0-1.06-1.06l-1.06 1.06a.75.75 0 0 0 1.06 1.06l1.06-1.06ZM18 10a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 18 10ZM5 10a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 5 10ZM14.596 15.657a.75.75 0 0 0 1.06-1.06l-1.06-1.061a.75.75 0 1 0-1.06 1.06l1.06 1.06ZM5.404 6.464a.75.75 0 0 0 1.06-1.06l-1.06-1.06a.75.75 0 1 0-1.061 1.06l1.06 1.06Z" />
            </svg>
            {/* dark */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M7.455 2.004a.75.75 0 0 1 .26.77 7 7 0 0 0 9.958 7.967.75.75 0 0 1 1.067.853A8.5 8.5 0 1 1 6.647 1.921a.75.75 0 0 1 .808.083Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <div className="profile flex gap-8 text-right">
            <div className="info">
              <p>
                مرحبا <b>محمد</b>
              </p>
              <small className="text-muted">مدير</small>
            </div>
            <div className="profile-picture w-12 h-12 rounded-full">
              <img
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                className="w-full h-full rounded-full object-cover max-w-full"
              />
            </div>
          </div>
        </nav>
        {/* end of nav  */}
        <div className="user-profile flex justify-center text-center mt-4 bg-white p-4 rounded-lg shadow-xl cursor-pointer transition-all duration-300 ease-in hover:shadow-none">
          <div className="logo">
            <img
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="w-44 max-h-44 mb-3 rounded-full object-cover"
            />
            <h2 className="mb-[4px]">تهاني السعيدي</h2>
            <p>متجر ملابس العباية في الكويت</p>
          </div>
        </div>
        {/* end of user profile */}
        <div className="reminders mt-8">
          <div className="header flex items-center justify-between mb-3">
            <h2> التذكيرات</h2>
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
            <div className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
              </svg>

              <h3>اضافة تذكير</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
