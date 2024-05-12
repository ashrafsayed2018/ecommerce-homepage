"use client";
import { useState } from "react";
import AnalyticsCard from "../components/AnalyticsCard";
import UserCard from "../components/UserCard";
import AdminSideBar from "../components/AdminSideBar";
import AdminLeftNav from "../components/AdminLeftNav";
import AdminRecentOrders from "../components/AdminRecentOrders";

export default function AdminPage() {
  const [isAsideOpen, setIsAsideOpen] = useState(false);
  console.log(isAsideOpen);

  return (
    <div className="admin-container grid gap-6 w-[96%] mx-auto my-0">
      <AdminSideBar isAsideOpen={isAsideOpen} setIsAsideOpen={setIsAsideOpen} />
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
          <h2 className="text-center mb-2">مستخدمين جدد</h2>
          <div className="user-list flex items-center justify-around flex-nowrap gap-6 ">
            <UserCard />
            <UserCard />
            <UserCard />
          </div>
        </div>
        {/* end new users */}
        <AdminRecentOrders />
        {/* end recent orders */}
      </main>
      {/* end main */}
      {/* left section */}
      <AdminLeftNav isAsideOpen={isAsideOpen} setIsAsideOpen={setIsAsideOpen} />
    </div>
  );
}
