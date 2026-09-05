import styled from "styled-components";

export const CalendarContainer = styled.div`
  width: 182px;
  margin-bottom: 20px;
  &,
  * {
    font-family: "Roboto", Arial, Helvetica, sans-serif !important;
  }
`;
export const CalendarTitle = styled.div`
  margin-bottom: 14px;
  padding: 0 7px;
  p,
  & {
    font-family: "Roboto", Arial, Helvetica, sans-serif !important;
    color: #94a6be !important;
    font-size: 10px !important;
    line-height: 1 !important;
  }
  span {
    font-family: "Roboto", Arial, Helvetica, sans-serif !important;
    color: #000000 !important;
    font-weight: 600 !important;
    font-size: 10px !important;
  }
`;
export const CalendarBlock = styled.div`
  display: block;
`;
export const CalendarMoth = styled.div`
  font-family: "Roboto", Arial, Helvetica, sans-serif !important;

  color: #94a6be;
  font-size: 14px;
  line-height: 25px;
  font-weight: 600;
  white-space: nowrap;
`;
export const CalendarContent = styled.div`
  margin-bottom: 12px;
`;
export const CalendarDaysNames = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  margin: 7px 0;
  padding: 0 7px;
  &,
  * {
    font-family: "Roboto", Arial, Helvetica, sans-serif !important;
  }
`;
export const CalendarDayName = styled.div`
  font-family: "Roboto", Arial, Helvetica, sans-serif !important;

  color: #94a6be;
  font-size: 10px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.2px;
`;
export const CalendarCells = styled.div`
  width: 182px;
  height: 126px;
  display: flex;
  flex-wrap: wrap;
  &,
  * {
    font-family: "Roboto", Arial, Helvetica, sans-serif !important;
  }
`;
export const CalendarCell = styled.div`
  font-family: "Roboto", Arial, Helvetica, sans-serif !important;

  width: 22px;
  height: 22px;
  margin: 2px;
  border-radius: 50%;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  color: #94a6be;
  font-size: 10px;
  line-height: 1;
  letter-spacing: -0.2px;
  cursor: pointer;
`;
export const CalendarNav = styled.div`
  display: flex !important;
  flex-direction: row !important; /* Жестко выстраиваем в ряд */
  align-items: center !important;
  justify-content: space-between !important; /* Разносим Сентябрь и стрелочки по бокам */
  width: 100%;
  margin-top: 14px !important;
  margin-bottom: 14px !important;
  padding: 0 7px !important; &,
  * {
    font-family: "Roboto", Arial, Helvetica, sans-serif !important;
  }
  .nav__actions {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
  }

  /* ИСПРАВЛЕНО: Стилизуем сами стрелочки и их SVG иконки */
  .nav__action {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 14px;
    height: 14px;

    svg {
      fill: #94a6be; 
      transition: fill 0.2s ease;
    }


  }
`;
export const CalendarPeriod = styled.div`
  padding: 0 7px;
  .calendar__p {
    font-family: "Roboto", Arial, Helvetica, sans-serif !important;
    color: #94a6be !important;
    font-size: 10px !important;
    line-height: 13px !important;
    margin: 0;
  }
  .date-control {
    font-family: "Roboto", Arial, Helvetica, sans-serif !important;
    color: #000000 !important;
    font-weight: 600 !important;
    font-size: 10px !important;
  }
`;
