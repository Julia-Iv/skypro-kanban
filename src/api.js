import axios from "axios";

// Создаем экземпляр Axios для работы с задачами Kanban
const kanbanApi = axios.create({
  baseURL: "https://wedev-api.sky.pro/api/kanban",
});

//  Axios для работы с пользователями (Авторизация)
const userApi = axios.create({
  baseURL: "https://wedev-api.sky.pro/api/user",
});

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
    return response.data; // Axios возвращает результат в поле data
  },

  // Создать новую задачу
  async createTask(taskData, token) {
    const response = await kanbanApi.post("", taskData, {
      headers: getAuthHeaders(token),
    });
    return response.data;
  },

  // Изменить задачу (включая смену статуса/колонки)
  async updateTask(taskId, taskData, token) {
    const response = await kanbanApi.patch(`/${taskId}`, taskData, {
      headers: getAuthHeaders(token),
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
    const response = await userApi.post(
      "/login",
      JSON.stringify({ login, password }), // <-- Превращаем в строку
      {
        headers: {
          "Content-Type": "", // <-- Принудительно очищаем заголовок
        },
      },
    );
    return response.data;
  },

  // Регистрация пользователя
  async register({ name, login, password }) {
    const response = await userApi.post(
      "",
      JSON.stringify({ name, login, password }), // <-- Превращаем в строку
      {
        headers: {
          "Content-Type": "", // <-- Принудительно очищаем заголовок
        },
      },
    );
    return response.data;
  },
};
