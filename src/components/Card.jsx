import React from "react";
import { Link } from "react-router-dom";
import {
  CardsContainer,
  CardsItem,
  CardsCard,
  CardGroup,
  CardTheme,
  CardBtn,
  CardTitle,
  CardContent,
  CardDate,
} from "./Card.styled";

const Card = (props) => {
  const task = props.card || props;

  const targetId = task?._id || task?.id;
  const title = task?.["Заголовок"] || task?.title || "Без названия";
  const date = task?.["Дата"] || task?.date;
  const themeText = task?.["Категория"] || task?.topic || "Web Design";

  const topicStyles = {
    "Web Design": "_orange",
    "Research": "_green",
    "Copywriting": "_purple",
  };
  const themeClass = topicStyles[themeText] || "_orange";

  // Безопасная функция форматирования даты под формат ДД.ММ.ГГ
  const formatDateForCard = (inputDate) => {
    if (!inputDate) return "";

    // Пытаемся создать объект даты из любых входных данных
    const parsedDate = new Date(inputDate);

    // Если дата невалидна — возвращаем пустую строку вместо ошибки
    if (isNaN(parsedDate.getTime())) return String(inputDate);

    return parsedDate.toLocaleDateString("ru-RU", {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit", // Дает две цифры года, например "26" вместо "2026"
    });
  };

  return (
    <CardsItem>
      <Link
        to={`/task/${targetId}`}
        style={{
          textDecoration: "none",
          color: "inherit",
          display: "block",
          width: "100%",
        }}
      >
        <CardsCard>
          <CardGroup>
            <CardTheme $theme={themeClass}>
              <p>{themeText}</p>
            </CardTheme>
            <CardBtn onClick={(e) => e.preventDefault()}>
              <div></div>
              <div></div>
              <div></div>
            </CardBtn>
          </CardGroup>
          <CardContent>
            <CardTitle>{title}</CardTitle>
            <CardDate>
              <svg
                xmlns="http://w3.org"
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
              >
                <g clipPath={`url(#clip0_1_415_${targetId})`}>
                  <path
                    d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z"
                    stroke="#94A6BE"
                    strokeWidth="0.8"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z"
                    stroke="#94A6BE"
                    strokeWidth="0.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id={`clip0_1_415_${targetId}`}>
                    <rect width="13" height="13" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <p>{formatDateForCard(date)}</p>
            </CardDate>
          </CardContent>
        </CardsCard>
      </Link>
    </CardsItem>
  );
};

export default Card;
