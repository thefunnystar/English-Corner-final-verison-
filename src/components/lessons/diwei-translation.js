import styles from "../../styles/lessons.module.scss";
import { Head, Foot } from "../HeadFoot";

function DiweiTran() {
  return (
    <div>
      <Head />
      <div className={styles["page-container"]}>
        <div className={styles.page}>
          <p className={styles.dt1}>地位</p>
          <div className={styles["essay__left"]}>
            <p>&nbsp;</p>
            <p>翻译：status, position, standing</p>
            <p>&nbsp;</p>
            <p>Status: 地位，状况</p>
            <p>
              His social status is good. He has good status as a lawyer.（地位）
            </p>
            <p>What’s the status of the current development?（状况）</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>Position: 位置，状况，观点</p>
            <p>
              This box is in the correct position.（position 可以表达位置。）
            </p>
            <p>This company’s financial position is bad.（position=状况。）</p>
            <p>He never shares his position on politics. （position=观点）</p>
            <p>&nbsp;</p>
            <p>Position 作为动词：</p>
            <p>He positioned the lamp in the corner. （position=放）</p>
            <p>
              The United States’ isolation from Europe helped to position the
              country safely away from military powers.
              （position=放（促进的含义））
            </p>
            <p>He is positioned as a hero. （被视）</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>Standing: 地位，状况，名誉</p>
            <p>
              He has a good standing in his community.（他在他的小区为好。）
            </p>
          </div>
        </div>
      </div>
      <Foot />
    </div>
  );
}

export default DiweiTran;
