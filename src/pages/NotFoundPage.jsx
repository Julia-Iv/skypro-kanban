import React from "react";
import { useNavigate } from "react-router-dom";
import { MainColumn } from "../components/Main.styled";

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <MainColumn style={containerStyles}>
      <h1 style={textStyles}> 404 - Страница не найдена</h1>
      <button
        style={buttonStyles}
        onClick={() => navigate("/")}
        onMouseEnter={(e) => (e.target.style.backgroundColor = "#243347")} // Эффект при наведении
        onMouseLeave={(e) => (e.target.style.backgroundColor = "#334155")}
      >
        На главную
      </button>
    </MainColumn>
  );
};
const containerStyles = {
 display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "80vh", // Оставляем запас под возможный хедер/футер
  backgroundColor: "#eaeef6", // Ваш цвет фона всего приложения
  flexDirection: "column",
  gap: "24px",
  padding: "40px",
  borderRadius: "8px",
};

// Стили для заголовка (крупный шрифт и заглавные буквы)
const textStyles = {
  fontSize: "32px", 
  fontWeight: "600",
  color: "#94a3b8", // Тот же цвет, что и у заглушки в колонках канбана
  textAlign: "center",
  textTransform: "uppercase", 
  letterSpacing: "1px", 
  padding: "0 20px",
  fontStyle: "italic", // Курсив, как у заглушки «Новых задач нет»
};

const buttonStyles = {
  padding: "10px 24px",
  fontSize: "14px",
  fontWeight: "600",
  color: "#ffffff",
  backgroundColor: "#334155", // Спокойный темный оттенок (slate-700) вместо агрессивного красного
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  transition: "background-color 0.2s ease",
  outline: "none",
};

export default NotFoundPage;
