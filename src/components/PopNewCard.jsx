import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import PopNewCardForm from "./PopNewCardForm";
import Calendar from "./Calendar";
import PopNewCardCategories from "./PopNewCardCategories";
import FormNewCreate from "./FormNewCreate";
import { api } from "../api"

const PopNewCard = ( { setCards }) => {
  const navigate = useNavigate();
  // Создаем общее состояние для полей новой задачи
  const [taskData, setTaskData] = useState({
    title: "",
    description: "",
    status: "Без статуса", // или первая колонка по умолчанию
    category: "",
    date: new Date(),
  });

  const handleClose = (e) => {
    e?.preventDefault();
    navigate("/");
  };
// 3. Функция обработки отправки формы на бэкенд
  const handleCreateTask = async (e) => {
    e?.preventDefault();

    // Валидация: проверяем, что название задачи заполнено
    if (!taskData.title.trim()) {
      alert("Пожалуйста, введите название задачи");
      return;
    }

    try {
      // Отправляем запрос на создание задачи к серверу
      const newCardFromServer = await api.createTask(taskData);
      
      // Добавляем новую карточку, пришедшую от сервера, в глобальный стейт приложения
      setCards((prevCards) => [...prevCards, newCardFromServer]);
   // Возвращаемся на главную страницу (закрываем модальное окно)
      navigate("/");
    } catch (error) {
      console.error("Ошибка при создании задачи:", error);
      alert("Не удалось создать задачу. Попробуйте еще раз.");
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
      <div className="pop-new-card__container" onClick={(e) => e.stopPropagation()}>
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
            <PopNewCardCategories taskData={taskData} setTaskData={setTaskData} />
            <FormNewCreate onCancel={handleClose} />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopNewCard;
