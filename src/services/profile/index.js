import { BASE_API_URL } from "@/utils/constants";
import Cookies from "js-cookie";

export async function UpdateUserInfoService(formData) {
  try {
    const response = await fetch(
      `${BASE_API_URL}/api/admin/profile/update-user-info`,
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
    console.log(data, "dataResponse kdsjfk djsfkj");
    return data;
  } catch (error) {
    console.log(error);
  }
}
