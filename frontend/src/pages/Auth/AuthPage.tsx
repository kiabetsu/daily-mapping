import React from 'react';

import useMainStore from '../../store/store';
import styles from './AuthPage.module.scss';

export const AuthPage = () => {
  // const { isLogin } = useMainStore();

  // const [isLogin, setIsLogin] = React.useState(true);

  // const [username, setUsername] = React.useState('');
  // const [password, setPassword] = React.useState('');

  // const [reg_username, setReg_username] = React.useState('');
  // const [reg_email, setReg_email] = React.useState('');
  // const [reg_password, setReg_password] = React.useState('');
  // const [reg_passwordConfirm, setReg_passwordConfirm] = React.useState('');

  // const usernameRef = React.useRef(null);
  // const passwordRef = React.useRef(null);
  // const loginButtonRef = React.useRef(null);
  // const regUsernameRef = React.useRef(null);
  // const regEmailRef = React.useRef(null);
  // const regPasswordRef = React.useRef(null);
  // const regPasswordConfirmRef = React.useRef(null);
  // const regButtonRef = React.useRef(null);

  // const handelBackToStart = (e:React.KeyboardEvent, next:RefObject) => {
  //   if (e.key === 'Tab') {
  //     e.preventDefault();
  //     next.current.focus();
  //   }
  // };

  // const clearLoginState = () => {
  //   setUsername('');
  //   setPassword('');
  //   usernameRef.current.value = '';
  //   passwordRef.current.value = '';
  // };

  // const clearRegState = () => {
  //   setReg_username('');
  //   setReg_email('');
  //   setReg_password('');
  //   setReg_passwordConfirm('');
  //   regUsernameRef.current.value = '';
  //   regEmailRef.current.value = '';
  //   regPasswordRef.current.value = '';
  //   regPasswordConfirmRef.current.value = '';
  // };

  return (
    <div className={styles.wrapper}>
      <div className={styles.centered}>
        {/*<div className={styles.contentBox}>
            <div
            className={styles.carousel}
            style={{ transform: `${isLogin ? 'translateX(0)' : 'translateX(-728px)'}` }}>
            <div className={styles.inputBox}>
              <h1>Sign in</h1>

              <div className={styles.loginButtonAndAgree}>
                <label className={styles.rememberCheckbox}>
                  <input type="checkbox" name="rememberMe" id="" />
                  <span className={styles.checkmark}></span>
                  <span>Remember me</span>
                </label>
                <button
                // ref={loginButtonRef}
                // className={`${
                //   username && password ? `${styles.loginButton} ` : `${styles.inactiveButton}`
                // } ${status === 'error' && styles.shake}`}
                // disabled={username && password ? false : true}
                // onClick={() => {
                //   dispatch(login({ username: username, password: password }));
                //   clearLoginState();
                // }}
                >
                  {' '}
                  Log in
                   {status === 'padding' && <div className={styles.spinner}></div>} 
                </button>
                <span>
                  By creating an account, you agree to the &nbsp;
                  <a href="#"> Terms of use </a>
                  &nbsp; and &nbsp;
                  <a rel="stylesheet" href="#">
                    Privacy Policy
                  </a>
                  .
                </span>
                <div className={styles.rowFlex}>
                  <div>
                    <a href="#">Other issue with sign in</a>
                  </div>
                  <div>
                    <a
                      href="#"
                      // onKeyDown={(e) => handelBackToStart(e, usernameRef<>)}
                    >
                      Forget your password
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.inputBox}>
              <h1>Sign up</h1>

              <div className={styles.loginButtonAndAgree}>
                <button
                // ref={regButtonRef}
                // className={`${
                //   reg_username.length >= 8 &&
                //   reg_email.includes('@') &&
                //   reg_password.length >= 8 &&
                //   reg_passwordConfirm === reg_password
                //     ? `${styles.loginButton}`
                //     : `${styles.inactiveButton}`
                // } ${status === 'error' && styles.shake}`}
                // disabled={
                //   reg_username.length >= 8 &&
                //   reg_email.includes('@') &&
                //   reg_password.length >= 8 &&
                //   reg_passwordConfirm === reg_password
                //     ? false
                //     : true
                // }
                // onClick={() => {
                //   dispatch(
                //     registration({
                //       username: reg_username,
                //       email: reg_email,
                //       password: reg_password,
                //     }),
                //   );
                //   clearRegState();
                // }}
                >
                  Sign up
                   {status === 'padding' && <div className={styles.spinner}></div>} 
                </button>
                <span>
                  By creating an account, you agree to the &nbsp;
                  <a href="#"> Terms of use </a>
                  &nbsp; and &nbsp;
                  <a
                    rel="stylesheet"
                    href="#"
                    // onKeyDown={(e) => handelBackToStart(e, regUsernameRef)}
                  >
                    Privacy Policy
                  </a>
                  .
                </span>
              </div>
            </div>
          </div>*/}
        {/* </div>
        <div className={styles.dividingLine}>
          <div className={styles.textOverDividingLine}>
            {isLogin ? 'New to our community' : 'Already have account?'}
          </div>
        </div>
        <button
        // className={styles.signupButton} onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin ? 'Create an account' : 'Log in'}
        </button> */}
      </div>
    </div>
  );
};
