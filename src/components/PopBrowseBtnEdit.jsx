const PopBrowseBtnExit = () => {

    return (
           <div className="pop-browse__btn-edit _hide">
                  <div className="btn-group">
                    <button className="btn-edit__edit _btn-bg _hover01">
                      <a href="#">Сохранить</a>
                    </button>
                    <button className="btn-edit__edit _btn-bor _hover03">
                      <a href="#">Отменить</a>
                    </button>
                    <button
                      className="btn-edit__delete _btn-bor _hover03"
                      id="btnDelete"
                    >
                      <a href="#">Удалить задачу</a>
                    </button>
                  </div>
                  <button className="btn-edit__close _btn-bg _hover01">
                    <a href="#">Закрыть</a>
                  </button>
                </div>
    )
}

export default PopBrowseBtnExit