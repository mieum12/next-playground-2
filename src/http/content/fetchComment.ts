import { CommentDto } from "@/dto/commentDto";
import { contentApiClient } from "../httpClients";

export async function fetchComment(commentId: number) {
  try {
    const { data } = await contentApiClient.get<CommentDto>(
      `/comments/${commentId}`
    );
    // console.log(data);
    return data;
  } catch (err) {
    const e = err as Error;
    // console.log(e);
  }
}
