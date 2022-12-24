import styles from "../styles/HeadFoot.module.scss";
import location from "../assets/location.svg";
import icon from "../assets/translation_icon.PNG";
import { useNavigate, useParams } from "react-router-dom";

const headFootText = {
  en: {
    head: "YingYuJiao",
    foot: {
      location: "United States",
      email: "Contact: spacetalon@gmail.com",
    },
  },
  cn: {
    head: "英语角",
    foot: {
      location: "美国",
      email: "电子邮件：spacetalon@gmail.com",
    },
  },
};

function Head() {
  const { language } = useParams();
  const navigate = useNavigate();

  function logoHandler() {
    console.log("logo click");
    if (language === "cn") {
      navigate("/cn/");
    } else {
      navigate("/en/");
    }
  }

  function iconHandler() {
    if (language === "cn") {
      const urlPath = window.location.pathname.split("/")[2];
      const u = "/en/" + urlPath;
      navigate(u);
    } else {
      const urlPath = window.location.pathname.split("/")[2];
      const u = "/cn/" + urlPath;
      navigate(u);
    }
  }

  return (
    <div className={styles.Head}>
      <p className={styles.Head__title} onClick={() => logoHandler()}>
        {headFootText[language].head}
      </p>

      <img
        className={styles["Head__translation-icon"]}
        src={icon}
        alt=""
        onClick={() => iconHandler()}
      />
    </div>
  );
}

function Foot() {
  const { language } = useParams();
  return (
    <div className={styles.Foot}>
      <div className={styles.Foot__left}>
        &nbsp;
        <img src={location} alt="" className={styles["Foot__left--svg"]}></img>
        <p className={styles["Foot__left--location"]}>
          &nbsp;{headFootText[language].foot.location}
        </p>
      </div>
      <div className={styles.Foot__right}>
        {headFootText[language].foot.email}&nbsp;
      </div>
    </div>
  );
}

export { Head, Foot };
