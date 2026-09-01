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
  &,
  * {
    font-family: "Roboto", Arial, Helvetica, sans-serif !important;
  }
  color: #94a6be;
  font-size: 14px;
  line-height: 25px;
  font-weight: 600;
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
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 14px;
  padding: 0 7px;
  &,
  * {
    font-family: "Roboto", Arial, Helvetica, sans-serif !important;
  }
`;
export const CalendarPeriod = styled.div`
  font-family: "Roboto", Arial, Helvetica, sans-serif !important;
  padding: 0 7px;
`;
