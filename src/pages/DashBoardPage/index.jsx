import { Header } from "../../components/Header";
import { useUserContext } from "../../providers/UserContext";
import styles from "./style.module.scss";
import ButtonPlus from "../../assets/ButtonPlus.svg";
import { TechList } from "../../components/TechList";
import { useContext } from "react";
import { CreateTechModal } from "../../components/CreateTechModal";
import { TechContext } from "../../providers/TechContext";
import { EditTechModal } from "../../components/EditTechModal";

export const DashBoardPage = () => {
  const { logout, user } = useUserContext();
  const { registerModal, updateModal, setregisterModal } =
    useContext(TechContext);

  return (
    <>
      <section className={styles.dashboard__container}>
        <section className={styles.section__dashboard}>
          <Header>
            <button className={styles.logout_btn} onClick={logout}>
              Sair
            </button>
          </Header>
          <main>
            <section className={styles.userInfo}>
              <div>
                <p className="title1"> {`Olá, ${user.name}`} </p>
                <p className={styles.module}>{user.course_module}</p>
              </div>
            </section>

            <section className={styles.techContainer}>
              <div className={styles.tech__box}>
                <div className={styles.tech__header}>
                  <h2 className="title2">Tecnologias</h2>
                  <img
                    className={styles.btn__plus}
                    src={ButtonPlus}
                    onClick={() => setregisterModal(true)}
                  />
                </div>
                <TechList />
              </div>
            </section>
          </main>
        </section>
        {registerModal && <CreateTechModal />}
        {updateModal && <EditTechModal />}
      </section>
    </>
  );
};
