import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Calendar from "./components/Calendar";
import Header from "./components/Header";
import Main from "./components/main";
import PopExit from "./components/PopExit";
import CalendarContent from "./components/CalendarContent";
import PopBrowseBtnExit from "./components/PopBrowseBtnEdit";
import CalendarPeriod from "./components/CalendarPeriod";
import PopBrowseBtnBrowse from "./components/PopBrowseBtnBrowse";
import ThemeDomCategories from "./components/ThemeDomCategories";
import PopNewCardForm from "./components/PopNewCardForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="wrapper">
        <PopExit />
        
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
                <div className="pop-new-card__categories categories">
                  <p className="categories__p subttl">Категория</p>
                  <div className="categories__themes">
                    <div className="categories__theme _orange _active-category">
                      <p className="_orange">Web Design</p>
                    </div>
                    <div className="categories__theme _green">
                      <p className="_green">Research</p>
                    </div>
                    <div className="categories__theme _purple">
                      <p className="_purple">Copywriting</p>
                    </div>
                  </div>
                </div>
                <button className="form-new__create _hover01" id="btnCreate">
                  Создать задачу
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="pop-browse" id="popBrowse">
          <div className="pop-browse__container">
            <div className="pop-browse__block">
              <div className="pop-browse__content">
                <div className="pop-browse__top-block">
                  <h3 className="pop-browse__ttl">Название задачи</h3>
                  <div className="categories__theme theme-top _orange _active-category">
                    <p className="_orange">Web Design</p>
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
                        readonly
                        placeholder="Введите описание задачи..."
                      ></textarea>
                    </div>
                  </form>
                  <div className="pop-new-card__calendar calendar">
                    <p className="calendar__ttl subttl">Даты</p>
                    <div className="calendar__block">
                      <div className="calendar__nav">
                        <div className="calendar__month">Сентябрь 2023</div>
                        <div className="nav__actions">
                          <div className="nav__action" data-action="prev">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="6"
                              height="11"
                              viewBox="0 0 6 11"
                            >
                              <path d="M5.72945 1.95273C6.09018 1.62041 6.09018 1.0833 5.72945 0.750969C5.36622 0.416344 4.7754 0.416344 4.41218 0.750969L0.528487 4.32883C-0.176162 4.97799 -0.176162 6.02201 0.528487 6.67117L4.41217 10.249C4.7754 10.5837 5.36622 10.5837 5.72945 10.249C6.09018 9.9167 6.09018 9.37959 5.72945 9.04727L1.87897 5.5L5.72945 1.95273Z" />
                            </svg>
                          </div>
                          <div className="nav__action" data-action="next">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="6"
                              height="11"
                              viewBox="0 0 6 11"
                            >
                              <path d="M0.27055 9.04727C-0.0901833 9.37959 -0.0901832 9.9167 0.27055 10.249C0.633779 10.5837 1.2246 10.5837 1.58783 10.249L5.47151 6.67117C6.17616 6.02201 6.17616 4.97799 5.47151 4.32883L1.58782 0.75097C1.2246 0.416344 0.633778 0.416344 0.270549 0.75097C-0.0901831 1.0833 -0.090184 1.62041 0.270549 1.95273L4.12103 5.5L0.27055 9.04727Z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <CalendarContent />
                      
                      <input
                        type="hidden"
                        id="datepick_value"
                        value="08.09.2023"
                      />
                      <CalendarPeriod />
                    </div>
                  </div>
                </div>
               
                <ThemeDomCategories />
                <PopBrowseBtnBrowse />
                <PopBrowseBtnExit />
                
              </div>
            </div>
          </div>
        </div>
        <Header />
        <Main />
        
      </div>
      
    </>
  );
}

export default App;

