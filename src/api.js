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
    const response = await userApi.post("/login", { login, password });
    return response.data;
  },

  // Регистрация пользователя
  async register({ name, login, password }) {
    const response = await userApi.post("/", { name, login, password });
    return response.data;
  },
};
