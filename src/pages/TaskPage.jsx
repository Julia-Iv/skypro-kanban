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
      // Отправляем измененные поля на бэкенд
      const targetId = currentCard?._id || currentCard?.id || id;
      if (!targetId || targetId === "undefined") {
        alert("Не удалось определить ID задачи для обновления");
        return;
      }
      let finalDate = updatedFields.date || currentCard.date;
      if (finalDate instanceof Date) {
        finalDate = finalDate.toISOString();
      } else if (typeof finalDate === "string") {
        const parsedDate = new Date(finalDate);
        finalDate = isNaN(parsedDate.getTime())
          ? new Date().toISOString()
          : parsedDate.toISOString();
      } else {
        finalDate = new Date().toISOString();
      }

      const validTopics = ["Web Design", "Research", "Copywriting"];
      let finalTopic = updatedFields.topic || currentCard.topic;
      if (!validTopics.includes(finalTopic)) {
        finalTopic = "Web Design"; // Дефолтное значение для прохождения валидации
      }
      let finalStatus =
        updatedFields.status || currentCard.status || "Нужно сделать";
      if (finalStatus === "Без статуса") {
        finalStatus = "";
      }

      const cleanTaskData = {
        title: String(
          updatedFields.title || currentCard.title || "Без названия",
        ),
        topic: String(finalTopic),
        status: String(finalStatus),
        description: String(
          updatedFields.description !== undefined
            ? updatedFields.description
            : currentCard.description || "",
        ),
        date: finalDate,
      };

      console.log("Финальный JSON, отправляемый через Axios:", cleanTaskData);

      const data = await api.updateTask(targetId, cleanTaskData, token);
      console.log("Успешный ответ бэкенда:", data);

      // Проверяем ответ от API
      if  (data && data.tasks && Array.isArray(data.tasks)) {
        // Если сервер вернул { tasks: [...] } — записываем актуальный массив от сервера
        setCards(data.tasks);
      } else if (Array.isArray(data)) {
        // Если сервер вернул массив напрямую [...] — записываем его
        setCards(data);
      } else if (data && (data.task || data._id || data.id)) {
        // Если сервер вернул одну обновленную карточку — мержим её в текущий стейт
        const serverCard = data.task || data;
        setCards((prevCards) =>
          prevCards.map((card) =>
            String(card._id || card.id) === String(targetId)
              ? { ...card, ...serverCard }
              : card
          )
        );
      } else {
        // Запасной план: если сервер вернул пустой объект (но статус 200 OK) —
        // фиксируем изменения в стейте локально на основе отправленных полей
        setCards((prevCards) =>
          prevCards.map((card) =>
            String(card._id || card.id) === String(targetId)
              ? { ...card, ...updatedFields }
              : card
          )
        );
      }

      // Перенаправляем на главную доску только ПОСЛЕ того, как отработал setCards
      navigate("/");

    } catch (error) {
      console.error("Ошибка при обновлении задачи:", error);

      // Выводим в alert то, что ответил сервер, чтобы точно увидеть причину
      const message =
        error.response?.data?.error || "Проверьте заполнение полей формы.";
      alert(`Ошибка 400 при сохранении: ${message}`);
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
