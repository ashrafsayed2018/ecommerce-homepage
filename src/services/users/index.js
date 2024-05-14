import { BASE_API_URL } from "@/utils/constants";

export async function getAllUsersService() {
  try {
    const response = await fetch(`${BASE_API_URL}/api/users/get-all-users`);

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}
