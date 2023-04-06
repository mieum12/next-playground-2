import { contentApiClient } from "../httpClients";

export async function fetchPosts() {
  try {
    const { data } = await contentApiClient.get("/posts");
    console.log(data);
  } catch (err) {
    const e = err as Error;
    console.log(e);
  }
}
