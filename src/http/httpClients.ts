import axios from "axios";

//서버가 여러개 있다고 가정
//userServer, contentServer
export const userApiClient = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const contentApiClient = axios.create({
  //주소가 같지만 규모가 큰 서비스라고 생각하고 다른 서버라고 가정
  baseURL: "https://jsonplaceholder.typicode.com",
});

//가짜 로컬스토리지 만들기
//next.js는 localstorage 사용하려면 추가 조작 필요해서 이걸로 뗴움
const LOCAL_STORAGE = {
  token: "sdjfisfjofoisd",
};

// user 서버에 요청을 보내거나 content서버에 요청을 보낼 때
// 각 서버에 Bearer토큰을 함께 보내줘야한다고 가정
// interceptor< 사용

// 매 요청 시 localStorage에서 token을 가져다 해더의 Authorization에 넣어줌
userApiClient.interceptors.request.use((req) => {
  const token = LOCAL_STORAGE.token;
  req.headers.Authorization = `Bearer ${token}`;
  //항상 return req;를 해줘야 변경사항이 적용 됨
  return req;
});

contentApiClient.interceptors.request.use((req) => {
  const token = LOCAL_STORAGE.token;
  req.headers.Authorization = `Bearer ${token}`;
  //항상 return req;를 해줘야 변경사항이 적용 됨
  return req;
});
