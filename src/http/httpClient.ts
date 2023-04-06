import axios from "axios";

const a = 1;

{
  const a = 2;
  console.log(a);
}

axios.defaults.baseURL = "http://localhost:3000";
axios.get("/");

// 1. custom clients
const client = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    Authorization: ``,
  },
});

const cookieClient = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
});

const authClient = axios.create({
  baseURL: "http://localhost:3000",
});

axios.get("/", {
  headers: {
    Authorization: `Bearer <token>`,
  },
});

const client2 = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

// 2. interceptor
authClient.interceptors.request.use((req) => {
  req.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return req;
});

// 3. interceptor
authClient.interceptors.response.use((res) => {
  if (res.status >= 500) {
    throw new UncontrollableError();
  }
  return res;
});

class UncontrollableError extends Error {}
