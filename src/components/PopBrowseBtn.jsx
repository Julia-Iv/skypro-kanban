import PopBrowseBtnBrowse from "./PopBrowseBtnBrowse";
import PopBrowseBtnEdit from "./PopBrowseBtnEdit";

const PopBrowseBtn = ({
  isEdit,
  onClose,
  onEditToggle,
  onDelete,
  onSave,
  onCancel,
  isLoading,
}) => {
  return (
    <div className="pop-browse__btn-browse">
      {/*  Левая группа кнопок меняется в зависимости от режима isEdit */}
      <div
        className="btn-group"
        style={{ display: "flex", gap: "8px", alignItems: "center" }}
      >
        {isEdit ? (
          <PopBrowseBtnEdit
            onSave={onSave}
            onCancel={onCancel}
            onDelete={onDelete}
            isLoading={isLoading}
          />
        ) : (
          <PopBrowseBtnBrowse
            onEditToggle={onEditToggle}
            onDelete={onDelete}
            isLoading={isLoading}
          />
        )}
      </div>

      {/*  Правая кнопка "Закрыть" видна всегда */}
      <button
        className="btn-browse__close _btn-bg _hover01"
        type="button"
        onClick={onClose}
        disabled={isLoading} // Блокируем закрытие окна, пока идет сохранение или удаление
        style={{ marginLeft: "auto" }}
      >
        Закрыть
      </button>
    </div>
  );
};

export default PopBrowseBtn;
