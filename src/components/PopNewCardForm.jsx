const PopNewCardForm = ({ taskData, setTaskData }) => {
    console.log("Текущее состояние taskData:", taskData);

  // обновления полей в общем состоянии родителя
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prevData) => ({
      ...prevData,
      [name]: value, // динамически обновляем title или description
    }));
  };

  return (
    <div className="pop-new-card__form form-new" id="formNewCard" onSubmit={(e) => e.preventDefault()}>
      <div className="form-new__block">
        <label htmlFor="formTitle" className="subttl">
          Название задачи
        </label>
        <input
          className="form-new__input"
          type="text"
          name="title"
          id="formTitle"
          placeholder="Введите название задачи..."
          autoFocus
          value={taskData.title}
          onChange={handleChange}
        />
      </div>
      <div className="form-new__block">
        <label htmlFor="textArea" className="subttl">
          Описание задачи
        </label>
        <textarea
          className="form-new__area"
          name="description"
          id="textArea"
          placeholder="Введите описание задачи..."
          value={taskData.description} /* Привязываем значение к стейту */
          onChange={handleChange} /* Слушаем изменения */
        ></textarea>
      </div>
    </div>
  );
};
export default PopNewCardForm;
