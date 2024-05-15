"use client";
import { GlobalContext } from "@/context";
import { useContext, Fragment, useEffect } from "react";
import { deleteFromCart, getAllCartItems } from "@/services/cart";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { getPriceAfterDiscount } from "@/helpers/priceAfterDiscount";
import CommonModal from "./CommonModal";
import Loader from "./Loader";

export default function CartModal() {
  const router = useRouter();
  const {
    showCartModal,
    setShowCartModal,
    user,
    cartItems,
    setCartItems,
    loader,
    setLoader,
  } = useContext(GlobalContext);

  async function handleDeleteItem(id) {
    setLoader({ loading: true, id: id });
    const response = await deleteFromCart(id);
    if (response.success) {
      setLoader({ loading: false, id: "" });
      toast.success(response.message);
      extractAllCartItems();
      console.log(cartItems.length);
    } else {
      setLoader({ loading: false, id: "" });
      toast.error(response.message);
    }
  }
  async function extractAllCartItems() {
    const response = await getAllCartItems(user?.id);
    if (response.success) {
      setCartItems(response.data);
      localStorage.setItem("cartItems", JSON.stringify(response.data));
    } else {
    }
  }
  useEffect(() => {
    if (user !== null && user) {
      extractAllCartItems();
    }
  }, [user]);
  console.log(cartItems);
  return (
    <CommonModal
      showButtons={true}
      modalTitle={"منتجات العربة"}
      show={showCartModal}
      setShow={setShowCartModal}
      buttonComponent={
        <Fragment>
          <div className="w-full flex items-center justify-between">
            <button
              className="text-center p-3 rounded-xl  my-4 mx-auto bg-blue-700 text-white"
              onClick={() => {
                router.push("/cart");
                setShowCartModal(false);
              }}
            >
              عرض السلة
            </button>
            <button
              onClick={() => {
                router.push("/checkout");
                setShowCartModal(false);
              }}
              className="text-center p-3 rounded-xl my-4 mx-auto bg-green-700 text-white min-w-20 disabled:opacity-60 disabled:cursor-not-allowed"
              disabled={cartItems && cartItems.length == 0}
            >
              الدفع
            </button>
          </div>

          <div className="mt-6 flex justify-center text-sm text-gray-600">
            <button
              className="font-medium text-gray-800"
              onClick={() => setShowCartModal(false)}
            >
              الاستمرار في التسوق
              <span aria-hidden="true"> &larr;</span>
            </button>
          </div>
        </Fragment>
      }
      mainContent={
        cartItems && cartItems.length > 0 ? (
          <ul role="list" className="w-full -my-6 divide-y divide-gray-200">
            {cartItems.map((cartItem) => {
              return (
                <li
                  key={cartItem._id}
                  className="w-full grid grid-cols-2 py-6  items-center space-x-8 bg-gray-200 my-4 "
                >
                  <div className="w-24 h-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <img
                      src={cartItem.productID.imageUrl}
                      alt={cartItem.productID.name}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="ml-4 flex flex-1 flex-col justify-around h-full">
                    <div>
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <a href="">
                          {cartItem.productID.name.length > 30
                            ? cartItem.productID.name.slice(0, 30) + "..."
                            : cartItem.productID.name}
                        </a>
                      </div>
                      <p className="mt-1 text-sm text-gray-600">
                        د.ك
                        {"  "} {getPriceAfterDiscount(cartItem.productID)}
                      </p>
                    </div>
                    <div className="flex flex-1 items-end justify-between text-sm">
                      <button
                        type="button"
                        className="font-medium text-red-400 sm:order-2"
                        onClick={() => handleDeleteItem(cartItem._id)}
                      >
                        {loader &&
                        loader.loading &&
                        loader.id === cartItem._id ? (
                          <Loader text={"جاري الحذف ..."} color="red" />
                        ) : (
                          "حذف"
                        )}
                      </button>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        ) : null
      }
    />
  );
}
