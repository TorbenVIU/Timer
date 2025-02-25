import React, { useState } from 'react';
import Inputs from '../inputs/Inputs';
import Countdown from '../countdown/Countdown';

const minutesToMs = 1000 * 60

const Timer = () => {
  const [milliseconds, setMilliseconds] = useState(minutesToMs * 15);

  return (
    <>
      <Inputs milliseconds={milliseconds} setMilliseconds={setMilliseconds} />
      {milliseconds && <Countdown milliseconds={milliseconds} setMilliseconds={setMilliseconds} />}
    </>
  );
};

export default Timer;
