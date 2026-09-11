import axios from 'axios'

const API_URL = 'https://wedev-api.sky.pro/api/user';
// Вспомогательная функция для обработки ответов
async function handleResponse(response) {
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || `Ошибка сервера: ${response.status}`);
  }
  if (response.status === 204) return null;
  return response.json();
}

// Конфигурация заголовков (если будет авторизация, сюда добавится Token)
const getHeaders = () => ({
  "Content-Type": "application/json",
});

export const api = {
  // --- ЗАДАЧИ (CARDS) ---
  
  // Получить все задачи
   async getTasks() {
    const res = await fetch(`${BASE_URL}/tasks`, {
      method: "GET",
      headers: getHeaders(),
    });
    return handleResponse(res);
  },

  // Создать новую задачу
  async createTask(taskData) {
    const res = await fetch(`${BASE_URL}/tasks`, {
      method: "POST",
      headers: getHeaders(),
      body: JSON.stringify(taskData),
    });
    return handleResponse(res);
  },

  // Изменить задачу (включая смену статуса/колонки)
  async updateTask(taskId, taskData) {
    const res = await fetch(`${BASE_URL}/tasks/${taskId}`, {
      method: "PATCH",
            headers: getHeaders(),
      body: JSON.stringify(taskData),
    });
    return handleResponse(res);
  },

  // Удалить задачу
  async deleteTask(taskId) {
    const res = await fetch(`${BASE_URL}/tasks/${taskId}`, {
      method: "DELETE",
      headers: getHeaders(),
    });
    return handleResponse(res);
  },

  // --- АВТОРИЗАЦИЯ ---
    // Вход пользователя
  async login(credentials) {
    const res = await fetch(`${BASE_URL}/auth/login`, {
      method: "POST",
      headers: getHeaders(),
      body: JSON.stringify(credentials),
    });
    return handleResponse(res);
  },

  // Регистрация пользователя
  async register(userData) {
    const res = await fetch(`${BASE_URL}/auth/register`, {
      method: "POST",
      headers: getHeaders(),
      body: JSON.stringify(userData),
    });
    return handleResponse(res);
  }
};

