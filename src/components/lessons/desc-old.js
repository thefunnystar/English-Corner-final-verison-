import styles from "../../styles/lessons.module.scss";
import { Head, Foot } from "../HeadFoot";

function DescOld() {
  return (
    <div>
      <Head />
      <div className={styles["page-container"]}>
        <div className={styles.page}>
          <p className={styles["essay__center"]}>不同词表示一个人年长</p>
          <p>&nbsp;</p>
          <div className={styles["essay__left"]}>
            <p>Aged</p>
            <p>&nbsp;</p>
            <p>表示人/东西/事物年长,没有具体含义</p>
            <p>&nbsp;</p>
            <p>Senior</p>
            <p>&nbsp;</p>
            <p>
              可以表示年长,但也可以表示一个人很有经历/经验,或地位特别高(例如
              senior 政治官员)
            </p>
            <p>&nbsp;</p>
            <p>Elderly</p>
            <p>&nbsp;</p>
            <p>表示一个人很老,这个词很正式,但 senior 更正式</p>
            <p>&nbsp;</p>
            <p>Decrepit</p>
            <p>&nbsp;</p>
            <p>表示一个人很老,含义表示身体状态也不好(虚弱)</p>
          </div>
          <div className={styles["essay__center"]}>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>如何表示年常的东西和事物</p>
            <p>&nbsp;</p>
          </div>
          <div className={styles["essay__left"]}>
            <p>Ancient</p>
            <p>&nbsp;</p>
            <p>
              表示遥远的过去,中世纪之前。可以使用表示期间,事物,东西,比喻地可以表示人。
            </p>
            <p>&nbsp;</p>
            <p>Antique</p>
            <p>&nbsp;</p>
            <p>表示东西事物起码一百岁,一般不可以用表示一个人(比喻地可以)</p>
            <p>&nbsp;</p>
            <p>Vintage</p>
            <p>&nbsp;</p>
            <p>表示东西事物起码 20 岁,一般不可以用表示一个人</p>
          </div>
          <div className={styles["essay__center"]}>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>其他词</p>
            <p>&nbsp;</p>
          </div>
          <div className={styles["essay__left"]}>
            <p>Classic</p>
            <p>&nbsp;</p>
            <p>典型的,经典的</p>
            <p>&nbsp;</p>
            <p>Retro</p>
            <p>&nbsp;</p>
            <p>描述模仿过去风格的东西</p>
          </div>
          <div className={styles["essay__center"]}>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>介词的位值</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
          </div>
          <div className={styles["essay__left"]}>
            <p>Apparently, they like to eat cheese.</p>
            <p>&nbsp;</p>
            <p>They apparently like to eat cheese.</p>
            <p>&nbsp;</p>
            <p className={styles["text-underline"]}>
              They like <span className={styles["text-bold"]}>apparently</span>{" "}
              to eat cheese.
            </p>
            <p>&nbsp;</p>
            <p>They like to apparently eat cheese.</p>
            <p>&nbsp;</p>
            <p className={styles["text-underline"]}>
              They like to eat{" "}
              <span className={styles["text-bold"]}>apparently</span> cheese.
            </p>
            <p>&nbsp;</p>
            <p>They like to eat cheese apparently.</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>
              好像介词可以出现在任何地方,但黑色文字不是标准的。在口语好象不太有限。
            </p>
          </div>
        </div>
      </div>
      <Foot />
    </div>
  );
}

export default DescOld;
