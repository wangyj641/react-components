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
  const [num, setNum] = useState(1);

  useEffect(() => {
    console.log('-------------- effect --------------');
    // queryData().then(data => {
    //   setNum(data);
    // })

    const timer = setInterval(() => {
      console.log(num);
    }, 1000);

    return () => {
      console.log('clean up');
      clearInterval(timer);
    }
  }, [num]);

  return (
    <div onClick={() => setNum(num + 1)}>{num}</div>
  );
}

export default App;
