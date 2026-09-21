import axios from "axios";

// Создаем экземпляр Axios для работы с задачами Kanban
const kanbanApi = axios.create({
  baseURL: "https://wedev-api.sky.pro/api/kanban",
});
kanbanApi.defaults.headers.get = {};
kanbanApi.defaults.headers.delete = {};

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
      headers: {
        ...getAuthHeaders(token),
        "Content-Type": undefined, // запрещаем передачу Content-Type для GET
      },
    });
    return response.data;
  },

  // Создать новую задачу
   async createTask(taskData, token) {
    const response = await kanbanApi.post("", taskData, {
      headers: {
        ...getAuthHeaders(token),
        "Content-Type": undefined, // Принудительно заставляем Axios УДАЛИТЬ этот заголовок из запроса
      },
    });
    return response.data;
  },


  // Изменить задачу (включая смену статуса/колонки)
  async updateTask(taskId, taskData, token) {
    const response = await kanbanApi.patch(`/${taskId}`, taskData, {
      headers: getAuthHeaders(token),
      //  Жесткое удаление заголовка через встроенный метод трансформации Axios
      transformRequest: [
        (data, headers) => {
          delete headers["Content-Type"]; // Полностью стираем Content-Type из заголовков запроса
          return JSON.stringify(data);    // Вручную превращаем объект в JSON-строку
        },
      ],
    });
    return response.data;
  },
  // Удалить задачу
    async deleteTask(taskId, token) {
    const response = await kanbanApi.delete(`/${taskId}`, {
      headers: {
        ...getAuthHeaders(token),
        "Content-Type": undefined, // запрещаем передачу Content-Type для DELETE
      },
    });
    return response.data;
  },


  // --- АВТОРИЗАЦИЯ ---
  // Вход пользователя
    async login({ login, password }) {
    const response = await userApi.post("/login", { login, password }, {
      headers: {
        "Content-Type": undefined, // Удаляем заголовок для авторизации
      },
    });
    return response.data;
  },

  // Регистрация пользователя
  async register({ name, login, password }) {
    const response = await userApi.post("", { name, login, password }, {
      headers: {
        "Content-Type": undefined, // Удаляем заголовок для регистрации
      },
    });
    return response.data;
  },
};
