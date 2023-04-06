import { UserDto } from "@/dto/userDto";
import { userApiClient } from "../httpClients";

export async function fetchUsers() {
  try {
    const { data } = await userApiClient.get<UserDto[]>("/users");
    console.log(data);
    return data;
  } catch (err) {
    const e = err as Error;
    console.log(e);
    throw e; //여기서 에러를 던져야 return시 undefined가 안나온다! useUsers에 undefined를 안주려고
  }
}
