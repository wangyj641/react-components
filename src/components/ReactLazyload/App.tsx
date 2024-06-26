import img1 from './a.png';
import img2 from './b.png';
import img3 from './c.png';
import React from 'react';
import LazyLoad from './lib/ReactLazyload';

//const LazyBigCom = React.lazy(() => import('./BigCom'));

export default function ReactLazyloadApp() {
  return (
    <div>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <LazyLoad placeholder={<div>loading...</div>}>
        <img src={img1} />
      </LazyLoad>
      <LazyLoad placeholder={<div>loading...</div>}>
        <img src={img2} />
      </LazyLoad>
      <LazyLoad placeholder={<div>loading...</div>}>
        <img src={img3} />
      </LazyLoad>
    </div>
  );
};
