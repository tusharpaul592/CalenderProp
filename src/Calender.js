import { addDays, differenceInCalendarDays } from "date-fns";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import "./styles.css";

export default function Calender({ date }) {
  const now = new Date(date);

  const highlightedDates = [now];

  function isSameDay(a, b) {
    return differenceInCalendarDays(a, b) === 0;
  }
  function tileClassName({ date, view }) {
    if (
      view === "month" &&
      highlightedDates.find((dDate) => isSameDay(dDate, date))
    ) {
      return "highlight";
    }
  }

  return (
    <Calendar defaultActiveStartDate={now} tileClassName={tileClassName} />
  );
}
