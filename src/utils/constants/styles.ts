
import clsx from 'clsx';

const CLASS_NAMES = Object.freeze({
  LIGHT: 'light',
  DARK: 'dark'
});

const BORDER_CLASSES = clsx(
  'border',
  // MEMO: inspired by https://mui.com/components/buttons/
  'border-black',
  'border-opacity-25',
  'dark:border-white',
  'dark:border-opacity-25'
);

export {
  CLASS_NAMES,
  BORDER_CLASSES
};
