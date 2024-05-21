"use client";
import React, { useContext, useEffect, useState } from "react";
import AdminSideBar from "../components/AdminSideBar";
import AdminLeftNav from "../components/AdminLeftNav";
import { getUserByIdService } from "@/services/users";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { GlobalContext } from "@/context";

export default function AdminLayout({ children }) {
  const [isAsideOpen, setIsAsideOpen] = useState(false);
  const { user, setUser } = useContext(GlobalContext);
  const router = useRouter();

  useEffect(() => {
    async function getUserById() {
      const response = await getUserByIdService();
      if (response.success) {
        setUser(response.data);
        console.log(response.data);
        if (response.data != null) {
          if (response.data?.role !== "admin") {
            router.push("/");
          }
        } else {
          router.push("/login");
        }
      } else {
        toast.error(response.message);
        router.push("/login");
      }
    }
    getUserById();
  }, []);

  return (
    <div className="admin-container grid gap-6 w-[96%] mx-auto my-0">
      {user && user.role === "admin" && (
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
