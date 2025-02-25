import React, { useState } from 'react';
import Inputs from '../inputs/Inputs';
import Countdown from '../countdown/Countdown';
import Footer from '../footer/Footer';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const MINUTES_TO_MS = 1000 * 60

const Timer = () => {
  const [milliseconds, setMilliseconds] = useState(0);

  return (
    <>
      <Inputs milliseconds={milliseconds} setMilliseconds={setMilliseconds} />
      {Boolean(milliseconds) && <Countdown milliseconds={milliseconds} setMilliseconds={setMilliseconds} />}
      <Footer />
    </>
  );
};

export default Timer;
