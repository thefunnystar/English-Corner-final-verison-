import styles from "../../styles/lessons.module.scss";
import { Head, Foot } from "../HeadFoot";

function NPP() {
  return (
    <div>
      <Head />
      <div className={styles["page-container"]}>
        <div className={styles.page}>
          <p className={styles.dt1}>介词短语充当名词</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <div className={styles["essay__left"]}>
            <p>名词短语:After the movie</p>
            <p>
              <span className={styles["text-underline"]}>After the movie</span>{" "}
              will be too late for us to have dinner.
            </p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>名词:it</p>
            <p>
              After the movie(,){" "}
              <span className={styles["text-underline"]}>it</span> will be too
              late for us to have dinner.
            </p>
            <p>&nbsp;</p>
            <p>It will be too late for us to have dinner after the movie.</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>名词短语:During class</p>
            <p>
              <span className={styles["text-underline"]}>During class</span> is
              the worst time to annoy the teacher.
            </p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>名词:it</p>
            <p>
              During class(,){" "}
              <span className={styles["text-underline"]}>it</span> is the worst
              time to annoy the teacher.
            </p>
            <p>&nbsp;</p>
            <p>It is the worst time to annoy the teacher during class.</p>
          </div>
        </div>
      </div>
      <Foot />
    </div>
  );
}

export default NPP;
