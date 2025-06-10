import React from 'react';
import useClock from '../hooks/useClock';

const ClockWidget = () => {
  const { time, date } = useClock();
  return (
    <div className="flex flex-col items-center mt-2 text-md">
      <div className="font-semibold">{time}</div>
      <div className="font-semibold">{date}</div>
    </div>
  );
};
export default ClockWidget;
