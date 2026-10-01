import React from "react";
import {
  CalendarContent as StyledCalendarContent,
  CalendarDaysNames,
  CalendarDayName,
  CalendarCells,
  CalendarCell,
} from "./Calendar.styled";

const CalendarContent = ({
  currentDate,
  selectedStartDate,
  selectedEndDate,
  onDateClick,
}) => {
  if (!currentDate) return null;

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  // Вспомогательная функция для точного сравнения дат (только день, месяц, год)
  const isSameDay = (date1, date2) => {
    if (!date1 || !date2) return false;
    const d1 = new Date(date1);
    const d2 = new Date(date2);
    return (
      d1.getDate() === d2.getDate() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getFullYear() === d2.getFullYear()
    );
  };

  // 1. Дни текущего месяца
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // 2. Дни предыдущего месяца для заполнения начала сетки
  const firstDayIndex = (new Date(year, month, 1).getDay() + 6) % 7;
  const prevMonthDays = new Date(year, month, 0).getDate();

  const cells = [];
  for (let i = firstDayIndex - 1; i >= 0; i--) {
    const day = prevMonthDays - i;
    const thisDate = new Date(year, month - 1, day);
    cells.push({ day, isOtherMonth: true, date: thisDate });
  }

  // Заполняем текущий месяц
  for (let day = 1; day <= daysInMonth; day++) {
    const thisDate = new Date(year, month, day);
    cells.push({ day, isOtherMonth: false, date: thisDate });
  }

  // Заполняем начало следующего месяца до полной сетки ($isOtherMonth)
  const totalSlots = cells.length;
  const remainingSlots = totalSlots % 7 === 0 ? 0 : 7 - (totalSlots % 7);
  for (let day = 1; day <= remainingSlots; day++) {
    const thisDate = new Date(year, month + 1, day);
    cells.push({ day, isOtherMonth: true, date: thisDate });
  }
  return (
    <StyledCalendarContent>
      <CalendarDaysNames>
        <CalendarDayName>пн</CalendarDayName>
        <CalendarDayName>вт</CalendarDayName>
        <CalendarDayName>ср</CalendarDayName>
        <CalendarDayName>чт</CalendarDayName>
        <CalendarDayName>пт</CalendarDayName>
        <CalendarDayName>сб</CalendarDayName>
        <CalendarDayName>вс</CalendarDayName>
      </CalendarDaysNames>
      <CalendarCells>
        {cells.map(({ day, isOtherMonth, date }, index) => {
          const isActive = isSameDay(date, selectedStartDate);


          return (
            <CalendarCell
              key={`${date.getMonth()}-${day}-${index}`}
              $isOtherMonth={isOtherMonth}
              $isActive={isActive}  // Передаем true только если это выбранный день
              $isEnd={false}        // Интервалов больше нет
              $isInRange={false}    // Интервалов больше нет
              onClick={() => onDateClick(date)}
            >
              {day}
            </CalendarCell>
          );
        })}
      </CalendarCells>
    </StyledCalendarContent>
  );
};

export default CalendarContent;
