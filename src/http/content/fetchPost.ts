import { contentApiClient } from "../httpClients";

export async function fetchPost(postId: number) {
  try {
    const { data } = await contentApiClient.get(`/posts/${postId}`);
    console.log(data);
  } catch (err) {
    const e = err as Error;
    console.log(e);
  }
}
