import styles from "./verifymail.module.css";

const Verifymail = () => {
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
            <h1>Verify Your Mail</h1>

            <p>Please Verify This Email Address By Clicking Button Below.</p>

            <div className={styles.loginBtn}>
              <button>Send Code</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Verifymail;
