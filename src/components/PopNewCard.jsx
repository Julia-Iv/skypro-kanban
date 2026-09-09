import { Link, useNavigate } from "react-router-dom";
import PopNewCardForm from "./PopNewCardForm";
import Calendar from "./Calendar";
import PopNewCardCategories from "./PopNewCardCategories";
import FormNewCreate from "./FormNewCreate";

const PopNewCard = () => {
  const navigate = useNavigate();
  const handleClose = (e) => {
    e?.preventDefault();
    navigate("/");
  };
  return (
    <div
      className="pop-new-card"
      id="popNewCard"
      style={{
        display: "flex", // Меняем на flex для центрирования
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Затемнение заднего фона доски
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1500,
      }}
      onClick={handleClose} // 🌟 Закрытие при клике на темный фон вокруг формы

      //style={{ display: "block" }}
    >
      <div className="pop-new-card__container" onClick={(e) => e.stopPropagation()}>
        <div className="pop-new-card__block">
          <div className="pop-new-card__content">
            <h3 className="pop-new-card__ttl">Создание задачи</h3>
            <Link to="/" className="pop-new-card__close">
              ✖
            </Link>

            <div className="pop-new-card__wrap">
              <PopNewCardForm />
              <Calendar />
            </div>
            <PopNewCardCategories />
            <FormNewCreate onCancel={handleClose} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopNewCard;
