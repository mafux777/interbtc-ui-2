import { forwardRef } from 'react';

import { Icon, IconProps } from '@/component-library/Icon';

const STATEMINE = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon {...props} ref={ref} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <title>STATEMINE</title>
    <g clipPath='url(#clip0_21_2)'>
      <circle cx='12' cy='12' r='11.5' fill='white' stroke='#E6007A' />
      <g clipPath='url(#clip1_21_2)'>
        <path
          d='M10.1333 2.33332C6.17331 3.14665 3.14665 6.11999 2.33331 10.0133C1.59998 13.52 3.01331 17.44 5.83998 19.68C6.78665 20.4267 8.43998 21.24 9.66665 21.5333C10.8666 21.84 12.96 21.84 14.2 21.5467C14.72 21.4267 15.7066 21.04 16.4 20.7067C17.4533 20.1867 17.8666 19.88 18.8 18.9333C20.08 17.6533 20.7733 16.56 21.2933 15C21.6266 14.04 21.6533 13.7333 21.6666 12C21.6666 9.83999 21.48 9.03999 20.5866 7.31999C18.64 3.61332 14.2133 1.50665 10.1333 2.33332ZM13.1866 4.61332C14 4.85332 14.8266 5.54665 15.24 6.31999C15.6133 7.03999 15.64 8.50665 15.28 9.23999C15.1333 9.53332 14.9466 9.78665 14.8533 9.82665C14.7733 9.85332 13.5733 8.94665 12.2133 7.79999C10.8533 6.65332 9.73331 5.74665 9.73331 5.77332C9.73331 5.82665 11.5333 10.8267 11.8533 11.6267C11.9733 11.96 12.0133 11.9733 12.5066 11.84C12.88 11.7467 13.2666 11.76 13.7866 11.8667C15.3333 12.1867 16.44 13.5467 16.44 15.1333C16.44 16.4933 15.9866 17.24 14.5733 18.2133C13 19.2933 12.7733 19.4 11.8 19.44C10.9866 19.48 10.7733 19.44 10.1333 19.1067C8.90665 18.4667 8.14665 17.0267 8.33331 15.7467C8.42665 15.16 8.81331 14.2133 9.02665 14.0933C9.09331 14.0533 10.24 14.9467 11.5866 16.08C12.9466 17.2133 14.0666 18.1067 14.1066 18.08C14.1333 18.0533 13.6666 16.68 13.0666 15.0267L11.9733 12.0267L11.12 12.1067C7.43998 12.4 6.06665 7.67999 9.27998 5.77332C9.51998 5.63999 9.91998 5.35999 10.1866 5.14665C10.6666 4.77332 11.6133 4.42665 12.2133 4.41332C12.36 4.39999 12.8 4.49332 13.1866 4.61332Z'
          fill='#E6007A'
        />
      </g>
    </g>
    <defs>
      <clipPath id='clip0_21_2'>
        <rect width='24' height='24' fill='white' />
      </clipPath>
      <clipPath id='clip1_21_2'>
        <rect width='20' height='20' fill='white' transform='translate(2 2)' />
      </clipPath>
    </defs>
  </Icon>
));

STATEMINE.displayName = 'STATEMINE';

export { STATEMINE };
