import { UserDto } from "@/dto/userDto";
import { userApiClient } from "../httpClients";

export async function fetchUser(userId: number) {
  // try {
  //   const { data } = await userApiClient.get<UserDto>(`/users/${userId}`);
  //   console.log(data);
  //   return data;
  // } catch (err) {
  //   const e = err as Error;
  //   console.log(e);
  //   throw new Error();
  // }
  console.log("불렀어요");
  const { data } = await userApiClient.get<UserDto>(`/users/${userId}`);
  return data;
}
