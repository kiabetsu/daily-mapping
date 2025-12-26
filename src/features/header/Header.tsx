import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

import styles from './Header.module.scss';
import { Button } from '../../components/Button/Button';

export const Header = () => {
  const items = [{ label: 'Projects' }, { label: 'LandingPage' }];
  const lastIndex = items.length - 1;

  return (
    <div className={styles.header}>
      <div className={styles.navArrows}>
        <Button
          iconButton={true}
          startIcon={<ArrowLeft size={20} />}
          variant="text"
          className={`${styles.navArrow}`}
        />
        <Button
          iconButton={true}
          startIcon={<ArrowRight size={20} />}
          variant="text"
          className={`${styles.navArrow}`}
        />
      </div>

      <nav className={styles.breadcrumbs}>
        {items.map((item, index) => {
          const isLast = index === lastIndex;
          const isFirst = index === 0;

          return (
            <span key={item.label} className={styles.item}>
              {!isLast ? (
                <>
                  {!isFirst && <span className={styles.separator}> / </span>}
                  <span className={styles.prev}>{item.label}</span>
                </>
              ) : (
                <>
                  <span className={styles.currentSeparator}> / </span>
                  <span className={styles.current}>{item.label}</span>
                </>
              )}
            </span>
          );
        })}
      </nav>
    </div>
  );
};
