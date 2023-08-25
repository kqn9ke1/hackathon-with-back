import axios from "axios";
import { API } from "./consts";

const $axios = axios.create();

$axios.interceptors.request.use(async (config) => {
  const tokens = JSON.parse(localStorage.getItem("tokens") as string);
  if (tokens) {
    config.headers.Authorization = `Bearer ${tokens.access}`;
  }

  return config;
});

$axios.interceptors.response.use(
  (res) => res,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const tokens = JSON.parse(localStorage.getItem("tokens") as string);
      if (tokens) {
        const { data } = await axios.post(`${API}/accounts/refresh/`, {
          refresh: tokens.refresh,
        });

        localStorage.setItem(
          "tokens",
          JSON.stringify({ access: data.access, refresh: tokens.refresh })
        );

        return $axios.request(originalRequest);
      }
    }
  }
);

export default $axios;
