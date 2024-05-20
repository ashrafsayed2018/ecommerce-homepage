import { BASE_API_URL } from "@/utils/constants";
import Cookies from "js-cookie";

export async function createSittingService(formData) {
  try {
    const response = await fetch(
      `${BASE_API_URL}/api/admin/settings/create-sitting`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
        body: JSON.stringify(formData),
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
export async function updateSittingService(formData) {
  try {
    const response = await fetch(
      `${BASE_API_URL}/api/admin/settings/update-sitting`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
        body: JSON.stringify(formData),
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getSettingsService() {
  try {
    const response = await fetch(
      `${BASE_API_URL}/api/admin/settings/get-sitting`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
