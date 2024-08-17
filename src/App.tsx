import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes, useParams, useLocation } from 'react-router-dom';

import CalendarApp from './components/Calendar/App';
import ColorPickerApp from './components/ColorPicker/App';
import CopyToClipboardApp from './components/CopyToClipboard/App';
import MessageApp from './components/Message/App';
import MiniCalendarApp from './components/MiniCalendar/App';
import MutateObserverApp from './components/MutateObserver/App';
import OnBoardingApp from './components/OnBoarding/App';
import PopoverApp from './components/Popover/App';
import PortalApp from './components/Portal/App';
import SpaceApp from './components/Space/App';
import UploadApp from './components/Upload/App';
import WatermarkApp from './components/Watermark/App';
import ReactLazyloadApp from './components/ReactLazyload/App';
import FormApp from './components/Form/App';

import useMountedStateApp from './hooks/useMountedState/App';
import useSizeApp from './hooks/useSize/App';

import ZustandApp from './libs/Zustand/App';

const components = [
  { name: 'Calendar', app: CalendarApp },
  { name: 'ColorPicker', app: ColorPickerApp },
  { name: 'CopyToClipboard', app: CopyToClipboardApp },
  { name: 'Message', app: MessageApp },
  { name: 'MiniCalendar', app: MiniCalendarApp },
  { name: 'MutateObserver', app: MutateObserverApp },
  { name: 'OnBoarding', app: OnBoardingApp },
  { name: 'Popover', app: PopoverApp },
  { name: 'Portal', app: PortalApp },
  { name: 'Space', app: SpaceApp },
  { name: 'Upload', app: UploadApp },
  { name: 'Watermark', app: WatermarkApp },
  { name: 'ReactLazyload', app: ReactLazyloadApp },
  { name: 'Form', app: FormApp },
];

const hooks = [
  { name: 'useMountedState', app: useMountedStateApp },
  { name: 'useSize', app: useSizeApp }
];

const libs = [
  { name: 'zustand', app: ZustandApp }
];

function ItemDetail() {
  const { name } = useParams();
  const path = JSON.stringify(useLocation().pathname);
  console.log(path);

  let DynamicComponent = components[0].app;

  if (path.startsWith('components', 2)) {
    const index = components.findIndex(item => item.name === name);
    DynamicComponent = components[index].app;
  }
  else if (path.startsWith('hooks', 2)) {
    const index = hooks.findIndex(item => item.name === name);
    DynamicComponent = hooks[index].app;
  }
  else if (path.startsWith('libs', 2)) {
    const index = libs.findIndex(item => item.name === name);
    DynamicComponent = libs[index].app;
  }
  else {
    console.error('Error');
  }

  return (
    <div>
      <DynamicComponent />
    </div>
  );
}

function Category() {
  return (
    <div>
      <h1>Components</h1>
      <ul>
        {components.map(item => (
          <li key={item.name}>
            <Link to={`/components/${item.name}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
      <h1>Hooks</h1>
      <ul>
        {hooks.map(item => (
          <li key={item.name}>
            <Link to={`/hooks/${item.name}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
      <h1>Libs</h1>
      <ul>
        {libs.map(item => (
          <li key={item.name}>
            <Link to={`/libs/${item.name}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Category />} />
        <Route path="/components/:name" element={<ItemDetail />} />
        <Route path="/hooks/:name" element={<ItemDetail />} />
        <Route path="/libs/:name" element={<ItemDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
