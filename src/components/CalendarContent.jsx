import React from "react";
import {
  CalendarContent as StyledCalendarContent,
  CalendarDaysNames,
  CalendarDayName,
  CalendarCells,
  CalendarCell,
} from "./Calendar.styled";
const CalendarContent = () => {
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
                  <CalendarCell $isOtherMonth>28</CalendarCell>
                  <CalendarCell $isOtherMonth>29</CalendarCell>
                  <CalendarCell $isOtherMonth>30</CalendarCell>
                  <CalendarCell>31</CalendarCell>
                  <CalendarCell>1</CalendarCell>
                  <CalendarCell>2</CalendarCell>
                  <CalendarCell>3</CalendarCell>
                  <CalendarCell>4</CalendarCell>
                  <CalendarCell>5</CalendarCell>
                  <CalendarCell>6</CalendarCell>
                  <CalendarCell>7</CalendarCell>
                  <CalendarCell $isActive>8</CalendarCell>
                  <CalendarCell>9</CalendarCell>
                  <CalendarCell>10</CalendarCell>
                  <CalendarCell>11</CalendarCell>
                  <CalendarCell>12</CalendarCell>
                  <CalendarCell>13</CalendarCell>
                  <CalendarCell>14</CalendarCell>
                  <CalendarCell>15</CalendarCell>
                  <CalendarCell>16</CalendarCell>
                  <CalendarCell>17</CalendarCell>
                  <CalendarCell>18</CalendarCell>
                  <CalendarCell>19</CalendarCell>
                  <CalendarCell>20</CalendarCell>
                  <CalendarCell>21</CalendarCell>
                  <CalendarCell>22</CalendarCell>
                  <CalendarCell>23</CalendarCell>
                  <CalendarCell>24</CalendarCell>
                  <CalendarCell>25</CalendarCell>
                  <CalendarCell>26</CalendarCell>
                  <CalendarCell>27</CalendarCell>
                  <CalendarCell>28</CalendarCell>
                  <CalendarCell>29</CalendarCell>
                  <CalendarCell>30</CalendarCell>
                  <CalendarCell $isOtherMonth>1</CalendarCell>
                </CalendarCells>
    </StyledCalendarContent>
  );
};

export default CalendarContent;
