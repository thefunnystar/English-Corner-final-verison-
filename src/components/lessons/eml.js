import styles from "../../styles/lessons.module.scss";
import { Head, Foot } from "../HeadFoot";

function EML() {
  return (
    <div>
      <Head />
      <div className={styles["page-container"]}>
        <div className={styles.page}>
          <p className={styles["essay__center"]}>早期现代英语屈折变化</p>
          <p>&nbsp;</p>
          <div className={styles["essay__left"]}>
            <p className={styles["text-bold"]}>Thou:</p>
            <p>第二人称（非正式的）。用thou的时候，are变成art。</p>
            <p>&nbsp;</p>
            <p>
              例子："<span className={styles["text-underline"]}>Art</span> thou
              coming with me."
            </p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p className={styles["text-bold"]}>was, wert, were:</p>
            <p>&nbsp;</p>
          </div>
          <table>
            <tr>
              <td>Was</td>
              <td className={styles["text-bold"]}>Wert</td>
              <td>Were</td>
            </tr>
            <tr>
              <td>I, He, She, It</td>
              <td className={styles["text-bold"]}>Thou</td>
              <td>
                You, <span className={styles["text-bold"]}>Ye</span>
              </td>
            </tr>
          </table>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <div className={styles["essay__left"]}>
            <p className={styles["text-bold"]}>-est -st:</p>
            <p>第二人称的屈折变化。</p>
            <p>&nbsp;</p>
            <p>例子："Knowest thou who I am?"</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p className={styles["text-bold"]}>have → hast</p>
            <p>记得，have变成hast。</p>
            <p>&nbsp;</p>
            <p>例如："He hast not spoken to me today."</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p className={styles["text-bold"]}>-eth -th:</p>
            <p>第三人称的屈折变化。</p>
            <p>&nbsp;</p>
            <p>例子："He who speaketh English is very lucky."</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p className={styles["text-bold"]}>Ye:</p>
            <p>Ye表示&apos;你们&apos;，conjugation和&apos;you&apos;一样。</p>
            <p>&nbsp;</p>
          </div>
          <p className={styles["essay__center"]}>军语</p>
          <p>&nbsp;</p>
          <div className={styles["essay__left"]}>
            <p>
              Ay的意思在近代英语是'yes,' 但在军里这个字更表示遵命，应该用两个ay
              ay。
            </p>
            <p>&nbsp;</p>
            <p>Drill seargent: “Do it now!”</p>
            <p>正确回复：Ay ay sir!</p>
            <p>&nbsp;</p>
            <p>Drill sargent: “Do you understand?”</p>
            <p>正确回复：Yes Sir!</p>
            <p>&nbsp;</p>
          </div>
          <p className={styles["essay__center"]}>早期现代英语希望</p>
          <p>&nbsp;</p>
          <div className={styles["essay__left"]}>
            <p>在早期现代英语would这个字替wish.</p>
            <p>例如："I would I were thy bird." - 罗密欧与朱丽叶</p>
            <p>&nbsp;</p>
          </div>
          <p className={styles["essay__center"]}>早期现代英语数字的含义</p>
          <p>&nbsp;</p>
          <div className={styles["essay__left"]}>
            <p>早期现代英语中的某些数字有具体的含义。</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p className={styles["text-bold"]}>Seven:</p>
            <p>&nbsp;</p>
            <p>这个数字表示完整的。</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p className={styles["text-bold"]}>Three and a half:</p>
            <p>&nbsp;</p>
            <p>这个数字表是某些是情正在中途。</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p className={styles["text-bold"]}>Seventy:</p>
            <p>&nbsp;</p>
            <p>这个数字代表一大群人。</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p className={styles["text-bold"]}>666:</p>
            <p>&nbsp;</p>
            <p>
              在基督教中，"666"被认为是"野兽的印记"。六接近数字七，但666不完全达到。
            </p>
          </div>
        </div>
      </div>
      <Foot />
    </div>
  );
}

export default EML;
