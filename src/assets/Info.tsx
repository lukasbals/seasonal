import React from 'react';
import { darkBlack } from '../constants/designTokens';

const Info: React.FC = () => {
  return (
    <svg fill="none" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10 17.5a7.5 7.5 0 100-15 7.5 7.5 0 000 15z"
        stroke={darkBlack}
        strokeLinecap="round"
        strokeWidth="1.5"
      />
      <path
        d="M9.375 9.375H10v4.375h.625"
        stroke={darkBlack}
        strokeLinecap="round"
        strokeWidth="1.5"
      />
      <path
        d="M10 7.5a.937.937 0 100-1.875.937.937 0 000 1.875z"
        fill={darkBlack}
      />
    </svg>
  );
};

export default Info;
