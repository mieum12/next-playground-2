import { contentApiClient } from "../httpClients";

export async function fetchTodos() {
  try {
    const { data } = await contentApiClient.get("/todos");
    console.log(data);
  } catch (err) {
    const e = err as Error;
    console.log(e);
  }
}
