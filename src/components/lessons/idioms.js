import styles from "../../styles/lessons.module.scss";
import { Head, Foot } from "../HeadFoot";

function Idioms() {
  return (
    <div>
      <Head />
      <div className={styles["page-container"]}>
        <div className={styles.ps1}>
          <p>
            <span className={styles["text-bold"]}>Fancy</span>{" "}
            (英式英语更倾向于使用这个词)
          </p>
          <p>意思: 赶到欲望或喜欢</p>
          <p>&nbsp;</p>
          <p>
            这句话在美国也很普遍:{" "}
            <span className={styles["text-underline"]}>Fancy</span> seeing you
            around here!
          </p>
          <p>
            I <span className={styles["text-underline"]}>fancy</span> myself
            winning the competition. (英式英语)
          </p>
          <p>
            Do you <span className={styles["text-underline"]}>fancy</span> a cup
            of coffee? (英式英语)
          </p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p className={styles["text-bold"]}>Hit the road</p>
          <p>意思: 上路</p>
          <p>&nbsp;</p>
          <p>例子:</p>
          <p>
            She needs to{" "}
            <span className={styles["text-underline"]}>hit the road</span> for
            work. (她需要上路去上班。)
          </p>
          <p>
            We need to{" "}
            <span className={styles["text-underline"]}>hit the road</span> right
            now.
          </p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p className={styles["text-bold"]}>Piss off</p>
          <p>意思: 让很生气</p>
          <p>&nbsp;</p>
          <p>例子:</p>
          <p>
            Don&apos;t <span className={styles["text-underline"]}>piss</span>{" "}
            her <span className={styles["text-underline"]}>off</span> because
            she&apos;s very busy.
          </p>
          <p>
            Your stupidity{" "}
            <span className={styles["text-underline"]}>pisses</span> me{" "}
            <span className={styles["text-underline"]}>off</span>.
          </p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>
            <span className={styles["text-bold"]}>Shoot</span> (北美式英语)
          </p>
          <p>意思:感叹表现噁心,生气,或厌烦</p>
          <p>&nbsp;</p>
          <p>例子:</p>
          <p>
            <span className={styles["text-underline"]}>Shoot</span>! He lost.
          </p>
          <p>
            <span className={styles["text-underline"]}>Shoot</span>! I forgot
            about tomorrow's test.
          </p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p className={styles["text-bold"]}>No-brainer</p>
          <p>
            意思:不必脑袋的事物,表示即使一个人聪明或不聪明,一个动作或想法也最好,或不需要聪明做一个动作
          </p>
          <p>&nbsp;</p>
          <p>例子:</p>
          <p>
            Being healthy is a{" "}
            <span className={styles["text-underline"]}>no-brainer</span>.
          </p>
          <p>
            Using a fork is a{" "}
            <span className={styles["text-underline"]}>no-brainer</span>.
          </p>
        </div>
      </div>
      <Foot />
    </div>
  );
}

export default Idioms;
