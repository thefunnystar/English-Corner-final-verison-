import styles from "../../styles/lessons.module.scss";
import { Head, Foot } from "../HeadFoot";

function ArtGram() {
  return (
    <div>
      <Head />
      <div className={styles["page-container"]}>
        <div className={styles.page}>
          {/* {styles['essay__center'] + styles['text-subtitle'] + styles['text-bold']} */}
          <p className={styles.ar1}>冠词</p>
          <p>&nbsp;</p>
          <div className={styles["essay__left"]}>
            <p>使用英语，冠词可能很难，因为有些意外的语法。</p>
            <p>&nbsp;</p>
            <p>正确：I want to go out for dinner. I want pizza.</p>
            <p>
              <span className={styles["text-red"]}>错误</span>：I want to go out
              for <span className={styles.ar2}>a</span> dinner.
            </p>
            <p>
              正确：I want a slice of pizza. I want a loaf of bread.
              量词应该使用冠词。
            </p>
            <p>&nbsp;</p>
            <p>正确：Dinner is on the table. Pizza is on the table.</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>
              也许提出有的食物时，说 a 这个冠词不自然，但是有的食物需要使用。
            </p>
            <p>&nbsp;</p>
            <p>正确：I want an apple. I want an egg.</p>
            <p>
              <span className={styles["text-red"]}>错误</span>：I want apple. I
              want egg.
            </p>
            <p>&nbsp;</p>
            <p className={styles["text-bold"]}>肉食</p>
            <p>&nbsp;</p>
            <p>正确：I want chicken. I want beef.</p>
            <p>正确：I want a chicken. I want a cow.</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p className={styles["text-bold"]}>抽象的概念</p>
            <p>&nbsp;</p>
            <p>正确：Creativity is a useful skill. The dog is useful.</p>
            <p>
              <span className={styles["text-red"]}>错误</span>：
              <span className={styles.ar2}>The</span> creativity is a useful
              skill. Dog is useful.
            </p>
            <p>正确：Knowledge is good. The dog is good.</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p className={styles["text-bold"]}>动名词</p>
            <p>&nbsp;</p>
            <p>正确：Jumping takes skill. Cooking requires knowledge.</p>
            <p>
              <span className={styles["text-red"]}>错误</span>：
              <span className={styles.ar2}>The</span> jumping takes skill.{" "}
              <span className={styles.ar2}>The</span> cooking requires
              knowledge.
            </p>
          </div>
        </div>
      </div>
      <Foot />
    </div>
  );
}

export default ArtGram;
