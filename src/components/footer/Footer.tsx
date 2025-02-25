import React from 'react';

const Footer = () => {
  return (
    <footer className='footer'>
      <span className='madeby'>
        Made by{' '}
        <a className='madeby__link' href='https://www.viu.ch'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='viulogo'
            viewBox='0 0 1600 1024'
          >
            <title>viu</title>
            <path
              d='M463 362L340 792 221 362H0l214 640h247l209-640H463z'
              className='viulogo__v'
            ></path>
            <path
              d='M666 362l29 87v553h209V362M798 0c36 0 66 11 89 34 24 22 35 50 35 84 0 35-11 63-35 85-23 23-53 34-89 34s-65-12-88-34-34-50-34-85c0-34 11-62 34-85 23-22 52-33 88-33z'
              className='viulogo__i'
            ></path>
            <path
              d='M1410 913l30 89h160V362h-208v426c-32 54-70 82-114 82-23 0-40-7-51-21s-16-38-16-72V362h-209v442c0 69 17 123 50 162s81 58 145 58c91 0 162-37 213-111z'
              className='viulogo__u'
            ></path>
          </svg>
        </a>
      </span>
    </footer>
  );
};

export default Footer;
