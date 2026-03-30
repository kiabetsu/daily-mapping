import styles from './AuthPage.module.scss';
import { AuthForm } from '../../features/Auth/AuthForm/components/AuthForm';

export const AuthPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.centered}>
        <AuthForm />
      </div>
    </div>
  );
};
