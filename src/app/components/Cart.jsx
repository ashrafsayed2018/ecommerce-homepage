"use client";
import { getPriceAfterDiscount } from "@/helpers/priceAfterDiscount";
import { useContext } from "react";

import { getToatalCartPrice } from "@/helpers/getTotalCartPrice";
import { GlobalContext } from "../../context";
import { useRouter } from "next/navigation";
import Loader from "./Loader";
import Link from "next/link";

export default function Cart({ cartItems = [], handleDeleteItem, loader }) {
  const router = useRouter();
  const { user } = useContext(GlobalContext);
  return (
    <section className="h-screen bg-gray-100">
      <div className="mx-auto sm:px-6 lg:px-8">
        <div className="max-w-screen-xl mx-auto mt-8 sm:6 lg:px-8">
          <div className="bg-white shadow-lg">
            <div className="px-4 sm:px-8 py-6 sm:py-10">
              <div className="flow-root h-screen overflow-auto">
                {cartItems && cartItems.length ? (
                  <div>
                    {/* card list */}
                    <ul className="my-8">
                      {cartItems.map((cartItem, index) => {
                        return (
                          <div key={index}>
                            <li className="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0">
                              <div className="shrink-0">
                                <img
                                  src={cartItem.productID?.imageUrl}
                                  alt={cartItem.productID?.name}
                                  className="w-24 h-24 rounded-lg max-w-full object-cover"
                                />
                              </div>
                              <div className="flex flex-1 flex-col justify-between">
                                <div className="sm:col-gap-5 sm:grid sm:grid-cols-2">
                                  <div className="pr-8 sm:pr-4">
                                    <p className="text-base font-semibold text-gray-900">
                                      {cartItem.productID?.name}
                                    </p>
                                  </div>
                                  <div className="mt-4 flex gap-3 items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                                    <p className="shrink-0 w-20 text-basetext-gray-900 sm:order-1 sm:text-right sm:ml-8">
                                      {" "}
                                      kwd{" "}
                                      {cartItem.productID &&
                                        getPriceAfterDiscount(
                                          cartItem.productID
                                        )}
                                    </p>
                                    <button
                                      type="button"
                                      className="font-medium text-red-700 sm:order-2"
                                      onClick={() =>
                                        handleDeleteItem(cartItem._id)
                                      }
                                    >
                                      {loader &&
                                      loader.loading &&
                                      loader.id === cartItem._id ? (
                                        <Loader
                                          loading="جاري الحذف"
                                          color="red"
                                          size={20}
                                        />
                                      ) : (
                                        "حذف المنتج"
                                      )}
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <div>
                              <h3 className="text-xl mb-4 text-gray-800">
                                مقاسات المنتج
                              </h3>
                              <ul className="grid grid-cols-4 gap-6 bg-gray-200 p-2 rounded-xl">
                                <li className="flex gap-4 text-sm">
                                  <span>حجم الصدر</span>
                                  <span>{cartItem.chestSize}</span>
                                </li>
                                <li className="flex gap-4 text-sm">
                                  <span>حجم الكتف</span>
                                  <span>{cartItem.shoulderSize}</span>
                                </li>
                                <li className="flex gap-4 text-sm">
                                  <span>حجم الكم</span>
                                  <span>{cartItem.sleeveSize}</span>
                                </li>
                                <li className="flex gap-4 text-sm">
                                  <span>الطول</span>
                                  <span>{cartItem.fullLength}</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        );
                      })}
                    </ul>
                    <div className="mt-6 border-t border-b py-2">
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-600">الاجمالي</p>
                        <p className="text-lg text-black font-semibold">
                          د.ك
                          {"  "}
                          {cartItems && cartItems.length
                            ? getToatalCartPrice(cartItems)
                            : 0}
                        </p>
                      </div>

                      <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-600">مصاريف الشحن</p>
                        <p className="text-lg text-black font-semibold">
                          د.ك
                          {"  "} 0
                        </p>
                      </div>

                      <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-600">المجموع</p>
                        <p className="text-lg text-black font-semibold">
                          د.ك
                          {"  "}
                          {cartItems && cartItems.length
                            ? getToatalCartPrice(cartItems)
                            : 0}
                        </p>
                      </div>

                      <div className="mt-5 text-center">
                        <button
                          onClick={() => {
                            router.push("/checkout");
                          }}
                          className="text-center p-3 rounded-xl my-4 mx-auto bg-blue-700 text-white disabled:cursor-not-allowed disabled:opacity-60"
                          disabled={cartItems && cartItems.length == 0}
                        >
                          الدفع
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-around h-[90%]">
                    <h1 className="font-bold text-lg">عفوا ليس لديك منتجات</h1>
                    <Link
                      href="/"
                      className="bg-blue-700 text-white text-center p-3 rounded-xl"
                    >
                      اضافة منتجات
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
