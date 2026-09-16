import React from "react"
import { CalendarPeriod as StyleCalendarPeriod } from "./Calendar.styled"

const CalendarPeriod = ({ selectedStartDate, selectedEndDate }) => {
  
  // Форматируем объект даты в удобную для пользователя строку "ДД.ММ.ГГГГ"
  const formatDate = (date) => {
    if (!date) return "";
    return new Date(date).toLocaleDateString("ru-RU", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  // Вычисляем динамическую строку в зависимости от выбранных дат
  const getPeriodString = () => {
    if (!selectedStartDate) {
      return "Не выбран";
    }
    if (selectedStartDate && !selectedEndDate) {
      return `с ${formatDate(selectedStartDate)}`;
    }
    // Если выбраны обе даты
    return `с ${formatDate(selectedStartDate)} по ${formatDate(selectedEndDate)}`;
  };

    return (
    <StyleCalendarPeriod>
      <div className="calendar__period" style={{ marginTop: "14px" }}>
        <p className="calendar__p subttl" style={{ margin: 0, color: "#94a6be", fontSize: "14px" }}>
          Срок исполнения:{" "}
          <span style={{ color: "#151b26", fontWeight: 600, marginLeft: "6px" }}>
            {getPeriodString()}
          </span>
        </p>
      </div>
    </StyleCalendarPeriod>
  );
};
 

export default CalendarPeriod