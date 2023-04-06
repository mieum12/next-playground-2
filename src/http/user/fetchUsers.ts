import { userApiClient } from "../httpClients";

export async function fetchUsers() {
  try {
    const { data } = await userApiClient.get("/users");
    console.log(data);
  } catch (err) {
    const e = err as Error;
    console.log(e);
  }
}
