import React from 'react';
import { darkBlack } from '../constants/designTokens';

interface ClearCircleProps {
  onClick: () => void;
}

const ClearCircle: React.FC<ClearCircleProps> = ({
  onClick,
}: ClearCircleProps) => {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <circle cx="12" cy="12" fill="#F7F7F7" r="12" />
      <path
        d="M15.375 8.625l-6.75 6.75M15.375 15.375l-6.75-6.75"
        stroke={darkBlack}
        strokeLinecap="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};

export default ClearCircle;
