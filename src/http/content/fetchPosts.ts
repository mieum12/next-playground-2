import { PostDto } from "@/dto/postDto";
import { contentApiClient } from "../httpClients";

export async function fetchPosts() {
  try {
    const { data } = await contentApiClient.get<PostDto[]>("/posts");
    // console.log(data);
    return data;
  } catch (err) {
    const e = err as Error;
    // console.log(e);
    throw e;
  }
}
