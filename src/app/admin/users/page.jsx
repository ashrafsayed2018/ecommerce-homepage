"use client";
import { getAllUsersService, getRecentUsersService } from "@/services/users";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  async function getUsers() {
    const response = await getAllUsersService();
    if (response.success) {
      setUsers(response.data);
    } else {
      toast.error(response.message);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="mt-20">
      <h2 className="text-center mb-2 text-lg md:text-2xl">صفحة المستخدمين</h2>
      <div className="container mx-auto px-4 sm:px-8">
        <div className="py-8">
          {/* <div>
            <h2 className="text-2xl font-semibold leading-tight">Invoices</h2>
          </div> */}
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-right text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      الاسم
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-right text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      البريد الالكتروني
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-right text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      تاريخ الانضمام
                    </th>
                    {/* <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-right text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      الطلبات
                    </th> */}
                  </tr>
                </thead>
                <tbody>
                  {users &&
                    users.map((user) => (
                      <tr key={user._id}>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 w-10 h-10">
                              <img
                                className="w-full h-full rounded-full"
                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                alt=""
                              />
                            </div>
                            <div className="mr-3">
                              <p className="text-gray-900 whitespace-no-wrap">
                                {user.name}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {user.email}
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          {user.role}
                        </td>
                        {/* <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            $20,000
                          </p>
                          <p className="text-gray-600 whitespace-no-wrap">
                            USD
                          </p>
                        </td> */}
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
