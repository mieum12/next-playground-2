import { CommentDto } from "@/dto/commentDto";
import { contentApiClient } from "../httpClients";

export async function fetchComments() {
  try {
    const { data } = await contentApiClient.get<CommentDto[]>("/comments");
    console.log(data);
    return data;
  } catch (err) {
    const e = err as Error;
    console.log(e);
    throw e;
  }
}
