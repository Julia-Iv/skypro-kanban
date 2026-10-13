import React from "react";

const PopBrowseBtnEdit = ({ onSave, onCancel, onDelete, isLoading }) => {
  return (
    <>
      <button
        className="btn-edit__save _btn-bg _hover01"
        type="button"
        onClick={onSave}
        disabled={isLoading} // Блокируем кнопку во время сохранения изменений
        style={{
          opacity: isLoading ? 0.6 : 1,
          cursor: isLoading ? "not-allowed" : "pointer",
        }}
      >
        {isLoading ? "Сохранение..." : "Сохранить"}
      </button>

      <button
        className="btn-edit__cancel _btn-bor _hover03"
        type="button"
        onClick={onCancel}
        disabled={isLoading} // Запрещаем отмену, пока идет сетевой запрос
        style={{
          opacity: isLoading ? 0.6 : 1,
          cursor: isLoading ? "not-allowed" : "pointer",
        }}
      >
        Отменить
      </button>

      <button
        className="btn-edit__delete _btn-bor _hover03"
        type="button"
        onClick={onDelete}
        disabled={isLoading} // Блокируем кнопку, если пользователь решил удалить карточку прямо из режима редактирования
        style={{
          opacity: isLoading ? 0.6 : 1,
          cursor: isLoading ? "not-allowed" : "pointer",
        }}
      >
        {isLoading ? "Удаление..." : "Удалить задачу"}
      </button>
    </>
  );
};

export default PopBrowseBtnEdit;
