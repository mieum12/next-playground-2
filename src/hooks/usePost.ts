import { PostDto } from "@/dto/postDto";
import { fetchPost } from "@/http/content/fetchPost";
import { useEffect, useState } from "react";

export function usePost(postId: number) {
  const [post, setPost] = useState<PostDto | undefined>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | undefined>();

  async function _fetchPost() {
    try {
      const post = await fetchPost(postId);
      setPost(post);
    } catch (err) {
      const e = err as Error;
      setError(e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    _fetchPost();
  }, []);

  return {};
}
