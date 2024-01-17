import styles from "./style.module.scss";
import edit_btn from "../../../assets/edit_btn.svg";
import delete_btn from "../../../assets/delete_btn.svg";
import { useContext } from "react";
import { TechContext } from "../../../providers/TechContext";

export const TechCard = ({ tech }) => {
  const { deleteTech } = useContext(TechContext);
  const { setUpdateModal, setEditingTech, updateTech } =
    useContext(TechContext);

  return (
    <li className={styles.tech__card}>
      <div className={styles.tech__infos}>
        <p className={styles.tech__title}>{tech.title}</p>
        <p className={styles.tech__content}>{tech.status}</p>
      </div>
      <div className={styles.btn__box}>
        <img
          onClick={() => {
            setUpdateModal(true), setEditingTech(tech);
          }}
          src={edit_btn}
        />
        <img
          onClick={() => {
            deleteTech(tech.id);
          }}
          src={delete_btn}
        />
      </div>
    </li>
  );
};
