import { useUserContext } from "../../providers/UserContext";
import { TechCard } from "./TechCard";
import styles from "./style.module.scss";

export const TechList = () => {
  const { techList } = useUserContext();

  return (
    <ul className={styles.techs__box}>
      {techList.map((tech) => (
        <TechCard key={tech.id} tech={tech} />
      ))}
    </ul>
  );
};
