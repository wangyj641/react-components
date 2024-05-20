import ReactDOM from 'react-dom/client';

//import App from './components/Portal/App';
//import App from './components/Calendar/App';
//import App from './components/MiniCalendar/App';
//import App from './components/Space/App';
//import App from './components/Watermark/App';
//import App from './components/MutateObserver/App';
//import App from './components/CopyToClipboard/App';
//import App from './hooks/useMountedState/App';
import App from './components/Message/App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(<App />);