import React from "react"
import { CalendarPeriod as StyleCalendarPeriod }
from "./Calendar.styled"

const CalendarPeriod = () => {

    return (
   <StyleCalendarPeriod>
                        <p className="calendar__p date-end">
                          Срок исполнения:{" "}
                          <span className="date-control">09.09.23</span>
                        </p>
                      </StyleCalendarPeriod>
    )
}
export default CalendarPeriod