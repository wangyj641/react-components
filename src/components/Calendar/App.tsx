import dayjs from 'dayjs';
import Calendar from './lib/Calendar';

export default function CalendarApp() {
  return (
    <div className="App">
      <Calendar value={dayjs('2023-11-08')} onChange={(date) => {
        alert(date.format('YYYY-MM-DD'));
      }}></Calendar>
    </div>
  );
}
