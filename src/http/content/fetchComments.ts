import { contentApiClient } from "../httpClients";

export async function fetchComments() {
  try {
    const { data } = await contentApiClient.get("/comments");
    console.log(data);
  } catch (err) {
    const e = err as Error;
    console.log(e);
  }
}
