import React from "react"
import { CalendarPeriod as StyleCalendarPeriod }
from "./Calendar.styled"

const CalendarPeriod = ({ selectedDate }) => {
  
  // Форматируем объект даты в удобную для пользователя строку "ДД.ММ.ГГГГ"
  const formattedDate = selectedDate
    ? new Date(selectedDate).toLocaleDateString("ru-RU", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      })
    : "Не выбран";

  return (
    <div className="calendar__period" style={{ marginTop: "14px" }}>
      <p className="calendar__p subttl" style={{ margin: 0, color: "#94a6be", fontSize: "14px" }}>
        Срок исполнения:{" "}
        <span style={{ color: "#151b26", fontWeight: 600, marginLeft: "6px" }}>
          {formattedDate} {/* Значение справа от текста теперь меняется динамически! */}
        </span>
      </p>
    </div>
  );
};

/*const CalendarPeriod = () => {

    return (
   <StyleCalendarPeriod>
                        <p className="calendar__p date-end">
                          Срок исполнения:{" "}
                          <span className="date-control">09.09.23</span>
                        </p>
                      </StyleCalendarPeriod>
    )
}*/
export default CalendarPeriod