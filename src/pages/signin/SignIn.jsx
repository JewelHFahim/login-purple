import { useState } from "react";
import styles from "./SignIn.module.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faEye, faEyeSlash);

const SignIn = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <section className={styles.mainContainer}>
      <div className={styles.subContainer}>
        <div className={styles.imageSection}>
          <div className={styles.imageText}>
            <h1>Learn and Practice</h1>
            <p>
              “No matter what experience you have. We will help you start coding
              in minutes”.
            </p>
          </div>
        </div>

        <div className={styles.formSection}>
          <div className={styles.signinForm}>
            <h1>Sign In</h1>

            <div className={styles.userName}>
              <label>User Name</label>
              <input type="text" />
            </div>

            <div className={styles.password}>
              <label>Password</label>
              <div className={styles.passView}>
                <input
                  type={passwordVisible ? "text" : "password"}
                  id="passwordInput"
                />
                <i className={styles.viewIcon} onClick={togglePassword}>
                  {passwordVisible ? (
                    <FontAwesomeIcon icon="eye-slash" />
                  ) : (
                    <FontAwesomeIcon icon="eye" />
                  )}
                </i>
              </div>
            </div>

            <div className={styles.radioCont}>
              <div className={styles.remember}>
                <input type="radio" id="html" name="remember" value="HTML" />
                <label htmlFor="html">Remember Me</label>
              </div>
            </div>

            <div className={styles.loginBtn}>
              <button>Login</button>
              <p>
                Don’t have an account? <a href="">Sign up</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
