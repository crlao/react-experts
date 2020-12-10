import React, { useState, useEffect } from 'react';
import Timer from '../components/Timer';

const WorkPage = () => {
  const [ progress, setProgress ] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(progress + 10);
      // console.log(progress+10);
      if (progress === 100){
        // console.log('done');
        clearInterval(interval);
      }
    }, 1000);
  }, [])


  return (
    <div>
      <h1 className="mt-3 title">Work</h1>
      <div className="line"></div>
      <Timer
        radius={ 60 }
        stroke={ 4 }
        progress={ progress }
      />
    </div>
  );
}

export default WorkPage;
