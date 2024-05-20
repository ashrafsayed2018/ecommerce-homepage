"use client";

import { useContext, useState } from "react";
import { GlobalContext } from "@/context";
import { toast } from "react-toastify";
import { addToCart } from "@/services/cart";
import Loader from "./Loader";
import ToastNotification from "./Notification";
import { ProductDimensionsformControls } from "@/utils";
import InputComponent from "./formElements/inputComponent";
const initialFormData = ProductDimensionsformControls.reduce((acc, curr) => {
  acc[curr.id] = "";
  return acc;
}, {});

export default function ProductDetails({ product }) {
  const [formData, setFormData] = useState(initialFormData);
  const { loader, setLoader, setShowCartModal, user } =
    useContext(GlobalContext);

  function isFormValid() {
    const { chestSize, shoulderSize, sleeveSize, fullLength } = formData;

    return (
      chestSize.trim() !== "" &&
      shoulderSize.trim() !== "" &&
      sleeveSize.trim() !== "" &&
      fullLength.trim() != []
    );
  }
  async function handleAddToCart(product) {
    setLoader({ loading: true, id: product._id });
    if (isFormValid()) {
      const response = await addToCart({
        productID: product._id,
        userID: user.id,
        ...formData,
      });
      if (response.success) {
        toast.success(response.message);
        setShowCartModal(true);
        setLoader({ loading: false, id: "" });
        setFormData(initialFormData);
      } else {
        setShowCartModal(true);
        setLoader({ loading: false, id: "" });
        toast.error(response.message);
      }
    } else {
      setLoader({ loading: false, id: "" });
      toast.error("من فضلك اكمل البيانات");
    }
  }
  console.log(formData, "formData");
  return (
    <section className="mx-auto mt-6 max-w-screen-xl sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="lg:col-gap-12 xl:col-gap-12 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-3 lg:row-end-1">
            <div className="lg:flex items-start">
              <div className="lg:order-2 lg:ml-5">
                <div className="max-w-xl h-[500px] overflow-hidden rounded-lg">
                  <img
                    src={product.imageUrl}
                    className="w-full h-full object-cover"
                    alt={product.name}
                  />
                </div>
              </div>
              {/*  product 2 images */}
              <div className="mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0">
                <div className="flex-row items-start lg:flex-col">
                  <button
                    type="button"
                    className="flex-shrink-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-gray-200 text-center"
                  >
                    <img
                      src={product.imageUrl}
                      className="w-full h-full object-cover"
                      alt={product.name}
                    />
                  </button>
                  <button
                    type="button"
                    className="flex-shrink-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-gray-200 text-center"
                  >
                    <img
                      src={product.imageUrl}
                      className="w-full h-full object-cover"
                      alt={product.name}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* product details */}
          <div className="lg:col-span-2 lg:row-span-2 lg:row-end-2 ">
            <h1 className="sm:text-2xl font-bold text-gray-900 mb-6">
              {product.name}
            </h1>

            <div className="flex items-center gap-3 my-4">
              <h1
                className={`text-sm lg:text-xl font-bold ${
                  product.onSale === "yes" ? "line-through" : ""
                }`}
              >
                د.ك
                {"  "} {product.price}
              </h1>
              {product.onSale === "yes" ? (
                <p className="text-sm lg:text-xl text-red-700">
                  <span className="text[10px]">
                    {" "}
                    د.ك
                    {"  "}{" "}
                  </span>
                  {(
                    product.price -
                    product.price * (product.priceDrop / 100)
                  ).toFixed(2)}
                </p>
              ) : null}
            </div>
            {/* product dimensions form */}
            <div className="mt-12">
              {ProductDimensionsformControls.map((controlItem, index) => (
                <div className="w-full mb-8" key={index}>
                  <InputComponent
                    label={controlItem.label}
                    type={controlItem.type}
                    placeholder={controlItem.placeholder}
                    value={formData[controlItem.id]}
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        [controlItem.id]: e.target.value,
                      });
                    }}
                  />
                </div>
              ))}
            </div>
            <div className="mt-10 flex flex-col items-center justify-between space-y-4 border-t border-b py-4 sm:flex-row sm:space-y-0">
              <button
                className=" w-3/5 text-center p-3 rounded-xl  my-4 mx-auto bg-blue-700 text-white"
                onClick={() => handleAddToCart(product)}
              >
                {loader && loader.loading && loader.id == product._id ? (
                  <Loader
                    text="جاري الاضافة ..."
                    loading={loader}
                    color="white"
                  />
                ) : (
                  "اضافة للسلة"
                )}
              </button>
            </div>
            <ul className="mt-8 space-y-2">
              <li className="flex items-center text-left text-sm font-medium text-gray-600">
                {product.deliveryInfo}
              </li>
              <li className="flex items-center text-left text-sm font-medium text-gray-600">
                الغاء في اي وقت
              </li>
            </ul>
            <div className="lg:col-span-3">
              <div className="border-b border-gary-400">
                <nav className="flex gap-4">
                  <a
                    href=""
                    className="border-b-2 border-gray-900 text-gray-900 py-4 text-sm font-medium"
                  >
                    وصف المنتج
                  </a>
                </nav>
              </div>
              <p className="mt-2 flow-root sm:mt-4 text-gray-800">
                {product.description}
              </p>
            </div>
          </div>
        </div>
      </div>
      <ToastNotification />
    </section>
  );
}
