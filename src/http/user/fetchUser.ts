import { userApiClient } from "../httpClients";

export async function fetchUser(userId: number) {
  try {
    const { data } = await userApiClient.get(`/users/${userId}`);
    console.log(data);
  } catch (err) {
    const e = err as Error;
    console.log(e);
  }
}
