import { contentApiClient } from "../httpClients";

export async function fetchTodo(userId: number) {
  try {
    const { data } = await contentApiClient.get(`/todos/${userId}`);
    console.log(data);
  } catch (err) {
    const e = err as Error;
    console.log(e);
  }
}
