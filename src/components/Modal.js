import styles from "../styles/Modal.module.scss";
import { useNavigate } from "react-router-dom";

function Modal() {
  const navigate = useNavigate();

  return (
    <div className={styles["modal-wrapper"]}>
      <div className={styles.App}>
        <div className={styles.modal}>
          <h1 className={styles.modal__heading}>Please Select a Language:</h1>
          <h2 className={styles.modal__heading}>请选择一个语言</h2>
          <div className={styles.modal__languages}>
            <button
              onClick={() => {
                navigate("cn/");
              }}
              className={"modal__languages-cn"}
            >
              <p>中文</p>
              <p>Chinese</p>
            </button>
            <button
              onClick={() => {
                navigate("en/");
              }}
              className={"modal__languages-en"}
            >
              <p>英文</p>
              <p>English</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
