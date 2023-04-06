import axios from "axios";

// 1. 전역적인 베이스 url 고정으로 효율적인 유지 보수
axios.defaults.baseURL = "http://localhost:3000";

axios.get("/users");
axios.get("/");

//2. 베이스 url이 사실 달라서 세세하게 조정
axios.get("http://navershopping.com/product/1");
axios.get("http://naverwebtoon.com/toon/1");
axios.get("http://navernews.com/news/1");

//client를 따로 만들어줘서 관리
const shoppingClient = axios.create({
  baseURL: "http://navershopping.com",
});
const wentoonClient = axios.create({
  baseURL: "http://naverwebtoon.com",
});
const newsClient = axios.create({
  baseURL: "http://navernews.com",
});

shoppingClient.get("/product/1");
wentoonClient.get("/toon/1");
newsClient.get("/news/1");

//3
export const auathClient = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
    // 새로고침을 하기 전까지 로딩 된 토큰이 유지, 다시 없어져도 처음 저장된 토큰이 계속 간다
    // 사이트를 새로고침하면 새로운 js파일을 로드하고 다시 실행, 이때 토큰도 보냄
  },
});

// req.headers.Authorization => 토큰이 나옴
// {userId: 1}
// Prisma.user.findUnique({where: {id: userId}}) 이런 식으로 가져온다

// app.use((req,res)=>{
//   //서버에 요청이 들어올떄마다 실행
// })

axios.interceptors.request.use((req) => {
  // 서버로 요청을 보내기 직전마다 실행, 매번 확인가능
  req.headers.Authorization = localStorage.getItem("token");
  return req;
});
