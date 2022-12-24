import styles from "../../styles/lessons.module.scss";
import { Head, Foot } from "../HeadFoot";

function AdjOrder() {
  return (
    <div>
      <Head />
      <div className={styles["page-container"]}>
        <div className={styles.page}>
          <div className={styles["essay__left"]}>
            <p className={styles["text-bold"]}>形容词顺序</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>看表格</p>
            <p>&nbsp;</p>
          </div>
          <table>
            <tr>
              <td>顺序</td>
              <td>关系到</td>
              <td>例子</td>
            </tr>
            <tr>
              <td>1</td>
              <td>意见</td>
              <td>Great, normal, unusual</td>
            </tr>
            <tr>
              <td>2</td>
              <td>大小</td>
              <td>Big, tall, giant</td>
            </tr>
            <tr>
              <td>3</td>
              <td>年龄</td>
              <td>Old, youthful, elderly</td>
            </tr>
            <tr>
              <td>4</td>
              <td>形状</td>
              <td>Circular, square, round</td>
            </tr>
            <tr>
              <td>5</td>
              <td>颜色</td>
              <td>Reddish, greenish, white</td>
            </tr>
            <tr>
              <td>6</td>
              <td>来源</td>
              <td>British, urban, country</td>
            </tr>
            <tr>
              <td>7</td>
              <td>资料</td>
              <td>Plastic, wood, wooden</td>
            </tr>
            <tr>
              <td>8</td>
              <td>类型</td>
              <td>American-link, general-purpose</td>
            </tr>
            <tr>
              <td>9</td>
              <td>目的</td>
              <td>Cooking, cleaning, learning</td>
            </tr>
          </table>
          <div className={styles["essay__left"]}>
            <p>例子：</p>
            <p>The young, fat British man.</p>
            <p>The plastic, general-purpose fork.</p>
            <p>The good, tall man.</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>形容词顺序有例外吗?看下个话题!</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p className={styles["text-bold"]}>
              Ablaut Reduplication (元音顺序)
            </p>
            <p>&nbsp;</p>
            <p>Wishy-washy</p>
            <p>Mish-mash</p>
            <p>Tick-tock</p>
            <p>King Kong</p>
            <p>Bish-bash-osh</p>
            <p>Ping pong</p>
            <p>Chit chat</p>
            <p>Hip-hop</p>
            <p>&nbsp;</p>
            <p>这个和形容词顺序有什么关系?</p>
            <p>&nbsp;</p>
          </div>
          <p className={styles["essay__indented"]}>Big Bad Wolf</p>
          <p>&nbsp;</p>
          <p className={styles["essay__left"]}>
            这些两个形容词很相似,都包括三个英字,中间有元音,第一英字‘b’一样,这两个词也彼此相邻。我猜因
            为这些特正,所以 ablaut reduplication 比形容词顺序重要。Big bad wolf
            是普通的句子,我不熟悉其他例 外。
          </p>
        </div>
      </div>
      <Foot />
    </div>
  );
}

export default AdjOrder;
