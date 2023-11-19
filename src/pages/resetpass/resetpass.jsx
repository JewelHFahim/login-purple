import styles from "./resetpass.module.css";

const Resetpass = () => {
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
            <h1>Reset Password</h1>

            <div className={styles.password}>
              <label>Password</label>
              <input type="password" />
            </div>

            <div className={styles.password}>
              <label>Re-Password</label>
              <input type="password" />
            </div>

            <div className={styles.loginBtn}>
              <button>Reset</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resetpass;
