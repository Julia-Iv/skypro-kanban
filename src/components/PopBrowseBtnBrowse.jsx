import React from "react";

// Принимаем onEditToggle (для включения редактирования) и onDelete
const PopBrowseBtnBrowse = ({ onEditToggle, onDelete, isLoading }) => {
  return (
    <>
      <button
        className="btn-browse__edit _btn-bor _hover03"
        type="button"
        onClick={onEditToggle}
        disabled={isLoading} // Блокируем кнопку в процессе загрузки
        style={{
          opacity: isLoading ? 0.6 : 1,
          cursor: isLoading ? "not-allowed" : "pointer",
          padding: "10px 14px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Редактировать задачу
      </button>

      <button
        className="btn-browse__delete _btn-bor _hover03"
        type="button"
        onClick={onDelete}
        disabled={isLoading} // Блокируем кнопку, пока идет удаление карточки
        style={{
          opacity: isLoading ? 0.6 : 1,
          cursor: isLoading ? "not-allowed" : "pointer",
          // СИНХРОНИЗАЦИЯ СТИЛЕЙ:
          color: "var(--main-purple, #565EEF)", // Укажите основной цвет шрифта (синий/фиолетовый как у левой кнопки)
          border: "1px solid var(--main-purple, #565EEF)", // Явно задаем рамку в тон соседней кнопке
          backgroundColor: "transparent",
          padding: "10px 14px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "transparent",

          // Если isLoading истина, цвет станет серым (#94A3B8), иначе — фиолетовым (#565EEF)
          color: isLoading ? "#94A3B8" : "#565EEF",

          // Динамическое изменение цвета рамки при загрузке
          border: `1px solid ${isLoading ? "#94A3B8" : "#565EEF"}`,
        }}
      >
        {isLoading ? "Удаление..." : "Удалить задачу"}
      </button>
    </>
  );
};

export default PopBrowseBtnBrowse;
