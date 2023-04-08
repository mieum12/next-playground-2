import { fetchUser } from "@/http/user/fetchUser";
import { fetchUsers } from "@/http/user/fetchUsers";
import { useQuery } from "@tanstack/react-query";

//key:values로 들어오는 느낌
// const reactQueryDB = {
//   `['user', 1]: {id:1, username: 'aaa}`
// }

export function useUser(userId: number) {
  const { data, isLoading, error } = useQuery(
    //useEffect를 내부적으로 돌려줌
    ["user", userId],
    //처음만 fetchUser 호출하고 다음부턴 캐싱이 되어서 호출 필요없음
    () => fetchUser(userId),
    {
      //여러 옵션들 쓸 수 있다
      //10초동안 fresh할땐 그대로 사용하는데 stale하면 요청을 또 보낸다
      staleTime: 10000, //10초
    }
  );
  return { user: data, loading: isLoading, error };
}

export function useUsers() {
  const { data, isLoading, error } = useQuery(["users"], () => fetchUsers(), {
    staleTime: 10000,
  });
  return { users: data, loading: isLoading, error };
}
