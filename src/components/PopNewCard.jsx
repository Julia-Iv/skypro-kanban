import PopNewCardForm from "./PopNewCardForm";
import Calendar from "./Calendar";
import PopNewCardCategories from "./PopNewCardCategories";
import FormNewCreate from "./FormNewCreate"

const PopNewCard = () => {

  return (
        <div className="pop-new-card" id="popNewCard">
          <div className="pop-new-card__container">
            <div className="pop-new-card__block">
              <div className="pop-new-card__content">
                <h3 className="pop-new-card__ttl">Создание задачи</h3>
                <a href="#" className="pop-new-card__close">
                  &#10006;
                </a>
                <div className="pop-new-card__wrap">
                  
                  <PopNewCardForm />
                  <Calendar />
                
                  
                </div>
                <PopNewCardCategories />
                <FormNewCreate />
                
              </div>
            </div>
          </div>
        </div>
  )
}

export default PopNewCard