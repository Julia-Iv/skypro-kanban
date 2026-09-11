import React, { useState} from "react";
import PopBrowseForm from "./PopBrowseForm";
import PopNewCardCalendar from "./PopNewCardCalendar";
import ThemeDomCategories from "./ThemeDomCategories";
import PopBrowseBtn from "./PopBrowseBtn";

const PopBrowse = ({ card, onClose }) => {
  if (!card) return null;

  const [isEdit, setIsEdit] = useState(false);
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
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Заемнение заднего фона доски
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
              <h3 className="pop-browse__ttl">{card.title}</h3>
              <div
                className={`categories__theme theme-top ${card.themeClass || "_orange"} _active-category`}
              >
                <p className={card.themeClass || "_orange"}>
                  {card.themeText || "Web Design"}
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
              <PopBrowseForm card={card} isEdit={isEdit} />
              <PopNewCardCalendar isEdit={isEdit} />
            </div>

            {isEdit && <ThemeDomCategories />}
<div className="pop-browse__btn-browse" style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
              {isEdit ? (
                // Кнопки режима РЕДАКТИРОВАНИЯ (Макет 1)
                <>
                  <button className="btn-edit__save" onClick={() => setIsEdit(false)}>
                    Сохранить
                  </button>
                  <button className="btn-edit__cancel" onClick={() => setIsEdit(false)}>
                    Отменить
                  </button>
                  <button className="btn-edit__delete">Удалить задачу</button>
                </>
              ) : (
                // Кнопки режима ПРОСМОТРА (Макет 2)
                <>
                  {/* При клике переключаем режим на true 👈 */}
                  <button className="btn-browse__edit" onClick={() => setIsEdit(true)}>
                    Редактировать задачу
                  </button>
                  <button className="btn-browse__delete">Удалить задачу</button>
                </>   
                )}
              
              {/* Кнопка Закрыть видна всегда */}
              <button className="btn-browse__close" onClick={onClose} style={{ marginLeft: "auto" }}>
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
