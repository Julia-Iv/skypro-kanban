import React from "react";
const PopBrowseForm = ({ card, isEdit, onChange }) => {
 return (
    <form
      className="pop-browse__form form-browse"
      id="formBrowseCard"
      action="#"
    >
      <div className="form-browse__block">
        <label htmlFor="textArea01" className="subttl">
          Описание задачи
        </label>
        <textarea
          className="form-browse__area"
          name="description"
          id="textArea01"
          readOnly={!isEdit}
          value={card?.description || ""}
          onChange={onChange}
          placeholder="Введите описание задачи..."
        ></textarea>
      </div>
    </form>
  );
};

export default PopBrowseForm;
