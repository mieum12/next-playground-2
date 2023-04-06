import { contentApiClient } from "../httpClients";

export async function fetchComment(commentId: number) {
  try {
    const { data } = await contentApiClient.get(`/comments/${commentId}`);
    console.log(data);
  } catch (err) {
    const e = err as Error;
    console.log(e);
  }
}
