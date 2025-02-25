import React from 'react';

interface Props {
  milliseconds: number;
  setMilliseconds: (milliseconds: number) => void;
}

const TIME_OPTIONS = [
  { label: '5 Minuten', value: 300000 },
  { label: '10 Minuten', value: 600000 },
  { label: '15 Minuten', value: 900000 },
  { label: '30 Minuten', value: 1800000 },
  { label: '45 Minuten', value: 2700000 },
  { label: '60 Minuten', value: 3600000 },
];

const Inputs = ({ milliseconds, setMilliseconds }: Props) => {
  const minutesRef = React.useRef<HTMLInputElement>(null);
  const secondsRef = React.useRef<HTMLInputElement>(null);

  if (milliseconds) {
    return null;
  }

  const handleSubmit = () => {
    const minutes = parseInt(minutesRef.current?.value || '0');
    const seconds = parseInt(secondsRef.current?.value || '0');
    const totalTimeMs = (minutes * 60 + seconds) * 1000;
    setMilliseconds(totalTimeMs);
  };

  return (
    <div className='inputs__container'>
      <div className='inputs__container-inner'>
        <form
          className='inputs'
          onSubmit={e => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <div className='inputs__fields'>
            <input
              type='number'
              min={0}
              ref={minutesRef}
              placeholder='00'
              aria-label='Minutes'
              className='inputs__field'
            />
            <span className='inputs__field-separator'>:</span>
            <input
              type='number'
              min={0}
              max={59}
              ref={secondsRef}
              placeholder='00'
              aria-label='Seconds'
              className='inputs__field'
            />
          </div>
          <button
            type='submit'
            className='button button_start'
          >
            Start Timer
          </button>
          <div className='inputs__quick-options'>
            {TIME_OPTIONS.map(option => (
              <button
                key={option.value}
                type='button'
                className='button button_quick-option'
                onClick={() => setMilliseconds(option.value)}
              >
                {option.label}
              </button>
            ))}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Inputs;
