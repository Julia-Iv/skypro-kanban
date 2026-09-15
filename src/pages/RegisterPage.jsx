import React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { api } from "../api";

const RegisterPage = ({ setUser }) => {
  const [name, setName] = useState(""); // Имя пользователя
  const [login, setLogin] = useState(""); // Логин (email или никнейм)
  const [password, setPassword] = useState(""); // Пароль
  const [error, setError] = useState(null); // СНятие ошибок с сервера
  const navigate = useNavigate();

    const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Сбрасываем старую ошибку при новой попытке

    // Валидация: проверяем, что все три поля заполнены
    if (!name.trim() || !login.trim() || !password.trim()) {
      alert("Пожалуйста, заполните все поля");
      return;
    }

    try {
      // Отправляем запрос регистрации на бэкенд
      const data = await api.register({ name, login, password });

      // Проверяем, пришел ли пользователь в ответе сервера
      if (data && data.user) {
        // Сохраняем его в localStorage 
        localStorage.setItem("user", JSON.stringify(data.user));
        // Обновляем глобальный стейт в App.jsx, чтобы войти в приложение
        setUser(data.user);
        // Перенаправляем пользователя на главную страницу доски
        navigate("/");
              }
    } catch (err) {
      console.error("Полная ошибка регистрации в консоли:", err);
      
      // Точечно вытаскиваем сообщение от бэкенда Skypro
      const serverMessage = err.response?.data?.message || err.response?.data?.error || err.message;
      
      setError(serverMessage || "Не удалось зарегистрироваться. Попробуйте другой логин.");
    }
  };


  return (
    <div style={overlayStyles}>
      <div style={modalStyles}>
        <h3 style={{ marginBottom: "20px", color: "#565eef" }}>
          Регистрация в Kanban
        </h3>

        {/* Блок для вывода ошибок сервера */}
        {error && (
          <p style={{ color: "#ef5656", fontSize: "14px", marginBottom: "15px" }}>
            {error}
          </p>
        )}

        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "15px" }}
        >
          <input
            type="text"
            placeholder="Введите ваше имя"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={inputStyles}
          />
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
            Зарегистрироваться
          </button>
        </form>

        <p style={{ marginTop: "20px", fontSize: "14px", color: "#666" }}>
          Уже есть аккаунт?{" "}
          <Link
            to="/login"
            style={{
              color: "#565eef",
              textDecoration: "none",
              fontWeight: "600",
            }}
          >
            Войти
          </Link>
        </p>
      </div>
    </div>
  );
};

// Стили оформления (такие же, как в LoginPage для визуального единства)
const overlayStyles = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "#eaeef6",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 999,
};

const modalStyles = {
  backgroundColor: "#fff",
  padding: "40px 30px",
  borderRadius: "12px",
  textAlign: "center",
  width: "360px",
  boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
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

const actionBtnStyles = {
  padding: "12px 20px",
  borderRadius: "8px",
  border: "none",
  fontWeight: "600",
  cursor: "pointer",
  fontSize: "14px",
  marginTop: "10px",
};

export default RegisterPage;
