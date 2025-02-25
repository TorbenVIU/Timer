import classNames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';

interface Props {
  milliseconds: number;
  setMilliseconds: (milliseconds: number) => void;
}

const ONE_MINUTE = 60000;
const TEN_SECONDS = 10000;

const Countdown = ({ milliseconds, setMilliseconds }: Props) => {
  const [time, setTime] = useState(milliseconds);
  const [hasFirstWarning, setHasFirstWarning] = useState(false);
  const [hasSecondWarning, setHasSecondWarning] = useState(false);
  const [hasOvertime, setHasOvertime] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const minutes = Math.floor(time / 60000);
  const seconds = Math.floor((time % 60000) / 1000);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      if (!hasOvertime) {
        const newTime = time - 1000;
        setTime(newTime);

        if (newTime <= ONE_MINUTE && !hasFirstWarning) {
          setHasFirstWarning(true);
        }

        if (newTime <= TEN_SECONDS && !hasSecondWarning) {
          setHasSecondWarning(true);
        }

        if (newTime <= 0) {
          setHasOvertime(true);
        }
      } else {
        const newTime = time + 1000;
        setTime(newTime);
      }
    }, 1000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [time, hasOvertime, hasFirstWarning, hasSecondWarning]);

  const onRestart = () => {
    setHasFirstWarning(false);
    setHasSecondWarning(false);
    setHasOvertime(false);
    setTime(milliseconds);
    setAnimationKey(prevKey => prevKey + 1);
  };

  const timeString = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  const source = hasSecondWarning ? "./assets/mad_torben.png" : "./assets/happy_torben.png";

  return (
    <div
      className={classNames('countdown', {
        'countdown--warning-1': hasFirstWarning,
        'countdown--warning-2': hasSecondWarning,
        'countdown--overtime': hasOvertime,
      })}
      style={{ '--seconds': `${milliseconds / 1000}s` } as React.CSSProperties}
      key={animationKey}
    >
      <div className='countdown__background'>
        <img className='countdown__warn-element' src={source} alt="" />
        <div className='countdown__background-color'></div>
      </div>
      <h1 className='countdown__time'>{timeString}</h1>
      <div className='countdown__buttons'>
        <button className='countdown__button' onClick={onRestart}>Neu starten</button>
        <button className='countdown__button' onClick={() => setMilliseconds(0)}>Abbrechen</button>
      </div>
    </div>
  );
};

export default Countdown;
