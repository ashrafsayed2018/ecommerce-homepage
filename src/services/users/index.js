import { BASE_API_URL } from "@/utils/constants";

export async function getAllUsersService() {
  try {
    const response = await fetch(
      `${BASE_API_URL}/api/admin/users/get-all-users`
    );

    const data = await response.json();
    console.log(data, "from users service");
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
