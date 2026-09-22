import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PopNewCardForm from "./PopNewCardForm";
import Calendar from "./Calendar";
import PopNewCardCategories from "./PopNewCardCategories";
import FormNewCreate from "./FormNewCreate";
import { api } from "../api";

const PopNewCard = ({ setCards, token }) => {
  const navigate = useNavigate();
  // Создаем общее состояние для полей новой задачи
  const [taskData, setTaskData] = useState({
    title: "",
    description: "",
    status: "Без статуса", // или первая колонка по умолчанию
    category: "",
    date: new Date(),
  });

  const fromServerStatus = {
    "No Status": "Без статуса",
    "Ready": "Нужно сделать",       
    "In Progress": "В работе",
    "Testing": "Тестирование",
    "Done": "Готово",
  };

  const handleClose = (e) => {
    e?.preventDefault();
    navigate("/");
  };
  // Функция обработки отправки формы на бэкенд
  const handleCreateTask = async (e) => {
    e?.preventDefault();

    // Валидация: проверяем, что название задачи заполнено
    if (!taskData.title.trim()) {
      alert("Пожалуйста, введите название задачи");
      return;
    }
        try {
      //  Форматируем дату в ISO-строку, если это объект Date
            let formattedDate = taskData.date || new Date();
      if (formattedDate instanceof Date) {
        // Убираем миллисекунды, сохраняя Z
        formattedDate = formattedDate.toISOString().replace(/\.\d{3}/, ''); 
      } else if (typeof formattedDate === "string") {
        // Если это строка, проверяем наличие Z. Если её нет — дописываем
        if (formattedDate.includes('.')) {
          formattedDate = formattedDate.split('.')[0] + 'Z';
        } else if (!formattedDate.endsWith('Z')) {
          formattedDate = formattedDate + 'Z';
        }
      } else {
        formattedDate = new Date().toISOString().replace(/\.\d{3}/, '');
      }

      // Список строго валидных категорий для бэкенда Skypro
      const validTopics = ["Web Design", "Research", "Copywriting"];
      let finalTopic = validTopics.includes(taskData.category) ? taskData.category : "Web Design";

      const taskToSend = {
        title: taskData.title.trim(),
        topic: String(finalTopic), 
        description: taskData.description ? taskData.description.trim() : "",
        date: formattedDate // Здесь гарантированно будет строка вида '2026-09-23T21:00:00Z'
      };



      console.log("Отправляем на сервер для создания задачи:", taskToSend);


      // Отправляем на сервер адаптированный объект taskToSend вместо taskData
      const data = await api.createTask(taskToSend, token);
      const serverTasks = data?.tasks || data;


      // Добавляем новую карточку в глобальный стейт приложения
      if (serverTasks && Array.isArray(serverTasks)) {
        const formattedTasks = serverTasks.map((task) => ({
          ...task,
          status: fromServerStatus[task.status] || "Без статуса",
        }));
        setCards(formattedTasks);
      }


      // Возвращаемся на главную страницу (закрываем модальное окно)
      navigate("/");
    } catch (error) {
      console.error("Ошибка при создании задачи:", error);
      const message = error.response?.data?.error || "Проверьте заполнение полей.";
      alert(`Не удалось создать задачу: ${message}`);
    }
  };
  return (
    <div
      className="pop-new-card"
      id="popNewCard"
      style={{
        display: "flex", // Меняем на flex для центрирования
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.2)", // Затемнение заднего фона доски
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1500,
      }}
      onClick={handleClose} // 🌟 Закрытие при клике на темный фон вокруг формы

      //style={{ display: "block" }}
    >
      <div
        className="pop-new-card__container"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="pop-new-card__block">
          <div className="pop-new-card__content">
            <h3 className="pop-new-card__ttl">Создание задачи</h3>
            <Link to="/" className="pop-new-card__close">
              ✖
            </Link>
            <form onSubmit={handleCreateTask}>
              <div className="pop-new-card__wrap">
                <PopNewCardForm taskData={taskData} setTaskData={setTaskData} />
                <Calendar taskData={taskData} setTaskData={setTaskData} />
              </div>
              <PopNewCardCategories
                taskData={taskData}
                setTaskData={setTaskData}
              />
              <FormNewCreate onCancel={handleClose} />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopNewCard;
