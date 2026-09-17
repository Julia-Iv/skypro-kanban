import React, { useState } from "react";
import PopBrowseForm from "./PopBrowseForm";
import PopNewCardCalendar from "./PopNewCardCalendar";
import ThemeDomCategories from "./ThemeDomCategories";
import PopBrowseBtn from "./PopBrowseBtn";

const PopBrowse = ({ card, onClose, onDelete }) => {
  if (!card) return null;

  const [isEdit, setIsEdit] = useState(false);
  // Создаем локальный изменяемый стейт для задачи на основе пропса card,
  // чтобы можно было редактировать даты и данные без мгновенной перезаписи оригинала
  const [editedCard, setEditedCard] = useState({ ...card });

  // Сброс изменений при отмене
  const handleCancel = () => {
    setEditedCard({ ...card }); // Возвращаем исходное состояние карточки
    setIsEdit(false);
  };

  // Функция обновления из верхнего стейта/API)
  const handleSave = () => {
    console.log("Сохраненные данные карточки с новыми датами:", editedCard);
    setIsEdit(false);
  };

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
                className={`categories__theme theme-top ${editedCard.themeClass || "_orange"} _active-category`}
              >
                <p className={editedCard.themeClass || "_orange"}>
                  {editedCard.themeText || "Web Design"}
                </p>
              </div>
            </div>
            <div className="pop-browse__status status">
              <p className="status__p subttl">Статус</p>
              <div className="status__themes">
                <div className={`status__theme ${isEdit ? "" : "_hide"}`}>
                  <p>Без статуса</p>
                </div>
                <div className="status__theme _gray">
                  <p className="_gray">Нужно сделать</p>
                </div>
                <div className={`status__theme ${isEdit ? "" : "_hide"}`}>
                  <p>В работе</p>
                </div>
                <div className={`status__theme ${isEdit ? "" : "_hide"}`}>
                  <p>Тестирование</p>
                </div>
                <div className={`status__theme ${isEdit ? "" : "_hide"}`}>
                  <p>Готово</p>
                </div>
              </div>
            </div>
            <div className="pop-browse__wrap">
              <PopBrowseForm card={editedCard} isEdit={isEdit} />
              <PopNewCardCalendar
                taskData={editedCard}
                setTaskData={setEditedCard}
                isEdit={isEdit}
              />
            </div>

            {isEdit && <ThemeDomCategories />}
            <div
              className="pop-browse__btn-browse"
              style={{ display: "flex", gap: "10px", marginTop: "20px" }}
            >
              {isEdit ? (
                // Кнопки режима РЕДАКТИРОВАНИЯ (Макет 1)
                <>
                  <button className="btn-edit__save" onClick={handleSave}>
                    Сохранить
                  </button>
                  <button className="btn-edit__cancel" onClick={handleCancel}>
                    Отменить
                  </button>
                  <button className="btn-edit__delete">Удалить задачу</button>
                  <button className="btn-edit__delete" onClick={onDelete}>
                    Удалить задачу
                  </button>
                </>
              ) : (
                <>
                  <button
                    className="btn-browse__edit"
                    onClick={() => setIsEdit(true)}
                  >
                    Редактировать задачу
                  </button>
                  <button className="btn-browse__delete" onClick={onDelete}>Удалить задачу</button>
                </>
              )}

              {/* Кнопка Закрыть видна всегда */}
              <button
                className="btn-browse__close"
                onClick={onClose}
                style={{ marginLeft: "auto" }}
              >
                Закрыть
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopBrowse;
