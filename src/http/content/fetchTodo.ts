import { TodoDto } from "@/dto/todoDto";
import { contentApiClient } from "../httpClients";

export async function fetchTodo(userId: number) {
  try {
    const { data } = await contentApiClient.get<TodoDto>(`/todos/${userId}`);
    console.log(data);
    return data;
  } catch (err) {
    const e = err as Error;
    console.log(e);
  }
}
