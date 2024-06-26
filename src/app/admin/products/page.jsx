"use client";

import ToastNotification from "@/app/components/Notification";
import { deleteProductService, getAllAdminProducts } from "@/services/product";
import { faEdit } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function ProductsPage() {
  const createQueryString = (name, value) => {
    const params = new URLSearchParams();
    params.set(name, value);

    return params.toString();
  };
  const router = useRouter();
  const [products, setProducts] = useState([]);
  async function getProducts() {
    const response = await getAllAdminProducts();
    if (response.success) {
      setProducts(response.data);
    } else {
      toast.error(response.message);
    }
  }

  async function handleDeleteProduct(id) {
    // const response = await deleteProductService(id);

    // if (response.success) {
    //   toast.success(response.message);
    //   router.refresh();
    //   getProducts();
    // } else {
    //   toast.error(response.message);
    // }
    if (window.confirm("هل تريد حذف هذا المنتج?")) {
      // User confirmed deletion
      const response = await deleteProductService(id);

      if (response.success) {
        toast.success(response.message);
        router.refresh();
        getProducts();
      } else {
        toast.error(response.message);
      }
    } else {
      // User canceled deletion
      toast.error("تم الغاء الحذف");
    }
  }
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="mt-20">
      <h2 className="text-center mb-2 text-lg md:text-2xl">صفحة المنتجات</h2>
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
                      القسم
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-right text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      السعر
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-right text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      خصم
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-right text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      نسبة الخصم
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-right text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      حذف / تعديل
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {products &&
                    products.map((product) => (
                      <tr key={product._id}>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 w-10 h-10">
                              <img
                                className="w-full h-full rounded-full"
                                src={product.imageUrl}
                                alt=""
                              />
                            </div>
                            <div className="mr-3">
                              <p className="text-gray-900 whitespace-no-wrap">
                                {product.name}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {product.category}
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          {product.price}
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {product.onSale == "yes" ? "نعم" : "لا"}
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {product.priceDrop}
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm flex items-center justify-around">
                          {/* delete button */}
                          <button
                            onClick={() => handleDeleteProduct(product._id)}
                          >
                            <FontAwesomeIcon icon={faTrash} color="red" />
                          </button>
                          {/* edit button */}
                          <button
                            onClick={() => {
                              router.push(
                                "/admin/products/update/" +
                                  product._id +
                                  "?" +
                                  createQueryString(
                                    "key",
                                    JSON.stringify(product)
                                  )
                              );
                            }}
                          >
                            <FontAwesomeIcon icon={faEdit} color="blue" />
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <ToastNotification />
    </div>
  );
}
