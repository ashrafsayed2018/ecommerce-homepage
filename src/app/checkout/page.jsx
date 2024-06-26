"use client";
import { GlobalContext } from "@/context";
import { getToatalCartPrice } from "@/helpers/getTotalCartPrice";
import { getPriceAfterDiscount } from "@/helpers/priceAfterDiscount";
import { getAddress } from "@/services/address";
import { createNewOrder } from "@/services/order";
import { callStripeSession } from "@/services/stripe";
import { loadStripe } from "@stripe/stripe-js";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useContext, useEffect, useState } from "react";
import { PulseLoader } from "react-spinners";
import { toast } from "react-toastify";
import Link from "next/link";
import ToastNotification from "../components/Notification";
import Loader from "../components/Loader";
import { CartItems } from "@/utils";
import Cookies from "js-cookie";
export const dynamic = "force-dynamic";
export default function CheckoutPage() {
  const {
    user,
    setUser,
    setIsAuthUser,
    cartItems,
    address,
    setAddress,
    loader,
    setLoader,
  } = useContext(GlobalContext);
  const [isPaymentProcessing, setIsPaymentProcessing] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();

  async function getUserAddress() {
    const response = await getAddress(user?.id);
    if (response.success) {
      setAddress(response.data);
    }
    return response.data;
  }

  const stripePublishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY;
  const stripePromise = loadStripe(stripePublishableKey);

  // redirect to stripe checkout page
  async function handleCheckout() {
    const stripe = await stripePromise;
    const createLineItems = cartItems.map((item) => ({
      price_data: {
        currency: "usd",
        product_data: {
          images: [item.productID.imageUrl],
          name: item.productID.name,
        },
        unit_amount: getPriceAfterDiscount(item.productID) * 100,
      },
      quantity: 1,
    }));

    const response = await callStripeSession(createLineItems);
    if (response.success === false) {
      toast.error(response.message);
      setLoader(false);
      // logout the user
      setIsAuthUser(false);
      setUser(null);
      Cookies.remove("token");
      localStorage.removeItem("user");
      router.push("login");
      return;
    } else {
      const userAddress = await getAddress(user.id);
      const addressData = userAddress.data;
      setLoader(true);

      const { fullName, country, city, address, postalCode } = addressData;

      const checkoutFormData = {
        shippingAddress: { fullName, country, city, address, postalCode },
        paymentMethod: "",
        totalPrice: 0,
        isPaid: false,
        paidAt: new Date(),
        isProcessing: true,
      };
      setIsPaymentProcessing(true);
      localStorage.setItem("stripe", true);
      localStorage.setItem(
        "checkoutFormData",
        JSON.stringify(checkoutFormData)
      );
      const { sessionId } = response;
      const { error } = await stripe.redirectToCheckout({
        sessionId: response.id,
      });
      console.log(error);
    }
  }

  useEffect(() => {
    if (user?.id) {
      getUserAddress();
    }
  }, [user]);

  useEffect(() => {
    async function createFinalOrder() {
      const isStripe = JSON.parse(localStorage.getItem("stripe"));
      if (
        isStripe &&
        searchParams.get("status") === "success" &&
        cartItems &&
        cartItems.length > 0
      ) {
        setIsPaymentProcessing(true);
        const userAddress = await getAddress(user?.id);
        const addressData = userAddress.data;
        const { fullName, country, city, address, postalCode } = addressData;

        const checkoutFormData = {
          shippingAddress: { fullName, country, city, address, postalCode },
          paymentMethod: "",
          totalPrice: 0,
          isPaid: false,
          paidAt: new Date(),
          isProcessing: true,
        };
        const createFinalCheckoutFormData = {
          user: user?._id,
          shippingAddress: checkoutFormData.shippingAddress,
          orderItems: cartItems.map((item) => ({
            qty: 1,
            product: item.productID,
          })),
          paymentMethod: "Stripe",
          totalPrice: getToatalCartPrice(cartItems),
          isPaid: true,
          isProcessing: true,
          paidAt: new Date(),
        };

        const response = await createNewOrder(createFinalCheckoutFormData);

        if (response.success) {
          setIsPaymentProcessing(false);
          setOrderSuccess(true);
          toast.success(response.message);
        } else {
          setIsPaymentProcessing(true);
          setOrderSuccess(false);
          toast.error(response.message);
        }
      }
    }
    createFinalOrder();
  }, [searchParams.get("status"), cartItems]);
  useEffect(() => {
    if (orderSuccess) {
      setTimeout(() => {
        localStorage.removeItem("cartItems");
        router.push("/orders");
      }, 2000);
    }
  }, [orderSuccess]);

  if (isPaymentProcessing) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Suspense fallback={<PulseLoader color="black" size={15} />}>
          <PulseLoader
            loading={isPaymentProcessing}
            color="black"
            size={15}
            data-testid="loader"
          />
        </Suspense>
      </div>
    );
  }
  if (orderSuccess) {
    return (
      <Suspense fallback={<PulseLoader color="black" size={15} />}>
        <section className="h-screen bg-gray-200">
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mt-8 max-w-screen-xl px-4 sm:px-6 lg:px-8 ">
              <div className="bg-white shadow">
                <div className="px-4 py-6 sm:px-8 sm:py-10 flex flex-col gap-5">
                  <h1 className="font-bold text-lg">
                    تم الدفع بنجاح سيتم اعادة توجيهك بعد 2 ثواني
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Suspense>
    );
  }
  return (
    <Suspense fallback={<PulseLoader color="black" size={15} />}>
      <div>
        <div className="grid sm:px-10 md:grid-cols-2 lg:px-20 xl:px-32">
          <div className="px-4 pt-8">
            <p className="font-medium text-xl">تفاصيل الطلب</p>
            <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-5 h-[700px] overflow-y-auto">
              {cartItems && cartItems.length ? (
                cartItems.map((cartItem) => {
                  return (
                    <div
                      key={cartItem._id}
                      className="rounded-lg mb-4 border-b-2 border-b-gray-300"
                    >
                      <img
                        src={
                          cartItem &&
                          cartItem.productID &&
                          cartItem.productID.imageUrl
                        }
                        alt={cartItem.productID.name}
                        className="mt-2 h-24 w-28 rounded-md object-cover object-center"
                      />
                      <div className="flex w-full flex-col p-4 mb-2">
                        <span className="font-bold">
                          {cartItem &&
                            cartItem.productID &&
                            cartItem.productID.name}
                        </span>
                        <span className="font-semibold">
                          {" "}
                          د.ك{" "}
                          {cartItem &&
                            cartItem.productID &&
                            getPriceAfterDiscount(cartItem.productID)}
                        </span>
                      </div>
                      <div className="flex-1">
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
                })
              ) : (
                <div>عربة الشراء فارغة</div>
              )}
            </div>
          </div>
          <div className="mt-10 bg-gray-50 px-4 pt-8 py-4 sm:px-5 lg:mt-0">
            <p className="text-xl font-medium">عنوان الشحن</p>
            <p className="text-xl text-gray-400 font-bold">انهاءالطلب</p>
            <div className="w-full mt-6 mr-0 mb-0 ml-0 space-y-6">
              {Object.keys(address).length ? (
                <div className="border p-6">
                  <p> الاسم الكامل: {address.fullName}</p>
                  <p> الدولة: {address.country} </p>
                  <p> المدينة: {address.city}</p>
                  <p>الرمز البريدي:{address.postalCode} </p>
                  <p>العنوان: {address.address}</p>
                  <button
                    className="text-center p-3 rounded-xl  my-4 mx-auto bg-blue-700 text-white"
                    onClick={() => router.push("/account")}
                  >
                    تحديث العنوان
                  </button>
                </div>
              ) : (
                <button
                  className="navButton"
                  onClick={() => router.push("/account")}
                >
                  اضافة عنوان
                </button>
              )}
              <div className="mt-6 border-t border-b py-2 px-4 pt-8">
                <div className="flex items-center justify-center gap-4">
                  <p className="text-sm font-medium text-gray-900">الاجمالي</p>
                  <p className="text-lg font-bold text-gray-900">
                    {" "}
                    د.ك
                    {"  "}
                    {cartItems && cartItems.length
                      ? getToatalCartPrice(cartItems)
                      : 0}
                  </p>
                </div>

                <div className="flex items-center justify-center gap-4">
                  <p className="text-sm font-medium text-gray-900">
                    مصاريف الشحن
                  </p>
                  <p className="text-lg font-bold text-gray-900">مجانا</p>
                </div>

                <div className="flex items-center justify-center gap-4">
                  <p className="text-sm font-medium text-gray-900">الاجمالي</p>
                  <p className="text-lg font-bold text-gray-900">
                    {" "}
                    د.ك
                    {"  "}
                    {cartItems && cartItems.length
                      ? getToatalCartPrice(cartItems)
                      : 0}
                  </p>
                </div>

                <button
                  disabled={Object.keys(cartItems).length == 0}
                  className="text-center p-3 rounded-xl my-4 mx-auto bg-blue-700 text-white px-8 disabled:opacity-50 disabled:cursor-not-allowed"
                  onClick={() =>
                    Object.keys(cartItems).length == 0 ||
                    Object.keys(address).length == 0
                      ? null
                      : handleCheckout()
                  }
                >
                  {Object.keys(address).length == 0 ? (
                    <Link href="/account">اضف العنوان</Link>
                  ) : loader ? (
                    <Loader
                      text={"جاري التحميل"}
                      color={"#ffffff"}
                      size={"10px"}
                    />
                  ) : (
                    "تاكيد الطلب"
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
        <ToastNotification />
      </div>
    </Suspense>
  );
}
