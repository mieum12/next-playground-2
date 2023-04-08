import { UserDto } from "@/dto/userDto";
import { fetchUser } from "@/http/user/fetchUser";
import { useEffect, useState } from "react";

export function useUser(userId: number) {
  //useState로 상태관리
  const [user, setUser] = useState<undefined | UserDto>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<undefined | Error>();

  async function _fetchUser() {
    console.log("요청보내는중");
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
  //useEffect로 최초 로딩시 http 요청 보내서 데이터 가져오기
  useEffect(() => {
    _fetchUser();
  }, []);
  //빈 배열이 deps로 주어져야 페이지가 로드 될 때 새로고침 딱 한번 실행

  return { user, loading, error };
}
