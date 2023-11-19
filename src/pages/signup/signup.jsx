import { useState } from "react";
import styles from "./signup.module.css";

const Signup = () => {
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
            <h1>Sign Up</h1>

            <div className={styles.userName}>
              <label>User Name</label>
              <input type="text" />
            </div>

            <div className={styles.eMail}>
              <label>E-mail</label>
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
                  {passwordVisible ? "👁️" : "👁️‍🗨️"}
                </i>
              </div>
            </div>

            <div className={styles.radioCont}>
              <div className={styles.remember}>
                <input type="radio" id="html" name="remember" value="HTML" />
                <label htmlFor="html">
                  Agree to our <span>Terms of Use</span> &
                  <span>Privacy policy</span>
                </label>
              </div>
            </div>

            <div className={styles.loginBtn}>
              <button>Sign Up</button>
              <p>
                Have an account? <a href="">Sign in</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
