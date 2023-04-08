import { CommentDto } from "@/dto/commentDto";
import { PhotoDto } from "@/dto/photoDto";
import { fetchComments } from "@/http/content/fetchComments";
import { useEffect, useState } from "react";

export function useComments() {
  const [comments, setComments] = useState<CommentDto[]>([]);
  const [loading, setLoding] = useState(true);
  const [error, setError] = useState<Error | undefined>();

  async function _fetchComments() {
    try {
      const comments = await fetchComments();
      setComments(comments);
    } catch (err) {
      const e = err as Error;
      setError(e);
    } finally {
      setLoding(false);
    }
  }

  useEffect(() => {
    _fetchComments();
  }, []);

  return {};
}
