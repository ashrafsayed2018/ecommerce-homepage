"use client";

import Loader from "@/app/components/Loader";
import ToastNotification from "@/app/components/Notification";
import { GlobalContext } from "@/context";
import { getAllUserOrder, updateOrderStatus } from "@/services/order";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import { PulseLoader } from "react-spinners";
import { toast } from "react-toastify";

export default function Orders() {
  const {
    user,
    loader,
    setLoader,
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
  async function handleUpdateOrderStatus(item) {
    const response = await updateOrderStatus({
      ...item,
      isProcessing: false,
    });

    if (response.success) {
      extractAllOrders();
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
      <div className="mx-auto sm:px-6 lg:px-8">
        <div className="mt-8 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
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
                        <div className="flex items-center justify-between">
                          <h1 className=" text-sm">#الطلب : {item._id}</h1>
                          <div className="flex items-center">
                            <p className="mr-3 text-sm font-medium text-gray-900">
                              اجمالي المبلغ :
                            </p>
                            <p className="mr-1 text-lg   text-gray-900">
                              {" "}
                              kwd {item.totalPrice}
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
                            onClick={() => handleUpdateOrderStatus(item)}
                            disabled={!item.isProcessing}
                            className="disabled:opacity-50 mt-5 mr-5  inline-block bg-black text-white px-5 py-3 text-xs font-medium uppercase tracking-wide"
                          >
                            {loader &&
                            loader.loading &&
                            loader.id === item._id ? (
                              <Loader
                                text={"جاري تحديث حالة الطلب"}
                                color={"#ffffff"}
                                loading={pageLoader && pageLoader.loading}
                              />
                            ) : item.isProcessing ? (
                              "الطلب قيد التنفيذ"
                            ) : (
                              "الطلب تحت التنفيذ"
                            )}
                          </button>
                          <button
                            onClick={() => router.push(`/orders/${item._id}`)}
                            className=" mt-5 mr-5  inline-block bg-black text-white px-5 py-3 text-xs font-medium uppercase tracking-wide"
                          >
                            تفاصيل الطلب
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastNotification />
    </section>
  );
}
