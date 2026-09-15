import React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { api } from "../api";

const LoginPage = ({ setUser }) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!login.trim() || !password.trim()) {
      alert("Пожалуйста, заполните все поля");
      return;
    }
    try {
      // Отправляем запрос авторизации на бэкенд
      const data = await api.login({ login, password });

      // Сервер возвращает объект пользователя с токеном внутри data.user
      // Сохраняем его в localStorage, чтобы сессия не сбрасывалась при перезагрузке
      localStorage.setItem("user", JSON.stringify(data.user));

      // Обновляем глобальный стейт в App.jsx
      setUser(data.user);

      // Перенаправляем авторизованного пользователя на главную страницу
      navigate("/");
    } catch (err) {
      console.error("Ошибка авторизации:", err);
      // Если сервер вернул текст ошибки (например, "Неверный пароль"), показываем его
      setError(
        err.response?.data?.error ||
          "Неверный логин или пароль. Попробуйте снова.",
      );
    }
  };

  return (
    <div style={overlayStyles}>
      <div style={modalStyles}>
        <h3 style={{ marginBottom: "20px", color: "#565eef" }}>
          Вход в Kanban
        </h3>

        {/* Блок для вывода ошибок сервера (например, неверный пароль) */}
        {error && (
          <p
            style={{ color: "#ef5656", fontSize: "14px", marginBottom: "15px" }}
          >
            {error}
          </p>
        )}

        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "15px" }}
        >
          <input
            type="text"
            placeholder="Введите логин"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            style={inputStyles}
          />
          <input
            type="password"
            placeholder="Введите пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyles}
          />
          <button
            type="submit"
            style={{
              ...actionBtnStyles,
              backgroundColor: "#565eef",
              color: "#fff",
            }}
          >
            Войти
          </button>
        </form>

        <p style={{ marginTop: "20px", fontSize: "14px", color: "#666" }}>
          Нужен аккаунт?{" "}
          <Link
            to="/register"
            style={{
              color: "#565eef",
              textDecoration: "none",
              fontWeight: "600",
            }}
          >
            Зарегистрироваться
          </Link>
        </p>
      </div>
    </div>
  );
};

const overlayStyles = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.4)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 999,
};
const modalStyles = {
  backgroundColor: "#fff",
  padding: "30px",
  borderRadius: "12px",
  textAlign: "center",
  width: "320px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
};
const inputStyles = {
  width: "100%",
  padding: "12px",
  borderRadius: "8px",
  border: "1px solid #d4dbe5",
  fontSize: "14px",
  outline: "none",
  boxSizing: "border-box", 
};
const btnGroupStyles = {
  display: "flex",
  gap: "10px",
  justifyContent: "center",
  marginTop: "20px",
};
const actionBtnStyles = {
  padding: "10px 20px",
  borderRadius: "8px",
  border: "none",
  fontWeight: "600",
  cursor: "pointer",
  fontSize: "14px",
};

export default LoginPage;
