import clsx from 'clsx';
import * as React from 'react';

import { ReactComponent as SpinIcon } from '@/assets/img/icons/spin.svg';
import InterlayButtonBase, { Props as InterlayButtonBaseProps } from '@/components/UI/InterlayButtonBase';
import { DISABLED_BORDER_CLASSES, DISABLED_TEXT_CLASSES } from '@/utils/constants/styles';
import { getColorShade } from '@/utils/helpers/colors';

interface CustomProps {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  pending?: boolean;
}

type Ref = HTMLButtonElement;
const InterlayCaliforniaOutlinedButton = React.forwardRef<Ref, Props>(
  ({ className, children, startIcon, endIcon, disabled = false, pending = false, ...rest }, ref): JSX.Element => {
    const disabledOrPending = disabled || pending;

    return (
      <InterlayButtonBase
        ref={ref}
        type='button'
        className={clsx(
          'focus:outline-none',
          'focus:ring',
          'focus:border-interlayCalifornia-300',
          'focus:ring-interlayCalifornia-200',
          'focus:ring-opacity-50',

          'font-medium',

          disabledOrPending
            ? clsx(DISABLED_BORDER_CLASSES, DISABLED_TEXT_CLASSES)
            : clsx(
                getColorShade('yellow'),
                'border',
                getColorShade('yellow', 'border'),
                getColorShade('yellow', 'hover:bg'),
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
        {...rest}
      >
        {pending && <SpinIcon className={clsx('animate-spin', 'w-4', 'h-4', 'mr-3')} />}
        {startIcon}
        <span>{children}</span>
        {endIcon}
      </InterlayButtonBase>
    );
  }
);
InterlayCaliforniaOutlinedButton.displayName = 'InterlayCaliforniaOutlinedButton';

export type Props = CustomProps & InterlayButtonBaseProps;

export default InterlayCaliforniaOutlinedButton;
