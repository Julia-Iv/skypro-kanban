import React, { useState, useEffect } from "react";
import PopBrowseForm from "./PopBrowseForm";
import PopNewCardCalendar from "./PopNewCardCalendar";
import ThemeDomCategories from "./ThemeDomCategories";
import PopBrowseBtn from "./PopBrowseBtn";

const topicStyles = {
  "Web Design": "_orange",
  Research: "_green",
  Copywriting: "_purple",
};
const PopBrowse = ({ card, onClose, onDelete, onUpdate }) => {
  if (!card) return null;

  const [isEdit, setIsEdit] = useState(false);

  //Создаем стейты для обработки ошибок и состояния загрузки
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Создаем локальный изменяемый стейт для задачи на основе пропса card,
  // чтобы можно было редактировать даты и данные без мгновенной перезаписи оригинала
  const [editedCard, setEditedCard] = useState({ ...card });
  useEffect(() => {
    if (card) {
      setEditedCard({ ...card });
      setError(null);
    }
  }, [card?._id, card?.id]);

  // Список всех возможных статусов бэкенда Skypro
  const statusOptions = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];

  // Сброс изменений при отмене
  const handleCancel = () => {
    setEditedCard({ ...card }); // Возвращаем исходное состояние карточки
    setError(null);
    setIsEdit(false);
  };

  // функцию сохранения данных карточки
  const handleSave = async () => {
    // название не должно быть пустым
    if (!editedCard.title || !editedCard.title.trim()) {
      setError("Название задачи не может быть пустым");
      return;
    }

    // Сбрасываем ошибку и включаем загрузку
    setError(null);
    setIsLoading(true);

    try {
      let apiDate =
        editedCard.selectedStartDate || editedCard.date || card.date;

      if (apiDate instanceof Date) {
        apiDate = apiDate.toISOString();
      } else if (apiDate && typeof apiDate === "string") {
        const parsed = new Date(apiDate);
        if (!isNaN(parsed.getTime())) {
          apiDate = parsed.toISOString();
        }
      }

      // Собираем измененные поля, которые требует API Skypro (status, description, date)
      const updatedFields = {
        id: card.id || card._id,
        title: String(editedCard.title || card.title || "Без названия").trim(),
        topic: String(editedCard.topic || "Web Design"),
        status: String(editedCard.status || "Без статуса"),
        description:
          String(editedCard.description || "").trim() || "Нет описания",
        date: apiDate,
      };

      console.log(
        "Кликнули 'Сохранить'. Отправляем поля на бэкенд:",
        updatedFields,
      );

      // Вызываем метод отправки на бэкенд из TaskPage.jsx
      await onUpdate(updatedFields);
      setIsEdit(false);
    } catch (error) {
      console.error("Не удалось сохранить карточку:", error);
      setError(
        error.message || "Не удалось сохранить изменения. Попробуйте позже.",
      );
    } finally {
      setIsLoading(false);
    }
  };
  // Добавлен метод удаления задачи с перехватом ошибок
  const handleDeleteClick = async () => {
    if (!window.confirm("Вы уверены, что хотите удалить эту задачу?")) return;

    setError(null);
    setIsLoading(true);

    try {
      await onDelete(card.id || card._id);
      onClose(); // Закрываем модальное окно после успешного удаления
    } catch (err) {
      console.error("Не удалось удалить карточку:", err);
      setError(err.message || "Не удалось удалить задачу. Попробуйте позже.");
    } finally {
      setIsLoading(false);
    }
  };

  // Добавляем обработчик для переключения статуса задачи
  const handleStatusChange = (newStatus) => {
    if (!isEdit) return; // Менять статус можно только в режиме редактирования
    setEditedCard((prev) => ({ ...prev, status: newStatus }));
  };
  // Метод для отслеживания изменений текста внутри формы
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedCard((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Функция-обработчик для смены категории (для работы с ThemeDomCategories)
  const handleTopicChange = (newTopic) => {
    setEditedCard((prev) => ({ ...prev, topic: newTopic }));
  };

  // Получаем текущий класс цвета темы на основе реального поля topic
  const currentThemeClass = topicStyles[editedCard.topic] || "_orange";

  return (
    <div
      className="pop-browse"
      id="popBrowse"
      style={{
        display: "flex",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.2)", // Заемнение заднего фона доски
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1500, // Самый высокий z-index, чтобы перекрыть шапку и карточки
      }}
      onClick={onClose} // Закрыть при клике на темную область вокруг окна

      //style={{ display:"flex", position: "fixed", zIndex: 100 }}
    >
      <div
        className="pop-browse__container"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="pop-browse__block">
          <div className="pop-browse__content">
            <div className="pop-browse__top-block">
              <h3 className="pop-browse__ttl">{editedCard.title}</h3>
              <div
                className={`categories__theme theme-top ${currentThemeClass} _active-category`}
              >
                <p className={currentThemeClass}>
                  {editedCard.topic || "Без темы"}
                </p>
              </div>
            </div>
            <div className="pop-browse__status status">
              <p className="status__p subttl">Статус</p>
              <div className="status__themes">
                {/*Динамический вывод статусов */}
                {statusOptions.map((statusName) => {
                  const isActive = editedCard.status === statusName;
                  // В режиме просмотра прячем все остальные статусы, кроме текущегоактивного
                  const visibilityClass = !isEdit && !isActive ? "_hide" : "";
                  // Активный статус выделяется серым фоном по стилям макета
                  const activeClass = isActive ? "_gray" : "";

                  return (
                    <div
                      key={statusName}
                      className={`status__theme ${visibilityClass} ${activeClass}`}
                      style={{ cursor: isEdit ? "pointer" : "default" }}
                      onClick={() => handleStatusChange(statusName)}
                    >
                      <p className={isActive ? "_gray" : ""}>{statusName}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="pop-browse__wrap">
              <PopBrowseForm
                card={editedCard}
                isEdit={isEdit}
                onChange={handleInputChange}
              />
              <PopNewCardCalendar
                taskData={editedCard}
                setTaskData={setEditedCard}
                isEdit={isEdit}
              />
            </div>

            {isEdit && (
              <ThemeDomCategories
                topic={editedCard.topic}
                onChangeTopic={handleTopicChange}
              />
            )}
            {/*  БЛОК ВЫВОДА ОШИБКИ СЕРВЕРА */}
            {error && (
              <p
                style={{
                  color: "#f5222d",
                  fontWeight: "500",
                  margin: "15px 0 0 0",
                  fontSize: "14px",
                  textAlign: "center",
                }}
              >
                {error}
              </p>
            )}

            <PopBrowseBtn
              isEdit={isEdit}
              onClose={onClose}
              onEditToggle={() => setIsEdit(true)}
              onDelete={handleDeleteClick}
              onSave={handleSave}
              onCancel={handleCancel}
              isLoading={isLoading} // Пробрасываем стейт загрузки в кнопки карточки
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopBrowse;
