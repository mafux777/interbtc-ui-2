
import * as React from 'react';
import clsx from 'clsx';

import InterlayButtonBase, { Props as InterlayButtonBaseProps } from 'components/UI/InterlayButtonBase';
import { ReactComponent as SpinIcon } from 'assets/img/icons/spin.svg';

interface CustomProps {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  pending?: boolean;
}

type Ref = HTMLButtonElement;
const InterlayOrangePeelOutlinedButton = React.forwardRef<Ref, Props>(({
  className,
  children,
  startIcon,
  endIcon,
  disabled = false,
  pending = false,
  ...rest
}, ref): JSX.Element => {
  const disabledOrPending = disabled || pending;

  return (
    <InterlayButtonBase
      ref={ref}
      type='button'
      className={clsx(
        'focus:outline-none',
        'focus:ring',
        'focus:border-interlayOrangePeel-300',
        'focus:ring-interlayOrangePeel-200',
        'focus:ring-opacity-50',

        'border',
        'font-medium',

        disabledOrPending ? clsx(
          'border-black',
          'border-opacity-10',
          'text-black',
          'text-opacity-25'
        ) : clsx(
          'text-interlayOrangePeel',
          'border-interlayOrangePeel',
          'hover:bg-interlayOrangePeel',
          'hover:bg-opacity-5'
        ),

        'rounded',
        'px-4',
        'py-2',
        'text-sm',
        'space-x-1',
        'justify-center',
        className
      )}
      disabled={disabledOrPending}
      {...rest}>
      {pending && (
        <SpinIcon
          className={clsx(
            'animate-spin',
            'w-4',
            'h-4',
            'mr-3'
          )} />
      )}
      {startIcon}
      <span>
        {children}
      </span>
      {endIcon}
    </InterlayButtonBase>
  );
});
InterlayOrangePeelOutlinedButton.displayName = 'InterlayOrangePeelOutlinedButton';

export type Props = CustomProps & InterlayButtonBaseProps;

export default InterlayOrangePeelOutlinedButton;
