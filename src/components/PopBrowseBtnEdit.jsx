import React from "react";

const PopBrowseBtnExit = ({ onSave, onCancel, onDelete }) => {
  return (
    <>
      <button className="btn-edit__save _btn-bg _hover01" onClick={onSave}>
        Сохранить
      </button>

      <button className="btn-edit__cancel _btn-bor _hover03" onClick={onCancel}>
        Отменить
      </button>

      <button className="btn-edit__delete _btn-bor _hover03" onClick={onDelete}>
        Удалить задачу
      </button>
    </>
  );
};

export default PopBrowseBtnExit;
