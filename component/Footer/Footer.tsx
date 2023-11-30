import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.box}>
          <div className={styles.box1}>
            <h1>ACME</h1>
            <div className={styles.box2}>
              <div>
                Categories
                <div>
                  {".........."}
                  <p>Latest Drops</p>
                  <p>Weekly Pics</p>
                  <p>Sale </p>
                </div>
              </div>
              <div>
                Collection
                <div>
                  {".........."}
                  <p>Latest Drops</p>
                  <p>Weekly Pics</p>
                  <p>Sale </p>
                </div>
              </div>
              <div>
                ACME
                <div>
                  {".........."}
                  <p>Latest Drops</p>
                  <p>Weekly Pics</p>
                  <p>Sale </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
