import { CommentDto } from "@/dto/commentDto";
import { fetchComment } from "@/http/content/fetchComment";
import { useEffect, useState } from "react";

export function useComment(commentId: number) {
  const [comment, setComment] = useState<CommentDto | undefined>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | undefined>();

  async function _fetchComment() {
    try {
      const comment = await fetchComment(commentId);
      setComment(comment);
    } catch (err) {
      const e = err as Error;
      setError(e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    _fetchComment();
  }, []);

  return { comment, loading, error };
}
