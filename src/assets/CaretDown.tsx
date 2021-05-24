import React from 'react';
import { darkBlack } from '../constants/designTokens';

const CaretDown: React.FC = () => {
  return (
    <svg fill="none" viewBox="0 0 21 20" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10.446 17.5a7.5 7.5 0 100-15 7.5 7.5 0 000 15z"
        stroke={darkBlack}
        strokeWidth="1.5"
      />
      <path
        d="M13.259 9.063l-2.813 3.124-2.812-3.124"
        stroke={darkBlack}
        strokeLinecap="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};

export default CaretDown;
