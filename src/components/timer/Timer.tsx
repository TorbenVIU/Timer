import React, { useState } from 'react';
import Inputs from '../inputs/Inputs';
import Countdown from '../countdown/Countdown';

const Timer = () => {
  const [milliseconds, setMilliseconds] = useState(0);

  return (
    <>
      <Inputs milliseconds={milliseconds} setMilliseconds={setMilliseconds} />
      {milliseconds && <Countdown milliseconds={milliseconds} setMilliseconds={setMilliseconds} />}
    </>
  );
};

export default Timer;
