import styles from "./placecode.module.css";

const Placecode = () => {
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
            <h1>Verify Your Email</h1>

            <div className={styles.placeCode}>
              <label>Place Code:</label>
              <div className={styles.codeFields}>
                <input type="number" />
                <input type="number" />
                <input type="number" />
                <input type="number" />
              </div>
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

export default Placecode;
