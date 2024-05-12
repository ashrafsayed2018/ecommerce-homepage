import Link from "next/link";

export default function AdminRecentOrders() {
  return (
    <div className="recent-orders mt-6">
      <h2 className="text-center mb-2">الطلبات الحالية</h2>
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
  );
}
