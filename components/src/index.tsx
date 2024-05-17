import ReactDOM from 'react-dom/client';
import './index.css';

//import App from './components/Portal/App';
//import App from './components/Calendar/App';
//import App from './components/MiniCalendar/App';
//import App from './components/Space/App';
import App from './components/Watermark/App';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(<App />);