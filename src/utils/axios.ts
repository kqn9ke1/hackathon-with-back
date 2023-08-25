import axios from "axios";
import { API } from "./consts";

//? Этот код добавляет два перехватчика (interceptors) к экземпляру Axios, чтобы обрабатывать токены авторизации и обновлять устаревший токен при необходимости.

// Создание экземпляра Axios
const $axios = axios.create();

// Перехватчик для запросов
$axios.interceptors.request.use(async (config) => {
  // Получение токенов из локального хранилища
  const tokens = JSON.parse(localStorage.getItem("tokens") as string);

  if (tokens) {
    // Добавление токена авторизации к заголовкам запроса
    config.headers.Authorization = `Bearer ${tokens.access}`;
  }
  return config;
});

// Перехватчик для ответов
$axios.interceptors.response.use(
  (res) => res,
  async (error) => {
    // Получение оригинального запроса
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      // Попытка обновления токена
      const tokens = JSON.parse(localStorage.getItem("tokens") as string);
      if (tokens) {
        const { data } = await axios.post(`${API}/account/token/refresh/`, {
          refresh: tokens.refresh,
        });

        // Обновление токенов в локальном хранилище
        localStorage.setItem(
          "tokens",
          JSON.stringify({ access: data.access, refresh: tokens.refresh })
        );

        // Повтор оригинального запроса
        return $axios.request(originalRequest);
      }
    }
  }
);

export default $axios;
//? Этот код обеспечивает соблюдение протокола авторизации Bearer, обрабатывает автоматическое обновление устаревших токенов и внедряет их в запросы. Эти интерцепторы улучшают управление авторизацией в вашем приложении, делая код более эффективным и надежным.
