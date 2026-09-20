import React from "react";

// Принимаем onEditToggle (для включения редактирования) и onDelete
const PopBrowseBtnBrowse = ({ onEditToggle, onDelete }) => {
  return (
    <>
      <button 
        className="btn-browse__edit _btn-bor _hover03" 
        onClick={onEditToggle}
      >
        Редактировать задачу
      </button>
      
      <button 
        className="btn-browse__delete _btn-bor _hover03" 
        onClick={onDelete}
      >
        Удалить задачу
      </button>
    </>
  );
};

export default PopBrowseBtnBrowse;