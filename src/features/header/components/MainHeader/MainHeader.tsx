import { Labels } from './Labels/Labels';
import styles from './MainHeader.module.scss';

export const MainHeader = () => {
  return (
    <div className={styles.mainHeader}>
      <div className={styles.label}>
        <Labels />
      </div>
    </div>
  );
};
