"use client";
import React, { useState } from "react";
import AdminSideBar from "../components/AdminSideBar";
import AdminLeftNav from "../components/AdminLeftNav";

export default function AdminLayout({ children }) {
  const [isAsideOpen, setIsAsideOpen] = useState(false);
  return (
    <div className="admin-container grid gap-6 w-[96%] mx-auto my-0">
      <AdminSideBar isAsideOpen={isAsideOpen} setIsAsideOpen={setIsAsideOpen} />

      {children}
      {/* left section */}
      <AdminLeftNav isAsideOpen={isAsideOpen} setIsAsideOpen={setIsAsideOpen} />
    </div>
  );
}
