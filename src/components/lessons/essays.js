import styles from "../../styles/lessons.module.scss";
import { Head, Foot } from "../HeadFoot";

function Essays() {
  return (
    <div>
      <Head />
      <div className={styles["page-container"]}>
        <div className={styles.page}>
          <p className={styles["essay__center"]}>段落分析</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <div className={styles["essay__left"]}>
            <p>这段是我写了的例子,是文章里面的例子。</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>
              Immigration to Canada has increased slightly over the past few
              years, with about 313,600 new immigrants in 2019. However, Canada
              has had many difficulties over the past decade. Housing prices are
              continually increasing. Additionally, there are high taxes to
              support Canada&apos;s health care system. Despite this many
              Canadians seek a visa to come to the United States to receive
              medical treatment. As a result of these factors, Canada may not be
              the ideal country to immigrate to.
            </p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>
              “Immigration to Canada has increased slightly over the past few
              years, with about 313,600 new immigrants in 2019.”
            </p>
            <p>&nbsp;</p>
            <p>开句:让读者更舒服,介绍段落。</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>
              “1. However,{" "}
              <span className={styles["text-bold"]}>
                Canada has had many difficulties over the past decade
              </span>
              . 2. Housing prices are continually increasing. 3. Additionally,
              there are high taxes to support Canada&apos;s health care system.
              4. Despite this many Canadians seek a visa to come to the United
              States to receive medical treatment.”
            </p>
            <p>&nbsp;</p>
            <p>
              其中这些四句话,第一句话开始具体观点,看一下黑文字。第二和第三句话是符合观点的小点。
            </p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>
              “As a result of these factors, Canada may not be the ideal country
              to immigrate to.”
            </p>
            <p>&nbsp;</p>
            <p>这段最后句话符合整段总结一点。</p>
          </div>
        </div>
        <div className={styles.page}>
          <p className={styles.e1}>最好文章不用首字母缩写:</p>
          <p>&nbsp;</p>
          <div className={styles["essay__left"]}>
            <p>
              Some people prefer studying abroad in the{" "}
              <span className={styles["text-underline"]}>U.K.</span> Other
              people prefer studying abroad in the{" "}
              <span className={styles["text-underline"]}>U.S.</span>
            </p>
            <p>
              Some people prefer studying abroad in the{" "}
              <span className={styles["text-underline"]}>United Kingdom</span>.
              Other people prefer studying abroad in the
              <span className={styles["text-underline"]}>United States</span>.
            </p>
            <p>&nbsp;</p>
            <p>
              A <span className={styles["text-underline"]}>TV</span> is a
              telecommunication medium used for transmitting moving images.
            </p>
            <p>
              A <span className={styles["text-underline"]}>television</span> is
              a telecommunication medium used for transmitting moving images.
            </p>
            <p>&nbsp;</p>
            <p>也不可以使用简称:</p>
            <p>&nbsp;</p>
            <p>
              Many westerners{" "}
              <span className={styles["text-red"]}>don&apos;t</span> have black
              hair.
            </p>
            <p>
              Many westerners{" "}
              <span className={styles["text-green"]}>do not</span> have black
              hair.
            </p>
          </div>
          <div className={styles["essay__center"]}>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p className={styles["text-bold"]}>
              注意:英语和中文有区别,有的中文文章会有成语,因为语言,但是使用成语不适合英文文章。
            </p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p className={styles["text-bold"]}>
              避免使用 I, we, us, my, me, you, your 这些种类型词
            </p>
            <p>&nbsp;</p>
          </div>
          <div className={styles["essay__left"]}>
            <p>例子：</p>
            <p>&nbsp;</p>
            <p>
              In the current century,{" "}
              <span className={styles["text-red"]}>we have seen</span> an
              increase in the number of individuals who speak English.
            </p>
            <p>
              In the current century,{" "}
              <span className={styles["text-green"]}>there has been</span> an
              increase in the number of individuals who speak English.
            </p>
            <p>&nbsp;</p>
            <p>比如,如果你为更多一个老师写一篇文章,就可以说</p>
            <p>&nbsp;</p>
            <p>
              <span className={styles["text-green"]}>Teachers</span> may improve
              their teaching methods through technology.
            </p>
            <p>
              错误:<span className={styles["text-red"]}>You</span> may improve{" "}
              <span className={styles["text-red"]}>your</span> teaching methods
              through technology.
            </p>
          </div>
          <div className={styles["essay__center"]}>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p className={styles["text-bold"]}>
              平均英文句子有 17
              个词。在这个例子,我使用了从句,如此比免使用两句话。
            </p>
            <p>&nbsp;</p>
          </div>
          <div className={styles["essay__left"]}>
            <p>
              The Roman Empire was a large empire. At its height it reached five
              million square kilometers.
            </p>
            <p>
              The Roman Empire was a large empire, at its height reaching five
              million square kilometers.
            </p>
            <p>&nbsp;</p>
            <p>当然,最好很清楚,避免重复。</p>
            <p>&nbsp;</p>
            <p>
              I want to study{" "}
              <span className={styles["text-red"]}>English</span> and learn how
              to speak English.
            </p>
            <p>最好说:</p>
            <p>I want to study and learn how to speak English.</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
          </div>
          <div className={styles["essay__center"]}>
            <p className={styles["text-bold"]}>数字:</p>
            <p>&nbsp;</p>
          </div>
          <div className={styles["essay__left"]}>
            <p>
              There was <span className={styles["text-green"]}>one</span> dog.
            </p>
            <p>&nbsp;</p>
            <p>
              The <span className={styles["text-red"]}>27th</span> Amendment to
              the Constitution.
            </p>
            <p>
              The <span className={styles["text-green"]}>Twenty-seventh</span>{" "}
              Amendment to the Constitution.
            </p>
            <p>&nbsp;</p>
            <p>(如果你表示一年,那就可以使用数字。)</p>
          </div>
          <div className={styles["essay__center"]}>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p className={styles["text-bold"]}>
              “!”,这个标点符号不适合文章,但是如果在“”中使用,就可以。
            </p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
          </div>
          <div className={styles["essay__left"]}>
            <p>dis-前缀,意思是不,这种词更适合文章</p>
            <p>&nbsp;</p>
            <p>dislike &ndash; not like</p>
            <p>disorder &ndash; not ordered</p>
            <p>dishonest &ndash; not honest</p>
            <p>&nbsp;</p>
            <p>在这些前缀表示分离∕分开</p>
            <p>&nbsp;</p>
            <p>dismiss &ndash; order/permit someone/something to leave</p>
            <p>discard &ndash; get rid of（扔出去）</p>
          </div>
          <div className={styles["essay__center"]}>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p className={styles["text-bold"]}>中式英文</p>
            <p>&nbsp;</p>
          </div>
          <div className={styles["essay__left"]}>
            <p>在优秀中,吃饭可以确保我们的身体影养良好。</p>
            <p>中式英文:In the advantages...</p>
            <p>
              正确:As for the advantages, eating food can make sure our body is
              well-nutrition.
            </p>
            <p>&nbsp;</p>
            <p>越来越 &ndash; 语法</p>
            <p>身体越来越冷。</p>
            <p>正确英文:(My) body&apos;s getting colder.</p>
            <p>正确英文:(My) body is becoming colder.</p>
            <p>&nbsp;</p>
            <p>越来越多人。</p>
            <p>More and more people.(如此说 more and more 不是问题)。</p>
          </div>
        </div>
        <div className={styles.page}>
          <div className={styles["essay__indented"]}>
            <p>
              Nowadays people do not need to search physical{" "}
              <span className={styles["text-underline"]}>
                encyclopedias [ 百科全书 ]
              </span>{" "}
              or ask others for public information. Rather, information may be
              accessed online by many contemporary electronic devices. This has
              greatly increased the speed and efficiency of acquiring
              information. Many individuals have a positive opinion of this and
              view it as an overall benefit for society. Furthermore some
              individuals worry about how easily information is accessed
              nowadays, potentially being a negative; however it seems the
              benefits of access to information are being implemented all over
              society, from an in-home{" "}
              <span className={styles["text-underline"]}>
                setting [ 环境/布景 ]
              </span>{" "}
              to also being used in education, supporting the{" "}
              <span className={styles["text-underline"]}>virtue [ 好处 ]</span>{" "}
              of information accessibility.
            </p>
            <p>&nbsp;</p>
            <p>
              For many young people easy accessibility to information is
              important. In high school and in university, students must find{" "}
              <span className={styles["text-underline"]}>sources [ 资料 ]</span>{" "}
              to{" "}
              <span className={styles["text-underline"]}>
                back up [ 支持/展现支持 ]
              </span>{" "}
              their essays. Using{" "}
              <span className={styles["text-underline"]}>
                antiquated [ 过时的 ]
              </span>{" "}
              methods such as looking through physical encyclopedias is very
              time consuming. Additionally, someone may not find the information
              they need. Easy information accessibility allows time to be saved
              and the desired information to be found, which is a positive
              effect for everyone.
            </p>
            <p>&nbsp;</p>
            <p>
              Furthermore, the accessibility of information has been shaping our
              future. When someone needs to study for a test or learn how to
              solve a{" "}
              <span className={styles["text-underline"]}>
                maintenance [ 维护 ]
              </span>{" "}
              issue, instead of{" "}
              <span className={styles["text-underline"]}>hiring [ 雇用 ]</span>{" "}
              someone solve a maintenance issue or coming to class unprepared,
              people may now acquire information easily through electronic
              devices. Considering how information is shaping our world today,
              it is possible that it will have a greater and more positive
              effect in our future.
            </p>
            <p>&nbsp;</p>
            <p>
              Additionally however some people are concerned about the
              accessibility of information today. False information is able to
              be spread more easily, and people do not have to{" "}
              <span className={styles["text-underline"]}>
                interact [ 互动 ]
              </span>{" "}
              with other humans to acquire information. While it is true that
              false information may be spread quickly with electronic devices,
              true information may also spread quickly. This allows individuals
              to be better informed by being able to view multiple perspectives
              on a subject. Moreover, although people do not have to interact
              with others to acquire information, they are still able to share
              the information they obtain. This gives them more time to interact
              with others on important issues, improving communication
              altogether.
            </p>
            <p>&nbsp;</p>
            <p>
              In the contemporary world information is a valuable asset, which
              may be implemented at home or in more specialized fields.
              Modern-day education is also taking advantage of this fact, with
              teachers and students alike implementing the accessibility of
              information into everyday life. Recognizing the benefits of
              information accessibility is crucial in today&apos;s society.
              Therefore, there are greater chances for successful collaboration
              and thus further advances in our knowledge, leading us as a
              society to unexpected and new possibilities.
            </p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
          </div>
          <p className={styles["essay__left"]}>
            注意:virtue 也可以表示高道德标准,是名词
          </p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p className={styles["essay__center"]}>中文翻译在下一页</p>
        </div>
        <div className={styles.page}>
          <p className={styles["essay__center"]}>谷歌翻译:</p>
          <p>&nbsp;</p>
          <div className={styles["essay__indented"]}>
            <p>
              如今,人们无需搜索物理百科全书[]或要求他人提供公共信息。而是,许多当代电子设备可以在线访
              问信息。这极大地提高了获取信息的速度和效率。许多人对此持积极态度,并将其视为对社会的整体利益。
              此外,有些人担心当今信息的获取有多么容易,这可能是负面的。但是,从家庭内部[]到教育中也使用了获
              取信息的好处,这似乎在整个社会中得到了实现,从而支持了信息可访问性的优点[]。
            </p>
            <p>&nbsp;</p>
            <p>
              对于许多年轻人而言,轻松获取信息很重要。在高中和大学中,学生必须找到来源[]来备份他们的论
              文。使用过时的[]方法(例如浏览物理百科全书)非常耗时。此外,某人可能找不到所需的信息。便捷的信
              息可访问性可以节省时间并找到所需的信息,这对每个人都是有益的。
            </p>
            <p>&nbsp;</p>
            <p>
              此外,信息的可获取性正在塑造我们的未来。当某人需要学习测试或学习如何解决维护问题时,而不
              是雇用某人解决维护问题或未经准备就上课时,人们现在可以轻松地通过电子设备获取信息。考虑到信息如
              何塑造我们当今的世界,它可能对我们的未来产生更大,更积极的影响。
            </p>
            <p>&nbsp;</p>
            <p>
              然而,此外,有些人担心今天的信息可访问性。虚假信息可以更容易地传播,人们不必与其他人进行
              交互即可获取信息。虽然可以通过电子设备迅速传播虚假信息,但真实信息也可以迅速传播。这样可以通过
              查看某个主题的多种观点来更好地告知个人。而且,尽管人们不必与他人互动即可获取信息,但他们仍然能
              够共享所获取的信息。这使他们有更多时间在重要问题上与他人互动,从而改善了沟通。
            </p>
            <p>&nbsp;</p>
            <p>
              在当今世界,信息是一项宝贵的资产,可以在家中或在更专业的领域中实施。现代教育也利用了这一
              事实,师生们都将信息的可访问性引入了日常生活。认识到信息可访问性的好处在当今社会至关重要。因此,
              有更多成功合作的机会,从而进一步提高了我们的知识水平,使我们作为一个社会出现了意想不到的新可能
              性。
            </p>
          </div>
        </div>
      </div>
      <Foot />
    </div>
  );
}

export default Essays;
