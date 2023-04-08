import { Header } from "@/components/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <h1>HOME</h1>
    </div>
  );
}
// import { useUser } from "@/hooks/useUser";

// // Controller -> Service -> DAO(Repository)

// // Component -> Hook(State) -> API(HTTP)
// export default function Home() {
//   const { error, loading, user } = useUser();
//   // 사용자 정보 가져오는 중...
//   if (loading) {
//     return <h1>Loading....</h1>;
//   }

//   // 응답 400~500번대 오류를 받음... 가져오기 실패
//   if (error) {
//     return <h1>Error!</h1>;
//   }

//   // 성공
//   // 사용자 정보가 없는 경우
//   if (!user) {
//     return <h1>로그인 정보 없음</h1>;
//   }
//   // 사용자 정보가 있는 경우

//   return (
//     <>
//       <h1>id: {user.id}</h1>
//       <h1>email: {user.email}</h1>
//       <h1>name: {user.name}</h1>
//     </>
//   );

//   // return (
//   //   <Layout>
//   //     <ErrorBoundary fallback={<Error />}>
//   //       <Suspense fallback={<Loading />}>
//   //         <>
//   //           <h1>id: {user.id}</h1>
//   //           <h1>email: {user.email}</h1>
//   //           <h1>name: {user.name}</h1>
//   //         </>
//   //       </Suspense>
//   //     </ErrorBoundary>
//   //   </Layout>
//   // );
// }
