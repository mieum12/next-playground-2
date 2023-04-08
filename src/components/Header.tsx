// import { useUser } from "@/hooks/useUser";

import { useUser } from "@/hooks/user.hooks";

export const Header = () => {
  const { user, error, loading } = useUser(1);
  //사용자 데이터가 있는 경우 로그인 상태
  //없으면 로그아웃 상태
  if (loading) {
    return <header>로딩중</header>;
  }
  // if (error) {
  //   return <header>오류 발생</header>;
  // }
  //로그인 안된 경우
  if (!user) {
    return <header> 로그인 하세요 </header>;
  }

  //로그인 된경우
  return <header>{user.name}님 환영합니다</header>;
};
