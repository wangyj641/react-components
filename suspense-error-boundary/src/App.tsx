import React, { Suspense } from 'react';

const LazyAaa = React.lazy(() => import('./Aaa'));

function App() {
  return (
    <div>
      <Suspense fallback={'loading...'}>
        <LazyAaa></LazyAaa>
      </Suspense>

    </div>
  );
}

export default App;
