"use client";
import InputComponent from "@/app/components/formElements/inputComponent";
import Loader from "@/app/components/Loader";
import ToastNotification from "@/app/components/Notification";
import { GlobalContext } from "@/context";
import { helperForUploadImageToFirebase } from "@/helpers/uploadImageToFirebase";
import { UpdateUserInfoService } from "@/services/profile";
import {
  addOrUpdateSettingService,
  createSittingService,
  getSettingsService,
  updateSittingService,
} from "@/services/setting";
import { SettingsFormControls, UpdateUserInfoFormControls } from "@/utils";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
const settingsInitialFormData = {
  siteName: "",
  logoUrl: "",
};
const updateUserInitialFormData = UpdateUserInfoFormControls.reduce(
  (acc, curr) => {
    acc[curr.id] = "";

    return acc;
  }
);
export default function Settings() {
  const [settingsFormData, setSettingsFormData] = useState(
    settingsInitialFormData
  );
  const [updateUserFormData, setUpdateUserFormData] = useState(
    updateUserInitialFormData
  );
  const [hasSettings, setHasSettings] = useState(false);
  const { loader, setLoader } = useContext(GlobalContext);
  const router = useRouter();

  useEffect(() => {
    async function fetchSettings() {
      try {
        const response = await getSettingsService();

        if (response.success && response.data) {
          console.log(response.data);
          setHasSettings(Object.keys(response.data).length > 0);
          setSettingsFormData(response.data);
          console.log(settingsFormData);
        }
      } catch (error) {
        console.error("خطاء في تحميل الاعدادات:", error);
      }
    }
    fetchSettings();
  }, []);

  const changeImage = async (event) => {
    setLoader({ loading: true, id: "uploadImage" });

    try {
      if (event.target.files && event.target.files[0]) {
        const extractedImageUrl = await helperForUploadImageToFirebase(
          event.target.files[0],
          "settings"
        );
        if (extractedImageUrl !== "") {
          setSettingsFormData((prevFormData) => ({
            ...prevFormData,
            logoUrl: extractedImageUrl,
          }));
          setLoader({ loading: false, id: "uploadImage" });
          return extractedImageUrl;
        }
      }
    } catch (error) {
      console.error("Error changing image:", error);
      throw error; // Throw the error so it can be handled in the calling function
    }
    return ""; // Return an empty string if the image upload failed
  };

  // check if form is valid
  function isFormValid() {
    const { siteName, logoUrl } = settingsFormData;

    return siteName.trim() !== "" && logoUrl.trim() !== "";
  }
  async function handleCreateSettings() {
    setLoader({ loading: true, id: "createSitting" });
    if (isFormValid()) {
      setLoader({ loading: false, id: "createSitting" });
      const logoUrl = await changeImage(event); // Wait for the image upload to complete
      console.log(settingsFormData, "settingsFormData");
      const response = await createSittingService(settingsFormData);

      if (response.success) {
        toast.success(response.message);
        setSettingsFormData(settingsInitialFormData);
        setHasSettings(true);
        router.refresh();
      } else {
        toast.error(response.message);
      }
    } else {
      toast.error("يجب ملئ جميع الحقول");
    }
  }

  async function handleUpdateSettings() {
    setLoader({ loading: true, id: "updateSitting" });
    const { siteName, logoUrl } = settingsFormData;
    const response = await updateSittingService({ siteName, logoUrl });
    if (response.success) {
      setLoader({ loading: false, id: "updateSitting" });
      toast.success(response.message);

      router.refresh();
    } else {
      toast.error(response.message);
    }
  }

  async function handleUpdateUserInfo() {
    setLoader({ loading: true, id: "updateUserInfo" });
    const response = await UpdateUserInfoService(updateUserFormData);
    if (response.success) {
      setLoader({ loading: false, id: "updateUserInfo" });
      toast.success(response.message);
      router.refresh();
    } else {
      toast.error(response.message);
    }
  }
  return (
    <div className="mt-6">
      <div className="container mx-auto px-4 sm:px-8">
        <h2 className="text-center mb-2 text-lg md:text-2xl">الاعدادات</h2>
        <input
          accept="image/*"
          max="1000000"
          type="file"
          onChange={changeImage}
        />
        {SettingsFormControls.map((controlItem) => {
          return (
            <div className="" key={controlItem.id}>
              <InputComponent
                id={controlItem.id}
                label={controlItem.label}
                placeholder={controlItem.placeholder}
                value={settingsFormData[controlItem.id]}
                type={controlItem.type}
                onChange={(e) => {
                  setSettingsFormData({
                    ...settingsFormData,
                    [controlItem.id]: e.target.value,
                  });
                }}
              />
            </div>
          );
        })}
        <div className="flex justify-center">
          {!hasSettings && (
            <button
              className="max-w-md text-center p-3 rounded-xl my-4 mx-2 bg-blue-700 text-white"
              onClick={handleCreateSettings}
            >
              {loader && loader.loading && loader.id == "uploadImage" ? (
                <Loader
                  loading={loader}
                  text="جاري الحفظ..."
                  color={"whitge"}
                  size="5px"
                />
              ) : (
                "حفظ الاعدادات"
              )}
            </button>
          )}
          {hasSettings && (
            <button
              className="w-40 text-center p-3 rounded-xl my-4 mx-2 bg-blue-700 text-white"
              onClick={handleUpdateSettings}
            >
              {(loader && loader.loading && loader.id == "uploadImage") ||
              (loader && loader.loading && loader.id == "updateSitting") ? (
                <Loader
                  loading={loader}
                  text="جاري التحديث..."
                  color={"whitge"}
                  size="5px"
                />
              ) : (
                "تحديث الاعدادات"
              )}
            </button>
          )}
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-8">
        <h2 className="text-center mb-2 text-lg md:text-2xl">
          تحديث بينات المستخدم
        </h2>

        {UpdateUserInfoFormControls.map((controlItem) => {
          return (
            <div className="" key={controlItem.id}>
              <InputComponent
                id={controlItem.id}
                label={controlItem.label}
                placeholder={controlItem.placeholder}
                value={controlItem.value}
                type={controlItem.type}
                onChange={(e) => {
                  setUpdateUserFormData({
                    ...updateUserFormData,
                    [controlItem.id]: e.target.value,
                  });
                }}
              />
            </div>
          );
        })}

        <button
          className="w-40 text-center p-3 rounded-xl my-4 mx-auto bg-blue-700 text-white"
          onClick={handleUpdateUserInfo}
        >
          تحديث البينات
        </button>
      </div>
      <ToastNotification />
    </div>
  );
}
