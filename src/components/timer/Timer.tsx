import React, { useState } from 'react';
import Inputs from '../inputs/Inputs';
import Countdown from '../countdown/Countdown';
import Footer from '../footer/Footer';

const minutesToMs = 1000 * 60

const Timer = () => {
  const [milliseconds, setMilliseconds] = useState(minutesToMs * 15);

  return (
    <>
      <Inputs milliseconds={milliseconds} setMilliseconds={setMilliseconds} />
      {milliseconds && <Countdown milliseconds={milliseconds} setMilliseconds={setMilliseconds} />}
      <Footer />
    </>
  );
};

export default Timer;
