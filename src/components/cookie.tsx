import * as React from 'react';

interface IconProps {
  color: string;
};

const Cookie = (props: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={26} height={26}>
    <path d="M22.72 6.53a1 1 0 0 0-1.3-.46 3.5 3.5 0 0 1-4.53-1.62 1 1 0 0 0-.58-.5 1 1 0 0 0-.77.06 3.43 3.43 0 0 1-1.54.37 3.5 3.5 0 0 1-3.5-3.5.75.75 0 0 0-.91-.74A12 12 0 1 0 24 11.88a11.75 11.75 0 0 0-1.28-5.35Zm-18.8 8.18a1 1 0 0 1 0-2 1 1 0 1 1 0 2Zm4.75-8.16a2 2 0 1 1-2 2 2 2 0 0 1 2-2ZM9 18.88a2 2 0 1 1 2-2 2 2 0 0 1-2 2Zm4.67-7.75a1 1 0 1 1 1 1 1 1 0 0 1-1-1ZM15 19.88a1 1 0 1 1 1-1 1 1 0 0 1-1 1Zm3.5-4a1.5 1.5 0 1 1 1.5-1.5 1.5 1.5 0 0 1-1.5 1.5Z" fill={props.color} />
  </svg>
);

export default Cookie;