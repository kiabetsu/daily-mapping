import styles from './Labels.module.scss';
import { useCreateCrumbs } from '../../../hooks/useBreadcrumbs';

export const Labels = () => {
  const { breadcrumbs } = useCreateCrumbs();

  return (
    <div className={styles.labels}>
      <span className={styles.subLabel}>{breadcrumbs.at(-1)?.subLabel}</span>
      <span className={styles.mainLabel}>{breadcrumbs.at(-1)?.label}</span>
    </div>
  );
};
