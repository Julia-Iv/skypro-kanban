import axios from "axios";

const withoutJsonContentType = [
  (data, headers) => {
    headers.setContentType(false);
    return data != null && typeof data === "object"
      ? JSON.stringify(data)
      : data;
  },
];

// Создаем экземпляр Axios для работы с задачами Kanban
const kanbanApi = axios.create({
  baseURL: "https://wedev-api.sky.pro/api/kanban",
  transformRequest: withoutJsonContentType,
});
//  Axios для работы с пользователями (Авторизация)
const userApi = axios.create({
  baseURL: "https://wedev-api.sky.pro/api/user",
  transformRequest: withoutJsonContentType,
});

// Универсальная функция хелпер для обработки сетевых сбоев и ошибок 500
const handleGlobalError = (error, defaultMessage) => {
  // Сценарий 1: Сервер ответил кодом ошибки
  if (error.response) {
    const status = error.response.status;

    // Перехватываем критическое падение самого сервера (500, 502, 504 и т.д.)
    if (status >= 500) {
      return Promise.reject(
        new Error(
          "Сервер Skypro недоступен или на нем произошла ошибка. Пожалуйста, попробуйте позже.",
        ),
      );
    }

    // Если бэкенд прислал штатную ошибку валидации/бизнес-логики (например, 400 или 401)
    if (error.response.data && error.response.data.error) {
      return Promise.reject(new Error(error.response.data.error));
    }
  }
  // Сценарий 2: Запрос ушел, но ответа нет вообще (Нет интернета или сервер полностью отключен)
  else if (error.request) {
    return Promise.reject(
      new Error(
        "Не удалось связаться с сервером. Проверьте интернет-соединение.",
      ),
    );
  }

  // Сценарий 3: Любая другая непредвиденная ошибка
  return Promise.reject(new Error(error.message || defaultMessage));
};

// глобальный перехвадчик перехватывает ошибку от сервера Skypro и
// вытаскивает из нее понятный текст
kanbanApi.interceptors.response.use(
  (response) => response, // Если всё хорошо, просто возвращаем ответ
  (error) => handleGlobalError(error, "Ошибка соединения с сервером"),
);

//  перехватчик для userApi, чтобы  выводить ошибки входа/регистрации
userApi.interceptors.response.use(
  (response) => response,
  (error) => handleGlobalError(error, "Ошибка авторизации"),
);

// Вспомогательная функция для динамического добавления токена в заголовки
const getAuthHeaders = (token) => {
  return token ? { Authorization: `Bearer ${token}` } : {};
};

export const api = {
  // --- ЗАДАЧИ (CARDS) ---

  // Получить все задачи
  async getTasks(token) {
    const response = await kanbanApi.get("", {
      headers: getAuthHeaders(token),
    });
    return response.data;
  },

  // Создать новую задачу
  async createTask(taskData, token) {
    const response = await kanbanApi.post("", taskData, {
      headers: {
        ...getAuthHeaders(token),
        "Content-Type": "application/json", // Переопределяем удаление заголовка для успешного парсинга сервером
      },
    });
    return response.data;
  },

  // Изменить задачу (включая смену статуса/колонки)
  async updateTask(taskId, taskData, token) {
    const response = await kanbanApi.put(`/${taskId}`, taskData, {
      headers: {
        ...getAuthHeaders(token),
        "Content-Type": "application/json", // Переопределяем удаление заголовка для успешного парсинга сервером
      },
    });
    return response.data;
  },
  // Удалить задачу
  async deleteTask(taskId, token) {
    const response = await kanbanApi.delete(`/${taskId}`, {
      headers: getAuthHeaders(token),
    });
    return response.data;
  },

  // --- АВТОРИЗАЦИЯ ---
  // Вход пользователя
  async login({ login, password }) {
    const response = await userApi.post("/login", { login, password });
    return response.data;
  },

  // Регистрация пользователя
  async register({ name, login, password }) {
    const response = await userApi.post("/", { name, login, password });
    return response.data;
  },
};
