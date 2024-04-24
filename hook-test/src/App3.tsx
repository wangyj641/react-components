import { produce } from 'immer';
import { useState, useEffect } from 'react';

async function queryData() {
  const data = await new Promise<number>((resolve) => {
    setTimeout(() => {
      resolve(666);
    }, 5000);
  })
  return data;
}

function App() {
  console.log('-------------- comp --------------');
  const [obj, setObj] = useState({
    a: {
      c: {
        e: 0,
        f: 0
      },
      d: 0
    },
    b: 0
  });

  return (
    <div onClick={() => {
      setObj(produce(obj, (obj) => { obj.a.c.e++; }))
    }}>
      {JSON.stringify(obj)}</div>
  );
}

export default App;
