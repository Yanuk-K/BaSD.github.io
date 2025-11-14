
import React from 'react';

const DiscordIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12c0 4.142 2.518 7.688 6 9.24V15.5h-2v-3.5h2v-2.7c0-2.6 1.55-4.1 4.1-4.1 1.2 0 2.2.1 2.5.1v3.1h-1.8c-1.2 0-1.5.6-1.5 1.4v2.3h3.3l-.4 3.5h-2.9v5.74c3.482-1.552 6-5.1 6-9.24z" />
  </svg>
);

export default DiscordIcon;
