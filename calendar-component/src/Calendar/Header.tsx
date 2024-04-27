import { Dayjs } from "dayjs";
import allLocales from "./locale";
import { useContext } from "react";
import LocaleContext from "./LocaleContext";
interface HeaderProps {
  curMonth: Dayjs;
  prevMonthHandler: () => void;
  nextMonthHandler: () => void;
  todayHandler: () => void;
}
function Header(props: HeaderProps) {

  const {
    curMonth,
    prevMonthHandler,
    nextMonthHandler,
    todayHandler
  } = props;

  const localeContext = useContext(LocaleContext);
  const CalendarLocale = allLocales[localeContext.locale];

  return <div className="calendar-header">
    <div className="calendar-header-left">
      <div className="calendar-header-icon" onClick={prevMonthHandler}>&lt;</div>
      <div className="calendar-header-value">{curMonth.format(CalendarLocale.formatMonth)}</div>
      <div className="calendar-header-icon" onClick={nextMonthHandler}>&gt;</div>
      <button className="calendar-header-btn" onClick={todayHandler}>{CalendarLocale.today}</button>
    </div>
  </div>
}

export default Header;
