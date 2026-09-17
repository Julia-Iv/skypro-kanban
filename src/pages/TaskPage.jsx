import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import PopBrowse from "../components/PopBrowse";
import { api } from "../api";

const TaskPage = ({ cards, setCards, token }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  // Находим нужную задачу в массиве данных по id
  const currentCard = cards.find((card) => String(card.id) === String(id));

  // Функция для закрытия модального окна и возврата на главную доску
  const handleClose = () => {
    navigate("/");
  };
  // Функция для удаления задачи через API
  const handleDeleteTask = async () => {
    if (!window.confirm("Вы уверены, что хотите удалить эту задачу?")) return;

    try {
      // Отправляем запрос на удаление к бэкенду
      const targetId = currentCard._id || currentCard.id || id;
      if (!targetId) {
        alert("Не удалось определить ID задачи для удаления");
        return;
      }

      const data = await api.deleteTask(targetId, token);

      // Обновляем локальный стейт приложения (исключаем удаленную карточку)
      setCards(data.tasks);

      // Возвращаемся на главную
      navigate("/");
    } catch (error) {
      console.error("Ошибка при удалении задачи:", error);
      setCards((prevCards) =>
        prevCards.filter((card) => String(card.id) !== String(id)),
      );
      navigate("/");
    }
  };
  // Функция для изменения задачи (например, смена статуса/колонки или текста)
  const handleUpdateTask = async (updatedFields) => {
    try {
      // Отправляем измененные поля на бэкенд
      const targetId = currentCard._id || currentCard.id || id;
      const data = await api.updateTask(targetId, updatedFields, token);

      // Обновляем локальный стейт приложения
      setCards(data.tasks);
      navigate("/");
    } catch (error) {
      console.error("Ошибка при обновлении задачи:", error);
      alert("Не удалось сохранить изменения.");
    }
  };

  // Если данные ещё загружаются или карточка с таким id не найдена
  if (!currentCard) {
    return null;
  }

  return (
    <PopBrowse
      card={currentCard}
      onClose={handleClose}
      onDelete={handleDeleteTask}
      onUpdate={handleUpdateTask}
    />
  );
};
export default TaskPage;
