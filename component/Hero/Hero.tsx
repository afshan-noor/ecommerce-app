import styles from "./Hero.module.css";
import Navbar from "../Navbar/Navbar";
export default function Hero() {
  return (
    <>
      {/* <Navbar /> */}
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Introducing the Latest Summer Styles</h2>
          <p className={styles.para}>
            This season, our new summer collection embraces designs to provide
            comfort and style - ensuring you're well-prepared for whatever comes
            your way.
          </p>
          <div className={styles.explore}>
            <h4>Explore Products{"->"}</h4>
          </div>
        </div>
      </div>
    </>
  );
}
