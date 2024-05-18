"use client";

import { GlobalContext } from "@/context";
import { getAllUserOrder } from "@/services/order";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import { PulseLoader } from "react-spinners";
import { toast } from "react-toastify";
import Link from "next/link";
import ToastNotification from "../components/Notification";

export default function Orders() {
  const {
    user,
    pageLoader,
    setPageLoader,
    allOrdersForUser,
    setAllOrdersForUser,
  } = useContext(GlobalContext);

  const router = useRouter();

  async function extractAllOrders() {
    setPageLoader(true);
    const res = await getAllUserOrder(user?.id);
    if (res.success) {
      setPageLoader(false);
      setAllOrdersForUser(res.data);
      toast.success(res.message);
    } else {
      setPageLoader(false);
      toast.error(res.message);
    }
  }

  useEffect(() => {
    if (user !== null) extractAllOrders();
  }, [user]);

  if (pageLoader) {
    return (
      <div className="w-full min-h-screen flex justify-center items-center">
        <PulseLoader
          color={"#000000"}
          loading={pageLoader}
          size={30}
          data-testid="loader"
        />
      </div>
    );
  }

  return (
    <section>
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-8 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div>
            <div className="px-4 py-6 sm:px-8 sm:py-10">
              <div className="flow-root">
                {allOrdersForUser && allOrdersForUser.length ? (
                  <ul className="flex flex-col gap-4 overflow-x-auto">
                    {allOrdersForUser.map((item) => (
                      <li
                        key={item._id}
                        className="bg-gray-200 shadow p-5 flex flex-col space-y-3 py-6 text-left overflow-x-auto hover:bg-gray-300 cursor-pointer transition-all duration-300"
                      >
                        <div className="flex items-center justify-between ">
                          <h1 className=" text-[12px] font-semibold">
                            # الطلب : {item._id}
                          </h1>
                          <div className="flex items-center">
                            <p className="mr-3 text-sm text-gray-900">المبلغ</p>
                            <p className="mr-1 text-lg  font-semibold text-gray-900">
                              {" "}
                              د.ك {item.totalPrice}
                            </p>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          {item.orderItems.map((orderItem, index) => (
                            <div key={index} className="shrink-0">
                              <img
                                alt="Order Item"
                                className="h-24 w-24 max-w-full rounded-lg object-cover"
                                src={
                                  orderItem &&
                                  orderItem.product &&
                                  orderItem.product.imageUrl
                                }
                              />
                            </div>
                          ))}
                        </div>
                        <div className="flex gap-5">
                          <button
                            className={`disabled:opacity-50 mt-5 mr-5  inline-block   text-center p-3 rounded-xl my-4 mx-auto ${
                              item.isProcessing ? "bg-red-700" : "bg-green-700"
                            } text-white`}
                          >
                            {item.isProcessing
                              ? "الطلب في الانتظار"
                              : "الطلب تحت التوصيل"}
                          </button>
                          <button
                            onClick={() => router.push(`/orders/${item._id}`)}
                            className=" mt-5 mr-5  inline-block text-center p-3 rounded-xl my-4 mx-auto bg-blue-700 text-white"
                          >
                            عرض تفاصيل الطلب
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="flex flex-col justify-center items-center h-screen">
                    <p>لا يوجد طلبات</p>
                    <Link href="/" className="bg-blue-700 text-white px-5 py-3">
                      <p className="text-center">اضف منتج جديد</p>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastNotification />
    </section>
  );
}
