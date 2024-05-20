"use client";
import InputComponent from "@/app/components/formElements/inputComponent";
import Loader from "@/app/components/Loader";
import Notification from "@/app/components/Notification";
import { GlobalContext } from "@/context";
import { RegisterUserService } from "@/services/register";
import { RegistrationFormControls } from "@/utils";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { toast } from "react-toastify";

export default function RegisterPage() {
  const { loader, setLoader } = useContext(GlobalContext);
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "customer",
  });
  function isFormValid() {
    const { name, email, password, confirmPassword, role } = formData;

    return (
      name.trim() !== "" &&
      email.trim() !== "" &&
      password.trim() !== "" &&
      password.length >= 8 &&
      confirmPassword.trim() !== "" &&
      role.trim() !== ""
    );
  }
  async function handleRegister() {
    if (isFormValid()) {
      setLoader(true);
      const response = await RegisterUserService(formData);
      if (response.success) {
        toast.success(response.message);
        setLoader(false);
        setFormData({
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
          role: "customer",
        });
        router.push("/login");
      } else {
        setLoader(false);
        toast.error(response.message);
      }
    }
  }
  return (
    <div className="w-11/12 md:max-w-[480px] mx-auto my-10 p-8 rounded-lg shadow-xl">
      <img
        src="/images/tahani_logo.jpg"
        className="w-20 h-20 block mx-auto"
        alt="logo"
      />
      <div className="mt-10">
        {RegistrationFormControls.map((control) => (
          <InputComponent
            key={control.id}
            label={control.label}
            labelFor={control.id}
            placeholder={control.placeholder}
            type={control.type}
            onChange={(event) =>
              setFormData({
                ...formData,
                [control.id]: event.target.value,
              })
            }
            value={formData[control.id]}
          />
        ))}

        <button
          className={`w-full flex items-center justify-center  text-white font-bold py-2 px-4 rounded hover:scale-105 transition-all duration-300  ${
            isFormValid()
              ? "cursor-pointer bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
              : "cursor-not-allowed bg-gray-500"
          }`}
          disabled={!isFormValid}
          onClick={handleRegister}
        >
          {loader ? (
            <Loader text="جاري التسجيل" color="white" loading={loader} />
          ) : (
            "تسجيل للموقع"
          )}
        </button>
        <span className="inline-block mt-5">
          لديك حساب؟{" "}
          <a href="/login" className="text-blue-500">
            تسجيل الدخول
          </a>
        </span>
      </div>
      <Notification />
    </div>
  );
}
