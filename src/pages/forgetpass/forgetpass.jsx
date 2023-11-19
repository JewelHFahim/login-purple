import styles from "./forgetpass.module.css";

const Forgetpass = () => {

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
            <h1>Forget Password</h1>

            <div className={styles.eMail}>
              <label>E-mail</label>
              <input type="text" />
            </div>

            <div className={styles.loginBtn}>
              <button>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Forgetpass;
