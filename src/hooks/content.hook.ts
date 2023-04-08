import { PostDto } from "@/dto/postDto";
import { TodoDto } from "@/dto/todoDto";
import { fetchAlbums } from "@/http/content/fetchAlbums";
import { fetchComments } from "@/http/content/fetchComments";
import { fetchPhotos } from "@/http/content/fetchPhotos";
import { fetchPosts } from "@/http/content/fetchPosts";
import { fetchTodos } from "@/http/content/fetchTodos";
import { useQuery } from "@tanstack/react-query";

export function useAlbums() {
  const { data, isLoading, error } = useQuery(["albums"], fetchAlbums, {
    staleTime: 10000,
    initialData: [],
    initialDataUpdatedAt: () => 0,
  });
  return { albums: data, loading: isLoading, error };
}

export function useComments() {
  const { data, isLoading, error } = useQuery(["comments"], fetchComments, {
    staleTime: 10000,
    initialData: [],
    initialDataUpdatedAt: () => 0,
  });
  return { comments: data, loading: isLoading, error };
}

export function usePhotos() {
  const { data, isLoading, error } = useQuery(["photos"], fetchPhotos, {
    staleTime: 10000,
    initialData: [],
    initialDataUpdatedAt: () => 0,
  });
  return { photos: data, loading: isLoading, error };
}

export function usePosts() {
  const { data, isLoading, error } = useQuery(["posts"], fetchPosts, {
    staleTime: 10000,
    initialData: [], //undefined가 들어가니까 기본값에 빈배열 넣어줌 PostDto[] 넣어주는것처럼 타입추론 -> 그래서 맨 처음에 요청을 보냈을 때 캐시에 이미 있는 기본값인 빈배열이 뜨게된다
    initialDataUpdatedAt: () => 0, //그래서 따로 0초만에 업데이트 해주는 것으로 지정해준다, 캐시에서 가져오는게 아니라 바로 네트워크에서 가져온다
  });
  // const posts = data as PostDto[];
  return { posts: data, loading: isLoading, error };
}

export function useTodos() {
  const { data, isLoading, error } = useQuery(["todos"], fetchTodos, {
    staleTime: 10000,
    initialData: [],
    initialDataUpdatedAt: () => 0,
  });
  return { todos: data, loading: isLoading, error };
}
