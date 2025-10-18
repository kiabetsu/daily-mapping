import { type ButtonHTMLAttributes } from 'react';

import styles from './Button.module.scss';

type ButtonType = ButtonHTMLAttributes<HTMLButtonElement> & {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'text';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
};

export const Button = ({
  startIcon,
  endIcon,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  className = '',
  children,
  ...props
}: ButtonType) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${styles[size]} ${className}`}
      disabled={isLoading || props.disabled}
      {...props}>
      {startIcon && <span className={styles.startIcon}>{startIcon}</span>}
      <span className={styles.label}>{isLoading ? 'Loading...' : children}</span>
      {endIcon && <span className={styles.endIcon}>{endIcon}</span>}
    </button>
  );
};
