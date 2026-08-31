import PopBrowseForm from "./PopBrowseForm";
import PopNewCardCalendar from "./PopNewCardCalendar";
import ThemeDomCategories from "./ThemeDomCategories";
import PopBrowseBtn from "./PopBrowseBtn"

const PopBrowse = ({card, onClose}) => {
  if(!card) return null;

    return (

<div className="pop-browse" id="popBrowse" style={{ display:"flex", position: "fixed", zIndex: 100 }}>
          <div className="pop-browse__container">
            <div className="pop-browse__block">
              <div className="pop-browse__content">
                <div className="pop-browse__top-block">
                  <h3 className="pop-browse__ttl">{card.title}</h3>
                  <div className={`categories__theme theme-top ${card.themeClass || '_orange'} _active-category`}>
                <p className={card.themeClass || '_orange'}>{card.themeText || 'Web Design'}</p>
              </div>
                </div>
                <div className="pop-browse__status status">
                  <p className="status__p subttl">Статус</p>
                  <div className="status__themes">
                    <div className="status__theme _hide">
                      <p>Без статуса</p>
                    </div>
                    <div className="status__theme _gray">
                      <p className="_gray">Нужно сделать</p>
                    </div>
                    <div className="status__theme _hide">
                      <p>В работе</p>
                    </div>
                    <div className="status__theme _hide">
                      <p>Тестирование</p>
                    </div>
                    <div className="status__theme _hide">
                      <p>Готово</p>
                    </div>
                  </div>
                </div>
                <div className="pop-browse__wrap">
                  
                  <PopBrowseForm card={card} />
                  <PopNewCardCalendar />
                  
                </div>
               
                <ThemeDomCategories />
                <PopBrowseBtn onClose={onClose}/>
                
              </div>
            </div>
          </div>
        </div>
    )
}

export default PopBrowse