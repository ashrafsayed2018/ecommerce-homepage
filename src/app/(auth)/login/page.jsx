"use client";
import Input from "@/app/components/Input";
import Loader from "@/app/components/Loader";
import Notification from "@/app/components/Notification";
import { GlobalContext } from "@/context";
import { LoginUserService } from "@/services/login";
import { LoginFormControls } from "@/utils";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { toast } from "react-toastify";

export default function LoginPage() {
  const { loader, setLoader } = useContext(GlobalContext);
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  function isFormValid() {
    const { email, password } = formData;

    return (
      email.trim() !== "" && password.trim() !== "" && password.length >= 8
    );
  }
  async function handleLogin() {
    if (isFormValid()) {
      setLoader(true);
      const response = await LoginUserService(formData);
      if (response.success) {
        toast.success(response.message);
        setLoader(false);
        setFormData({
          email: "",
          password: "",
        });
        // set the js cookie
        Cookies.set("token", response.data.token);
        // set user in loacalstorage
        localStorage.setItem("user", JSON.stringify(response.data.user));
        router.push("/");
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
        {LoginFormControls.map((control) => (
          <Input
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
          onClick={handleLogin}
        >
          {loader ? (
            <Loader text="جاري الدخول" color="white" loading={loader} />
          ) : (
            "تسجيل الدخول"
          )}
        </button>
        <span className="inline-block mt-5">
          ليس لديك حساب؟{" "}
          <a href="/register" className="text-blue-500">
            انشاء حساب
          </a>
        </span>
      </div>
      <Notification />
    </div>
  );
}
