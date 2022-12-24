import styles from "../../styles/lessons.module.scss";
import { Head, Foot } from "../HeadFoot";

function WillDo() {
  return (
    <div>
      <Head />
      <div className={styles["page-container"]}>
        <div className={styles.ps1}>
          <p>
            <span className={styles["text-bold"]}>预定活动</span>(不需要用 will
            这个词表示未来)
          </p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>EAP classes start next semester.</p>
          <p>
            EAP classes <span className={styles["text-underline"]}>will</span>{" "}
            start next semester.
          </p>
          <p>&nbsp;</p>
          <p>There are two quizzes next week.</p>
          <p>
            There <span className={styles["text-underline"]}>will</span> be two
            quizzes next week.
          </p>
          <p>&nbsp;</p>
          <p>We have a class tomorrow.</p>
          <p>
            We <span className={styles["text-underline"]}>will</span> have a
            class tomorrow.
          </p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>这些句子都没有问题。</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>
            <span className={styles["text-bold"]}>Do/Does</span>(给一句话突起)
          </p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>
            I <span className={styles["text-underline"]}>do</span> want to go.
          </p>
          <p>I want to go.</p>
          <p>&nbsp;</p>
          <p>
            She <span className={styles["text-underline"]}>does</span> respect
            you.
          </p>
          <p>She respects you.</p>
          <p>&nbsp;</p>
          <p>
            He <span className={styles["text-underline"]}>does</span> smoke.
          </p>
          <p>He smokes.</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>都很正常。</p>
        </div>
      </div>
      <Foot />
    </div>
  );
}

export default WillDo;
