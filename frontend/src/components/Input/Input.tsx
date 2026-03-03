import React from 'react';

import styles from './Input.module.scss';

type InputType = {
  value?: string;
  placeholder?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactElement;
  active?: boolean;
  className?: '';
};

export const Input = ({
  value,
  placeholder = 'Start typing...',
  active = true,
  className = '',
  startIcon,
  endIcon,
}: InputType) => {
  return (
    <div className={styles.inputBlock}>
      <input
        className={`${styles.input} ${active ? styles.active : ''} ${className}`}
        placeholder={placeholder}
        value={value}
        required
      />
      {startIcon && <span className={styles.startIcon}>{startIcon}</span>}
      {endIcon && <span className={styles.endIcon}>{endIcon}</span>}
    </div>
  );
};
