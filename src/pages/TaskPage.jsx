import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import PopBrowse from "../components/PopBrowse";

const TaskPage = ({ cards }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  // Находим нужную задачу в массиве данных по id
  const currentCard = cards.find((card) => String(card.id) === String(id));

  // Функция для закрытия модального окна и возврата на главную доску
  const handleClose = () => {
    navigate("/");
  };

  // Если данные ещё загружаются или карточка с таким id не найдена
  if (!currentCard) {
    return null;
  }

  return <PopBrowse card={currentCard} onClose={handleClose} />;
};
export default TaskPage;
