const PopBrowseForm = ({ card }) => {

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
                        name="text"
                        id="textArea01"
                        readOnly
                        value={card?.description || "Нет описания задачи..."}
                        placeholder="Введите описание задачи..."
                      ></textarea>
                    </div>
                  </form>
    )
}

export default PopBrowseForm