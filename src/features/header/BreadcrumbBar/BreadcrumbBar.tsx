import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

import styles from './BreadcrumbBar.module.scss';
import { Button } from '../../../components/Button/Button';
import { useCreateCrumbs } from '../hooks/useBreadcrumbs';

export const BreadcrumbBar = () => {
  const { rout, Link, breadcrumbs } = useCreateCrumbs();

  return (
    <nav className={styles.breadcrumbs}>
      {breadcrumbs.map((item, index) => {
        const isLast = index === rout.filter((item) => isNaN(Number(item))).length - 1;
        const isFirst = index === 0;
        console.log('item', item, 'isLast', isLast);
        console.log('rout', rout, 'rout.length', rout.length, 'index', index);

        if (item !== undefined) {
          return (
            <span key={item.link} className={styles.item}>
              {!isLast ? (
                <Link to={item.link} className={styles.link}>
                  {!isFirst && <span className={styles.separator}>/</span>}
                  <span className={styles.label}>{item.label}</span>
                </Link>
              ) : (
                <span className={styles.current}>
                  <span className={styles.separator}>/</span>
                  <span className={styles.label}>{item.label}</span>
                </span>
              )}
            </span>
          );
        } else {
          <span>ERRRRRRRRRROR</span>;
        }
      })}
    </nav>
  );
};
