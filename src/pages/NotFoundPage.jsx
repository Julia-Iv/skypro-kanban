import React from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div style={containerStyles}>
      <h1 style={textStyles}> 404 - Страница не найдена</h1>
      <button style={buttonStyles} onClick={() => navigate("/")}>
        На главную
      </button>
    </div>
  );
};
const containerStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh", // Растягивает блок на всю высоту экрана
  width: "100vw", // Растягивает блок на всю ширину экрана
  backgroundColor: "#eaeef6", // Такой же цвет фона, как у всего приложения
  fontFamily: "sans-serif",
  flexDirection: "column",
  gap: "24px",
};

// Стили для заголовка (крупный шрифт и заглавные буквы)
const textStyles = {
  fontSize: "48px", // Крупный размер шрифта
  fontWeight: "bold",
  color: "#c72828", // Фирменный фиолетовый цвет (как у вашего лоадера)
  textAlign: "center",
  textTransform: "uppercase", // Автоматически делает все буквы БОЛЬШИМИ
  letterSpacing: "2px", // Небольшой красивый отступ между буквами
  padding: "0 20px",
};

const buttonStyles = {
  padding: "12px 24px",
  fontSize: "16px",
  fontWeight: "600",
  color: "#ffffff",
  backgroundColor: "#c72828", // Фирменный фиолетовый цвет
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  transition: "background-color 0.2s ease, transform 0.1s ease",
  outline: "none",
};
export default NotFoundPage;
