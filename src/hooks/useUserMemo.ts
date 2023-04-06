// import { UserDto } from "@/dto/userDto";
// import { fetchUser } from "@/http/fetchUser";
// import { useEffect, useState } from "react";

// export function useUser() {
//   // 상태 관리
//   const [user, setUser] = useState<UserDto | undefined>();
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<Error | undefined>();

//   async function _fetchUser() {
//     try {
//       // 네트워크 요청 끝
//       const user = await fetchUser();
//       // 성공 시 user set ( user=UserDto,error=undefined,loading=false)
//       setUser(user);
//     } catch (err) {
//       // 네트워크 요청에서 오류 발생
//       const e = err as Error;
//       // 실패, error set ( user=undefined,error=Error,loading=false)
//       setError(e);
//     } finally {
//       // 종료 후, 성공이던 실패던 로딩은 끝
//       setLoading(false);
//     }
//   }

//   // 여기서 네트워크 요청 처리 !
//   useEffect(() => {
//     _fetchUser();
//   }, []);
//   // 내보내기 (component가 이거를 사용할 것!)
//   // 상태 관리를 useUser 훅이 여기서 다 해주기 때문에...
//   // component는 할 게 업어짐 !!
//   return { user, loading, error };
// }
