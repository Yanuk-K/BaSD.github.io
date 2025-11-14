import React from 'react';

const BlockchainIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="8" y="3" width="8" height="8" rx="1"></rect>
      <rect x="3" y="13" width="8" height="8" rx="1"></rect>
      <rect x="13" y="13" width="8" height="8" rx="1"></rect>
      <path d="M12 11V13"></path>
      <path d="M7 13H17"></path>
    </g>
  </svg>
);

export default BlockchainIcon;
