import { MouseEventHandler, type ButtonHTMLAttributes } from 'react';

import styles from './Button.module.scss';

type ButtonType = ButtonHTMLAttributes<HTMLButtonElement> & {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'text';
  size?: 'sm' | 'md' | 'lg';
  iconButton?: boolean;
  isLoading?: boolean;
  onClickStartIcon?: MouseEventHandler;
};

export const Button = ({
  startIcon,
  endIcon,
  variant = 'primary',
  size = 'md',
  iconButton = false,
  isLoading = false,
  className = '',
  children,
  onClickStartIcon,
  ...props
}: ButtonType) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${styles[size]} ${
        iconButton && styles.iconButton
      } ${className}`}
      disabled={isLoading || props.disabled}
      {...props}>
      {startIcon && (
        <span className={styles.startIcon} onClick={onClickStartIcon}>
          {startIcon}
        </span>
      )}
      <span className={styles.label}>{isLoading ? 'Loading...' : children}</span>
      {endIcon && <span className={styles.endIcon}>{endIcon}</span>}
    </button>
  );
};
