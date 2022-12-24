import styles from "../../styles/lessons.module.scss";
import { Head, Foot } from "../HeadFoot";

function AtIn() {
  return (
    <div>
      <Head />
      <div className={styles["page-container"]}>
        <div className={styles.page}>
          <p className={styles.dt1}>At vs In</p>
          <p>&nbsp;</p>
          <div className={styles["essay__left"]}>
            <p>总的来说，at 是更不具体的表达，in，这个介词更具体。</p>
            <p>&nbsp;</p>
            <p>如此都可以：</p>
            <p>She&apos;s at the bank. She&apos;s in the bank.</p>
            <p>At school… In school…</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>不同意义：</p>
            <p>
              <span className={styles["text-underline"]}>At</span> my
              grandma&apos;s house there&apos;s a swimming pool.
              在我外婆的房子有游泳池。
            </p>
            <p>
              <span className={styles["text-underline"]}>In</span> my
              grandma&apos;s house there&apos;s a swimming pool. 在这句话 in
              表示在里面
            </p>
            <p>&nbsp;</p>
            <p>
              At 可以表达一个地方和
              <span className={styles["text-bold"]}>近关系的周围</span>。
            </p>
            <p>
              The dog&apos;s{" "}
              <span className={styles["text-underline"]}>at</span>{" "}
              home.（可能在外面，也许在草坪。）
            </p>
            <p>
              The fast food restaurant is{" "}
              <span className={styles["text-underline"]}>at</span> the church.
              （教堂肯定没有快餐！应该是周围有快餐。）
            </p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>注意区别：</p>
            <p>
              At：<span className={styles["text-underline"]}>At</span> noon…{" "}
              <span className={styles["text-underline"]}>At</span> nine
              o&apos;clock… <span className={styles["text-underline"]}>At</span>{" "}
              night… <span className={styles["text-underline"]}>At</span>{" "}
              <span className={styles["text-bold"]}>evening</span>…
            </p>
            <p>
              In：<span className={styles["text-underline"]}>In</span> the
              morning… <span className={styles["text-underline"]}>In</span> the
              afternoon… <span className={styles["text-underline"]}>In</span>{" "}
              <span className={styles["text-bold"]}>the evening</span>… In 1992…
            </p>
            <p>&nbsp;</p>
            <p>更难：At + Period In + Period of Time</p>
            <p>
              <span className={styles["text-underline"]}>At</span> this{" "}
              <span className={styles["text-bold"]}>period</span>, most people
              in England did not know how to read.
            </p>
            <p>
              <span className={styles["underline"]}>In</span> this{" "}
              <span className={styles["text-bold"]}>period of time</span>, most
              people in England did not know how to read.
            </p>
            <p>&nbsp;</p>
            <p>In + 时代：</p>
            <p>正确：In the Victoria Era, people dressed differently.</p>
            <p>
              <span className={styles["text-red"]}>错误</span>：
              <span className={styles.ar2}>At</span> the Victoria Era, people
              dressed differently.
            </p>
          </div>
        </div>
      </div>
      <Foot />
    </div>
  );
}

export default AtIn;
