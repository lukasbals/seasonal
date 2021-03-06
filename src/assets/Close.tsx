import React from 'react';
import { darkBlack } from '../constants/designTokens';

const Close: React.FC = () => {
  return (
    <svg fill="none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12.5 3.5l-9 9m9 0l-9-9"
        stroke={darkBlack}
        strokeLinecap="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};

export default Close;
