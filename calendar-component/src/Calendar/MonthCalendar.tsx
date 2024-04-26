import { CalendarProps } from ".";
import { Dayjs } from 'dayjs';
import CalendarLocale from "./locale/zh-CN";
import allLocales from "./locale";
import { useContext } from "react";

interface MonthCalendarProps extends CalendarProps {
}

function getAllDays(date: Dayjs) {
  const daysInMonth = date.daysInMonth();
  const startDate = date.startOf('month');
  const day = startDate.day();

  const daysInfo: Array<{ date: Dayjs, currentMonth: boolean }> = new Array(6 * 7);

  for (let i = 0; i < day; i++) {
    daysInfo[i] = {
      date: startDate.subtract(day - i, 'day'),
      currentMonth: false
    }
  }

  for (let i = day; i < daysInfo.length; i++) {
    const calcDate = startDate.add(i - day, 'day');
    daysInfo[i] = {
      date: calcDate,
      currentMonth: calcDate.month() === date.month()
    }
  }

  debugger;
  return daysInfo;
}

function renderDays(
  days: Array<{ date: Dayjs, currentMonth: boolean }>,
  dateRender: MonthCalendarProps['dateRender'],
  dateInnerContent: MonthCalendarProps['dateInnerContent']
) {
  const rows = [];
  for (let i = 0; i < 6; i++) {
    const row = [];
    for (let j = 0; j < 7; j++) {
      const item = days[i * 7 + j];
      row[j] = <div className={"calendar-month-body-cell " + (item.currentMonth ? 'calendar-month-body-cell-current' : '')}>
        {
          dateRender ? dateRender(item.date) : (
            <div className="calendar-month-body-cell-date">
              <div className="calendar-month-body-cell-date-value">{item.date.date()}</div>
              <div className="calendar-month-body-cell-date-content">{dateInnerContent?.(item.date)}</div>
            </div>
          )
        }
      </div>;
    }
    rows.push(row);
  }
  return rows.map(row => <div className="calendar-month-body-row">{row}</div>)
}

function MonthCalendar(props: MonthCalendarProps) {
  const localeContext = useContext(LocaleContext);


  const {
    dateRender,
    dateInnerContent
  } = props;

  const CalendarLocale = allLocales[localeContext.locale];

  const weekList = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
  const allDays = getAllDays(props.value);

  return <div className="calendar-month">
    <div className="calendar-month-week-list">
      {weekList.map((week) => (
        <div className="calendar-month-week-list-item" key={week}>
          {CalendarLocale.week[week]}
        </div>
      ))}
    </div>
    <div className="calendar-month-body">
      {
        renderDays(allDays, dateRender, dateInnerContent)
      }
    </div>
  </div>
}

export default MonthCalendar;
