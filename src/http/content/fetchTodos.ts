import { TodoDto } from "@/dto/todoDto";
import { contentApiClient } from "../httpClients";

export async function fetchTodos() {
  try {
    const { data } = await contentApiClient.get<TodoDto[]>("/todos");
    console.log(data);
    return data;
  } catch (err) {
    const e = err as Error;
    console.log(e);
    throw e;
  }
}
