import PopBrowseBtnBrowse from "./PopBrowseBtnBrowse";
import PopBrowseBtnExit from "./PopBrowseBtnEdit";

const PopBrowseBtn = ({ isEdit, onClose, onEditToggle, onDelete, onSave, onCancel }) => {
  return (
    <div className="pop-browse__btn-browse">
      {/* 1. Левая группа кнопок меняется в зависимости от режима isEdit */}
      <div className="btn-group" style={{ display: "flex", gap: "8px", alignItems: "center" }}>
        {isEdit ? (
          <PopBrowseBtnExit 
            onSave={onSave} 
            onCancel={onCancel} 
            onDelete={onDelete} 
          />
        ) : (
          <PopBrowseBtnBrowse 
            onEditToggle={onEditToggle} 
            onDelete={onDelete} 
          />
        )}
      </div>

      {/* 2. Правая кнопка "Закрыть" видна всегда */}
      <button 
        className="btn-browse__close _btn-bg _hover01" 
        type="button" 
        onClick={onClose}
        style={{ marginLeft: "auto" }}
      >
        Закрыть
      </button>
    </div>
  );
};

export default PopBrowseBtn;