import { useEffect, useRef } from "react";
import MiniCalendar, { CalendarRef } from './lib/MiniCalendar';

function App() {
  const calendarRef = useRef<CalendarRef>(null);

  useEffect(() => {
    console.log(calendarRef.current?.getDate().toLocaleDateString());

    setTimeout(() => {
      calendarRef.current?.setDate(new Date(2024, 3, 1));
    }, 3000);
  }, []);

  return (
    <div>
      {/* <Calendar value={new Date('2023-3-1')} onChange={(date: Date) => {
        alert(date.toLocaleDateString());
    }}></Calendar> */}
      <MiniCalendar ref={calendarRef} value={new Date("2024-8-15")}></MiniCalendar>
    </div>
  );
}

export default App;