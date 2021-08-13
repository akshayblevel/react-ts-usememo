import React, { useEffect, useState } from 'react';

function App() {
  const [heavyJob, setheavyJob] = React.useState(0);
  const [lightJob, setlightJob] = React.useState(0);

  const heavyJobFunc = () => {
    setheavyJob(heavyJob + 1);
  };

  const lightJobFunc = () => {
    setlightJob(lightJob + 1);
  };

  //With useMemo
  const isHeavy = React.useMemo(() => {
    let i = 0;
    while (i < 2000000000) i++;
    var values = ['heavy', 'heavier', 'heaviest'];
    return values[Math.floor(Math.random() * values.length)];
  }, [heavyJob]);

  //Without useMemo LightJobFunc is also taking time
  // const isHeavy = () => {
  //   console.log(heavyJob);
  //   let i = 0;
  //   while (i < 2000000000) i++;
  //   return heavyJob % 2 == 0;
  // };

  return (
    <>
      <button onClick={heavyJobFunc}>Do Heavy Job {heavyJob} </button>
      {isHeavy}
      {/* Without useMemo
      {isHeavy() ? 'Heavy' : 'Havier'} */}
      <br />
      <br />
      <button onClick={lightJobFunc}>Do Light Job {lightJob} </button>
    </>
  );
}

export default App;
