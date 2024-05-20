import { getLatestOrders } from "@/services/order";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";
import ToastNotification from "./Notification";
import { useRouter } from "next/navigation";

export default function AdminRecentOrders() {
  const [recentOrders, setRecentOrders] = useState([]);
  const router = useRouter();
  async function getRecentOrders() {
    const response = await getLatestOrders();
    if (response.success) {
      setRecentOrders(response.data);
    } else {
      toast.error(response.message);
    }
  }
  useState(() => {
    getRecentOrders();
  }, []);

  return (
    <div className="recent-orders mt-6">
      <h2 className="text-center mb-2">الطلبات الحالية</h2>
      {recentOrders && recentOrders.length > 0 ? (
        <div>
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
              {recentOrders.map((order) => (
                <tr
                  key={order._id}
                  onClick={() => router.push(`/orders/${order._id}`)}
                  className="cursor-pointer"
                >
                  <td className="h-10 border-b-2 border-gray-200 text-gray-600">
                    {order.user.name}
                  </td>
                  <td className="h-10 border-b-2 border-gray-200 text-gray-600">
                    {order._id}
                  </td>
                  <td className="h-10 border-b-2 border-gray-200 text-gray-600">
                    {order.createdAt.split("T")[0]}
                  </td>
                  <td className="h-10 border-b-2 border-gray-200 text-gray-600">
                    {order.isPaid ? (
                      <span className="bg-green-600 text-white p-2 rounded-sm">
                        مكتملة
                      </span>
                    ) : (
                      <span className="bg-red-600 text-white p-2 rounded-sm">
                        غير مكتملة
                      </span>
                    )}
                  </td>
                  <td className="h-10 border-b-2 border-gray-200 text-gray-600">
                    {order.totalPrice}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <Link
            href="/admin/orders"
            className="block text-center  my-4 mx-auto text-blue-600"
          >
            عرض جميع الطلبات
          </Link>
        </div>
      ) : (
        <p className="text-center text-red-500">لا يوجد طلبات حاليه</p>
      )}

      <ToastNotification />
    </div>
  );
}
