import React from 'react';
import { IconProps } from '../types';

export const ArrowEnterIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', size = 32, ...rest }, ref) => {
    return (
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...rest}
        width={size}
        height={size}
        ref={ref}
      >
        <path d="M25.3 8.02262V15.2757C25.3 17.2801 23.6863 18.9039 21.6955 18.9039H6.61526" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11.7111 24L6.61522 18.9042L11.7111 13.8083" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
);
