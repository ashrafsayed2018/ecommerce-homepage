"use client";
import AnalyticsCard from "../components/AnalyticsCard";
import UserCard from "../components/UserCard";
import AdminRecentOrders from "../components/AdminRecentOrders";
import { getAllUsersService, getRecentUsersService } from "@/services/users";
import { useEffect, useState } from "react";
import { getAllUsersOrders } from "@/services/order";
import { toast } from "react-toastify";
import ToastNotification from "../components/Notification";
import { getAllAdminProducts } from "@/services/product";
import {
  faProductHunt,
  faSalesforce,
} from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function AdminPage() {
  const [allUsers, setAllUsers] = useState([]);
  const [recentUsers, setRecentUsers] = useState([]);

  const [totalOrdersAmount, setTotalOrdersAmount] = useState([]);
  const [products, setProducts] = useState([]);

  // get all the users from the database
  async function getAllUsers() {
    const response = await getAllUsersService();
    if (response.success) {
      setAllUsers(response.data);
    } else {
      toast.error(response.message);
    }
  }
  // get the latest 3 users from the database

  async function getRecentThreeUsers() {
    const response = await getRecentUsersService();

    if (response.success) {
      setRecentUsers(response.data);
    } else {
      toast.error(response.message);
    }
  }

  async function getOrders() {
    const response = await getAllUsersOrders();

    // get the accumulated total price of each order

    if (response.success) {
      const orders = response.data;
      let totalAmount = 0;
      orders.forEach((order) => {
        totalAmount += order.totalPrice;
      });
      setTotalOrdersAmount(totalAmount);
    } else {
      toast.error(response.message);
    }
  }

  // get all products

  async function getAllProducts() {
    const response = await getAllAdminProducts();

    if (response.success) {
      setProducts(response.data);
    } else {
      toast.error(response.message);
    }
  }
  useEffect(() => {
    getAllUsers();
    getRecentThreeUsers();
    getOrders();
    getAllProducts();
  }, []);

  return (
    <main className="mt-6">
      <h2>الاحصائيات</h2>
      <div className="analytics grid grid-cols-3 gap-6">
        {/* sales */}
        <AnalyticsCard
          title="اجمالي المبيعات"
          value={`${totalOrdersAmount} د.ك`}
          color="red"
          icon={faSalesforce}
        />
        {/* sales */}
        <AnalyticsCard
          title="اجمالي المستخدمين"
          value={allUsers.length}
          color="blue"
          icon={faUser}
        />
        {/* sales */}
        <AnalyticsCard
          title="اجمالي المنتجات"
          value={products.length}
          color="green"
          icon={faProductHunt}
        />
      </div>
      {/* end analytics */}
      <div className="new-users mt-6">
        <h2 className="text-center mb-2">مستخدمين جدد</h2>
        <div className="user-list flex items-center justify-around flex-nowrap gap-6 ">
          {recentUsers && recentUsers.length > 0 ? (
            recentUsers.map((user) => <UserCard key={user._id} user={user} />)
          ) : (
            <p>لا يوجد مستخدمين جدد</p>
          )}
        </div>
      </div>
      {/* end new users */}
      <AdminRecentOrders />
      {/* end recent orders */}
      <ToastNotification />
    </main>
  );
}
