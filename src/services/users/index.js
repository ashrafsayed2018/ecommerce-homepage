import { BASE_API_URL } from "@/utils/constants";
import Cookies from "js-cookie";

export async function getUserByIdService() {
  try {
    const response = await fetch(
      `${BASE_API_URL}/api/admin/users/get-user-by-id`,
      {
        method: "GET",
        headers: {
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
export async function getAllUsersService() {
  try {
    const response = await fetch(
      `${BASE_API_URL}/api/admin/users/get-all-users`
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getRecentUsersService() {
  try {
    const response = await fetch(
      `${BASE_API_URL}/api/admin/users/get-recent-users`
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
