import styles from "../styles/Main.module.scss";
import yyj_line from "../assets/yyj_line.png";
import { Head, Foot } from "./HeadFoot";
import { useState } from "react";
import bilingualText from "../data/bilingualText";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

export default function Main() {
  const { language } = useParams();
  const navigate = useNavigate();

  function buttonHandler(language, l) {
    console.log("click", language, l.url);
    const u = "/" + language + "/" + l.url;
    navigate(u);
  }

  return (
    <div className={styles.App}>
      <Head />
      <div className={styles.MainPage}>
        <div className={styles["MainPage__CenterBox"]}>
          <div className={styles.MainPage__Title}>
            <p className={styles["MainPage__Title--Heading"]}>
              {bilingualText[language].title.heading}
            </p>
            <img
              className={styles["MainPage__Title--Divider"]}
              alt=""
              src={yyj_line}
            ></img>
            <p className={styles["MainPage__Title--Text"]}>
              {bilingualText[language].title.text}
            </p>
          </div>
          <div className={styles.Grid}>
            <div className={styles.MainPage__Lessons}>
              {bilingualText[language].lessons.map((l) => {
                return (
                  <a onClick={() => buttonHandler(language, l)}>{l.title}</a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Foot />
    </div>
  );
}
