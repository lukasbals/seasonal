import React from 'react';
import { darkBlack } from '../constants/designTokens';

const Burger: React.FC = () => {
  return (
    <svg fill="none" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3.125 10h13.75M3.125 5h13.75M3.125 15h13.75"
        stroke={darkBlack}
        strokeLinecap="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};

export default Burger;
