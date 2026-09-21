import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import PopBrowse from "../components/PopBrowse";
import { api } from "../api";

const TaskPage = ({ cards, setCards, token }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  // Находим нужную задачу в массиве данных по id
  const currentCard = cards?.find(
    (card) => String(card._id || card.id) === String(id),
  );

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
        prevCards.filter((card) => String(card._id) !== String(id)),
      );
      navigate("/");
    }
  };
  // Функция для изменения задачи (например, смена статуса/колонки или текста)
  const handleUpdateTask = async (updatedFields) => {
    try {
      const targetId = currentCard?._id || currentCard?.id || id;
      if (!targetId || targetId === "undefined") {
        alert("Не удалось определить ID задачи для обновления");
        return;
      }

      const validTopics = ["Web Design", "Research", "Copywriting"];
      let finalTopic = updatedFields.topic || currentCard.topic;
      if (!validTopics.includes(finalTopic)) {
        finalTopic = "Web Design";
      }
      const toServerStatus = {
        "Без статуса": "No Status",
        "Нужно сделать": "No Status",
        "В работе": "In Progress",
        Тестирование: "Testing",
        Готово: "Done",
        "No Status": "No Status",
        "In Progress": "In Progress",
        Testing: "Testing",
        Done: "Done",
      };
      let inputStatus =
        updatedFields.status || currentCard.status || "Нужно сделать";

      let finalStatus =
        updatedFields.status || currentCard.status || "Без статуса";

      const cleanTaskData = {
        title: String(
          updatedFields.title || currentCard.title || "Без названия",
        ).trim(),
        topic: String(finalTopic),
        status: String(finalStatus), // 🚀 ИСПРАВЛЕНО: отправляем английский статус ('Testing', 'In Progress' и т.д.)
        description: String(
          updatedFields.description !== undefined
            ? updatedFields.description
            : currentCard.description || "",
        ).trim(),
      };

      console.log("Финальный чистый JSON для отправки:", cleanTaskData);
      await api.updateTask(targetId, cleanTaskData, token);

      const freshData = await api.getTasks(token);

      if (freshData && freshData.tasks && Array.isArray(freshData.tasks)) {
        setCards(freshData.tasks);
      } else if (Array.isArray(freshData)) {
        setCards(freshData);
      }

      navigate("/");
    } catch (error) {
      console.error("Ошибка при обновлении задачи:", error);
      const message =
        error.response?.data?.error || "Проверьте заполнение полей формы.";
      alert(`Ошибка при сохранении: ${message}`);
    }
  };

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
