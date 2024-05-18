"use client";
import React, { useEffect, useState } from "react";
import AdminSideBar from "../components/AdminSideBar";
import AdminLeftNav from "../components/AdminLeftNav";
import { getUserByIdService } from "@/services/users";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function AdminLayout({ children }) {
  const [isAsideOpen, setIsAsideOpen] = useState(false);
  const [user, setUser] = useState({});
  const router = useRouter();

  useEffect(() => {
    async function getUserById() {
      const response = await getUserByIdService();

      if (response.success) {
        setUser(response.data);
      } else {
        toast.error(response.message);
      }
    }
    getUserById();
  }, []);

  useEffect(() => {
    if (user.role && user.role !== "admin") {
      router.push("/");
    }
  }, [user, router]);

  return (
    <div className="admin-container grid gap-6 w-[96%] mx-auto my-0">
      {user.role === "admin" && (
        <>
          <AdminSideBar
            isAsideOpen={isAsideOpen}
            setIsAsideOpen={setIsAsideOpen}
          />
          <div className="overflow-x-auto">{children}</div>
          <AdminLeftNav
            isAsideOpen={isAsideOpen}
            setIsAsideOpen={setIsAsideOpen}
          />
        </>
      )}
    </div>
  );
}
