import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001/api/",
  timeout: 10000,
});

api.interceptors.request.use(async (config) => {
  // Declaramos um token manualmente para teste.
  const token = localStorage.getItem("@context:token");

  if (token) {
    api.defaults.headers.authorization = `Bearer ${token}`;
  } else {
    api.defaults.headers.authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImdhYnJpZWxAZ21haWwuY29tIiwiaWF0IjoxNjgwNTE1MTA3LCJleHAiOjE2ODA2MDE1MDcsInN1YiI6IjczZTdhNGNlLWM2ZDMtNDMyYi1hODM5LTc2YjI3OWYzZjBiOSJ9.BWIHYQGNWrgZZQDjOE0143gSX0xGfwgR378i8JscbWI`;
  }

  return config;
});

export default api;
