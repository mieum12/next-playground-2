import { PostDto } from "@/dto/postDto";
import { fetchPosts } from "@/http/content/fetchPosts";
import { useEffect, useState } from "react";

export function usePosts() {
  const [posts, setPosts] = useState<PostDto[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | undefined>();

  async function _fetchPosts() {
    try {
      const posts = await fetchPosts();
      setPosts(posts);
    } catch (err) {
      const e = err as Error;
      setError(e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    _fetchPosts();
  }, []);

  return { posts, loading, error };
}
