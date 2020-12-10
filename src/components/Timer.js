import React from 'react';

const Timer = ({radius, stroke, progress}) => {
  let normalizedRadius = radius - stroke * 2;
  let circumference = normalizedRadius * 2 * Math.PI;

  let strokeDashoffset = circumference - progress / 100 * circumference;

  return (
    <svg
      height={radius * 2}
      width={radius * 2}
     >
      <circle
        stroke="white"
        fill="transparent"
        strokeWidth={ stroke }
        strokeDasharray={ circumference + ' ' + circumference }
        style={ { strokeDashoffset } }
        r={ normalizedRadius }
        cx={ radius }
        cy={ radius }
       />
    </svg>
  );
}

export default Timer;
