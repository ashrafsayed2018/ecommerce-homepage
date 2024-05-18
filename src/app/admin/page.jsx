"use client";
import AnalyticsCard from "../components/AnalyticsCard";
import UserCard from "../components/UserCard";
import AdminRecentOrders from "../components/AdminRecentOrders";
import { getAllUsersService, getRecentUsersService } from "@/services/users";
import { useContext, useEffect, useState } from "react";
import { getAllUsersOrders } from "@/services/order";
import { toast } from "react-toastify";
import ToastNotification from "../components/Notification";
import { getAllAdminProducts } from "@/services/product";
import {
  faProductHunt,
  faSalesforce,
} from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { GlobalContext } from "@/context";
import { PulseLoader } from "react-spinners";

export default function AdminPage() {
  const { user, pageLoader, setPageLoader } = useContext(GlobalContext);
  const [allUsers, setAllUsers] = useState([]);
  const [recentUsers, setRecentUsers] = useState([]);
  const [totalOrdersAmount, setTotalOrdersAmount] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  // get all the users from the database
  async function getAllUsers() {
    setPageLoader(true);
    const response = await getAllUsersService();
    if (response.success) {
      setPageLoader(false);
      setAllUsers(response.data);
    } else {
      setPageLoader(false);
      toast.error(response.message);
    }
  }
  // get the latest 3 users from the database

  async function getRecentThreeUsers() {
    setPageLoader(true);
    const response = await getRecentUsersService();

    if (response.success) {
      setPageLoader(false);
      setRecentUsers(response.data);
    } else {
      setPageLoader(false);
      toast.error(response.message);
    }
  }

  async function getOrders() {
    setPageLoader(true);
    const response = await getAllUsersOrders();

    // get the accumulated total price of each order

    if (response.success) {
      setPageLoader(false);
      const orders = response.data;
      let totalAmount = 0;
      orders.forEach((order) => {
        totalAmount += order.totalPrice;
      });
      setTotalOrdersAmount(totalAmount);
    } else {
      setPageLoader(false);
      toast.error(response.message);
    }
  }

  // get all products

  async function getAllProducts() {
    setPageLoader(true);
    const response = await getAllAdminProducts();

    if (response.success) {
      setPageLoader(false);
      setProducts(response.data);
    } else {
      setPageLoader(false);
      toast.error(response.message);
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      setPageLoader(true);
      await getAllUsers();
      await getRecentThreeUsers();
      await getOrders();
      await getAllProducts();
      setLoading(false);
      setPageLoader(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex w-full h-screen items-center justify-center">
        <PulseLoader
          loading={loading}
          color="black"
          size={15}
          data-testid="loader"
        />
      </div>
    );
  }

  if (user && user.role === "admin") {
    // Render admin-specific content
    return pageLoader ? (
      <div className="flex w-full h-screen items-center justify-center">
        <PulseLoader
          loading={pageLoader}
          color="black"
          size={15}
          data-testid="loader"
        />
      </div>
    ) : (
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
  } else {
    // Redirect or render a different page for non-admin users
    return (
      <div className="flex w-full h-screen items-center justify-center">
        <p>غير مصرّح لك بالدخول إلى هذه الصفحة</p>
      </div>
    );
  }
}
