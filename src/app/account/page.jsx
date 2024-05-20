"use client";
import { GlobalContext } from "@/context";
import {
  addNewAddress,
  deleteAddress,
  getAddress,
  updateAddress,
} from "@/services/address";

import { addNewAddressFormControls } from "@/utils";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { PulseLoader } from "react-spinners";
import { useRouter } from "next/navigation";
import InputComponent from "../components/formElements/inputComponent";
import Loader from "../components/Loader";
import ToastNotification from "../components/Notification";

export default function AccountPage() {
  const router = useRouter();
  const {
    user,
    address,
    setAddress,
    addressFormData,
    setAddressFormData,
    loader,
    setLoader,
    pageLoader,
    setPageLoader,
  } = useContext(GlobalContext);

  const [showAddressForm, setShowAddressForm] = useState(false);
  const [currentEditedAddressId, setCurrentEditedAddressId] = useState(null);
  const [isUpdateState, setIsUpdateState] = useState(false);
  // add or update address method

  async function handleAddOrUpdateAddress() {
    setLoader({ loading: true, id: "" });

    const response =
      currentEditedAddressId != null
        ? await updateAddress({
            ...addressFormData,
            _id: currentEditedAddressId,
          })
        : await addNewAddress({
            ...addressFormData,
            userID: user?.id,
          });
    if (response.success) {
      setAddress({ ...address, ...response.data });
      setLoader({ loading: false, id: "" });
      toast.success(response.message);

      setAddressFormData({
        fullName: "",
        address: "",
        country: "",
        city: "",
        postalCode: "",
      });
      setCurrentEditedAddressId(null);
      setIsUpdateState(false);
      await getAddress();
    } else {
      setLoader({ loading: false, id: "" });
      toast.error(response.message);
    }
  }

  useEffect(() => {
    async function getUserAddress() {
      setPageLoader(true);
      const response = await getAddress(user?.id);

      if (response.success) {
        setPageLoader(false);
        setAddress(response.data);
      } else {
        setPageLoader(false);
      }
    }
    getUserAddress();
  }, []);
  async function handleUpdateAddressButton(currentAddress) {
    setShowAddressForm(true);
    setIsUpdateState(true);
    setLoader({ loading: true, id: currentAddress._id });
    setAddressFormData({
      fullName: currentAddress.fullName,
      address: currentAddress.address,
      country: currentAddress.country,
      city: currentAddress.city,
      postalCode: currentAddress.postalCode,
    });
    setCurrentEditedAddressId(currentAddress._id);
  }
  async function handleDeleteAddress(id) {
    setLoader({ loading: true, id: id });
    setShowAddressForm(false);
    const response = await deleteAddress(id);
    if (response.success) {
      setLoader({ loading: false, id: "" });
      toast.success(response.message);
      setAddress({});
      await getAddress();
    } else {
      toast.error(response.message);
      setLoader({ loading: false, id: "" });
      await getAddress();
    }
  }
  useEffect(() => {
    if (user != null) {
      getAddress();
    }
  }, [user]);
  return (
    <section className="">
      {pageLoader ? (
        <div className="flex items-center justify-center h-screen">
          <PulseLoader
            loading={pageLoader}
            color="black"
            size={15}
            data-testid="loader"
          />
        </div>
      ) : (
        <div>
          <div className="mx-auto bg-gray-100 px-4 sm:px-6 lg:px-8">
            <div className="bg-white shadow">
              <div className="p-6 sm:p-12">
                <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-6">
                  {/* render random user image */}
                </div>
                <div className="flex flex-col flex-1">
                  <h1 className="text-lg font-semibold text-center md:text-left">
                    {user?.name}
                  </h1>
                  <p>{user?.email}</p>
                  <p>{user?.role}</p>
                </div>
                <button
                  className="text-center p-3 rounded-xl  my-4 mx-auto bg-blue-700 text-white w-60"
                  onClick={() => router.push("/orders")}
                >
                  طلباتي
                </button>

                <div className="mt-6">
                  <h1 className="font-bold text-lg">العناوين</h1>
                  <div className="mt-4">
                    {Object.keys(address).length > 0 ? (
                      <div className="border p-6">
                        <p>الاسم: {address.fullName}</p>
                        <p>الدولة: {address.country} </p>
                        <p>المدينة: {address.city}</p>
                        <p> الرمز البريدي:{address.postalCode} </p>
                        <p>العنوان: {address.address}</p>
                        <button
                          className="text-center p-3 rounded-xl  my-4 mx-auto bg-pink-700 text-white w-40 mr-2"
                          onClick={() => address}
                        >
                          {loader &&
                          loader.loading &&
                          isUpdateState &&
                          loader.id === address._id ? (
                            <Loader text="تحديث" color="white" size={2} />
                          ) : (
                            "تحديث"
                          )}
                        </button>
                        <button
                          className="text-center p-3 rounded-xl my-4 mx-auto bg-red-700 text-white  w-40 mr-2"
                          onClick={() => handleDeleteAddress(address._id)}
                        >
                          {loader &&
                          loader.loading &&
                          !isUpdateState &&
                          loader.id == address._id ? (
                            <Loader text="Deleting" color="white" size={2} />
                          ) : (
                            "حذف"
                          )}
                        </button>
                      </div>
                    ) : (
                      <p> لا يوجد عناوين</p>
                    )}
                  </div>
                </div>

                {Object.keys(address).length === 0 ? (
                  <div className="mt-4">
                    <button
                      className="text-center p-3 rounded-xl  my-4 mx-auto bg-blue-700 text-white w-60"
                      onClick={() =>
                        setShowAddressForm((prev) => (prev = !prev))
                      }
                    >
                      {showAddressForm ? "اخفاء العنوان" : "اضافة عنوان جديد"}
                    </button>
                  </div>
                ) : null}
                {/* add address form  */}
                {(showAddressForm && Object.keys(address).length === 0) ||
                isUpdateState ? (
                  <div className="flex flex-col mt-5 justify-center pt-4 items-center">
                    <div className="w-full mt-6 mr-0 mb-0 ml-0 space-y-8">
                      {addNewAddressFormControls.map((controlItem) => {
                        return (
                          <InputComponent
                            key={controlItem.id}
                            type={controlItem.type}
                            placeholder={controlItem.placeholder}
                            label={controlItem.label}
                            value={addressFormData[controlItem.id]}
                            onChange={(e) =>
                              setAddressFormData({
                                ...addressFormData,
                                [controlItem.id]: e.target.value,
                              })
                            }
                          />
                        );
                      })}
                    </div>
                    <button
                      className="text-center p-3 rounded-xl  my-4 mx-auto bg-blue-700 text-white w-44"
                      onClick={handleAddOrUpdateAddress}
                    >
                      {loader && loader.loading && !isUpdateState ? (
                        <Loader text="جاري تحميل..." color="white" size={5} />
                      ) : currentEditedAddressId ? (
                        "تحديث"
                      ) : (
                        "حفظ"
                      )}
                    </button>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
          <ToastNotification />
        </div>
      )}
    </section>
  );
}
