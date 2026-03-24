import styles from './AuthForm.module.scss';
import { Input } from './Input/Input';
import { useAuthForm } from '../hooks/useAuthForm';

export const AuthForm = () => {
  const { register, handleSubmit, errors } = useAuthForm();

  return (
    <div className={styles.contentBox}>
      <div className={styles.carousel}>
        <form onSubmit={handleSubmit} className={styles.inputBox}>
          <h1>Sign in</h1>

          <Input label="Username" error={errors.username} {...register('username')} autoFocus />
          <Input
            label="Password"
            type="password"
            error={errors.password}
            {...register('password')}
          />

          <div className={styles.loginButtonAndAgree}>
            <label className={styles.rememberCheckbox}>
              <input type="checkbox" name="rememberMe" id="" />
              <span className={styles.checkmark}></span>
              <span>Remember me</span>
            </label>
            <button type="submit" className={styles.loginButton}>
              Log in
              {/* {status === 'padding' && <div className={styles.spinner}></div>} */}
            </button>
            {/* <span>
              By creating an account, you agree to the &nbsp;
              <a> Terms of use </a>
              &nbsp; and &nbsp;
              <a>Privacy Policy</a>.
            </span>
            <div className={styles.rowFlex}>
              <div>
                <a>Other issue with sign in</a>
              </div>
              <div>
                <a>Forget your password</a>
              </div>
            </div> */}
          </div>
        </form>

        {/* <form className={styles.inputBox}>
          <h1>Sign up</h1>

          <div className={styles.loginButtonAndAgree}>
            <button type="submit" className={styles.loginButton}>
              Sign up
            </button>
            <span>
              By creating an account, you agree to the &nbsp;
              <a> Terms of use </a>
              &nbsp; and &nbsp;
              <a>Privacy Policy</a>.
            </span>
          </div>
        </form> */}
      </div>
    </div>
  );
};
