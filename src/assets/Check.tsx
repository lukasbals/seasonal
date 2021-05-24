import React from 'react';
import { darkBlack } from '../constants/designTokens';

const Check: React.FC = () => {
  return (
    <svg fill="none" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16.875 5.625l-8.75 8.75L3.75 10"
        stroke={darkBlack}
        strokeLinecap="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};

export default Check;
