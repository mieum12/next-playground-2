import { PostDto } from "@/dto/postDto";
import { contentApiClient } from "../httpClients";

export async function fetchPost(postId: number) {
  try {
    const { data } = await contentApiClient.get<PostDto>(`/posts/${postId}`);
    // console.log(data);
    return data;
  } catch (err) {
    const e = err as Error;
    // console.log(e);
  }
}
