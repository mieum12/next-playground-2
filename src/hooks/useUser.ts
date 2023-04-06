import { UserDto } from "@/dto/userDto";
import { fetchUser } from "@/http/user/fetchUser";
import { useEffect, useState } from "react";

export function useUser(userId: number) {
  const [user, setUser] = useState<undefined | UserDto>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<undefined | Error>();

  async function _fetchUser() {
    try {
      const user = await fetchUser(userId);
      setUser(user); //성공시 유저에 담기
    } catch (err) {
      const e = err as Error;
      setError(e); //실패시 에러
    } finally {
      //종료: 로딩 끝 true -> false
      setLoading(false);
    }
  }

  useEffect(() => {
    _fetchUser();
  }, []);
  //빈 배열이 deps로 주어져야 페이지가 로드 될 때 새로고침 딱 한번 실행

  return { user, loading, error };
}
