import dayjs from 'dayjs';
import Calendar from './Calendar';

function App() {
  return (
    <div className="App">
      <Calendar value={dayjs('2023-11-08')} dateInnerContent={(value) => {
        return <div>
          <p style={{ background: 'yellowgreen', height: '30px' }}>{value.format('YYYY/MM/DD')}</p>
        </div>
      }}></Calendar>
    </div>
  );
}

export default App;
